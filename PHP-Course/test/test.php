<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= "Ok"; ?></title>
</head>
<body>
  <?php
    echo date(DATE_RSS);
  ?>
  <br>
  <?php
    echo date(DATE_RSS);
  ?>

  <?php
  if(mt_rand(0, 1)) {
    ?>
    <div style="color: blue">Синний текст</div>
    <?php
  } else {
    ?>
    <div style="color: red">Красный цвет</div>
    <?php
  }

  $asd_asd = 5;
  echo $asd_asd - 2;

  $asd = $var = $num = 3;
  // Integer
  $num = 1234;
  $num = -12;
  $num = 012;
  $num = 0x12A;

  $var = 1.23456e-3;

  $bool = true;
  $bool = false;

  $var = 5;
  $str = "Hello World! $var";
  echo `dir`;

  $num = 23;
  $f = (float)($num/2) - (int)($num/2);
  if($f) {
    echo 'Число нечётное';
  } else {
    echo 'Число чётное';
  }


  define('NUMBER', 1, true);
  echo NUMBER;

  echo 'Имя файла ' . __FILE__ . '<br>';
  echo 'Строка ' . __LINE__ . '<br>';
  // echo 'Путь к файлу ' . __DIR__ . '<br>';

  require_once __DIR__ . '/../point.php';

  // $x = -450;
  // $x = $x < 0 ? -$x : $x;
  // echo $x;

  $n = 0;
  finish:
  $z = 5;
  $z = $y ?? 1;
  echo $y;
  $n++;
  if($n > 6) {
    goto end;
  }

  goto finish;
  end:

  switch($char) {
    case 'php':
        ?>
        <h1>Язык PHP</h1>
        <?php
        break;
    case 'js':
        ?>
        <h1>Язык JavaScript</h1>
        <?php
        break;
    case 'c#':
        ?>
        <h1>Язык C#</h1>
        <?php
        break;
    default:
        ?>
        <h1>C++</h1>
        <?php
  }
  // $homepage = file_get_contents('text.txt');
  // $homepage .= 'Ещё одна строка';
  // file_put_contents('text2.txt', $homepage);

    // $i = 1;

    // while($i <= 5) {
    //   echo "$i<br>";
    //   $i++;
    // };

    // $i = 0;

    // do {
    //   echo "$i<br>";
    // } while (++$i <= 5);


    // for ($i = 0; $i < 5; $i++) {
    //   echo "$i<br>";
    // }

    // $arr = array('Hello', 'world', '!');
    // echo $arr[1];
    // echo '<pre>';
    // print_r($arr);
    // echo '</pre>';

    // $arr = [15 => 'Hello', 'World', '!'];

    // $arr[10] = 'Hello';
    // $arr[1] = 'World';

    // $var = 'Hello World!';
    // $arr = (array) $var;

    // $arr = ['one'=>'1', 'two'=>'2'];
    // echo '<pre>';
    // print_r($arr);
    // echo '</pre>';

    // echo $arr['one'];

    // $arr['one'] = '1';
    // $arr['two'] = '2';
    // $arr['two'] = '3';

    // $transport = [
    //   'Авто' => ['Лада', 'Chevrolet', 'Dodge'],
    //   'Самолёты' => ['Ил-2', 'И-16', 'Мессершмидт']
    // ];

    // echo $transport['Самолёты'][2];

    // $arr['one'] = 14;
    // echo "Текст $arr[one] и ещё текст";

    // $arr[0][0] = 16;
    // echo "Текст {$arr[0][0]} и ещё текст";

    // $arr[0][0] = 16;
    // echo "Текст . $arr[0][0] . и ещё текст";


    // $arr = [1, 2, 3];
    // list(, $two, $three) = $arr;


  ?>
</body>
</html>