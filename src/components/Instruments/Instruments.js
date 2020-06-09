import React from 'react';
import InstrumentsRenderProps from './InstrumentsRenderProps'

const Instruments = () => {
  return (
    <InstrumentsRenderProps>
      {({ instruments }) => {
        return (
          <>
            {instruments.map(({ imageSrc, name }) => {
              return <img style={{ maxWidth: 400, width: 400 }} src={`/images/${imageSrc}.png`} alt={name} key={imageSrc} />
            })}
          </>
        )
      }}
    </InstrumentsRenderProps>
  )
}

export default Instruments;