// Область видимости в рамках пакета и публичная область видимости(Переменная, константа, тип являются экспортируемыми если их название начинается с большой буквы, ну или как это называется, верхнего регистра)

package shape

import (
	"math"
)

// Агрегация Интерфейсов есть Композиция

// Объявляем Интерфейс

type Shape interface {
	ShapeWithArea
	ShapeWithPerimeter
}

type ShapeWithArea interface {
	Area() float32
}

type ShapeWithPerimeter interface {
	Perimeter() float32
}

type Square struct {
	sideLenght float32
}

// Конструктор поможет сделать переменную экспортированной

func NewSquare(lenght float32) Square {
	return Square{
		sideLenght: lenght,
	}
}

// Имплементируем сигнатуру интерфейса(Причём в языке GO имплементация неявная)

func (s Square) Area() float32 {
	return s.sideLenght * s.sideLenght
}

func (s Square) Perimeter() float32 {
	return s.sideLenght * 4
}

type Circle struct {
	radius float32
}

func (c Circle) Area() float32 {
	return c.radius * c.radius * math.Pi
}

func main() {

}
