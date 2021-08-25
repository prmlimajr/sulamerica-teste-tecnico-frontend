import React, { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

import { Button } from '../../Button';
import { DatePicker } from '../../DatePicker';

import {
  DimArea,
  Container,
  CloseArea,
  ModalTitle,
} from './styles';

interface Car {
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

interface DatePickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onChooseRange: (range: Range) => void;
  car: Car;
}

interface Range {
  from: Date | undefined;
  to: Date | undefined;
}

export function DatePickerModal({
  isOpen,
  onClose,
  onChooseRange,
  car,
}: DatePickerModalProps) {
  const [range, setRange] = useState<Range>({} as Range);
  const [unavailableDates, setUnavailableDates] = useState<Date[]>([]);
  const [blocked, setBlocked] = useState(false);

  const handleUnavailableDates = () => {
    const dates: Date[] = [];

    car.unavailableDates.forEach((date) => {
      dates.push(new Date(date));
    });

    setUnavailableDates(dates);

    if (range.from && range.to) {
      const currentDate = new Date(range.from.getTime());
      const between: Date[] = [];

      while (currentDate <= range.to) {
        between.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }

      const forbiddenRange = between.some((date) => car.unavailableDates.includes(date.toISOString().split('T')[0]));

      if (forbiddenRange) {
        setBlocked(true);
      }
    }
  };

  useEffect(() => {
    handleUnavailableDates();
  }, []);

  function handleChooseDates() {
    onClose();
    onChooseRange(range);
  }

  return (
    <DimArea>
      <Container>
        <CloseArea>
          <IoMdClose size={24} color="#000" onClick={onClose} />
        </CloseArea>
        <ModalTitle>Escolha os dias da reserva:</ModalTitle>
        <DatePicker onSetRange={setRange} unavailableDates={unavailableDates} />

        <Button onClick={() => handleChooseDates()} disabled={blocked}>Escolher</Button>
      </Container>
    </DimArea>
  );
}
