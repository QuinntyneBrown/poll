using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class VoteAddOrUpdateResponseDto: VoteDto
    {
        public VoteAddOrUpdateResponseDto(Vote entity)
            :base(entity)
        {

        }
    }
}
