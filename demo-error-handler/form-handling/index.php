<?php

use PHPMailer\PHPMailer\PHPMailer;

require 'vendor/autoload.php';

$nameError = $emailError = $phoneError = "";

if($_SERVER["REQUEST_METHOD"] === "POST"){

    $name = isset($_POST['user_name']) ? $_POST['user_name'] : "";
    $email = isset($_POST['email']) ? $_POST['email'] : "";
    $phone = isset($_POST['phone']) ? $_POST['phone'] : "";

    if(empty($name)){
        $nameError = "The user name field is required.";
    }

    if(empty($email)){
        $emailError = "The email field is required.";
    }

    if(empty($phone)){
        $phoneError = "The phone number field is required.";
    }


    if(empty($nameError) && empty($emailError) && empty($phoneError)){

        $mail = new PHPMailer();
        $mail->IsSMTP();
        $mail->Mailer = "smtp";
        $mail->SMTPDebug = 0;
        $mail->SMTPAuth = TRUE;
        $mail->SMTPSecure = "TLS";
        $mail->Port = 587;
        $mail->Host = "smtp.gmail.com";
        $mail->Username = "leads@quadlabs.co";
        $mail->Password = "ttnmazgjrbwguilh";


        $mail->IsHTML(true);

        $mail->AddAddress("khizer@quadlabs.co", "Khizer");

        $mail->AddCC("faeez.hussain@quadlab.coo", "Faeez");

        $mail->Subject = "Premium Content Writers - Website Lead Form";

        $content = "From: $name \n Email: $email \n Phone: $phone";

        if (isset($_POST['description'])) {
            $message = $_POST['description'];
            $content.="\n Message: $message";
        }


        $mail->MsgHTML($content);


        if($mail->Send()){

            header('Location: https://premiumcontentwriters.co.uk/thankyou.php');
            exit;
        }
    }
}

