import { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { useHistory } from 'react-router-dom';
import { Button } from '../Button';

import { 
  Container, 
  HighlightedCarContainer,
  CarInfo, 
  CarInfoText 
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
  data: ICar[];
}

export function Showcase({ data }: DataProps) {
  const [id, setId] = useState('');
  const [brand, setBrand] = useState('');
  const [name, setName] = useState('');
  const [dailyRate, setDailyRate] = useState(0);

  const history = useHistory();

  const images = data.map(car => {
    return {
      original: car.photo,
      thumbnail: car.photo,
    };
  })

  function onSlide(index: number) {
    let id = data[index].id;
    let brand = data[index].brand;
    let name = data[index].name;
    let dailyRate = data[index].dailyRate;

    setId(id);
    setBrand(brand);
    setName(name);
    setDailyRate(dailyRate);
  }

  function onImageLoad() {
    let id = data[0].id;
    let brand = data[0].brand;
    let name = data[0].name;
    let dailyRate = data[0].dailyRate;

    setId(id);
    setBrand(brand);
    setName(name);
    setDailyRate(dailyRate);
  }

  return (
    <Container>
      <HighlightedCarContainer>
        <ImageGallery 
          items={images} 
          thumbnailPosition="right"
          infinite
          showBullets
          autoPlay
          showNav={false}
          showFullscreenButton={false}
          showPlayButton={false}
          slideInterval={7000}
          onSlide={onSlide}
          onImageLoad={onImageLoad}
        />
        <CarInfo>
          <CarInfoText>{brand} {name}</CarInfoText>
          <CarInfoText>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(dailyRate)}/dia
          </CarInfoText>
        </CarInfo>
          
        <Button onClick={() => history.push(`car/${id}`)}>RESERVAR</Button>
      </HighlightedCarContainer>
    </Container>
  )
}
