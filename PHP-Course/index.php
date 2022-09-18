<?php
// $str1 = "I learn a ";
// $str2 = " PHP ";
// $num = 123;

// $str = $str1 . $str2 . $num;
// echo $str;

// I would like become developer

// echo 5 % 3

// $number = 5353;

// if ($number % 2) {
//   echo "Число не чётное";
// } else {
//   echo "Число чётное";
// }


// $what = "Good";
// $who = "Greate";
// $which = "Grace";

// $question = $what . $who . $which;

// echo $question;

// $num1 = 11;
// $num2 = 22;

// $num1 .= $num2;
// echo $num1;

// $str1 = "Скоро, ";
// $str2 = "я, ";
// $str3 = "буду, ";
// $str4 = "знать, ";
// $str5 = "php, ";
// echo $str1, $str2, $str3, $str4, $str5;

// $number = 122;

// if ($number % 2 == 0) {
//   $number += 10;
//   echo "Число в переменной: $number чётное";
// } else{
//   echo "Число в переменной: $number не чётное";
// }

// $var1 = 1;
// $var2 = 11;
// echo ++$var1;
// echo "<br>";
// echo $var2++;

// $abc = "bbb";
// echo ++$abc;

// $number1 = 123;
// $number2 = 321;
// $str1 = "some text";
// $str2 = "some text";

// var_dump($number1 > $number2);
// var_dump($number1 < $number2);

// var_dump(0 === 0);
// var_dump(0 == '');
// var_dump(0 == null);

// $flag = false;



// if ($flag) {
//   echo "Переменная flag имеет значение true";
// } else {
//   echo "Переменная flag имеет значение false";
// }

// $mob = 2;
// if ($mob == 1) {
//   echo "Нужно ещё телефон";
// } elseif($mob == 2) {
//   echo "Два телефона это классно";
// } elseif($mob == 2 || $mob > 1) {
//   echo "Я мажёр";
// } else {
//   echo "Нищебродина";
// }


// $flag1 = true;
// $flag2 = true;

// if ($flag1 && $flag2) {
//   echo "<p>WHAT?</p>";
// } elseif($flag1 || $flag2) {
//   echo "<h1>ИДЁШЬ ГУЛЯТЬ</h1>";
// } else {
//   echo "Ты обоссался сынуля";
// }


// if ($flag1) {
//   if ($flag2) {
//     echo "<p>WHAT?</p>";
//   }
// }


// if ($flag1 || $flag2) {
//   echo "<h1>ИДЁШЬ ГУЛЯТЬ</h1>";
// } else {
//   echo "Ты обоссался сынуля";
// }

// ($content = file_get_contents("PHP-Course/file.txt")) || exit('Error');

// if (file_get_contents("D:/PHP-Course/file.txt")) {
//   $content = file_get_contents("D:/PHP-Course/file.txt");
// }
// echo $content;

// $x = 0;

// $x = $x > 0 ? ++$x : --$x;

// echo $x


// Home work

// $content = "Hello World";

// Записывает строку в файл;

// file_put_contents("D:/PHP-Course/file.txt", $content);


// Вывод содержимого в файле

// echo file_get_contents("D:/PHP-Course/file.txt");

// $num1 = 12;
// $num2 = 13;
// $num3 = 14;

// if ($num1 > $num2) {
//   $num1 == $num3;
// } elseif ($num1 < $num2) {
//   $num2 == $num3;
// }

// $someText = 'okey';

// switch ($someText) {
//   case 'value':
//     echo 'Welcome to paradise';
//     break;

//   case 'okey':
//     echo 'Hi gies';
//     break;

//   default:
//     echo 'What do you think';
//     break;
// }

// echo "<br>";

// if($someText == 'value') {
//   echo 'Welcome to paradise';
// } elseif ($someText == 'okey') {
//   echo 'Hi gies';
// } else {
//   echo 'What do you think';
// }

// Home work

// $flag1 = true;
// $flag2 = false;


// if ($flag1 and $flag2) {
// 	echo "<p>Оба флага возвращают true</p>";
// }else{
// 	echo "<p>Один или оба флага возвращают false</p>";
// }

