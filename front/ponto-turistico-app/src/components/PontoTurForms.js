import { useState, useEffect } from 'react';


const pontoTurInicial = {
  id: 0,
  nomePontoTur: '',
  endereco: '',
  numeroEnd: 0,
  uf: '',
  descricao: ''
}


export default function PontoTurForms(props) {

  const [pontot, setPonto] = useState(pontoTuristicoAtual());

  useEffect(() => {
    if(props.pontoSelecionada.id !== 0)
      setPonto(props.pontoSelecionada);
  }, [props.pontoSelecionada]);

  const inputTextHandler = (e) => {
    const { name, value } = e.target;
    setPonto({ ...pontot, [name]: value});
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(props.pontoSelecionada.id !== 0) {
      props.atualizarPontoTur(pontot);
      
    }
    else  {
      props.addPontoTur(pontot);
    }
    setPonto(pontoTurInicial);
    props.handlePontoModal();
  }

  const handleCancelar = (e) => {
      e.preventDefault();

      props.cancelarPontoTur();

      setPonto(pontoTurInicial);
  } 

  function pontoTuristicoAtual() {
    if (props.pontoSelecionada.id !== 0) {
        return props.pontoSelecionada;
    }
    else {
      return pontoTurInicial;
    }
  }

  
  

  return (
    <>

    <form className="row g-3" onSubmit={handleSubmit}> 
        <div className="col-md-12">
          <label className="form-label">Nome do Ponto Turístico</label>
          <input 
            id="nome"
            name="nomePontoTur"
            value={pontot.nomePontoTur}
            onChange={inputTextHandler}
            type="text" 
            className="form-control"
            required
          />
        </div>
        <div className="col-md-10">
          <label className="form-label">Endereço</label>
          <input 
            id="endereco"
            name="endereco"
            value={pontot.endereco}
            onChange={inputTextHandler}
            type="text" 
            className="form-control"
            required
          />
        </div>
        <div className="col-md-2">
          <label className="form-label">Nº</label>
          <input 
            id="numero"
            name="numeroEnd"
            value={pontot.numeroEnd}
            onChange={inputTextHandler}
            type="text" 
            className="form-control"
            required
          />
        </div>
        <div className="col-md-8">
          <label className="form-label">Cidade</label>
          <input 
            id="cidade"
            name="cidade"
            value={pontot.cidade}
            onChange={inputTextHandler}
            type="text" 
            className="form-control"
            required
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">UF</label>
          <select 
            name="uf" 
            id="uf"
            value={pontot.uf}
            onChange={inputTextHandler}
            className="form-select" 
            required

          >
            <option value="NaoDefinido">Selecionar...</option>
            <option value="AC">AC</option>
            <option value="AL">AL</option>
            <option value="AP">AP</option>
            <option value="AM">AM</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="ES">ES</option>
            <option value="GO">GO</option>
            <option value="MA">MA</option>
            <option value="MT">MT</option>
            <option value="MS">MS</option>
            <option value="MG">MG</option>
            <option value="PA">PA</option>
            <option value="PB">PB</option>
            <option value="PR">PR</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="RJ">RJ</option>
            <option value="RN">RN</option>
            <option value="RS">RS</option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="SC">SC</option>
            <option value="SP">SP</option>
            <option value="SE">SE</option>
            <option value="TO">TO</option>
            <option value="DF">DF</option>
          </select>
        </div>
        <div className="col-md-12">
          <label className="form-label">Descrição</label>
          <textarea 
            id="descricao"
            name="descricao"
            value={pontot.descricao}
            onChange={inputTextHandler} 
            type="text" 
            className="form-control"
            required
            />
        <hr/>
        </div>
        <div className='col-12 mt-0'>
            {
              pontot.id === 0 ? (
                <button 
                  className='btn btn-outline-success' type='submit'> 
                  <i className='fas fa-plus me-2'></i>
                  Salvar
              </button>
              ):(
                <>
                <button 
                  className='btn btn-outline-success me-2' type='submit'> 
                  <i className='fas fa-plus me-2'></i>
                  Salvar
                </button>
                <button 
                  className='btn btn-outline-warning' 
                  onClick={handleCancelar}> 
                  <i className='fas fa-plus me-2'></i>
                  Cancelar
                </button>
              </>
              )
            }
            
        </div>
      </form>
      </>
  )
}
