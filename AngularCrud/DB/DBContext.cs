using AngularCrud.Migrations;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AngularCrud.DB
{
    public class AppContext : DbContext
    {
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<AppContext, Configuration>()) ;
            base.OnModelCreating(modelBuilder);
        }
        public DbSet<Employee> Employee{ get; set; }

        public AppContext():base("name=AngularCrudDB")
        {

        }
    }


    public class Employee
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public string ProfileImgPath { get; set; }
    }
}