// switch ($flag1 && $flag2) {
//   case 'true':
//     echo "<p>Оба флага возвращают true</p>";
//     break;

//   default:
//     echo "<p>Один или оба флага возвращают false</p>";
//     break;
// }

// if ($flag1 || $flag2) {
// 	echo "<p>Оба или один флаг возвращают true</p>";
// }else{
// 	echo "<p>Оба флага возвращают false</p>";
// }

// switch ($flag1 or $flag2) {
//   case 'true':
//     echo "<p>Оба или один флаг возвращают true</p>";
//     break;

//   default:
//     echo "<p>Оба флага возвращают false</p>";
//     break;
// }

// $nums = 1;

// begin:
// $nums++;
// echo "$nums<br>";
// if ($nums >= 22) goto finish;
// goto begin;
// finish:


// $i = 10;

// while (true) {

//     $i++;
//     if ($i > 20) break;
//     echo "$i <br>";
// }

// while ($i--) {
  // echo "$i <br>";
// }


// do {
//   echo "$i <br>";
// } while (++$i <= 10);


// for ($i = 0; $i <= 20; $i++) {
//   echo "$i <br>";
// }

// for ($i = 10; $i; $i--) {
//   echo "$i <br>";
// }

// $i = 0;
// for (;;) {
//   $i++;
//   echo "$i <br>";
//   if ($i > 6) break;
//   echo "$i <br>";
// }

// $arr2 = array('One', 'Two', 'Three',);

// $arr3 = [11, 22, 33];

// echo $arr2[1] . "<br>";

// echo '<pre>';
// print_r($arr3);
// echo '</pre>';

// echo count($arr2);
// echo $arr2[count($arr) - 1];

// $arr = [10 => 'Hello'];

// echo '<pre>';
// print_r($arr);
// echo '</pre>';

// homework

// $arr1 = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,];
// $arr2 = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь"];
// $arr3 = ["Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Saturday", "Sunday"];

// echo $arr1[1], $arr2[5], $arr3[3];
// echo "<hr>";
// echo $arr1[4], $arr2[4], $arr3[4];

// echo $arr1[count($arr1) - 1];
// echo "<hr>";

// echo $arr2[count($arr2) - 1];
// echo "<hr>";

// echo $arr3[count($arr3) - 1];

// Ассоциативный массив

// $arr = ['name' => 'Andrei', 'age' => 31];

// Индексный массив

// $arr2 = ['Andrei', 31];

// Многомерный массив

// $arr3 = [

//   'Oleg' => ['age' => 21, 'weight' => 60],
//   'Ivan' => ['age' => 25, 'weight' => 70],
//   'Nika' => ['age' => 19, 'weight' => 53]

// ];

// echo $arr3['Oleg']
// ['weight'];
// echo "<pre>";
// print_r($arr3['Oleg']);
// echo "<pre>";

// Интерполяция элемента массива в строку


// $arr3[0] = 11;
// echo "Сейчас у нас $arr3[0] утра";

// $arr3['time'] = 11;
// echo "Сейчас у нас $arr3[time] утра";

// echo "Олег имеет вес в {$arr3['Oleg']['weight']} кг.";

// $arr = [1, 2, 3];

// list($one, $two, $three) = $arr;

// echo $two;

// Обход массива

// for ($i=0; $i < count($arr); $i++) {
//   echo $arr[$i] . "<br>";
// }

// $arr2 = [
//   'name' => 'Oleg',
//   'age' => 21,
//   'weight' => 60
// ];

// foreach ($arr2 as $key => $value) {
//   echo $key . " " . $value . "<br>";
// }

// Слияние масивов

// Происходит замещение индексов

// $arr1 = ['my', 'text'];
// $arr2 = ['our', 'some', 'text2'];

// $arr3 = $arr1 + $arr2;

// Замещение индексов не происходит

// $arr1 = ['my', 'text'];
// $arr2 = [2 => 'our', 3 => 'some'];

// $arr1 = ['my', 'text'];
// $arr2 = ['our', 'some'];

// $arr3 = array_merge($arr1, $arr2);

// echo "<pre>";
// print_r ($arr3);
// echo "<pre>";


// Существование массива(isset)

