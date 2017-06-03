


$(function(){
	$(".te1").show();
	$(".biao1").click(function(){

	$(".te1").show();
	$(".te").hide()
 
})
	
	
	$(".biao2").click(function(){
	
	$(".te1").hide();
	$(".te").show()
	})
	
	
	
	
	
	
	
	
	
	
	
			

									
									
		   var $y=$("#dan").find("input:not(:last)");
				$(".k3").on("click",function(){
					if($y.eq(0).val().length ==0){
						$(".shou-3").show();
						setTimeout(function(){
							$(".shou-3").hide();
						},3000)
						return;
					
							}
					$.post("http://127.0.0.1/erjieduan/myu/php/denglu.php",{"tel":$y.eq(0).val(),"pos":$y.eq(1).val()},function(data){		
						     if(data==1){								
							 $(".shou-1").show();
								}else{
							location.href="../index/pin/index-head.html"
						      
					           }		
					
					})

				})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})













//$(".biao2").click(function(){
//	$(".te").css("display","block")
//	$(".te").css("display","none")
//})