import {React, Fragment} from 'react';



export default function PontoTuristico(props) {
   
    return (
        <>
        <div className='card mb-2 shadow-sm'>
            <div className="card-body">
              <div className='d-flex justify-content-between'>
                <h5 className='card-title'>
                  <span className="badge bg-secondary me-1">
                    {props.pont.id}
                  </span>
                  - {props.pont.nomePontoTur}
                </h5>
                <h6>
                  UF:
                  <span className='ms-1'>
                    {(props.pont.uf)}
                  </span>
                </h6>
              </div>
              <p className="card-text">Endereço: {props.pont.endereco} Nº: {props.pont.numeroEnd} Cidade: {props.pont.cidade}</p>
              <p className="card-text"></p>
              <p className="card-text">{props.pont.descricao}</p>
              <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                <button className='btn btn-sm btn-outline-primary me-2'
                  onClick={() => props.pegarPontoTur(props.pont.id)}>

                  <i className='fas fa-pen me-2'></i>
                  Editar
                </button>
                <button
                  className='btn btn-sm btn-outline-danger'
                  onClick={() => props.handleConfirmModal(props.pont.id)}>
                  <i className='fas fa-trash me-2'></i>
                  Deletar
                </button>
              </div>
            </div>
          </div>
        </>
        
    )};    
    