// $arr11 = [0 => 1, 1 => 2];

// for ($i=0; $i <= 6; $i++) {
//   if (isset($arr11[$i])) {
//     echo "Элемент массива \$arr11[$i} существует<br>";
//   } else {
//     echo "Элемент массива \$arr11[$i] не существует<br>";
//   }
// }

// is_array()

// if (is_array($arr11)) {
//   echo "переменная \$arr11 является массивом <br>";
// } else {
//   echo "переменная \$arr11 не является массивом <br>";
// }

// in_array() (Ориентируется по значениям, а не ключам)

// if (in_array(2, $arr11, true)) {
//   echo "цифра 2 существует внутри массива";
// } else {
//   echo "цифра 2 не существует внутри массива";
// }

// arraay_key_exists(key, array) (Ориентируется на значения, а не ключи)

// Функции

// function getSum(int $num1, $num2) : int {
//   $sum = $num1 + $num2;
//   return $sum;
// }

// echo getSum(11, 22);

// $aa = 123;
// $bb = 321;
// echo getSum($aa, $bb);

// Параметры функции

// function getResult(&$var) {
//   $var *= 2;
//   return $var;
// }

// $new1 = 10;
// echo getResult($new1) . "<br>";
// echo $new1;

// Необязательные параметры функции

// function getResult($var1 = 2, $var2 = 3) {
//   $var = $var1 * $var2;
//   return $var;
// }

// echo getResult();
// echo getResult(5, 5);

// Изменяемое количество параметров

// function mylist(...$items) {
//   foreach ($items as $v) {
//     echo $v . "<br>";
//   }
// }

// mylist('Oleg', 'Sara', 'Andrei');

// $some = ['PHP', 'JavaScript', 'Python'];
// mylist(...$some);

// Локальные и глобальные переменные

// function getSum() {
//   global $var;
//   $var = 2;
//   return $var;
// }

// $var = 5;

// echo getSum() . "<br>";
// echo $var;

// Статические переменные(Не рекомендуется использовать, равно как и глобальные)

// function calculator() {
//   static $start = 0;
//   return ++$start;
// }

// echo calculator();
// echo calculator();
// echo calculator();
// echo calculator();
// echo calculator();

// Функция возвращает массив

// function myFriends() {
//   $kate = 'Kate';
//   $nick = 'Nick';
//   $vadim = 'Vadim';

//   return [$kate, $nick, $vadim];
// }
// echo "<pre>";
// print_r(myFriends());
// echo "<pre>";


// function localWhat($num1, $num2) {
//   global $num3;
//   $num3 = $num1 * $num2;
//   return $num3;
// }
// echo localWhat(2, 3);


// Рекурсивная функция

// function recur($num) {
//   if ($num >= 10) {
//     echo ($num--) . '<br>';
//     recur($num);
//   } else return;
// }

// recur(15);

// Факториал n! = 1*2*3*4*5*..........

// function factorial($num) {
//   if ($num <= 1) return 1;
//   return $num * factorial($num - 1);
// }

// echo factorial(5);

// Используем цикл for вместо рекурсии

// function factorial2($num) {
//   $result = 1;
//   for ($i=1; $i <= $num; $i++) {
//     $result *= $i;
//   }
//   return $result;
// }
// echo factorial2(5)

// Homework

// function deepAll($num) {
//   if ($num > 100) {
//     echo ($num -= 5) . "<br>";
//     deepAll($num);
//   } else return;
// }

// Вложенные функции

// function box() {
//   function inn() {
//     echo "TEST";
//   }
//   inn();
// }

// box();

// Динамическое имя функции

// function hello() {
  // return 'Hello';
//   echo 'hello';
// }

// hello();
// $var = hello();
// echo hello();
// echo $var;

// Анонимная функция

// $some = function (...$arr) {
//   foreach($arr as $vel) {
//     echo $vel . "<br>";
//   }
// };

// $some(12, 34, 53, 3465, 343);

// $var2 = function () {
//   echo 'test';
// };

// $var2();

// Функция замыкания(применяется только к анонимным функциям)

// $message = "Текст до момента создания функции <br>";

