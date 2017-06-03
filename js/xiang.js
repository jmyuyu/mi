


































$(function(){
	
	
					     $(".nav-left4-text").focusin(function(){
     	$(".nav-left4-zi1").css("display","none")
     	$(".nav-left4-zi2").css("display","none")
     	$(".nav-left4-btn").css("border-color","#ff6700")
     	$(".nav-left4-text").css("border-color","#ff6700")
     	$(".nav-left4-zi3").css("display","block")  
     	
     	
     });
     $(".nav-left4-text").focusout(function(){
     	$(".nav-left4-zi1").css("display","block")
     	$(".nav-left4-zi2").css("display","block")  
     	$(".nav-left4-btn").css("border-color","#999")
     	$(".nav-left4-text").css("border-color","#999")
     	$(".nav-left4-zi3").css("display","none") 	
     });
          	var oTimer=setTimeout(function(){},200)
	
	
	                      $(".fudong").hover(function(){
	                     
									$(".nav-bottom").css("display","block")	
									 clearTimeout(oTimer);
								},function(){					 
                     oTimer = setTimeout(function(){
					$(".nav-bottom").css("display","none")
				     },1000)              
                     })
                
    	                      $(".fudong span").hover(function(){
	                      	$(this).css("color","#ff6700");		
								},function(){							
							$(this).css("color","#333333");							 
                          })
    	                      
    	                      
						$(".nav-bottom1").hover(function(){
	                      			$(".nav-bottom1").css("display","block")	
									 clearTimeout(oTimer);
								},function(){							
							$(".nav-bottom").css("display","none")						 
                          })
						
							function DataAjax(Url) {
        $.ajax({
            type:"get",
            url:Url,
            datatype:JSON,
            error : function(data){
                alert('请求失败')
            },
            success:function(data){
         
                $.each(data, function(k,v) {
                    var li = "<li><dl class='banner-li'><dt><img src='"+v.img+"'/></dt><dd class='dd-1'>"+v.name+"</dd><dd class='dd-2'>"+v.price+"</dd></dl></li>"
                    $('.nav-bottom1').append(li);
                });
            }
        });
   }
	$('.fudong span').mouseenter(function () {
		var code = $(this).text();
		
		if(code == '小米手机'){
		$(".nav-bottom1").empty();
       Url = '../../data/banner-top-shouji1.json';
     
		}
		if(code == '红米'){
			//第二套数据
			$(".nav-bottom1").empty();
            Url = '../../data/banner-top-hongmi1.json'
		}
		if(code == '平板 · 笔记本'){
			
			$(".nav-bottom1").empty();
            Url = '../../data/banner-top-ping1.json'
		}
		if(code == '电视'){
			
			$(".nav-bottom1").empty();
            Url = '../../data/banner-top-dian1.json'
		}
				if(code == '盒子 · 影音'){

			$(".nav-bottom1").empty();
            Url = '../../data/banner-top-he1.json'
		}
				if(code == '路由器'){
		
			$(".nav-bottom1").empty();
            Url = '../../data/banner-top-lu1.json'
		}
		if(code == '智能硬件'){
	
			$(".nav-bottom1").empty();
            Url = '../../data/banner-top-zhi1.json'
		}
        DataAjax(Url);
   })
	
	
	


	
	
	$(".nav-left2").hover(function(){
		$(".banner-left").show()
	},function(){
		$(".banner-left").hide()
	})
	

//setInterval(function(){

$(window).scroll(function(){
	var s=$(document).scrollTop();
		if(s>320){
			$(".miyou1").slideDown("fast",function(){
				
					$(".miyou1").css("position","fixed")
			})
			
			
		
		}else if(s<250){$(".miyou1").css("position","static")}
	
})
//		var s=$(window).scrollTop();


	
//	},1)
//	$(".miyou").scrollTop(100)
	
	
	
	
	
	



var time=setInterval(yes,4000)
var n=0;
$(".zhong-tu").find("li").eq(0).show()
 function yes(){
 	n++;
 	if(n==$(".zhong-tu li").length){
 		n=0;		
 	}
 	$(".zhong-tu").find("li").eq(n).fadeIn().siblings().fadeOut()
 	$(".heng").find("p").eq(n).addClass("heng1").siblings().removeClass("heng1")

 }
  $(".sai-left").click(function(){
  	clearInterval(time);
  	n--;
  	if(n<0){
  		n=2;
  	}
  	$(".zhong-tu").find("li").eq(n).fadeIn().siblings().fadeOut()
  	 	$(".heng").find("p").eq(n).addClass("heng1").siblings().removeClass("heng1")
  })


	 $(".sai-right").click(function(){
	 	clearInterval(time);
	 	
	 	yes();
	 })
	
	
	
	
//	$(window).scroll(function(){
//		var x=$(document).scrollTop();
//		if(x>100){
//			$(".sai").css("position","fixed","left","100","top","0")
//		}else if(x=700){
//			$(".sai").css("position","static")
//		}
//		
//		
//	})ff6700
//	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
     


















//			var li="";
//			for(var i in data){
//			li +="<li><img src='"+data[i].imgurl+"'/></li><li><img src='"+data[i].imgurl1+"'/></li><li><img src='"+data[i].imgurl2+"'/></li>"
//				
//			}
//
//			otu.innerHTML=li;
//			p.innerHTML=data[id].prc;
//			console.log(p)
//			prc.innerHTML=data[id].prc;
//		var html="";
//		for(var i in data){
//		html += "<li class='oli'><p id='title'>"+data[i].title+"</p><p id='prc'>"+data[i].prc+"</p><a href='xiang.html?id="+data[i].id+"'><img src='"+data[i].imgurl+"'></a><input type='button' value='加入购物车' data-id='"+data[i].id+"' class='btn' /> </li>"	
//		}
//			 oUl.innerHTML=html;
//			 var str = getCookie("cart");
//			 var obj = str ? JSON.parse(str) : {};
//			 var sum = 0;
//			 for(var i in obj){
//				sum+=obj[i];
//			}
//			 
//			 nu.innerHTML =sum;
//			 for(var i=0;i<bt.length;i++){
//			 	bt[i].onclick=function(){
//			 		
//			 		var id=this.getAttribute("data-id");
//			 		obj[id] = obj[id] ? ++obj[id] : 1;
//			 		var cao=JSON.stringify(obj);
//			 		setCookie("cart",cao,5);
//			 		nu.innerHTML = ++sum;
//			 	}
//			 }









//
//var oContent = document.getElementsByClassName("content")[0];
//				var val = document.getElementsByClassName("content")[0].value;
//				var add = document.getElementsByClassName("add")[0];
//				var sub = document.getElementsByClassName("sub")[0];
//				add.onclick = function() {
//					val++;
//					oContent.value = val;
//					//console.log(val);
//				}
//				sub.onclick = function() {
//					val--;
//					if(val <= 1) {
//						val = 1;
//					}
//					oContent.value = val;
//				}
//
//				var str = getCookie("cart");
//				var obj = str ? JSON.parse(str) : {}; //用来存商品ID（attr）和添加的数量（value）
//				var sum = 0;
//				for(var i in obj) {
//					sum += obj[i];
//				}
//				var oNum = document.getElementsByClassName("cart-num")[0];
//				oNum.innerHTML = sum;
//				oCart.onclick = function() {
//					var id = this.getAttribute("data-id");
//					var i = Number(val) + obj[id];
//					obj[id] = i;
//
//					//存cookie
//					var objToStr = JSON.stringify(obj);
//					setCookie("cart", objToStr, 7);
//					var str1 = getCookie("cart");
//					var obj1 = str1 ? JSON.parse(str1) : {}; //用来存商品ID（attr）和添加的数量（value）
//					var sum1 = 0;
//					for(var i in obj1) {
//						sum1 += obj1[i];
//					}
//					oNum.innerHTML =sum1;
//				}
//			}





//for(var id in obj) {
//					var oCart = document.getElementsByClassName("cart-hide")[0];
//					var oDiv = document.createElement("div");
//					var str = "<img src='" + data[id].imgUrl + "'/><h4>" + data[id].title + "</h4><span>￥" + data[id].price + "<b>X" + obj[id] + "</b></span><a class='closebtn'>X</a>"
//					oDiv.innerHTML = str;
//					oCart.appendChild(oDiv);
//				}




  
