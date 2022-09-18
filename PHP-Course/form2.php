<?php
// Загрузка файлов на сервер и их последующая обработка 

// Размер в байтах
// 1Kb = 1024b and 1Mb = 1024Kb // 2 * 1024 * 1024

// echo $_FILES['filename']['size'] . "<br>";
// echo $_FILES['filename']['name'] . "<br>";
// echo $_FILES['filename']['tmp_name'];

// if (move_uploaded_file($_FILES['filename']['tmp_name'], 'tpm/'.$_FILES['filename']['name'])) {
//   echo 'Файл скопирован на сервер';
// } else {
//   echo 'Файл не скопирован на сервер';
// }

if (move_uploaded_file($_FILES['filename']['tmp_name'], 'tpm/'.$_FILES['filename']['name'])) {

  // Ограничиваем размер файла

  if ($_FILES['filename']['size'] > 2 * 1024 * 1024) {
    exit();
  } else {
      echo 'Файл скопирован на сервер <br>';
      echo 'Характеристики нашего файла:<br>';
      echo 'Имя файла: ';
      echo $_FILES['filename']['name'] . "<br>";
      echo 'Размер файла: ';
      echo $_FILES['filename']['size'] . "<br>";
      echo 'Тип файла: ';
      echo $_FILES['filename']['type'] . "<br>";
  }
} 



?>