// $test = function (array $some) use ($message) {
//   if (isset($some) && count($some) > 0) {
//     echo $message;
//     foreach($some as $li) {
//       echo $li . "<br>";
//     }
//   }
// };

// $test([]);
// $some[] = 'default text';
// $test($some);

// Изменение окружения

// $message = "Изменённый текст <br>";
// $some = [12, 32, 43, 53];
// $test($some);

// Строка в php - это массив

// $str = 'html css';
// echo $str[0];
// echo $str[6];
// utf-8
// Специальные символы

// echo "\u{0404}";

// $str2 = "Привет";
// echo "{$str2[3]}";

// mbstring

// Поиск внутри строки

// $str = '  hello  -  people  ';

// echo strlen($str);

// Отсчёт идёт с единицы (substr)
// echo substr($str, 6, 2);
// echo strpos($str, "-");

// Замена текста внутри строки

// echo str_replace("hello", "hi", $str);

// Удаление пробелов и переносов
// echo trim($str);

// Манипулирование HTML посредством PHP

// $str = "<p>Строка, которая содержит <strong>HTML</strong> теги</p>";

// echo $str;

// htmlspecialchars($str);

// Разделяем строку(преобразовываем строку в массив)

// $str = ' name, last name, email, mobile';

// $newArr = explode(',', $str);

// echo "<pre>";
// print_r($newArr);
// echo "<pre>";

// Собираем массив в единную строку

// $newStr = implode(";", $newArr);

// echo $newStr;

// Сериализация объектов и массивов

// Упаковка массива или объекта serialize();

// $num = [11, 2323, 423, 534, 54];

// Выводим закодированный массив

// $str = serialize($num);
// echo $str . "<br>";


// Распаковка массива или объекта unserialize();

// Декодируем массив

// $arr = unserialize($str);
// echo "<pre>";
// print_r($arr);
// echo "<pre>";

// JSON-формат

// echo "<h1>JSON-формат</h1>";

// $arr = [
//   'flo' => 'Иванов Степан',
//   'age' => '33',
//   'vk_url' => 'https://vk.com/id11111',
//   'learn' => ['HTML', 'CSS', 'PHP']
// ];

// Кодируем JSON

// echo json_encode($arr, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . "<br>";
// json_decode(json);

// Декодируем JSON

// $json = '{"people":"Сидоров Никита","adress":"Ленина 23б","mob":["89663332332","89121234554"]}';

// $arr2 = json_decode($json, true);

// echo "<pre>";
// print_r($arr2);
// echo "<pre>";

// Передача параметров методом GET(Супер глобальная переменная)

// echo $_GET['name'] . "<br>";
// echo $_GET['age'];

// echo "<pre>";
// print_r($_GET);
// echo "<pre>";


// http://localhost:4000/?name=oleg&age=23&page=02

// http://localhost:4000/?id[]=999&id[]=888&page[]=01

// http://localhost:4000/?str=русское слово

// echo "<a href='test.php?text=" .
// urlencode('Привет php') . "'>ссылка</a>";

// parse_url()

// $url = "https://user:admin@site.com/page/index.php?id=12&value=val#author";

// $url = parse_url($url);

// echo "<pre>";
// print_r($url);
// echo "<pre>";

// echo $url['host'];

// scheme = префикс(http/s)
// host - домен
// port - номер порта
// user - пользователь
// pass - его пароль
// path - путь от корневого каталога
// query - всё, что расположено после символа вопроса (?)
// fragment - всё, что расположено после символа#.


// Супер глобальные массивы

// $_GET - содержит в себе данные, которые мы пробрасываем себе на сервер через строку запроса
// $_POST - содержит в себе данные, которые мы пробрасываем в теле http-документа
// $_FILES - предоставляет удобный интерфейс для загруженых файлов на сервер
// $_COOKIE - обеспечивает доступ к COOKIES(Куки должны идти в самом верху страницы)

// setcookie('test', plus());

// echo "Счётчик посещения сервера/страницы {$_COOKIE['test']}";

// function plus() {
//   if (isset($_COOKIE['test'])) {
//     $_COOKIE['test']++;
//   }else {
//     $_COOKIE['test'] = 1;
//   }
//   return $_COOKIE['test'];
// }


