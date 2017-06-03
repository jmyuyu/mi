
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
								
								
								
//								function time(){
//								
//								setTimeout((".nav-bottom").hide(),2000)}
								
	                      
//	                      $(".fudong").hover().hover({
//	                      $(".nav-bottom").show();
//	                      })


//
//	for(var i= 0;i<aListLi.length;i++){
//		(function(i){
//			aListLi[i].onmouseover = function(){
//				clearTimeout(oTimer);
//				for(var j=0;j<aStrong.length;j++){
//					aStrong[j].style.display = 'none';
//				}
//				aStrong[i].style.display = 'block';
//			}
//			aListLi[i].onmouseout = function(){
//				oTimer = setTimeout(function(){
//					aStrong[i].style.display = 'none';
//				},200)
//			}
//			aStrong[i].onmouseover = function(){
//				clearTimeout(oTimer);
//				aStrong[i].style.display = 'block';
//			}
//			aStrong[i].onmouseout = function(){
//				oTimer = setTimeout(function(){
//					aStrong[i].style.display = 'none';
//				},100)
//			}
//		})(i)
//	}

	function DataAjax(Url) {
        $.ajax({
            type:"get",
            url:Url,
            datatype:JSON,
            error : function(data){
                alert('请求失败')
            },
            success:function(data){
               console.log(data);
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
       Url = '../../../data/banner-top-shouji.json';
     
		}
		if(code == '红米'){
			//第二套数据
			$(".nav-bottom1").empty();
            Url = '../../../data/banner-top-hongmi.json'
		}
		if(code == '平板 · 笔记本'){
			
			$(".nav-bottom1").empty();
            Url = '../../../data/banner-top-ping.json'
		}
		if(code == '电视'){
			
			$(".nav-bottom1").empty();
            Url = '../../../data/banner-top-dian.json'
		}
				if(code == '盒子 · 影音'){

			$(".nav-bottom1").empty();
            Url = '../../../data/banner-top-he.json'
		}
				if(code == '路由器'){
		
			$(".nav-bottom1").empty();
            Url = '../../../data/banner-top-lu.json'
		}
		if(code == '智能硬件'){
	
			$(".nav-bottom1").empty();
            Url = '../../../data/banner-top-zhi.json'
		}
        DataAjax(Url);
   })
	
	
//	.............................................................................................
	
	
	     $(".caidan3").click(function(){
			$(".caidan3").css("color","#ff6709")	
			
				mo=setTimeout(function(){			
				$(".caidan3").css("color","#9999")},300)						
		})
		     $(".caidan2").click(function(){
			$(".caidan2").css("color","#ff6709")			
				mo=setTimeout(function(){			
				$(".caidan2").css("color","#9999")},300)						
		})
	
//	.........................................................
	var n=0;
	tim=null;
	var tim=setInterval(time,4000)
			$(".caidan3").click(function(){
				clearInterval(tim);
			$(".bao").stop().animate({"left":"0"})
			$(".caidan3").css("color","red")
			
		})
			
				  $(".caidan2").click(function(){
				  clearInterval(tim);	
			$(".bao").stop().animate({"left":"-1226px"})
			
		})	
	
	function time(){
		
        n++;
        
	if(n==1){	
	
			$(".bao").animate({"left":"-1226"})
//	要等于负一	才会循环
	n=-1;

	}else if(n==0){	
			$(".bao").animate({"left":"0"})	
	}	
	}
	
	
//	................................................淡入淡出与滑动不同是进行
//	      $(".aside-bottom li").mousemove(function(){
//    	$(this).find('span');
//    	
//    	
//    })

//    $(".aside-bottom li").mousemove(function(){
//   
//    	$(this).find('span').fadeIn(1500).animate({"top":"250px"})
//    	
//    })








	function asidenb(Url) {
        $.ajax({
            type:"get",
            url:Url,
            datatype:JSON,
            error : function(data){
                alert('请求失败')
            },
            success:function(data){
                console.log(data);
                $.each(data, function(k,v) {

                	if(k<7){
                	var	li = "<li><img src='"+v.img+"'/> <p class='aside1'>"+v.name+"</p><p class='aside2'>"+v.yong+"</p><p class='aside3'>"+v.price+"</p><span class='aside-ping'><p>"+v.ping+"</p><p>"+v.pingren+"</p></span></li>"
                		$('.aside-ul').append(li);
                	}  else if(k==7){
                	var li ="<li class='aside-te'><br /><br /><span class='aside-te1'>"+v.name+"</span><br /><span class='aside-te2'>"+v.price+"</span><img src='"+v.img+"'/></li>"
                	 $('.aside-ul').append(li); 
                	}else if(k==8){
                    var li="<li><br /><br /><br /><span class='aside-te5'>浏览更多</span><br /><span class='aside-te6'>"+v.yong+"</span><span class='aside-te7'>&#xe612;</span></li>"                            
                    $('.aside-ul').append(li);   		
                	}

                });
            }
        });
    }
     asidenb(Url = '../../../data/aside-remeng.json')
	$('.laotian li').mouseover(function () {
		$(this).addClass("aside-btn").siblings().removeClass("aside-btn")
		
		var code = $(this).text();	 
		if(code == '热门'){
		$(".aside-ul").empty();
       Url = '../../../data/aside-remeng.json'    
		}
		if(code == '家具'){	
		$(".aside-ul").empty();
       Url = '../../../data/aside-jiaju.json'    
		}

		if(code == '电视影音'){	
		$(".aside-ul").empty();
       Url = '../../../data/aside-dianshi.json'    
		}
				if(code == '电脑'){	
		$(".aside-ul").empty();
       Url = '../../../data/aside-diannao.json'    
		}	
	        asidenb(Url)
   })







	function asidenb1(Url) {
        $.ajax({
            type:"get",
            url:Url,
            datatype:JSON,
            error : function(data){
                alert('请求失败')
            },
            success:function(data){
                console.log(data);
                $.each(data, function(k,v) {

                	if(k<7){
                	var	li = "<li><img src='"+v.img+"'/> <p class='aside1-1'>"+v.name+"</p><p class='aside2-1'>"+v.yong+"</p><p class='aside3-1'>"+v.price+"</p><span class='aside1-ping'><p>"+v.ping+"</p><p>"+v.pingren+"</p></span></li>"
                		$('.aside1-ul').append(li);
                	}  else if(k==7){
                	var li ="<li class='aside1-te'><br /><br /><span class='aside1-te1'>"+v.name+"</span><br /><span class='aside1-te2'>"+v.price+"</span><img src='"+v.img+"'/></li>"
                	 $('.aside1-ul').append(li); 
                	}else if(k==8){
                    var li="<li><br /><br /><br /><span class='aside1-te5'>浏览更多</span><br /><span class='aside1-te6'>"+v.yong+"</span><span class='aside1-te7'>&#xe612;</span></li>"                            
                    $('.aside1-ul').append(li);   		
                	}

                });
            }
        });
    }
     asidenb1(Url = '../../../data/aside-renmen.json')
	$('.laotian1 li').mouseover(function () {
		$(this).addClass("aside1-btn").siblings().removeClass("aside1-btn")
		
		var code = $(this).text();	 
		if(code == '热门'){
		$(".aside1-ul").empty();
       Url = '../../../data/aside-renmen.json'    
		}
		if(code == '出行'){	
		$(".aside1-ul").empty();
       Url = '../../../data/aside-chuxing.json'    
		}

		if(code == '健康'){	
		$(".aside1-ul").empty();
       Url = '../../../data/aside-jiankang.json'    
		}
		if(code == '酷玩'){	
		$(".aside1-ul").empty();
       Url = '../../../data/aside-cool.json'    
		}	
		
		if(code == '路由器'){	
		$(".aside1-ul").empty();
       Url = '../../../data/aside-lu.json'    
		}
	        asidenb1(Url)
   })
	 	
	  


	function asidenb2(Url) {
        $.ajax({
            type:"get",
            url:Url,
            datatype:JSON,
            error : function(data){
                alert('请求失败')
            },
            success:function(data){
                console.log(data);
                $.each(data, function(k,v) {

                	if(k<7){
                	var	li = "<li><img src='"+v.img+"'/> <p class='aside1-2'>"+v.name+"</p><p class='aside2-2'>"+v.yong+"</p><p class='aside3-2'>"+v.price+"</p><span class='aside2-ping'><p>"+v.ping+"</p><p>"+v.pingren+"</p></span></li>"
                		$('.aside2-ul').append(li);
                	}  else if(k==7){
                	var li ="<li class='aside2-te'><br /><br /><span class='aside2-te1'>"+v.name+"</span><br /><span class='aside2-te2'>"+v.price+"</span><img src='"+v.img+"'/></li>"
                	 $('.aside2-ul').append(li); 
                	}else if(k==8){
                    var li="<li><br /><br /><br /><span class='aside2-te5'>浏览更多</span><br /><span class='aside2-te6'>"+v.yong+"</span><span class='aside2-te7'>&#xe612;</span></li>"                            
                    $('.aside2-ul').append(li);   		
                	}

                });
            }
        });
    }
     asidenb2(Url = '../../../data/a1.json')
	$('.laotian2 li').mouseover(function () {
		$(this).addClass("aside2-btn").siblings().removeClass("aside2-btn")
		
		var code = $(this).text();	 
		if(code == '热门'){
		$(".aside2-ul").empty();
       Url = '../../../data/a1.json'    
		}
		if(code == '耳机音箱'){	
		$(".aside2-ul").empty();
       Url = '../../../data/a2.json'    
		}

		if(code == '电源'){	
		$(".aside2-ul").empty();
       Url = '../../../data/a3.json'    
		}
		
		if(code == '电池存储卡'){	
		$(".aside2-ul").empty();
       Url = '../../../data/a4.json'    
		}
	        asidenb2(Url)
   })










	function asidenb3(Url) {
        $.ajax({
            type:"get",
            url:Url,
            datatype:JSON,
            error : function(data){
                alert('请求失败')
            },
            success:function(data){
                console.log(data);
                $.each(data, function(k,v) {

                	if(k<7){
                	var	li = "<li><img src='"+v.img+"'/> <p class='aside1-3'>"+v.name+"</p><p class='aside2-3'>"+v.yong+"</p><p class='aside3-3'>"+v.price+"</p><span class='aside3-ping'><p>"+v.ping+"</p><p>"+v.pingren+"</p></span></li>"
                		$('.aside3-ul').append(li);
                	}  else if(k==7){
                	var li ="<li class='aside3-te'><br /><br /><span class='aside3-te1'>"+v.name+"</span><br /><span class='aside3-te2'>"+v.price+"</span><img src='"+v.img+"'/></li>"
                	 $('.aside3-ul').append(li); 
                	}else if(k==8){
                    var li="<li><br /><br /><br /><span class='aside3-te5'>浏览更多</span><br /><span class='aside3-te6'>"+v.yong+"</span><span class='aside3-te7'>&#xe612;</span></li>"                            
                    $('.aside3-ul').append(li);   		
                	}

                });
            }
        });
    }
     asidenb3(Url = '../../../data/b1.json')
	$('.laotian3 li').mouseover(function () {
		$(this).addClass("aside3-btn").siblings().removeClass("aside3-btn")
		
		var code = $(this).text();	 
		if(code == '热门'){
		$(".aside3-ul").empty();
       Url = '../../../data/b1.json'    
		}
		if(code == '保护套'){	
		$(".aside3-ul").empty();
       Url = '../../../data/b2.json'    
		}

		if(code == '贴膜'){	
		$(".aside3-ul").empty();
       Url = '../../../data/b3.json'    
		}
		
		if(code == '其他配件'){	
		$(".aside3-ul").empty();
       Url = '../../../data/b4.json'    
		}
	        asidenb3(Url)
   })











	function asidenb4(Url) {
        $.ajax({
            type:"get",
            url:Url,
            datatype:JSON,
            error : function(data){
                alert('请求失败')
            },
            success:function(data){
                console.log(data);
                $.each(data, function(k,v) {

                	if(k<7){
                	var	li = "<li><img src='"+v.img+"'/> <p class='aside1-4'>"+v.name+"</p><p class='aside2-4'>"+v.yong+"</p><p class='aside3-4'>"+v.price+"</p><span class='aside4-ping'><p>"+v.ping+"</p><p>"+v.pingren+"</p></span></li>"
                		$('.aside4-ul').append(li);
                	}  else if(k==7){
                	var li ="<li class='aside4-te'><br /><br /><span class='aside4-te1'>"+v.name+"</span><br /><span class='aside4-te2'>"+v.price+"</span><img src='"+v.img+"'/></li>"
                	 $('.aside4-ul').append(li); 
                	}else if(k==8){
                    var li="<li><br /><br /><br /><span class='aside4-te5'>浏览更多</span><br /><span class='aside4-te6'>"+v.yong+"</span><span class='aside4-te7'>&#xe612;</span></li>"                            
                    $('.aside4-ul').append(li);   		
                	}

                });
            }
        });
    }
     asidenb4(Url = '../../../data/c1.json')
	$('.laotian4 li').mouseover(function () {
		$(this).addClass("aside4-btn").siblings().removeClass("aside4-btn")
		
		var code = $(this).text();	 
		if(code == '热门'){
		$(".aside4-ul").empty();
       Url = '../../../data/c1.json'    
		}
		if(code == '服装'){
		$(".aside4-ul").empty();
       Url = '../../../data/c2.json'    
		}

		if(code == '米兔'){	
		$(".aside4-ul").empty();
       Url = '../../../data/c3.json'    
		}
		
		if(code == '生活周边'){	
		$(".aside4-ul").empty();
       Url = '../../../data/c4.json'    
		}
		if(code == '箱包'){	
		$(".aside4-ul").empty();
       Url = '../../../data/c6.json'    
		}
	        asidenb4(Url)
   })




//			$(".caidan3-1").css("color","red")
//...................................................点击左右左右移动.............
	var m=0;

			$(".caidan2-1").click(function(){
				m++;
				if(m<=1){
					m=1
				}
				console.log(m);
				if(m==1){
				$(".bao-1").stop().animate({"left":"-1226px"})	
					
				}
			if(m==2){
				$(".bao-1").stop().animate({"left":"-2452px"})	
			}
           if(m==3){
           	$(".bao-1").stop().animate({"left":"-3678px"})
           }		
		})
					
				$(".caidan3-1").click(function(){
				m--;
				if(m>=2){
					m=2
				}
				console.log(m);
				if(m==0){
				$(".bao-1").stop().animate({"left":"0"})	
					
				}
			if(m==1){
				$(".bao-1").stop().animate({"left":"-1226px"})	
			}
           if(m==2){
           	$(".bao-1").stop().animate({"left":"-2452px"})
           }	
		})
			

	
	
	
	
	
	
//					function move(){
//								   index++;				  
//				   if(index==$("li").length){
//				   	index=0;				   	
//				   }
//				$(".pic").find("li").eq(index).fadeIn().siblings().fadeOut();	
//				$(".yuan").find("p").eq(index).addClass("yuan-1").siblings().removeClass("yuan-1");	
//				}
	
	
	
	
	
	var l=0;
	$(".nidaye").click(function(){
		l--;
//		.................这是限制从上往下的就是点击到456以上时只能等于最后一张......
		if(l>2){
			l=3;	
		}
//		..................限制0以下,主要是下边$(".ti-p5").find("em").eq(l).addClass("rini").siblings().removeClass("rini");
		if(l<0){
			l=0;
		}
		
		console.log(l);
		if(l==0){
			$(".ti").animate({"left":"0"})
		}else if(l==1){
			$(".ti").animate({"left":"-295"})		
		}else if(l==2){
			$(".ti").animate({"left":"-590px"})	
		}
		console.log($(".ti-p5").find("em").eq(l));
		$(".ti-p5").find("em").eq(l).addClass("rini").siblings().removeClass("rini");
	})
		
	$(".ti-p7").click(function(){
		l++;
		if(l<1){
			l=1;			
		}
		if(l>3){
			l=3
		}
		console.log(l);
		if(l==1){
			$(".ti").animate({"left":"-295px"})
		}else if(l==2){
			$(".ti").animate({"left":"-590px"})
		}else if(l==3){
			$(".ti").animate({"left":"-885px"})
		}		
		$(".ti-p5").find("em").eq(l).addClass("rini").siblings().removeClass("rini");
	})
	

	
	
	
	
	
	

	
	
	
	
	
	
		var l=0;
	$(".nidaye1").click(function(){
		l--;
//		.................这是限制从上往下的就是点击到456以上时只能等于最后一张......
		if(l>2){
			l=3;	
		}
//		..................限制0以下,主要是下边$(".ti-p5").find("em").eq(l).addClass("rini").siblings().removeClass("rini");
		if(l<0){
			l=0;
		}
		

		if(l==0){
			$(".ti1").animate({"left":"0"})
		}else if(l==1){
			$(".ti1").animate({"left":"-295"})		
		}else if(l==2){
			$(".ti1").animate({"left":"-590px"})	
		}

		$(".ti1-p5").find("em").eq(l).addClass("rini1").siblings().removeClass("rini1");
	})
		
	$(".ti1-p7").click(function(){
		l++;
		if(l<1){
			l=1;			
		}
		if(l>3){
			l=3
		}

		if(l==1){
			$(".ti1").animate({"left":"-295px"})
		}else if(l==2){
			$(".ti1").animate({"left":"-590px"})
		}else if(l==3){
			$(".ti1").animate({"left":"-885px"})
		}		
		$(".ti1-p5").find("em").eq(l).addClass("rini1").siblings().removeClass("rini1");
	})
	
	
	
	
	
	
	
	
		var l=0;
	$(".nidaye2").click(function(){
		l--;
//		.................这是限制从上往下的就是点击到456以上时只能等于最后一张......
		if(l>2){
			l=3;	
		}
//		..................限制0以下,主要是下边$(".ti-p5").find("em").eq(l).addClass("rini").siblings().removeClass("rini");
		if(l<0){
			l=0;
		}
		

		if(l==0){
			$(".ti2").animate({"left":"0"})
		}else if(l==1){
			$(".ti2").animate({"left":"-295"})		
		}else if(l==2){
			$(".ti2").animate({"left":"-590px"})	
		}

		$(".ti2-p5").find("em").eq(l).addClass("rini2").siblings().removeClass("rini2");
	})
		
	$(".ti2-p7").click(function(){
		l++;
		if(l<1){
			l=1;			
		}
		if(l>3){
			l=3
		}

		if(l==1){
			$(".ti2").animate({"left":"-295px"})
		}else if(l==2){
			$(".ti2").animate({"left":"-590px"})
		}else if(l==3){
			$(".ti2").animate({"left":"-885px"})
		}		
		$(".ti2-p5").find("em").eq(l).addClass("rini2").siblings().removeClass("rini2");
	})	
	
	
	
	
	
	
	
	
	
	
			var l=0;
	$(".nidaye3").click(function(){
		l--;
//		.................这是限制从上往下的就是点击到456以上时只能等于最后一张......
		if(l>2){
			l=3;	
		}
//		..................限制0以下,主要是下边$(".ti-p5").find("em").eq(l).addClass("rini").siblings().removeClass("rini");
		if(l<0){
			l=0;
		}
		

		if(l==0){
			$(".ti3").animate({"left":"0"})
		}else if(l==1){
			$(".ti3").animate({"left":"-295"})		
		}else if(l==2){
			$(".ti3").animate({"left":"-590px"})	
		}

		$(".ti3-p5").find("em").eq(l).addClass("rini3").siblings().removeClass("rini3");
	})
		
	$(".ti3-p7").click(function(){
		l++;
		if(l<1){
			l=1;			
		}
		if(l>3){
			l=3
		}

		if(l==1){
			$(".ti3").animate({"left":"-295px"})
		}else if(l==2){
			$(".ti3").animate({"left":"-590px"})
		}else if(l==3){
			$(".ti3").animate({"left":"-885px"})
		}		
		$(".ti3-p5").find("em").eq(l).addClass("rini3").siblings().removeClass("rini3");
	})	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//				  $(".caidan2-1").click(function(){
//				
//			$(".bao-1").animate({"left":"-1226px"})
//			
//		})	


//		 tim=setInterval(
//	  function bj(){	
//    $(".bao").animate({left:'-1226px'},1000,
//    $(".bao").animate({left:'0'}) )     
//	  },3001);
	
//	var n = 0;
//	var tim = null;
//	var mo = null;
//	var tim1 = null;
//	function time(){
//		tim=setInterval(function(){
//			n++;
//			$(".bao").animate({"left":"-1226px"});	
//			if (n=1) {				
//				n=0;				
//			mo=setTimeout(function(){			
//				$(".bao").animate({"left":"0"})},3000)
//				clearInterval(tim);
//			}
//
//		time();
//		},3000)		
//	}
//	time();
	
//	var i=1;
// var bao1=document.getElementsByClassName(".bao");
// var omark1=document.getElementsByClassName("mark1");
// var omark2=document.getElementsByClassName("mark2");
// console.log(omark1);
//var tim=setInterval(mov,1000)
//	function mov(){
//		i++;
//	
//	}
	
	
	
	
	
    
//	    time=setInterval(
//	 function jb(){ 
//	 	
//    $(".bao").animate({left:'0'})     
//	   } 
//	   
//	 	,3000);












//		   if(i=1){
//	   clearInterval(tim);
//		i=0;
//   if()

	
	
//	tim=setInterval(bj,2000);
//	function bj(){
//		$(".mark1").animate({left:'-1226px'},500)
//		$(".mark2").animate({left:'-1226px'},500)
//	}
	
	
	
	
	
	
	
	
	
	
	
});
  
