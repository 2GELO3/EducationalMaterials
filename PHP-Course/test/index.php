<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- <link rel="stylesheet" href="style.css"> -->
  <title>Главная</title>
</head>
<body>
  <?php
    // echo 'Главный скрипт <br>';
    // require 'second.php';
    // require 'point.php';

    // $str = '<p>Обычный текст</p><br>
    //         <br>Жирный текст</br>';
    // echo htmlspecialchars(strip_tags($str));

    // $number = 5867;
    // printf('Двоичное число: %b<br />', $number);
    // printf('Десятичное число: %d<br />', $number);
    // printf('Число с плавающей точкой: %f <br / >', $number);
    // printf('Восьмеричное число: %o<br />', $number);
    // printf('Строковое представление: %s <br />', $number);
    // printf('Шестнадцатеричное число (нижний регистр): %x<br / >', $number);
    // printf('Шестнадцатеричное число (верхний регистр): %X<br / >', $number);

    // $red = 255;
    // $green = 255;
    // $blue = 100;
    // printf('#%X%X%X', $red, $green, $blue);

    // $arr = [
    //   'name' => 'Petr',
    //   'phones' => [
    //     '888',
    //     '777'
    //   ]
    //   ];

    //   $encodeArr = json_encode($arr);
    //   echo $encodeArr;
    //   echo '<pre>';
    //   print_r(json_decode($encodeArr, true));
    //   echo '<pre>';


    // if (!empty($_GET['first']) && !empty($_GET['second'])) {
    //   echo '</pre>';
    //   print_r($_GET);
    //   echo '</pre>';
    // } else {
    //   exit('Текстовые поля не заполнены');
    // }

      // $errors = [];
      // if (!empty($_POST)) {
      //   if (empty($_POST['first'])) {
      //     $errors[] = 'Текстовое поле не заполнено';
      //   }
      //   if (empty($errors)) {
      //     echo htmlspecialchars($_POST['first']);
      //     exit();
      //   }
      // }
      // if (!empty($errors)) {
      //   foreach($errors as $err) {
      //     echo "<span style='color:red>$err</span><br>";
      //   }
      // }


  ?>

  <!-- <form action="sandmail.php" method="POST">
    <select name="subject">
      <option disabled selected>Тема письма</option>
      <option value="1">Вопрос по уроку</option>
      <option value="2">Личный вопрос</option>
      <option value="3">Благодарность</option>
    </select>
      <input type="email" name="email" placeholder="Введите ваш email" maxlength="50" required>
      <textarea name="message" placeholder="Введите сообщение" maxlength="150" required></textarea>
      <img src="capcha1.jpg">
      <input type="number" name="capcha" placeholder="Введите ответ" maxlength="3" required>
      <input type="submit" value="Отправить письмо">
  </form> -->

  <!-- <form action="radio.php" method="POST">
    <input type="radio" name="mark" value="1">1<br>
    <input type="radio" name="mark" value="2">2<br>
    <input type="radio" name="mark" value="3">3<br>
    <input type="radio" name="mark" value="4">4<br>
    <input type="radio" name="mark" value="5">5<br>
    <input type="submit" value="Отправить">
  </form>

  <form action="checkbox.php" method="POST">
    <input type="checkbox" name="html" checked>Я знаком с HTML<br>
    <input type="checkbox" name="css" checked>Я знаком с CSS<br>
    <input type="checkbox" name="js" checked>Я знаком с JS<br>
    <input type="checkbox" name="php" checked>Я знаком с PHP<br>
    <input type="submit" value="Отправить">
  </form>

  <form action="select.php" method="POST">
      <select name="fst[]" multiple size="3">
        <option value="1" selected>Первый пункт</option>
        <option value="2" selected>Второй пункт</option>
        <option value="3" selected>Третий пункт</option>
      </select>
      <br>
      <select name="snd">
        <option value="one" selected>Первый пункт</option>
        <option value="two" selected>Второй пункт</option>
        <option value="three" selected>Третий пункт</option>
      </select>
      <br>
      <input type="submit" value="Отправить">
  </form> -->


  <!-- <form method="POST">
    <input type="text" name="first" value="
    <?php
      htmlspecialchars($_POST['first'], ENT_QUOTES);
    ?>"><br>
    <input type="submit" value ="Отправить">
  </form> -->



  <!-- <form method="GET">
    <input type="text" name="first"><br>
    <input type="text" name="second"><br>
    <input type="submit" value="Отправить">
  </form> -->

  <!-- <form action="handler.php" method="post">
    Message: <br>
    <textarea name="msg" cols="50" rows="5"></textarea><br>
    <input type="submit" value="Add">
  </form> -->
</body>
</html>