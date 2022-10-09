<?php

  class Point {
    public $x;
    public $y;
    public static $num = 120;
  }

  class ConstClass {
    const NAME = 'str';
  }

  if (defined('ConstClass::NAME')) {
    echo 'Константа определена';
  } else {
    echo 'Константа не определена';
  }

  // $point1 = new Point;
  // $point1->x = 13;
  // $point1->y = 12;

  // $point2 = new Point;
  // $point2->x = 13;
  // $point2->y = 12;

  // unset($point2);

  // $first = $second = 2;
  // $first = 3;

  // $first = 5;
  // $second = &$first;
  // $second = 3;

  // $first = new Point;
  // $first->x=3;
  // $first->y=3;

  // $second = clone $first;
  // $second->x=5;
  // $second->y=5;

  // echo Point::$num;

  // pow(2, 8);
  // sqrt(16);

  // $p1 = new Point;
  // $p1->x=3;
  // $p1->y=5;

  // $p2 = new Point;
  // $p2->x=7;
  // $p2->y=12;

  // $distance = sqrt((pow(($p2->x-$p1->x), 2) + pow(($p2->y-$p1->y), 2)));

  // echo $distance;

    // class Hello {
    //     public function printText() {
    //       return "Hello, World";
    //     }
    //   }

    //   $obj = new Hello;
    //   echo $obj->printText();

    // class Point {
    //   private $x;
    //   private $y;

    //   public function setX($x) {
    //     $this->x = $x;
    //   }

    //   public function setY($y) {
    //     $this->y = $y;
    //   }

    //   public function getX() {
    //     return $this->x = $x;
    //   }

    //   public function getY() {
    //     return $this->y = $y;
    //   }

    //   public function distance() {
    //     return sqrt($this->getX()**2 + $this->getY()**2);
    //   }
    // }

    // $p1 = new Point;
    // $p1->setX(2);
    // $p1->setY(3);
    // echo $p1->distance();


    // class Hello {
    //   public static function printText() {
    //     return "Hello, World";
    //   }
    // }

    // echo Hello::printText();


    // class Page {
    //   static $content = 'Тело сайта<br>';
    //   public static function footer() {
    //     return 'Это подвал сайта<br>';
    //   }
    //   public static function header() {
    //     return 'Это шапка сайта<br>';
    //   }
    //   public static function site() {
    //     echo self::header() .
    //         self::$content .
    //         self::footer();
    //   }
    // }

      // class People {
      //   private $name;
      //   public function __construct() {
      //     echo 'Вызов конструктора';
      //     $this->name = "Ivan";
      //   }
      // }

      // $obj = new People();
      // echo "<pre>";
      // echo print_r($obj);
      // echo "</pre>";


      // class Point {
      //   private $x;
      //   private $y;
      //   public function __construct($x, $y) {
      //     $this->x = $x;
      //     $this->y = $y;
      //   }

      //   public function __toString() {
      //     return "({$this->x}, {$this->y})";
      //   }
      // }

      // $obj = new Point(2, 3);
      // echo "<pre>";
      // echo print_r($obj);
      // echo "</pre>";
      // echo "{$obj}";

      class Animal {
        protected $legs = 4;
        final public function info() {
          echo "У меня {$this->legs} лапы.";
        }
        // abstract public function color();
      }

      class Dog extends Animal {
        public $name = "Собака";
        // public function info() {
        //   echo "Я {$this->name}, У меня {$this->legs} лапы.";
        // }
        public function voice() {
          echo "{$this->name} издаёт звук гав-гав";
        }
        public function parentInfo() {
          parent::info();
        }
        public function color() {
          echo "red";
        }
      }

      class Cat extends Animal {
        public $name = "Кошка";
        public function voice() {
          echo "{$this->name} издаёт звук мяу";
        }
        public function color() {
          echo "white";
        }
      }

      $cat = new Cat();
      $cat->info();
      $cat->voice();

      $dog = new Dog();
      $dog->info();
      $dog->voice();
?>