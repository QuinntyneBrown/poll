using Chloe.Server.Models;

namespace Chloe.Server.Data.Contracts
{
    public interface IChloeUow
    {
        IRepository<User> Users { get; }
        IRepository<Subject> Subjects { get; }
        IRepository<Vote> Votes { get; }

        void SaveChanges();
    }
}
