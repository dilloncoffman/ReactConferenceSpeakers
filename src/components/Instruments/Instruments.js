import React from 'react';

const Instruments = () => {
  const instruments = [
    {
      imageSrc: 'guitars',
      name: 'Guitars'
    },
    {
      imageSrc: 'amp',
      name: 'Amplifiers'
    },
    {
      imageSrc: 'drums',
      name: 'Drums'
    },
  ]
  return (
    <>
      {instruments.map(({ imageSrc, name }) => {
        return <img style={{ maxWidth: 400, width: 400 }} src={`/images/${imageSrc}.png`} alt={name} key={imageSrc} />
      })}
    </>
  )
}

export default Instruments;