using CloudCMS.Models;
using Microsoft.AspNet.Mvc;
using CloudCMS.Common;
using CloudCMS.Models.Results;

namespace CloudCMS.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public JsonResult Register(RegisterModel registerModel)
        {
            if (!Utils.IsValidEmail(registerModel.Email))
            {
                Response.StatusCode = 400;
                Json(new Result(ResultCode.INVALID_PARAMETER, "Email is not correctly formatted"));
            }

            return Json(new Result(ResultCode.SUCCESS, ""));

        }


    }
}
