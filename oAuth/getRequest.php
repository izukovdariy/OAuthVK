<?php
$uids = $_GET['uids'];
$fields = $_GET['fields'];
$access_token = $_GET['access_token'];
$v = $_GET['v'];
$href = 'https://api.vk.com/method/users.get?uids='.$uids.'&fields='.$fields.'&access_token='.$access_token.'&v='.$v;
$ch = file_get_contents($href);
$answer = json_decode($ch,true);
echo $answer['response'][0]['first_name'].' '.$answer['response'][0]['last_name'];
