using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IVoteService
    {
        VoteAddOrUpdateResponseDto AddOrUpdate(VoteAddOrUpdateRequestDto request);
        ICollection<VoteDto> Get();
        VoteDto GetById(int id);
        dynamic Remove(int id);
    }
}
