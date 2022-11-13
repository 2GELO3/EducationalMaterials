#include <iostream>
using namespace std;
int main()
{
  int age[4];
  for (int j = 0; j < 4; j++)
  {
    cout << "Введите возраст: ";
    cin >> age[j];
  }
  for (int j = 0; j < 4; j++)
  {
    cout << "Вы ввели: " << age[j] << endl;
  }
  return 0;
}