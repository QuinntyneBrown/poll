using System;
using System.Collections.Generic;
using Chloe.Server.Data.Contracts;
using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Data.Entity;
using System.Linq;
using Chloe.Server.Models;

namespace Chloe.Server.Services
{
    public class SubjectService : ISubjectService
    {
        public SubjectService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Subjects;
            this.cache = cacheProvider.GetCache();
        }

        public SubjectAddOrUpdateResponseDto AddOrUpdate(SubjectAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Subject());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new SubjectAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<SubjectDto> Get()
        {
            ICollection<SubjectDto> response = new HashSet<SubjectDto>();
            repository.GetAll().Where(x => x.IsDeleted == false)
                .ForEachAsync(x => response.Add(new SubjectDto(x)));
            return response;
        }

        public SubjectDto GetById(int id)
        {
            return new SubjectDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Subject> repository;
        protected readonly ICache cache;
    }
}
