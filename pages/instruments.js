import React from 'react';
import Header from '../src/components/Header/Header'
import Menu from '../src/components/Menu/Menu'
import Instruments from '../src/components/Instruments/Instruments'
import InstrumentSearchBar from '../src/components/InstrumentSearchBar/InstrumentSearchBar'
import Footer from '../src/components/Footer/Footer'

const InstrumentsPage = () => (
  <div>
    <Header />
    <Menu />
    <InstrumentSearchBar />
    <Instruments />
    <Footer />
  </div>
);

export default InstrumentsPage;