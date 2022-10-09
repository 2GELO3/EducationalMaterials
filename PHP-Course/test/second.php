<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Second</title>
</head>
<body>
<?php
      // $number = ['1', '2', '3'];
      // for ($i = 0; $i < count($number); $i++) {
      //   echo "$number[$i] <br>";
      // }

      // $arr = [
      //   'auto' => 'Dodge',
      //   'plane' => 'IL-2',
      //   'ship' => 'Black Pearl'
      // ];
      // foreach($arr as $i => $v) {
      //   echo "$i : $v <br>";
      // }

      // foreach($arr as $v) {
      //   echo "$v <br>";
      // }

      // $transport = [
      //   'Auto' => ['Lada', 'Chevrolet', 'Dodge'],
      //   'Корабли' => ['Авианосец', 'Фрегат', 'Эсминец']
      // ];

      // foreach($transport as $key => $array) {
      //   echo "<b>$key</b><br>";
      //   foreach($array as $value) {
      //     echo "<li>$value</li>";
      //   }
      // }

      // foreach($transport as $key => $array) {
      //   echo "<b>$key</b><br>";
      //   for($i = 0; $i < count($array); $i++) {
      //     echo "<li>$array[$i]</li>";
      //   }
      // }

        // $first = [1=>'red', 2=>'blue'];
        // $second = [3=>'brown', 4=>'green'];

        // $first = ['red', 'blue'];
        // $second = ['brown', 'green'];
        // $con = array_merge($first, $second);
        // echo '<pre>';
        // print_r($con);
        // echo '</pre>';

        // $array = ['red', 'green', 'blue', 'violet', 'gray'];
        // echo $array[rand(0, count($array)-1)];

        // $length = rand(5, 10);
        // $array = [];

        // for ($i = 0; $i < $length; $i++) {
        //   $array[$i] = rand(0, 100);
        // }

        // sort($array);

        // echo '<pre>';
        // print_r($array);
        // echo '</pre>';

        // $array = file('month.txt');
        // echo '<pre>';
        // print_r($array);
        // echo '</pre>';

      //   function myFunction() {
      //     $sum = 20 + 4;
      //     return $sum;
      //   }

      // echo myFunction();

      // function myFunction(int $a, int $b) : int {
      //   return $a + $b;
      // }

      // echo myFunction(2, 3);

      // function sum(&$a) {
      //   $a += 10;
      //   return $a;
      // }
      // $b = 10;
      // echo sum($b);
      // echo '<br>';
      // echo $b;

      // function sum($b, $a = 10) {
      //   return $a + $b;
      // }

      // echo sum(10);

      // function sum() {
      //   global $var;
      //   $var = 2;
      //   return $var;
      // }

      // $var = 6;
      // echo sum();
      // echo "<br> $var";

      // function sum() {
      //   static $count = 0;
      //   return ++$count;
      // }
      // echo sum() . "<br>";
      // echo sum() . "<br>";
      // echo sum() . "<br>";
      // echo sum() . "<br>";

      // function formatSize($bytes) {
      //   $kbytes = $bytes / 1024;
      //   $mbytes = $kbytes / 1024;
      //   $gbytes = $mbytes / 1024;
      //   return [$bytes, $kbytes, $mbytes, $gbytes];
      // }

      // echo '<pre>';
      // print_r(formatSize(54989777));
      // echo '</pre>';

      // list($bytes, $kbytes, $mbytes, $gbytes) = formatSize(54989777);

      // function recursiya($counter) {
      //   if ($counter > 0) {
      //     echo ($counter--) . "<br>";
      //     recursiya($counter);
      //   } else return;
      // }

      // recursiya(8);

      // function outter() {
      //   function inner() {
      //     return "Hello World";
      //   }
      // }
      // outter();
      // echo inner();

      // function first() {
      //   return 'First function';
      // }

      // function second() {
      //   return 'Second function';
      // }

      // $newFunction = rand(0, 1) ? 'first' : 'second';

      // echo $newFunction();

      // class Point {
      //   public $x;
      //   public $y;
      // }

      // $fst = new Point;
      // $fst->x = 12;
      // $fst->y = 5;

      // $snd = new Point;
      // $snd->x = 1;
      // $snd->y = 1;

      // $thd = new Point;
      // $thd->x = 4;
      // $thd->y = 3;

      // $arr = [$fst, $snd, $thd];

      // usort($arr, function($a, $b) {
      //   $dist_a = sqrt($a -> x**2 + $a -> y**2);
      //   $dist_b = sqrt($b -> x**2 + $b -> y**2);
      //   return $dist_a <=> $dist_b;
      // });


      // echo '<pre>';
      // print_r($arr);
      // echo '</pre>';

      // $message = "Текстовое сообщение";
      // $mFu = function() use ($message) {
      //   $message = "New";
      //   return $message;
      // };


      // function odd(int $number) {
      //   if ($number % 2 == 0) {
      //     return false;
      //   } else {
      //     return true;
      //   }
      // }

      // echo odd(5);

      // $sum = 0;

      // function sum(...$items) {
      //   for ($i = 0; $i < count($items); $i++) {
      //     $sum += $items[$i];
      //   }
      //   return $sum;
      // }
      // echo sum(10, 5, 2, 3, 1);

      // $str = "Hello world";
      // // echo $str[0];
      // echo mb_strlen($str);
      // // echo "\u(0410)";

      // $str = "Hello";
      // chr(36);
      // ord("$");

      // $date = '01.01.2021';
      // echo 'день' . substr($date, 0, 2) . '<br>';
      // echo 'месяц' . substr($date, 3, 2) . '<br>';
      // echo 'год' . substr($date, 6) . '<br>';

      // $date = 'Hello World';
      // // echo strpos($date, 'world');
      // echo substr($str, strpos($str, 'интер'));

      // $str = 'PHP - [b]интерпретируемый[/b] язык, а это [b]жирный текст[/b]';
      // $str = str_replace('[b]', '<b>', $str);
      // $str = str_replace('[/b]', '</b>', $str);

      // $str = str_replace(['[b]', '[/b]'], ['', ''], $str, $number);

      // echo "Осуществлено замен: " . $number;
      // echo $str;

      // $str = '  Hello, World!  ';
      // echo strlen($str);
      // echo '<br>';
      // echo strlen(trim($str));


      // $str = "text\nhello\nphp";
      // echo $str;
      // echo '<br><br>';
      // echo nl2br($str);

?>


</body>
</html>