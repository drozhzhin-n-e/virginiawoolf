<?php

session_start();
if(isSet($_GET['lang'])){
    $lang = $_GET['lang'];
    // register the session and set the cookie
    $_SESSION['lang'] = $lang;
    setcookie("lang", $lang, time() + (3600 * 24 * 30));
}
else if(isSet($_SESSION['lang'])){
    $lang = $_SESSION['lang'];
}
else if(isSet($_COOKIE['lang'])){
    $lang = $_COOKIE['lang'];
}
else {
    $lang = 'en';
}
switch ($lang) {
    case 'en':
    // English
    $lang_file = 'lang.en.php';
    break;
    case 'ru':
    // Russian
    $lang_file = 'lang.ru.php';
    break;
    // Default English
    default:
    $lang_file = 'lang.en.php';
}

// Screen width
if (isset($_POST['width'])) {
    $windowWidth = $_POST['width'];
}

include_once 'languages/'.$lang_file;

?>