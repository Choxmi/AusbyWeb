<?php
$servername = "localhost";
$username = "id2742537_choxmi";
$password = "sat0779729257";
$dbname = "id2742537_choxdb";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>