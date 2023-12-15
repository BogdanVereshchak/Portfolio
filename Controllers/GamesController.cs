using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Controllers
{
    public class GamesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

		public IActionResult SuikaGame()
		{
			return View();
		}
	}
}
