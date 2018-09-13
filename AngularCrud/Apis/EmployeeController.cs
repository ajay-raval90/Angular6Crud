using AngularCrud.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularCrud.Apis
{
    public class EmployeeController : ApiController
    {
        [HttpGet]
        public IHttpActionResult GetAllEmployees()
        {
            try
            {
                using (EmployeeRepository repo = new EmployeeRepository())
                {
                    List<Employee> result =  repo.GetAllEmployees().ToList();
                    return Ok(result);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet]
        public IHttpActionResult GetEmployeeById(int Id)
        {
            try
            {
                using (EmployeeRepository repo = new EmployeeRepository())
                {
                    Employee result = repo.FindById(Id);
                    if (result != null)
                    {
                        return Ok(result);
                    }
                    else
                    {
                        return BadRequest("No Employee Found With Id: "+Id);
                    }
                    
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost]
        public IHttpActionResult AddEmployee(Employee emp)
        {
            try
            {
                using (EmployeeRepository repo = new EmployeeRepository())
                {
                    Employee result = repo.AddEmployee(emp);
                    return Ok(result);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut]
        public IHttpActionResult UpdateEmployee(Employee emp)
        {
            try
            {
                using (EmployeeRepository repo = new EmployeeRepository())
                {
                    Employee result = repo.UpdateEmployee(emp);
                    return Ok(result);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpDelete]
        public IHttpActionResult DeleteEmployee(int Id)
        {
            try
            {
                using (EmployeeRepository repo = new EmployeeRepository())
                {
                    Employee empById = repo.FindById(Id);
                    if (empById != null)
                    {
                        repo.DeleteEmployee(empById);
                        return Ok();
                    }
                    else
                    {
                        return BadRequest(string.Format("Could not find the employee with id: {0}",Id));
                    }
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}