// $_SESSION - массив для работы с сессиями
// $_REQUEST - отвечает за те данные, которые мы тащим со страницы на страницу
// $_SERVER - содержит информацию о местоположении скрипта, переданных на сам скрипт параметрах, информацию о сервере, на котором он работает и информации из hhtp заголовков
// $GLOBALS - содержит все переменные всех глобальных массивов


// session.save_path
// Сессии, равно как и куки вызываются в начале страницы

// session_start();

// $_SESSION['name'] = 'Oleg';
// $_SESSION['arr'] = [1, '2', 'test'];


// Очищаем куки, которые относятся к сессии(Вызываем до вывода на экран)

// if (ini_get("session.use_cookies")) {
//   $params = session_get_cookie_params();
//   setcookie(session_name(), '', time() - 42000,
//     $params["path"], $params["domain"],
//     $params["secure"], $params["httponly"]
//   );
// }

// echo "<pre>";
// print_r($_SESSION);
// echo "<pre>";


// Удаляем элемент в сессии
// unset($_SESSION['name']);

// Прерываем сессию

// session_destroy();

// Очищаем сессию

// $_SESSION = [];

// echo "<pre>";
// print_r($_SESSION);
// echo "<pre>";



// Элементы суперглобального массива $_SERVER

// Дерево документа

// echo $_SERVER['DOCUMENT_ROOT'] . '<br>';

// Параметры относительно типа документа

// echo $_SERVER['HTTP_ACCEPT'] . "<br>";

// Предпочтения клиента касательно языка

// echo $_SERVER['HTTP_ACCEPT_LANGUAGE'] . "<br>";

// Получение хоста

// echo $_SERVER['HTTP_HOST'] . "<br>";

// Показывает откуда пришли на сайт(Проверка на бота осуществляется с помощью элемента суперглобального массива) P.S. Видит лишь предыдущий шаг

// echo $_SERVER['HTTP_REFERER'] . "<br>";

// Проверка реальности пользователя(Показыват данные OC и браузера, которые вы используете)

// echo $_SERVER['HTTP_USER_AGENT'] . "<br>";

// Возвращает IP-адрес клиента

// echo $_SERVER['REMOTE_ADDR'] . "<br>";

// Показывает абсолютный путь к исполняемому файлу(скрипту)

// echo $_SERVER['SCRIPT_FILENAME'] . "<br>";

// Хранится имя сервера/домен(Домен относительный, весь остальной путь - абсолютный)

// echo $_SERVER['SERVER_NAME'] . "<br>" /blog/page.html;

// Считывает метод запроса

// echo $_SERVER['REQUEST_METHOD'] . "<br>";

// Показывает параметры с запроса страницы

// echo $_SERVER['QUERY_STRING'] . "<br>";

// Содержит имя скрипта включая параметры

// echo $_SERVER['REQUEST_URI'] . "<hr>";

// echo '<pre>';
// print_r($_SERVER);
// echo '<pre>';


// Методы классов и объектов(Функция внутри класса является методом)

// class HiPeople {
//   public function hello() {
//     return 'Hello People';
//   }

//   public function bye() {
//     return "Goodbye";
//   }
// }

// $obj = new HiPeople;
// echo $obj->hello() . "<br>";
// echo $obj->bye();

// Обращение к методам или переменным внутри метода с помощью ключевого слова this

// class Family {
//   private $boy;
//   private $girl;

//   public function setNameBoy($boy) {
//     $this->boy = $boy;
//   }

//   public function setNameGirl($girl) {
//     $this->girl = $girl;
//   }

//   public function getNameBoy() {
//     return $this->boy;
//   }

//   public function getNameGirl() {
//     return $this->girl;
//   }

//   public function family() {
//     return $this->getNameBoy() . " and " . $this->getNameGirl() . " family!";
//   }
// }

// $family = new Family;
// $family ->setNameBoy('Oleg');
// $family ->setNameGirl('Gunely');
// echo $family ->family();


// class HiPeople {
//   public static function hello() {
//     return 'Hello People';
//   }

//   public function bye() {
//     return "Goodbye";
//   }
// }

// $obj = new HiPeople;
// echo $obj->hello() . "<br>";
// echo $obj->bye();

