function InstrumentsRenderProps(props) {
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
  ];
  return props.children({
    instruments: instruments
  });
};

export default InstrumentsRenderProps;