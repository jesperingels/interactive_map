<?php
try {
$db = new PDO('mysql:host=localhost;dbname=pid1617;charset=utf8','root','');

}
catch(PDOException $e) {
echo $e->getMessage();
}