// Использование метода без необходимости создания экземпляра класса(Можно использовать метод без ключевого слова static, однако, таким образом в два раза уменьшается скорость выполнения данного метода)

// echo HiPeople::hello() . "<br>";
// echo HiPeople::bye();


// Ключевое слово self

// class Page {
//   static $main = "content<br>";

//   public static function header() {
//     return 'header<br>';
//   }

//   public static function footer() {
//     return 'footer<br>';
//   }

//   public static function getPage() {
//     echo
//               self::header() .
//               self::$main .
//               self::footer();
//   }
// }

// Page::getPage();

// this относится к текущему объекту
// this можно понимать, как некую ссылку, которая указывает на методы и свойства текущего экземпляра класса
// this не может получить доступ к статическому методу или атрибуту, в отличии от self
// self относится к текущему классу
// self можно понимать, как некую ссылку на статические методы и свойства, разделяемые всеми экземплярами
// Класс - это проект объекта. Иначе говоря, класс является неким чертежом(заготовкой) объекта


// Конструктор простыми словами - это то, что выполнится как только мы создадим новый объект(Иными словами, метод который выполняется сразу, как тоько будет создан экземпляр класса, без его принудительного вызова)


// class Constr {
//   private $y;
//   private $x;

//   public function __construct($x) {
//     echo "Конструктор (Метод) отработал <br>";
//     $this->y = 22;
//     $this->x = $x;
//   }

  // Деструктор - это специальный метод класса, который автоматически выполняется в момент уничтожения объекта(Объект живёт ровно столько, сколько вы его используете) P.S. Выполняет роль чистильщика. Также деструктор отрабатывает в самую последнюю очередь

//   public function __destruct() {
//     echo "Деструктор (Метод) отработал <br>";
//     $this->y = 0;
//   }

//   public function getY() {
//     return $this->y;
//   }

//   public function getX() {
//     return $this->x;
//   }
// }

// $obj = new Constr(23);

// echo  $obj->getY() . "<br>";
// echo  $obj->getX()


// Методы аксессоры __set() - осуществляет запись __get() - получает информацию

// class Accessor {
//   private $one = [];

//   public function __get($key) {
//     if (array_key_exists($key, $this->one)) {
//       return $this->one[$key];
//     } else {
//       return null;
//     }
//   }

//   public function __set($key, $value) {
//     $this->one[$key] = $value;
//   }

// }

// $obj = new Accessor();

// $obj->text = 'Test text<br>';
// $obj->name = 'Oleg<br>';

// echo "<pre>";
// print_r($obj);
// echo "<pre>";


// ООП - наследование

// class Base {

//   protected $secret;
//   public $one;
//   private $text;

//   public function __construct($secret) {
//     $this->secret = $secret;
//   }

//   public function printer() {
//     echo $this->one;
//   }

// }

// class NewClass extends Base {
//   public $two;

//   public function __construct($secret) {
//     $this->secret = $secret;
//   }

//   public function bye() {
//     echo $this->two;
//   }


// }

// $obj = new NewClass(11);
// echo "<pre>";
// print_r($obj);
// echo "<pre>";

// $obj = new NewClass;
// $obj->one = 'Oleg';
// $obj->two = 'All';

// $obj->printer();
// echo "<br>";
// $obj->bye();


// Перегрузка методов

// class Base {

//   public function stars() {
//     echo "I'm method parents class<br>";
//   }
// }

// class Second extends Base {
//   public function stars() {
//     parent::stars();
//     echo "I'm method daughter class";
//   }
// }

// $obj = new Second();
// $obj->stars();


// Полиморфизм
// Метод Пагинация
// Абстрактный класс - это класс,
// от которого можно наследовать методы, но создавать экземпляр класса(объект) нельзя

// Наследуем абстрактный метод, абстрактного класса(Таким образом, получаем возможность создавать экземпляр класса)

// abstract class Pages {

//   abstract public function getAll();
// }

// class AllSearch extends Pages {
//   public function getAll() {
//     echo 'text';
//   }
// }

// $obj = new AllSearch();
// $obj->getAll();

// echo $obj instanceof AllSearch;

?>
