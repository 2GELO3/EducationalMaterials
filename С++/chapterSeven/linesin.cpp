#include <iostream>
using namespace std;
const int MAX = 2000;
char str[MAX];
int main()
{
  cout << "\nВведите строку:\n";
  cin.get(str, MAX, '$');
  cout << "Вы ввели:\n"
       << str << endl;
  return 0;
}