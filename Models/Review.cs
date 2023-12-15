using System.ComponentModel.DataAnnotations;

namespace Portfolio.Models
{
    public class Review
    {
        public int Id { get; set; }
        [Display(Name = "Відгук")]
        public string ReviewText { get; set; }
        [Display(Name = "Оцінка")]
        public int ReviewRating { get; set; }

        public Review()
        {
            
        }
    }
}
