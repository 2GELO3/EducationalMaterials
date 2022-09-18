package main

import (
	// 	"errors"
	"fmt"
)

// Структура
type contact struct {
	firstName   string
	lastName    string
	phoneNumber string
	email       string
	address     string
	dateOfBirth string
}

// const winePrice = 100

func (c contact) printInfo() {
	fmt.Printf("Имя: %s\nФамилия: %s\nНомер телефона: %s\nE-mail: %s\nАдрес: %s\nДата рождения: %s\n", c.firstName, c.lastName, c.phoneNumber, c.email, c.address, c.dateOfBirth)
}

func (c *contact) setName(name string) {
	c.firstName = name
}

func main() {

	cl := contact{
		firstName:   "Вася",
		lastName:    "Пупкин",
		phoneNumber: "89818170707",
		email:       "nfefef@gmail.com",
		address:     "Ул. Героев 67а, г. Залупинск",
		dateOfBirth: "08.11.2006",
	}

	cl.setName("Петя")

	cl.printInfo()

	// Map-ы(Представлены в виде: ключ=значение, как свойства объектов)

	// contactsList := map[string]string{
	// 	"Костя": "234256",
	// 	"Олег":  "234251",
	// 	"Коля":  "134256",
	// }

	// fmt.Println("До delete()")
	// for name, phoneNumber := range contactsList {
	// 	fmt.Println(name, phoneNumber)
	// }

	// delete(contactsList, "Коля")

	// fmt.Println("После delete()")
	// for name, phoneNumber := range contactsList {
	// 	fmt.Println(name, phoneNumber)
	// }

	// fmt.Println(contactsList["Костя"])

	// Массивы и Слайсы
	// contactsList := []string{"Костя", "Олег", "Коля"}

	// fmt.Println(contactsList)

	// fmt.Println("Длина массива", len(contactsList))

	// fmt.Println("Список контактов:")
	// for index := range contactsList {
	// 	fmt.Printf("%d. %s\n", index+1, contactsList[index])
	// }

	// contactsList = append(contactsList, "Жора", "Леонид", "Антон")

	// for i := 0; i <= len(contactsList); i++ {
	// 	fmt.Printf("%s", contactsList[i])
	// }

	// change, err := buyWine(20, 110)
	// if err != nil {
	// 	fmt.Println("Покупка неуспешна:", err.Error())
	// } else {
	// 	fmt.Printf("Ваша сдача - %d. Хорошего дня!", change)
	// }

	// change, err = buyWine(17, 110)
	// if err != nil {
	// 	fmt.Println("Покупка неуспешна:", err.Error())
	// } else {
	// 	fmt.Printf("Ваша сдача - %d. Хорошего дня!", change)
	// }

	// change, err = buyWine(33, 98)
	// if err != nil {
	// 	fmt.Println("Покупка неуспешна:", err.Error())
	// } else {
	// 	fmt.Printf("Ваша сдача - %d. Хорошего дня!", change)
	// }

	// name := "Вася"
	// pName := &name

	// fmt.Println(name)
	// fmt.Println(pName)

	// *pName = "Петя"

	// 	fmt.Println(name)

	// 	setName(&name)

	// 	fmt.Println(name)

	// 	var emptyPointer *string
	// 	fmt.Println(emptyPointer)
	// }

	// func setName(name *string) {
	// 	*name = "Петя"
	// }

	// import "fmt"

	// func main() {
	// 	var name string
	// 	var age int
	// 	var weight float32

	// 	name = "Максим"
	// 	weight = 69.3
	// 	age = 28

	// 	fmt.Println(name, age, weight)
	// 	fmt.Println("Вася", 33, 78.7)
	// }

	// func printPersonInfo(name string, age int, weight float32) {
	// 	fmt.Printf("Имя: %s\nВозраст: %d\nВес: %.1f\n", name, age, weight)

	// 	fmt.Println(isAdult(age))
	// }

	// func isAdult(age int) bool {
	// 	return age >= 18
}

// func buyWine(age, moneyAmount int) (int, error) {
// 	if age >= 18 && moneyAmount >= winePrice {
// 		return moneyAmount - winePrice, nil
// 	} else if age < 18 {
// 		return moneyAmount, errors.New("Иди пей вишнёвый сок, сынуля")
// 	} else {
// 		return moneyAmount, errors.New("У вас недостаточно средств")
// 	}
// }
