#include <iostream>
using namespace std;
unsigned long factfunc(unsigned long);
int main()
{
  int n;
  unsigned long fact;
  cout << "Введите целое число: ";
  cin >> n;
  fact = factfunc(n);
  cout << "Факториал числа " << n << "равен " << fact << endl;
  return 0;
}
unsigned long factfunc(unsigned long n)
{
  if (n > 1)
  {
    return n * factfunc(n - 1);
  }
  else
  {
    return 1;
  }
}