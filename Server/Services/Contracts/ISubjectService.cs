using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface ISubjectService
    {
        SubjectAddOrUpdateResponseDto AddOrUpdate(SubjectAddOrUpdateRequestDto request);
        ICollection<SubjectDto> Get();
        SubjectDto GetById(int id);
        dynamic Remove(int id);
    }
}
