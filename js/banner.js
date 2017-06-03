//      轮播
			$(function(){
				var index=0;
				 $("li").eq(0).show();
				timer=setInterval(move,3000)
				function move(){
								   index++;				  
				   if(index==$("li").length){
				   	index=0;				   	
				   }
				$(".pic").find("li").eq(index).fadeIn().siblings().fadeOut();	
				$(".yuan").find("p").eq(index).addClass("yuan-1").siblings().removeClass("yuan-1");	
				}

				
				
				$(".yuan p").click(function(){
					clearInterval(timer);
					if(!$(this).hasClass("yuan")){
						index=$(this).index();
						$(".pic").find("li").eq(index).fadeIn().siblings().fadeOut();	
						$(this).addClass("yuan-1").siblings().removeClass("yuan-1");
					}
									
				})
					
					$(".btn-left").click(function(){
						
					clearInterval(timer);
					index--;
					if(index<0){
						index =5;
					
					}
					
					console.log(index);
					$(".pic").find("li").eq(index).fadeIn().siblings().fadeOut();	
					$(".yuan").find("p").eq(index).addClass("yuan-1").siblings().removeClass("yuan-1");	
					
						
					
				})
					
		
				$(".btn-right").click(function(){
				move();
		       })
				
				
				
			   $(".pic-1").hover(function(){
						clearInterval(timer);
						
					},function(){
						timer=setInterval(move,3000)
						})
						
				})
				
