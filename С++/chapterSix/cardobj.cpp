#include <iostream>
using namespace std;
enum Suit
{
  clubs,
  diamonds,
  hearts,
  spades
};

const int jack = 11;
const int queen = 12;
const int king = 13;
const int ace = 14;

class card
{
private:
  int number;
  Suit suit;

public:
  card()
  {
  }
  card(int n, Suit s) : number(n), suit(s)
  {
  }
  void display();
  bool isEqual(card);
};

void card::display()
{
  if (number >= 2 && number <= 10)
  {
    cout << number;
  }
  else
  {
    switch (number)
    {
    case jack:
      cout << "Валет ";
      break;
    case queen:
      cout << "Дама ";
      break;
    case king:
      cout << "Король ";
      break;
    case ace:
      cout << "Туз ";
      break;
    }
    switch (suit)
    {
    case clubs:
      cout << "треф";
      break;
    case diamonds:
      cout << "бубен";
      break;
    case hearts:
      cout << "червей";
      break;
    case spades:
      cout << "пик";
      break;
    }
  }
}

bool card::isEqual(card c2)
{
  return (number == c2.number && suit == c2.suit) ? true : false;
}

int main()
{
  card temp, chosen, prize;
  int position;
  card card1(7, clubs);
  cout << "\nКарта 1: ";
  card1.display();
  card card2(jack, hearts);
  cout << "\nКарта 2: ";
  card2.display();
  card card3(ace, spades);
  cout << "\nКарта 3: ";
  card3.display();
  prize = card3;
  cout << "\nМеняем местами карты 1 и 3...";
  temp = card3;
  card3 = card1;
  card1 = temp;
  cout << "\nМеняем местами карты 2 и 3...";
  temp = card3;
  card3 = card2;
  card2 = temp;
  cout << "\nМеняем местами карты 1 и 2...";
  temp = card2;
  card2 = card1;
  card1 = temp;
  cout << "\nНа какой позиции (1, 2 или 3) теперь ";
  prize.display();
  cout << "?";
  cin >> position;
  switch (position)
  {
  case 1:
    chosen = card1;
    break;
  case 2:
    chosen = card2;
    break;
  case 3:
    chosen = card3;
    break;
  }
  if (chosen.isEqual(prize))
    cout << "Правильно! Вы выиграли!";
  else
    cout << "Неверно. Вы проиграли.";
  cout << " Вы выбрали карту ";
  chosen.display();
  cout << endl;
  return 0;
}