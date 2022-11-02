using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PontoTuristico.API.models
{
    public class PontoTur
    {
        // parâmetros
        public int Id { get; set; }
        public string NomePontoTur { get; set; }
        public string Endereco { get; set; }
        public int NumeroEnd { get; set; }
        public string Cidade { get; set; }
        public Ufs Uf { get; set; }
        public string Descricao { get; set; }   

        // construtores
        public PontoTur()
        {
            
        }

        public PontoTur(int id)
        {
            Id = id;
        }

    }
}