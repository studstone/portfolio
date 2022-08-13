<?php
//Использовать TELEGRAM или почту?
const USE_TELEGRAM = true;

//Кодовое слово для изменения чата в который отправлять сообщения
const CODE_WORD = "PiniPapini";

if (isset($_SERVER['HTTPS']) &&
    ($_SERVER['HTTPS'] == 'on' || $_SERVER['HTTPS'] == 1) ||
    isset($_SERVER['HTTP_X_FORWARDED_PROTO']) &&
    $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https') {
    $protocol = 'https://';
} else {
    $protocol = 'http://';
}

//Выберите протокол по которому работает сайт
$SITE_URL = $protocol . "{$_SERVER['HTTP_HOST']}";

//Токен бота
const TELEGRAM_BOT_TOKEN = '5493122998:AAGcdIzmvwvonwuYOBD6nKsrMXVnhBPRD8M';