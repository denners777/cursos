<?php

try{

	$conn = new \PDO('mysql:host=localhost;dbname=test_oo', 'root', '');

	//$query = "SELECT * FROM produtos WHERE id = 1";
	$query = "SELECT * FROM produtos ORDER BY id DESC";
	$stmt = $conn->query($query);
	$list = $stmt->fetch(PDO::FETCH_ASSOC);
	echo $list['name'];

	$list = $stmt->fetch(PDO::FETCH_OBJ);
	echo $list->name;
	

}catch(\PDOException $e){
  	
  	echo 'Erro! Message: ' . $e->getMessage() . ' Code: ' . $e->getCode();
  	
}