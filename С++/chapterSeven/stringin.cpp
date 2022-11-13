#include <iostream>
using namespace std;
int main()
{
  const int MAX = 80;
  char str[MAX];
  cout << "Введите строку: ";
  cin >> str;
  cout << "Вы ввели: " << str << endl;
  return 0;
}