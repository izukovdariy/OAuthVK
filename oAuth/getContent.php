<?php
$client_id = $_GET['client_id'];
$client_secret = $_GET['client_secret'];
$redirect_uri = $_GET['redirect_uri'];
$code = $_GET['code'];
$href = 'https://oauth.vk.com/access_token?client_id='.$client_id.'&client_secret='.$client_secret.'&redirect_uri='.$redirect_uri.'&code='.$code;
$ch = file_get_contents($href);
$answer = json_decode($ch,true);
echo $answer['access_token'] . ' ' . $answer['expires_in'] . ' ' . $answer['user_id'];
