#include <iostream>
#include <string>
using namespace std;
int main()
{
  string aName = "Иван";
  string userName;
  cout << "Введите Ваше имя: ";
  cin >> userName;
  if (userName == aName)
    cout << "Привет, Иван\n";
  else if (userName < aName)
    cout << "Ваше имя идет до имени Иван\n";
  else
    cout << "Ваше имя идет после имени Иван\n";
  int n = userName.compare(0, 2, aName, 0, 2);
  cout << "Первые две буквы Вашего имени ";
  if (n == 0)
    cout << "совпадают ";
  else if (n < 0)
    cout << "идут до ";
  else
    cout << "идут после ";
  cout << aName.substr(0, 2) << endl;
  return 0;
}