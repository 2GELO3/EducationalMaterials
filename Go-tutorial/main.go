// В документе с расширением go всегда должен быть пакет main(Пакеты используются для грамотного структурирования приложения)
package main

// import "fmt"

// Глобальная переменная(Доступны в области видимости текущего пакета)

// var a, b, c int

// var msg string

// Функция init зарегестрированная функция, которая используется для инициализации каких-либо переменных(Имеет особенность:
// вызывается при инициализации пакета в котором данная функция находится, тем самым всегда срабатывает раньше функции main)
// func init() {
// 	msg = "from init()"
// }

// Ещё одна Кастомная структура

// type Age int

// func (a Age) isAdult() bool {
// 	return a >= 18
// }

// Данную структуру можно переиспользовать(Кастомная структура)

// type User struct {
// 	name   string
// 	age    Age
// 	sex    string
// 	weight int
// 	height int
// }

// Метод структуры

// Receiver(u User) в методе объекта может быть по значению(value) или по ссылке(pointer)

// Value receiver

// func (u *User) setName(name string) {
// 	u.name = name
// }

// Pointer receiver

// func (u User) getName() string {
// 	return u.name
// }

// Конструктор - это функция, которая инициализирует объект определённого типа(структуры) P.S. Очень полезен, особенно если используются Приватные поля

// Реализуем привидение типов(Приводим int к типу age)

// func NewUser(name, sex string, age, weight, height int) User {
// 	return User{
// 		name:   name,
// 		sex:    sex,
// 		age:    Age(age),
// 		weight: weight,
// 		height: height,
// 	}
// }

// Создаём тупиковую базу данных

// type DumbDatabase struct {
// 	m map[string]string
// }

// func NewDumbDatabase() *DumbDatabase {
// 	return &DumbDatabase{
// 		m: make(map[string]string),
// 	}
// }

// Функция main является точкой входа в приложение

