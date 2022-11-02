import { useState, React, useEffect } from 'react';
import {Button, Modal} from 'react-bootstrap';
import PontoTurForms from './components/PontoTurForms';
import PontoTurLista from './components/PontoTurLista';
import api from './api/pontotur';




function App(props) {
  const [showPontoMoldal, setShowPontoMoldal] = useState(false);
  const [smShowConfirmModal, setSmShowConfirmModal] = useState(false);
  const [pontos, setPontos] = useState([]);
  const [pontot, setPontot] = useState({id: 0});


  
  const handlePontoModal = () => setShowPontoMoldal(!showPontoMoldal);

  const handleConfirmModal = (id) => {
    if(id !== 0 && id !== undefined){
      const pontot = pontos.filter(
        (pont) => pont.id === id
        ); 
      setPontot(pontot[0]);
    }
    else {
      setPontot({id: 0})
    }
    setSmShowConfirmModal(!smShowConfirmModal);
  }
    
  const pegaTodosPontos = async () => {
      const response = await api.get('pontotur');
      return response.data;
  }

  const novoPonto = () => {
    setPontot({id: 0});
    handlePontoModal();

  }


  useEffect (() => {
     const getPontosTur = async () =>{
        const todosPontos = await pegaTodosPontos();
        if(todosPontos) setPontos(todosPontos);
     };
     getPontosTur();
  }, [])


  const addPontoTur = async (pont) => {
    handlePontoModal();
    const response = await api.post('pontotur', pont);
    console.log(response.data)
    setPontos([...pontos, response.data]);
  }

  const cancelarPontoTur = () => {
    setPontot({id: 0});
    handlePontoModal();
  }

// pega pontot selecionada e atualiza
  const atualizarPontoTur = async (pont) => {
    handlePontoModal();
    const response = await api.put(`pontotur/${pont.id}`, pont);
    const { id } = response.data;
      setPontos(pontos.map((item) => (item.id === id ? response.data : item )));
      setPontot({id: 0});
      
    
  }

  const deletarPontoTur = async (id) => {
    handleConfirmModal(0);
    
    if (await api.delete(`pontotur/${id}`))
    {
      const pontosFiltrados = pontos.filter(
        (pont) => pont.id !== id
        );
      setPontos([...pontosFiltrados]);
      setPontot(pontot);
    }   
  };
 

  const pegarPontoTur = (id) => {
    const pontot = pontos.filter(
      (pont) => pont.id === id
      
      ); 
    setPontot(pontot[0]);
    handlePontoModal();
    
  }

  // const pontosFiltradosBusca = (id) => {
  //   const pontott = pontos.filter((pont) => pont.startsWith(busca));   
  //   setBusca(pontott); 
  // }


  
  return (
    <>
      <div className="d-flex justify-content-between align-items-end mt-2 pb-3 border-bottom border-1">
      
        <h1 className='m-0 p-0'>Pontos Turísticos</h1>

        <Button variant="outline-secondary" onClick={novoPonto}>
          <i className='fas fa-plus'/>
        </Button>

      </div>

      {/* <div className="container-input align-items-end  mt-2 pb-3 border-dark">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Buscar"
              value={pontos}
              onChange={(ev) => setPontot(ev.target.value)}
            />
          </Form>
        </div> */}
      
      <PontoTurLista
        pontos={pontos}
        pegarPontoTur={pegarPontoTur}
        handleConfirmModal={handleConfirmModal}        
      />
      <Modal show={showPontoMoldal} onHide={handlePontoModal}>
        <Modal.Header closeButton>
          <Modal.Title>Ponto Turístico {pontot.id !== 0 ? pontot.id : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PontoTurForms
            addPontoTur={addPontoTur}
            cancelarPontoTur={cancelarPontoTur}
            atualizarPontoTur={atualizarPontoTur}
            pontoSelecionada={pontot}
            pontos={pontos}
            handlePontoModal={handlePontoModal}
          />
        </Modal.Body>
      </Modal>
      <Modal size='sm' show={smShowConfirmModal} onHide={handleConfirmModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            Excluir Ponto Turistico 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Tem certeza que deseja Excluir o Ponto Turístico: <b>{ pontot.nomePontoTur } </b>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
            <button className="btn btn-outline-success me-2" onClick={() => deletarPontoTur(pontot.id)}>
                <i className="fas fa-check me-2"></i>
                Sim
            </button>
            <button className="btn btn-danger" onClick={() => handleConfirmModal(0)}>
            <i className="fas fa-times me-2"></i>
                Não
            </button>
        </Modal.Footer>
      </Modal>
      
    </>
  );
}

export default App;
