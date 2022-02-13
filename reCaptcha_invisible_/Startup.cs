using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(reCaptcha_invisible_.Startup))]
namespace reCaptcha_invisible_
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
