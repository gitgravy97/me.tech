<?php
// For now, keep it to the sender, mccoyd22 email, and hosting-service admin email
// For some reason it won't come through to mcshaned@umich.edu
$to = "mccoyd22@gmail.com, admin@mccoy-doherty.tech, ";
$to .= $_POST["_replyto"];
$subject = "Contact Form Copy - McCoy-Doherty.tech";

$message =  "<p>Hello, " . $_POST["name"] . ",</p>";
$message .= "<p>Thanks for reaching out!</p>";
$message .= "<p>I'll be informed that you are interested in establishing contact and can be reached at:</p>";
$message .= "<p>&emsp;&emsp;" . $_POST["_replyto"] . "</p>";
$message .= "<p>and will be passed along your message:</p><p>&emsp;&emsp;" . $_POST["purpose"] . "</p>";
$message .= "<p>A copy of this message will be emailed to you for your records.</p>";

// These two lines required for sending HTML Emails
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

// Line required to be a DreamHost-hosted, admin-accessible email
$headers .= '<p>From: admin@mccoy-doherty.tech</p>' . "\r\n";

// Mails one copy
mail($to,$subject,$message,$headers);

// Prints one copy to screen
echo $message;
//echo "Sending copies to:";
//echo $to;

echo '<p>&emsp;&emsp;<a href="/../p5_contact.html">Return to Contacts Page</a></p>';
?>