//        $("input:not(:nav-left4-text)").click(function(){
//   	$(".nav-left4-zi1").css("display","block")
//   	$(".nav-left4-zi2").css("display","block")   	
//   })	
//                      $(".fudong span").hover(function(){
//									$(".nav-bottom").show();
//								},function(){
//								$(".nav-bottom").hide();
//								
//								})

//       var cole=$(this).text();
            
       
//       if(cole=="小米手机"){
//          function ajax(){	
//					$.get("../../../data/banner-top-shouji.json",function(data){	
//						$.each(data, function(j,v) {var li = "<li><dl class='banner-li'><dt><img src='"+v.img+"'/></dt><dd class='dd-1'>"+v.name+"</dd><dd class='dd-2'>"+v.price+"</dd></dl></li>"
//							$(".nav-bottom1").append(li); 
//								$(".fudong span").hover(function(){
//									$(".nav-bottom1 ").hide();
//								})
//				
//							})	
//				
//						})
//				
//				
//				
//					}
//          
//         ajax()            
        
//         }
           
           
           
//         if(cole=="红米"){
//           	function ajax(){
//						$.get("../../../data/banner-top-hongmi.json",function(data){		
//							$.each(data, function(j,v) {var li = "<li><dl class='banner-li'><dt><img src='"+v.img+"'/></dt><dd class='dd-1'>"+v.name+"</dd><dd class='dd-2'>"+v.price+"</dd></dl></li>"
//								$(".nav-bottom1").append(li);
//							});				
//						})				
//				}             
//          ajax() 
             
// }
       











