<?php
function sendMessage($chatID, $message, $parse_mode = 'HTML')
{
    $data = [
        'text' => $message,
        'chat_id' => $chatID,
        'parse_mode' => $parse_mode
    ];


    $ch = curl_init();
    curl_setopt_array(
        $ch,
        array(
            CURLOPT_URL => 'https://api.telegram.org/bot' . TELEGRAM_BOT_TOKEN . '/sendMessage',
            CURLOPT_POST => TRUE,
            CURLOPT_RETURNTRANSFER => TRUE,
            CURLOPT_TIMEOUT => 10,
            CURLOPT_POSTFIELDS => $data,
        )
    );


    return json_decode(curl_exec($ch), true);
}

function setWebhook($data)
{
    return json_decode(file_get_contents("https://api.telegram.org/bot" . TELEGRAM_BOT_TOKEN . "/setWebhook?" . http_build_query($data)), true);
}

function getWebhookInfo($data = [])
{
    return json_decode(file_get_contents("https://api.telegram.org/bot" . TELEGRAM_BOT_TOKEN . "/getWebhookInfo?" . http_build_query($data)), true);
}