import React, { useEffect, useState } from 'react'

import { CarCard } from '../../components/CarCard';
import Loader from '../../components/Loader';
import { Showcase } from '../../components/Showcase'

import api from '../../services/api';

import { 
  Centered, 
  Container,
  CarList,
  CarListItem,
} from './styles'

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

export function Home() {
  const [cars, setCars] = useState<ICar[]>([])
  const [showcase, setShowcase] = useState<ICar[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchShowcase(): Promise<ICar[]> {
    const response = await api.get("/cars");    
    
    return response.data
  }

  useEffect(() => {
    let isCanceled = false;

    fetchShowcase().then(response => {
      if (!isCanceled) {
        setCars(response);
  
        const showcase = response.filter((car: ICar) => car.isShowcase);
        setShowcase(showcase);
      }
    }).catch((error) => {
      alert("Falha no carregamento. Tente novamente.")
    }).finally(() => setLoading(false));

    return () => {
      isCanceled = true;
    }
  }, []);

  if (loading) {
    return (
      <Centered>
        <Loader color="#000" />
      </Centered>
    )
  } 

  return (
    <Container>
      <Showcase data={showcase}/>
      
      <CarList>
        {cars.map((car: ICar) => (
        <CarListItem key={car.id}>
          <CarCard data={car} />
        </CarListItem>
        ))}
      </CarList>
    </Container>
  )
}