func main() {

	// square := shape.NewSquare(5)
	// circle := Circle{8}

	// printShapeAre(square)
	// printShapeAre(circle)

	// printInterface(square)
	// printInterface(circle)

	// user1 := NewUser("Vasya", "Male", 23, 60, 160)
	// user2 := User{"Victor", 19, "Male", 66, 180}

	// user1.setName("Serega")

	// fmt.Println(user1.age.isAdult())

	// fmt.Println(user1.getName())
	// fmt.Println(user2.getName())

	// Структура - это кастомный тип, который в себе может хранить набор различных, дополнительных полей и эта самая структура может обладать различными методами, и затем, на основании ёё, мы можем создавать объекты(Объекты этой структуры) P.S. Структура похожа на класс(из других языков по типу java, python и т.д.), поля и методы также в ней есть

	// Объявляем структуру(Данную структуру переиспользовать нельзя)

	// user := struct {
	// 	name   string
	// 	age    int
	// 	sex    string
	// 	weight int
	// 	height int
	// }{"Vasya", 23, "Male", 60, 160}

	// Обращаемся к конкретному значению в структуре

	// fmt.Println(user1.name)

	// printUserInfo(user1)
	// printUserInfo(user2)

	// user1.printUserInfo()
	// user2.printUserInfo()

	// Map - словарь(Неупорядоченный массив данных у которого есть ключ значение и соответсвенно, его и используем, если нам нужно значение конкретного ключа) P.S. Принимает в себя любой тип данных(Ключ всегда уникальный), также по Map можно итерироватся

	// users := map[string]int{
	// 	"Vasya": 15,
	// 	"Petya": 42,
	// 	"Oleg":  23,
	// }

	// В Map нельзя использовать встроенную функцию cap(От capacity - вместимость), ибо принадлежит данная функция исключительно Срезам(Slice)

	// fmt.Println(cap(users))

	// fmt.Println(len(users))

	// Неинициализированная map-а вызывает панику так, как имеет в себе значение nil(пустой указатель)

	// var users map[string]int
	// users["Vasya"] = 15

	// Метод make можно использовать также для работы с map(Ненужно указывать длинну map)

	// users = make(map[string]int)

	// users["Vasya"] = 19

	// fmt.Println("Vasya")

	// age, exists := users["Oleg"]

	// if exists {
	// 	fmt.Println("Oleg", age)
	// } else {
	// 	fmt.Println("Oleg нет в списке")
	// }

	// Если хотим удалить элемент из map-ы используем функцию delete, которая первый аргументом принимает map-у (из которой мы и хотим удалить аргумент), вторым же аргументом, она принимает в себя ключ по которому мы хотим удалить запись

	// delete(users, "Vasya")

	// users["Serega"] = 21

	// for key, value := range users {
	// 	fmt.Println(key, value)
	// }

	// Логика ключевого слова defer в том, чтобы откладывать выполнение функции, которую мы передали(В даннном случае printMessage), в самый конец(когда выйдет функция main)

	// defer handlerPanic()

	// Паника происходит в следующих случаях: 1)когда мы пытаемся записать значения в slice или массив, но при этом мы выходим за границы этого slice-а 2)когда мы работаем с nil указателями 3)когда мы делаем дикретное приведение типов 4) когда мы вызываем её самостоятельно с помощью встроенной функции panic()

	// messages := []string{
	// 	"message 1",
	// 	"message 2",
	// 	"message 3",
	// 	"message 4",
	// }

	// fmt.Println(messages)
	// messages[4] = "message 5"

	// panic("help me please")

	// Вместо этого метода(Для того, чтобы получить значение slice)

	// for i := 0; i < len(messages); i++ {
	// 	fmt.Println(messages[i])
	// }

	// Лучше использовать этот метод(В котором можно сразу получить это значение, опуская индекс slice)

	// for _, message := range messages {
	// 	fmt.Println(message)
	// }

	// counter := 0
	// for {
	// 	if counter == 100 {
	// 		break
	// 	}
	// 	counter++
	// 	fmt.Println(counter)
	// }

	// Инициализируем Матрицу(Посути у нас инициализировался slice длинною 10 и каждый элемент этого slice-а это отдельный slice)

	// matrix := make([][]int, 10)

	// Цикл в цикле(В данном цикле мы итерируем в одном slice 10 таких же slice-ов) P.S В этом примере x - это индекс внешнего slice, а y - индекс внутреннего

	// counter := 0
	// for x := 0; x < 10; x++ {
	// 	matrix[x] = make([]int, 10)
	// 	for y := 0; y < 10; y++ {
	// 		counter++
	// 		matrix[x][y] = counter
	// 	}
	// 	fmt.Println(matrix[x])
	// }

	// Инициализируем slice(Непутать с массивами) P.S По своей сути slice - это обёртка над встроенным массивом(Slice под капотом хранит в себе ссылку на массив)

	// messages := []string{"1", "2", "3"}

	// messages := make([]string, 5)

	//  Функция append, первым аргументом передаёт slice, вторым же передаёт элементы, которые мы хотим добавить

	// messages = append(messages, "6")

	// Объявляем неинициализируемый slice

	// var message []string

	// Здесь мы становимся свидетелем так называемой "паники", которая является runtime ошибкой, тоесть ошибкой, которая происходит не на этапе компиляции приложения, а во время его выполнения(Однако ёё можно избежать используя функцию make)

	// message[0] = "1"
	// fmt.Println(message)

	// fmt.Println(cap(messages))

	// printMessage(messages)
	// fmt.Println(messages)

	// Инициализируем массив (Массивы с разной длинной - это разные типы) P.S. По сути массивы только тогда считаются массивами, когда у них есть фиксированное значение

	// messages := [3]string{
	// 	"1", "2", "3",
	// }

	// printMessage(messages)

	// fmt.Println(messages)

	// number := 5

	// Создаём указатель(nil если указатель пустой, тоесть он нессылается на какой-то участок памяти в коде)

	// var f *int

	// f = &number

	// fmt.Println(f)
	// fmt.Println(&number)

	// *f = 10

	// fmt.Println(number)

	// message := "I would like become golang developer"

	// fmt.Println(message)

	// Передаём указатель на строку(Операция Reference - тоесть мы ссылаемся на область памяти, которая находится в message)

	// changeMessage(&message)

	// fmt.Println(message)
	// fmt.Println(msg)

	// inc := increment()
	// fmt.Println(inc())
	// fmt.Println(inc())
	// fmt.Println(inc())
	// fmt.Println(inc())

	// fmt.Println(increment2())
	// fmt.Println(increment2())
	// fmt.Println(increment2())
	// fmt.Println(increment2())

	// Замыкание(Анонимные функции) - функция, которая ссылается на независимые(свободные) переменные(Другими словами, при замыкании фунция запоминает условия при которых она была созданна) P.S. Создаём функцию и сразу её вызываем

	// func() {
	// 	fmt.Println("анонимная функция")
	// }()

	// fmt.Println(findMin(1, 2, 3, 5454, 3443, -2, -55))

	// message, err := enterTheClub(17)

	// if err != nil {
	// 	fmt.Println(err)
	// return
	// }

	// fmt.Println(message)

	// fmt.Println(prediction("пт"))

	// message := sayHello("Максим", 23)
	// printMessage(message)

	// Множественное присвоение
	// Локальная переменная

	// a, b, c = 1, 2, 3

	// Множественное переприсвоение(Меняем местами значение переменных) P.S. Справа налево

	// a, b = b, a

	// b остаётся неизменным
	// a, _, c = 1, 2, 3

	// fmt.Println(a, b, c)

	// printMessage("what")
	// printMessage("who")
	// printMessage("whose")

	// Двойные кавычки для инициализации строк, тогда как одинарные для символов

	// messsage := "Hello Golang"

	// Биты
	// var a byte = 23
	// Руны
	// var b rune = 'a'

	// fmt.Println(a)
	// fmt.Println(b)
	// fmt.Println(messsage)

}

