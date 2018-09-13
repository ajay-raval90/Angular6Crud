using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AngularCrud.DB
{
    public class EmployeeRepository : IDisposable
    {
        AppContext context = null;
        public EmployeeRepository()
        {
            context = new AppContext();
        }

        public IQueryable<Employee> GetAllEmployees()
        {
            return context.Employee;
        }

        public Employee FindById(int Id)
        {
            return context.Employee.Where(t => t.Id == Id).FirstOrDefault();
        }

        public Employee AddEmployee(Employee emp)
        {
            emp.CreatedAt = DateTime.Now;
            context.Employee.Add(emp);
            SaveChanges();
            return emp;
        }
        public Employee UpdateEmployee(Employee emp)
        {
            emp.UpdatedAt = DateTime.Now;
            context.Entry(emp).State = EntityState.Modified;
            SaveChanges();
            return emp;
        }
        public bool DeleteEmployee(Employee emp)
        {
            context.Employee.Remove(emp);
            SaveChanges();
            return true;
        }

        private void SaveChanges()
        {
            context.SaveChanges();
        }


        public void Dispose()
        {
            context.Dispose();
            GC.SuppressFinalize(context);
        }
    }
}