<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

include('conn.php');

// Check database connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// GET Data From DATABASE 
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM `todolist`";
    $result = mysqli_query($conn, $sql);
    $list = array();

    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $list[] = $row;
        }
        echo json_encode($list);
    } else {
        echo json_encode(array("message" => "No List found"));
    }
}

// POST Data into DATABASE
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $title = $data['title'];
    $description = $data['description'];
    $status = $data['status'];
    $important = $data['important'];

    $sql = "INSERT INTO `todolist` (`title`, `description`,`status`, `important`) VALUES ('$title', '$description', '$status', '$important')";
    $result = mysqli_query($conn, $sql);
    if ($result) {
        echo json_encode(array("message" => "Data Inserted Successfully"));
    } else {
        echo json_encode(array("message" => "Data Not Inserted"));
    }
}

// UPDATE Data into DATABASE
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $data = json_decode(file_get_contents('php://input'), true);
    $id = $data['id'];
    $title = $data['title'];
    $description = $data['description'];
    $status = $data['status'];
    $important = $data['important'];

    $sql = "UPDATE `todolist` SET `title`='$title', `description`='$description', `status`='$status', `important`='$important' WHERE `id`='$id'";
    $result = mysqli_query($conn, $sql);
    if ($result) {
        echo json_encode(array("message" => "Data Updated Successfully"));
    } else {
        echo json_encode(array("message" => "Data Not Updated"));
    }
}

// DELETE Data from DATABASE
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $id = $_GET['id']; // Use this for query parameter ID
    $sql = "DELETE FROM `todolist` WHERE `id`='$id'";
    $result = mysqli_query($conn, $sql);
    if ($result) {
        echo json_encode(array("message" => "Data Deleted Successfully"));
    } else {
        echo json_encode(array("message" => "Data Not Deleted"));
    }
}
?>