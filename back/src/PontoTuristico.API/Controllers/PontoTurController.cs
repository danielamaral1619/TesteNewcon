using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PontoTuristico.API.Data;
using PontoTuristico.API.models;

namespace PontoTuristico.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PontoTurController : ControllerBase
    {
        private readonly DataContext _context;

        public PontoTurController(DataContext context)
        {
            _context = context;
            
        }
        
        

        [HttpGet]
        public IEnumerable<PontoTur> get()
        {
            return _context.Pontos;
        
        }

        [HttpGet("{id}")]
        public PontoTur Get(int id)
        {
            return _context.Pontos.FirstOrDefault(pot => pot.Id == id);
        }


        [HttpPost]
        public PontoTur Post(PontoTur pontot)
        {
           _context.Pontos.Add(pontot);
           if(_context.SaveChanges() > 0)
                return _context.Pontos.FirstOrDefault(pot => pot.Id == pontot.Id);
            else    
                throw new Exception("Você não conseguiu adicionar um Ponto Turistico");
        }

        [HttpPut("{id}")]
        public PontoTur Put(int id, PontoTur pontot)
        {
            if (pontot.Id != id) throw new Exception("Você está tentando atualizar o Ponto errado.");

            _context.Update(pontot);
            if(_context.SaveChanges() > 0)
                return _context.Pontos.FirstOrDefault(pot => pot.Id == id);
            else
                return new PontoTur();
        }

        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            var pontot = _context.Pontos.FirstOrDefault(pot => pot.Id == id);

            if (pontot == null)
                throw new Exception("Você está tentando deletar uma atividade que não existe!");
            else
                _context.Remove(pontot);

            return _context.SaveChanges() > 0;
        }
    }
}