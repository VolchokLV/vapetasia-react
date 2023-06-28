<?php

// Set header to accept POST request
header('Content-type: application/x-www-form-urlencoded');

// Retrieve POST data
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$cname = $_POST['cname'];
$email = $_POST['email'];
$payment_token = $_POST['payment_token'];

// Set the URL for the request
$url = "https://secure.transactiongateway.com/api/transact.php";

// Set the POST variables
$vars = "security_key=SEr8562hkRXf36Z2Z896f53P8qd5xW2T" . "&type=sale" . "&amount=35.00" . "&first_name=" . $fname . "&last_name=" . $lname . "&email=" . $email ."&payment_token=" . $payment_token;

// Initialize cURL session
$ch = curl_init($url);

// Set cURL options
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $vars);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_HEADER, 0);  // DO NOT RETURN HTTP HEADERS
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);  // RETURN THE CONTENTS OF THE CALL

// Execute cURL request and close the connection
$response = curl_exec($ch);
curl_close($ch);

// Handle the response as required by your application
// ...
?>
