<?php
session_start();
include("connect.php");
$vissza = $kapcsolat->query("SELECT * FROM userek WHERE email='" . $_POST["email"] . "' AND jelszo='" . md5($_POST["jelszo"]) . "'");

if (mysqli_num_rows($vissza)) {
    print("Sikeres!");
} else {
    print("Sikertelen!");
}
