using Microsoft.AspNetCore;

namespace Intus.Drawing.FrontEnd
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .ConfigureAppConfiguration((hostingContext, opts) =>
                {
                    opts.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);
                    opts.AddJsonFile($"appsettings.{hostingContext.HostingEnvironment.EnvironmentName}.json", optional: true, reloadOnChange: true);

                    if (hostingContext.HostingEnvironment.IsDevelopment())
                    {
                        var userName = Environment.UserName;
                        if (!string.IsNullOrWhiteSpace(userName))
                            opts.AddJsonFile($"appsettings.user-{userName}.json", optional: true, reloadOnChange: true);
                    }

                    opts.AddEnvironmentVariables();
                    opts.AddCommandLine(args);
                })
                .UseStartup<Startup>();
    }
}

