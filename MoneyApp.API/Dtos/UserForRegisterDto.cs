using System.ComponentModel.DataAnnotations;

namespace MoneyApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        [StringLength(12, MinimumLength = 4, ErrorMessage = "You must specify password between 4 and 12 character")]
        public string Password { get; set; }
    }
}