#include <iostream>
using namespace std;
int main()
{
  int a, b, c;
  cout << "Введите числа a, b, и с: \n";
  cin >> a >> b >> c;
  if (a == b)
  {
    if (b == c)
    {
      cout << "a, b, и с равны\n";
    }
  }
  else
  {
    cout << "a и b не равны\n";
  }
  return 0;
}