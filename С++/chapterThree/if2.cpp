#include <iostream>
using namespace std;
int main()
{
  int x;
  cout << "Введите число: ";
  cin >> x;
  if (x > 100)
  {
    cout << "Число " << x;
    cout << " больше, чем 100\n";
  }
  return 0;
}