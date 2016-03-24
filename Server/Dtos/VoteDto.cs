using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class VoteDto
    {
        public VoteDto(Vote entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public VoteDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
