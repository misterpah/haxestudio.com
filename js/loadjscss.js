	utmjs_path = "";	
	function loadJS(url,callback)
	{
		if (typeof callback === 'undefined') { callback = null; }
		url = utmjs_path + url;

		var script = document.createElement("script")
		script.type = "text/javascript";

		if (script.readyState){  //IE
			script.onreadystatechange = function(){
				if (script.readyState == "loaded" ||
						script.readyState == "complete"){
					script.onreadystatechange = null;
					callback();
				}
			};
		} else {  //Others
			script.onload = function(){
				if (callback != null)
					{
					callback();
					}
				
			};
		}

		script.src = url;
		document.getElementsByTagName("head")[0].appendChild(script);
	}

	function loadCSS(css)
	{
		$("head").append("<link rel='stylesheet' type='text/css' href='"+utmjs_path+css+"'/>");
	}