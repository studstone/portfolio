<?php
header("Access-Control-Allow-Origin: *");
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

use PHPMailer\PHPMailer\Exception;

require 'config.php';
require 'functions.php';

global $mail, $SITE_URL;

$postData = file_get_contents('php://input');

if (!empty($postData)) {


    $data = json_decode($postData, true);

    $name = htmlspecialchars(strip_tags($data['name']));
    $email = htmlspecialchars(strip_tags($data['email']));
    $phone = htmlspecialchars(strip_tags($data['phone']));

    if (USE_TELEGRAM && !file_exists('user_id.php')) {
        $result = 0;
        $status = "Сообщение не было отправлено. Причина ошибки: форма не настроена, обратитесь к администратору";
    }

    if (!isset($result))
        if (USE_TELEGRAM) {


            $user = require 'user_id.php';

            try {

                $data = sendMessage($user, "<b>Письмо с сайта {$SITE_URL}</b>
<b>Имя:</b> $name
<b>Почта:</b> $email
<b>Телефон:</b>$phone");

                if (isset($data['ok']) && $data['ok']) {
                    $result = 1;
                    $status = null;
                } else
                    throw new \Exception(json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));

            } catch (\Exception $e) {
                $result = 0;
                $status = "Сообщение не было отправлено. Причина ошибки: {$e}";
            }


        } else {

            try {

                //Recipients
                $mail->setFrom('c4rter.djon@yandex.ru', 'djon carter');
                $mail->addAddress('IgorVoinash@yandex.ru', 'Joe User');

                $mail->isHTML(true);


// Формирование самого письма
                $mail->Subject = 'Письмо с сайта ' . $SITE_URL;
                $mail->Body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b>$phone
<b>Почта:</b> $email<br>
";

                if ($mail->send()) {
                    $result = 0;
                } else {
                    $result = 1;
                    $status = $mail->ErrorInfo;
                }
            } catch (Exception $e) {
                $result = 0;
                $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
            }
        }

} else {
    $result = false;
    $status = "No data in request";
}

echo json_encode(["sent" => $result, "message" => $status], JSON_UNESCAPED_UNICODE);


