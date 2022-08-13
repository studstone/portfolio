<?php
require 'config.php';
require 'functions.php';
require 'vendor/autoload.php';

global $SITE_URL;

if (isset($_GET['action'])) {
    switch ($_GET['action']) {

        case 'setcallback':

            $path_to_this_file = strtr($_SERVER['REQUEST_URI'], ['?action=setcallback' => '']);
            exit(json_encode(setWebhook([
                'url' => $SITE_URL . "{$path_to_this_file}"
            ]), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));

        case 'clearcallback':
            exit(json_encode(setWebhook([
                'url' => ''
            ]), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));

        case 'getwebhookinfo':
            exit(json_encode(getWebhookInfo(), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
    }
} else {
    $postData = file_get_contents('php://input');

    $request = json_decode($postData, true);

    //   if (!isset($request['message']['chat']['id']))
    //     exit('FAIL');

    $user = $request['message']['chat']['id'];

    if (strpos($request['message']['text'], CODE_WORD) !== false) {
        $message = "Привет! Теперь вы будете получать уведомления тут!";

        file_put_contents('user_id.php', '<?php return "' . $user . '";');

        sendMessage($request['message']['chat']['id'], $message);
    } else {

    sendMessage($request['message']['chat']['id'], 'Я работаю!');

	}
	
    exit('OK');
}


