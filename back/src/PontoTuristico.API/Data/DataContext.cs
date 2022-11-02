using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PontoTuristico.API.models;

namespace PontoTuristico.API.Data
{
  public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) :  base(options) {}
        
        public DbSet<PontoTur> Pontos { get; set; }
    }
}