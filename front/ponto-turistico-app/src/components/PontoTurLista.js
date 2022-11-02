import React from 'react'
import PontoTuristico from './PontoTuristico';

export default function PontoTurLista(props) {
  return (
    <div className='mt-3'>
        {props.pontos.map(pont => (
          <PontoTuristico 
            key={pont.id}
            pont={pont}
            handleConfirmModal={props.handleConfirmModal}
            pegarPontoTur={props.pegarPontoTur}
            
        />
        ))}    
        
     </div> 
  )
}

