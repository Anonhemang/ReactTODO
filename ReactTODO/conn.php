<?php
$conn = mysqli_connect("localhost", "root",  "", "wishlist");

if($conn){
    // echo "Connected";
}else{
    echo "Connection Under Process";

}