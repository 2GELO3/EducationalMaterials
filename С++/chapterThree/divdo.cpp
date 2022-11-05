#include <iostream>
using namespace std;
int main()
{
  long dividend, divisor;
  char ch;
  do
  {
    cout << "Введите делимое: ";
    cin >> dividend;
    cout << "Введите делитель: ";
    cin >> dividend;
    cout << "Частное равно " << dividend / divisor;
    cout << ", остаток равен " << dividend % divisor;
    cout << "\nЕщё раз?(y/n): ";
    cin >> ch;
  } while (ch != 'n');
  return 0;
}