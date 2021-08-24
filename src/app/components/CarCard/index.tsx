import React from 'react'
import { useHistory } from 'react-router-dom';
import { Button } from '../Button';

import {
  Container,
  CarImage,
  CarInfo,
  CarDescription,
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

interface DataProps {
  data: ICar;
}

export function CarCard({ data }: DataProps) {
  const history = useHistory();

  return (
    <Container>
      <CarImage src={data.photo} alt={`${data.brand} ${data.name}`} />

      <CarInfo>
        <CarDescription>{data.brand} {data.name} {data.model}</CarDescription>

        <CarDescription>{new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(data.dailyRate)}/dia</CarDescription>        
      </CarInfo>

      <Button onClick={() => history.push(`/car/${data.id}`)}>Reservar</Button>
    </Container>
  )
}
