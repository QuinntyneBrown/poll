using System;
using System.Collections.Generic;
using Chloe.Server.Data.Contracts;
using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Data.Entity;
using System.Linq;
using Chloe.Server.Models;
using System.Security.Claims;
using System.Threading;

namespace Chloe.Server.Services
{
    public class VoteService : IVoteService
    {
        public VoteService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Votes;
            this.cache = cacheProvider.GetCache();
        }

        public VoteAddOrUpdateResponseDto AddOrUpdate(VoteAddOrUpdateRequestDto request)
        {
            var claimsPrincipal = Thread.CurrentPrincipal as ClaimsPrincipal;

            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Vote());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new VoteAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<VoteDto> Get()
        {
            ICollection<VoteDto> response = new HashSet<VoteDto>();
            repository.GetAll().Where(x => x.IsDeleted == false)
                .ForEachAsync(x => response.Add(new VoteDto(x)));
            return response;
        }

        public VoteDto GetById(int id)
        {
            return new VoteDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Vote> repository;
        protected readonly ICache cache;
    }
}
