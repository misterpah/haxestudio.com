function generateLink(link,text,pageTitle)
{
	if (document.title == pageTitle)
		{
		activeClass = "class='active'";
		}
	else
		{
		activeClass = "";
		}
	return "<li "+activeClass+"><a href='"+link+"'>"+text+"</a></li>";
}

if (document.title == "Haxe Studio")
	{
	$(".navbar-brand").css("color","#ffffff");
	}

function url()
	{
	return "http://www.haxestudio.com/";
	}
	
$("#menu-content").append(generateLink(url()+"./getting-started.html","Getting Started","Haxe Studio : Getting Started"));
$("#menu-content").append(generateLink(url()+"./dist/index.html","Download","Haxe Studio : Download"));
$("#menu-content").append(generateLink(url()+"./using-haxe-studio.html","Using Haxe Studio (outdated)","Haxe Studio : Using Haxe Studio"));
$("#menu-content").append(generateLink(url()+"./contributors/index.html","Contributors","Haxe Studio : Contributors"));

$("#menu-right").append('<li><a style="padding-top:5px;padding-bottom:5px;" href="https://plus.google.com/113245482496557815887" rel="publisher"><img height=40px src="'+url()+'./images/Google-plus-icon.png"/></a></li>');
//$("body").append('<div id="gittip_wrap"><script data-gittip-username="misterpah" src="//gttp.co/v1.js"></script></div><style>#gittip_wrap{position:absolute;right:10px;top:60px;</style>');

$(".navbar-brand").attr("href","http://www.haxestudio.com");

loadJS("http://www.haxestudio.com/js/google-analytics.js");