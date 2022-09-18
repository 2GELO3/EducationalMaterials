<?php

if (!empty($_POST)) {
  if (empty($_POST['name'])) {
    $errors[] = 'Поле name пустое';
  }

  if (empty($_POST['age'])) {
    $errors[] = 'Поле age пустое';
  } elseif (!is_numeric($_POST["age"])) {
    $errors[] = 'Поле age содержит не цифры';
  }

  if (!empty($errors)) {
    foreach ($errors as $err) {
      echo "<strong>$err</strong><br>";
    }
  } else {
    echo '<pre>';
    print_r($_POST);
    echo '<pre>';
  }
} 

?>