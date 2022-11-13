#include <iostream>
using namespace std;
int main()
{
  const int MAX = 80;
  char str[MAX];
  cout << "\nВведите строку: ";
  cin.get(str, MAX);
  cout << "Вы ввели: " << str << endl;
  return 0;
}