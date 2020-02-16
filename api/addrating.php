<?php
    include 'DBConnection.php';
	$baseURL ="https://choxcreations.000webhostapp.com/Dropsworld/";
	$root = filter_input(INPUT_SERVER, 'DOCUMENT_ROOT');
	$time = date("Y-m-d h:i:sa");
	$sql="";
	
	if(!empty($_POST['type'])){
		$type = $_POST['type'];
		
		if($type=="1"){ //ratings
            
		}
		
		if ($conn->query($sql) === TRUE) {
			echo 200;
		} else {
			echo "Error: " . $sql . "<br>" . $conn->error;
		}
	}else{
		echo 'Type not defined';
	}
    $conn->close();
?>