// Функция, которая возвращает функцию(Множественные функции являются Срезами(Slices))
// func increment() func() int {
// 	count := 0
// 	return func() int {
// 		count++
// 		return count
// 	}
// }

// func increment2() int {
// 	count := 0
// 	count++
// 	return count
// }

// Обязательные аргументы в сигнатуре функций(Обязательно именнованые и инициализированные)

// func printMessage(message string) {
// a, b, c := 1, 2, 3
// 	fmt.Println(message)
// }

// Возвращаем строку
// func sayHello(name string, age int) string {
// 	return fmt.Sprintf("Привет, %s! Тебе %d лет", name, age)
// }

// Функция так или иначе должна возвращать значение(Возвращать больше двух, максимум трёх, значений очень плохая практика)

// Логические выражения

// func enterTheClub(age int) (string, bool) {
// 	if age >= 18 && age < 45 {
// 		return "Входи, только акуратно", true
// 	} else if age >= 45 && age < 65 {
// 		return "Добро пожаловать!", true
// 	} else if age >= 65 {
// 		return "Дедуля, вы хто", false
// 	}

// 	return "Иди домой, сынуля", false
// }

// Ещё один тип данных - error(ошибка) P.S Желательно чтобы ошибка передавалась в максимально сжатом и информативном виде с маленькой буквы на английском языке последним аргументом

// func enterTheClub(age int) (string, error) {

// Условный оператор if

// 	if age >= 18 && age < 45 {
// 		return "Входи, только акуратно", nil
// 	} else if age >= 45 && age < 65 {
// 		return "Добро пожаловать!", nil
// 	} else if age >= 65 {
// 		return "Дедуля, вы хто", errors.New("you are too old")
// 	}

// 	return "Иди домой, сынуля", errors.New("you are too you")
// }

// Конструкция switch/case

// func prediction(dayOfWeek string) string {
// 	switch dayOfWeek {
// 	case "пн":
// 		return "Хорошего тебе начала недели"
// 	case "вт":
// 		return "Настал второй день недели"
// 	case "ср":
// 		return "Среда середина рабочей недели"
// 	case "чт":
// 		return "Четверг - рыбный день"
// 	case "пт":
// 		return "Пятница развратница"
// 	default:
// 		return "А вот и выходные"
// 	}
// }

// numbers ...int(Данная конструкция под копотом тот же слайс)
// func findMin(numbers ...int) int {
// 	if len(numbers) == 0 {
// 		return 0
// 	}

// min := numbers[0]
// max := numbers[0]

// Минимальное число в массиве

// Цикл for

// for _, i := range numbers {
// 	if i < min {
// 		min = i
// 	}
// }
// return min

// Максимальное число в массиве

// 	for _, i := range numbers {
// 		if i > max {
// 			max = i
// 		}
// 	}
// 	return max
// }

// Сюда передаём область памяти(Опереация Dereference - тоесть мы берём область памяти и по области памяти мы обращаемся к значению)

// func changeMessage(message *string) {
// 	*message += " (из функции changeMessage())"
// }

// Передаём массив в качестве аргумента в функцию

// func printMessage(messages [3]string) error {
// 	if len(messages) == 0 {
// 		return errors.New("empty array")
// 	}

// 	messages[1] = "5"

// 	return nil
// }

// Передаём slice в качестве аргумента в функцию
// func printMessage(messages []string) error {
// 	if len(messages) == 0 {
// 		return errors.New("empty array")
// 	}

// messages[1] = "5"

// 	fmt.Println(messages)

// 	return nil
// }

// Объявляем функцию handlerPanic для того, чтобы паника не падала

// func handlerPanic() {
// 	if r := recover(); r != nil {
// 		fmt.Println(r)
// 	}

// 	fmt.Println("handlerPanic() выполнилась успешно")
// }

// Пустой интерфейс(Любой тип или переменная соответствует, а значит имплементирует пустому интерфейсу)

// func printShapeAre(s shape.Shape) {
// 	fmt.Println(s.Area())
// 	fmt.Println(s.Perimeter())
// }

// func printInterface(i interface{}) {
// Данная конструкция называется: Привидение интерфейса к определённому типу

// switch value := i.(type) {
// case int:
// 	fmt.Println("int", value)
// case bool:
// 	fmt.Println("bool", value)
// default:
// 	fmt.Println("unknow type", value)
// }

// Приводим интерфейс к типу string

// str, ok := i.(string)
// if !ok {
// 	fmt.Println("interface is not string")
// 	return
// }

// fmt.Println(len(str))

// fmt.Println(i)
// }
