<?php

$recepient = "silver4445@yandex.ru";
$sitename = "silver-company.ru"; 
if (!empty($_POST["name"]) && !empty($_POST["phone"])){
    $name = trim($_POST["name"]);
    $phone = trim($_POST["phone"]); 
    $text = trim($_POST["text"]); 
    $message = "Имя: $name \nТелефон: $phone \nВопрос: $text"; 
    
    $pagetitle = "Новая заявка с сайта \"$sitename\" от \"$name \""; 
    
    mail($recepient, $pagetitle, $message, "From: noreply@silver-company.ru\nContent-type: text/plain; charset=\"utf-8\"\n From: $recepient"); 
}else{
    return;
}