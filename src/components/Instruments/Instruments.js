import React, { useContext } from 'react';
import InstrumentContext from './InstrumentContext'

const Instruments = () => {
  const instruments = useContext(InstrumentContext);

  return (
    <>
      {instruments.map(({ imageSrc, name }) => {
        return <img style={{ maxWidth: 400, width: 400 }} src={`/images/${imageSrc}.png`} alt={name} key={imageSrc} />
      })}
    </>
  );
};

export default Instruments;