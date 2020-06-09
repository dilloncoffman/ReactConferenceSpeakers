import React from 'react';
import Header from '../src/components/Header/Header'
import Menu from '../src/components/Menu/Menu'
import Instruments from '../src/components/Instruments/Instruments'
import InstrumentSearchBar from '../src/components/InstrumentSearchBar/InstrumentSearchBar'
import Footer from '../src/components/Footer/Footer'
import InstrumentContext from '../src/components/Instruments/InstrumentContext'


const InstrumentsPage = () => {
  const instruments = [
    {
      imageSrc: 'guitars',
      name: 'Guitars'
    },
    {
      imageSrc: 'amp',
      name: 'Amplifier'
    },
    {
      imageSrc: 'drums',
      name: 'Drums'
    },
  ];

  return (
    <div>
      <Header />
      <Menu />
      <InstrumentContext.Provider value={instruments}>
        <InstrumentSearchBar />
        <Instruments />
      </InstrumentContext.Provider>
      <Footer />
    </div>
  );
};

export default InstrumentsPage;