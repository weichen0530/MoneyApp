using System.Threading.Tasks;
using System.Collections.Generic;
using MoneyApp.API.Models;

namespace MoneyApp.API.IRepository
{
    public interface IMoneyRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);
    }
}