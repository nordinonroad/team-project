<?php
echo 'Вебхук создан и готов к работе!' . '<br>';
//DEBUG METHOD
$DEBUG = true;
/**
 * void object2file - функция записи объекта в файл
 *
 * @param mixed value - объект, массив и т.д.
 * @param string filename - имя файла куда будет произведена запись данных
 * @return void
 *
 */
function object2file($value, $filename)
{
	$str_value = serialize($value);
	
	$f = fopen($filename, 'w');
	fwrite($f, $str_value);
	fclose($f);
}
/**
 * mixed object_from_file - функция восстановления данных объекта из файла
 *
 * @param string filename - имя файла откуда будет производиться восстановление данных
 * @return mixed
 *
 */
function object_from_file($filename)
{
	$file = file_get_contents($filename);
	$value = unserialize($file);
	return $value;
}

$data[] = null;

//Подготовим массив
foreach($_POST as $key => $value) {
    $data[$key] = $value;
} 
object2file($_POST, 'debug_api.txt');
if ($_POST){
    //артикулы товаров
    //API AREA
    $i=0;
    foreach ($data['payment']['products'] as $value){
        $product[$i] = preg_replace("/[^0-9]/", '', $value['sku']);
        $i++; 
    }
    //количество товаров
    $i=0;
    foreach ($data['payment']['products'] as $value){
        $product_kol[$i] = $value['quantity'];
        $i++; 
    }
                
    //детали заказа в кодировке utf-8
    $param['secret'] = "";				//ключ api
    $param['phone'] = preg_replace("/[^0-9]/", '', $data['telephone']);		//телефон
    $param['name']	= urlencode($data['name']); 		//имя клиента
    if ($data['type_dostavka'] == 'Доставка'){
        $param['street']  = urlencode($data['address_arrive']);	
        $param['descr']	= urlencode('Желаемое время доставки: ' . $data['time_arrive']); 	//комментарий
    }else{
        $param['descr']	= urlencode('Самовывоз'); 
    }
    if ($data['type_payment'] == 'Наличные'){
        $param['pay'] = 1;
    }else{
        $param['pay'] = 2;
    }
    $tags = false;

    //подготовка запроса				
    foreach ($param as $key => $value) { 
        $data .= "&".$key."=".$value;
    }

    if($tags) {
        foreach ($tags as $key => $value){
                $data .= "&tags[".$key."]=".$value."";
        }
    }

    
    //содержимое заказа
    foreach ($product as $key => $value){ 
    $data .= "&product[".$key."]=".$value."";
    $data .= "&product_kol[".$key."]=".$product_kol[$key].""; 
    if(isset($product_mod[$key])) { 
    $data .= "&product_mod[".$key."]=".$product_mod[$key].""; 
    } 
    } 

    //отправка
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://app.frontpad.ru/api/index.php?new_order");
    curl_setopt($ch, CURLOPT_FAILONERROR, 1);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    $result = curl_exec($ch);
    curl_close($ch);
    //результат
    echo $result;
    // запишем массив в файл
    object2file($data, 'debug_api.txt');
}
if ($DEBUG){
    echo '<b>Вывод файла DEBUG_API.TXT</b> <br>';
    echo '<pre>';
    print_r(object_from_file('debug_api.txt'));
    echo '</pre>';
}
?>