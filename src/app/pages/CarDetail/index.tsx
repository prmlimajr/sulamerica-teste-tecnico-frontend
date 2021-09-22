import React, { useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

import { Button } from '../../components/Button';
import Loader from '../../components/Loader';
import { DatePickerModal } from '../../components/Modals/DatePickerModal';
import api from '../../services/api';

import {
  Container,
  CarImageContainer,
  CarImage,
  CarInfoContainer,
  CarInfoHeader,
  GoBack,
  CarName,
  CarInfo,
  CarRate,
  CarReservationArea,
  ReservationDates,
  TotalContainer,
  Centered,
} from './styles';

interface ICar {
  id: string;
  name: string;
  brand: string;
  color: string;
  dailyRate: number;
  manufactureYear: number;
  model: number;
  category: string;
  mileage: number;
  photo: string;
  unavailableDates: string[];
  isShowcase: boolean;
}

interface Range {
  from: Date;
  to: Date;
}

export function CarDetail() {
  const [car, setCar] = useState<ICar>({} as ICar);
  const [loading, setLoading] = useState(true);
  const [isDatePickerModalOpen, setIsDatePickerModalOpen] = useState(false);
  const [range, setRange] = useState<Range>({} as Range);
  const [dates, setDates] = useState<Date[]>([]);

  const history = useHistory();

  useEffect(() => {
    async function fetchCar(): Promise<void> {
      const id = history.location.pathname.split('/')[2];
      const response = await api.get(`/cars/${id}`);

      const [car] = response.data;
      setCar(car);
    }

    try {
      fetchCar();
    } catch (error) {
      alert('Falha no carregamento. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }, []);

  function renderLoader() {
    return (
      <Centered>
        <Loader color="#000" />
      </Centered>
    );
  }

  function handleOpenModal() {
    setIsDatePickerModalOpen(true);
  }

  function handleCloseModal() {
    setIsDatePickerModalOpen(false);
  }

  function handleChosenDates(range: any) {
    setRange(range);

    let currentDate = new Date(range.from.getTime());
    const between = [];

    while (currentDate <= range.to) {
      between.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    setDates(between);
  }

  async function handleSubmit() {
    const carId = history.location.pathname.split('/')[2];

    if (dates.length === 0) {
      alert('Selecione pelo menos uma data.');
      return;
    }

    try {
      setLoading(true);
      await api.post(`cars/book/${carId}`, { dates });

      alert('Reserva realizada com sucesso!');
      history.push('/home');
    } catch (err) {
      alert('Falha na reserva: ' + err.message);
    } finally {
      setLoading(false);
    }
  }

  return loading ? (
    renderLoader()
  ) : (
    <>
      {isDatePickerModalOpen && (
        <DatePickerModal
          isOpen={isDatePickerModalOpen}
          onClose={handleCloseModal}
          onChooseRange={(range) => handleChosenDates(range)}
          car={car}
        />
      )}

      <Container>
        <CarImageContainer>
          <CarImage src={car.photo} alt={`${car.brand} ${car.name}`} />
        </CarImageContainer>

        <CarInfoContainer>
          <CarInfoHeader onClick={() => history.goBack()}>
            <IoIosArrowBack size={14} color="#000" />
            <GoBack>Voltar</GoBack>
          </CarInfoHeader>

          <CarName>{car.name}</CarName>
          <CarInfo>Fabricante: {car.brand}</CarInfo>
          <CarInfo>Modelo: {car.model}</CarInfo>

          <CarRate>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(car.dailyRate)}
            /dia
          </CarRate>

          <CarInfo>Fabricante: {car.brand}</CarInfo>
          <CarInfo>Modelo: {car.model}</CarInfo>
          <CarInfo>Ano de fabricação: {car.manufactureYear}</CarInfo>
          <CarInfo>Cor: {car.color}</CarInfo>
          <CarInfo>Quilometragem: {car.mileage} Km</CarInfo>

          <CarReservationArea>
            <ReservationDates>
              <CarInfo>
                Do dia: {range.from && range.from.toLocaleDateString()}
              </CarInfo>

              <CarInfo>
                até o dia: {range.to && range.to.toLocaleDateString()}
              </CarInfo>

              <Button onClick={handleOpenModal}>Escolher dias</Button>
            </ReservationDates>

            <TotalContainer>
              <CarInfo>Valor Total:</CarInfo>
              <CarRate>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(car.dailyRate * dates.length)}
              </CarRate>
            </TotalContainer>
          </CarReservationArea>

          <Button type="submit" onClick={handleSubmit}>
            RESERVAR
          </Button>
        </CarInfoContainer>
      </Container>
    </>
  );
}
