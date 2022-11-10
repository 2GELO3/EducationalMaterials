#include <iostream>
using namespace std;
//////////////////////////////////////////////////////////
class Distance // длина в английской системе
{
private:
  int feet;
  float inches;

public: // конструктор с двумя аргументами
  Distance(int ft, float in) : feet(ft), inches(in)
  {
  }
  void getdist() // неконстантный метод
  {
    cout << "\nВведите число футов: ";
    cin >> feet;
    cout << "Введите число дюймов: ";
    cin >> inches;
  }
  void showdist() const // константный метод
  {
    cout << feet << "\'-" << inches << '\"';
  }
};

int main()
{
  const Distance football(300, 0);
  // football.getdist(); // ошибка: метод getdist() неконстантный
  cout << " Длина поля равна ";
  football.showdist(); // корректно
  cout << endl;
  return 0;
}