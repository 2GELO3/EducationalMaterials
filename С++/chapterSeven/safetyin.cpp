#include <iostream>
#include <iomanip>
using namespace std;
int main()
{
  const int MAX = 20;
  char str[MAX];
  cout << "\nВведите строку: ";
  cin >> setw(MAX) >> str;
  cout << "Вы ввели: " << str << endl;
  return 0;
}