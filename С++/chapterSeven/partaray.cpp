#include <iostream>
using namespace std;
const int SIZE = 4;
struct part
{
  int modelnumber;
  int partnumber;
  float cost;
};

int main()
{
  int n;
  part apart[SIZE];
  for (n = 0; n < SIZE; n++)
  {
    cout << endl;
    cout << "Введите номер модели: ";
    cin >> apart[n].modelnumber;
    cout << "Введите номер части: ";
    cin >> apart[n].partnumber;
    cout << "Введите стоимость: ";
    cin >> apart[n].cost;
  }
  cout << endl;
  for (n = 0; n < SIZE; n++)
  {
    cout << "Модель " << apart[n].modelnumber;
    cout << " Часть " << apart[n].partnumber;
    cout << " Стоимость " << apart[n].cost << endl;
  }
  return 0;
}