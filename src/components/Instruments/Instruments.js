import React from 'react';
import withData from './withData'

const Instruments = ({ instruments }) => {
  return (
    <>
      {instruments.map(({ imageSrc, name }) => {
        return <img style={{ maxWidth: 400, width: 400 }} src={`/images/${imageSrc}.png`} alt={name} key={imageSrc} />
      })}
    </>
  )
}

const maxInstrumentsToShow = 2;
export default withData(maxInstrumentsToShow)(Instruments); // Higher Order Component (HOC) - used to separate data from the component that renders that data