using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class SubjectAddOrUpdateResponseDto: SubjectDto
    {
        public SubjectAddOrUpdateResponseDto(Subject entity)
            :base(entity)
        {

        }
    }
}
