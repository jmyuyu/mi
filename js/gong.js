		function getCookie(name){
			var strCookie=document.cookie;
		    var arrCookie=strCookie.split("; ");
		    for(var i in arrCookie){
		    	arr=arrCookie[i].split("=");
		    	if(name == arr[0]){
		    		return arr[1];
		    	}
		    }
		}
		function setCookie(name,val,day){
		var oDate = new Date();
		oDate.setDate(oDate.getDate()+10);
		document.cookie=name+"="+val+";expires="+oDate;
		}
		function removeCookie(name){
			setCookie(name,1,-1);	
		}