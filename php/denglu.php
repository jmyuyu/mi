<?php
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin:*");
$tel=$_POST["tel"];
$pos=$_POST["pos"];

$conn =new mysqli("","root");
$conn->select_db("stu");
$sql="select * from zhuce where tel = '$tel'";
$sql="select * from zhuce where pos = '$pos'";
$result=$conn->query($sql);
if($result->num_rows == 0){
	echo "1";
}else{
	echo "0";
}
?>