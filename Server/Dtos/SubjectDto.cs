using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class SubjectDto
    {
        public SubjectDto(Subject entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public SubjectDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
