import React from 'react';

function withData(maxInstrumentsToShow) {
  return function (Component) {
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

    return function () {
      const limitInstruments = instruments.slice(0, maxInstrumentsToShow);
      return <Component instruments={limitInstruments}></Component>;
    }
  }
}

export default withData;