#include <iostream>
#include <string>
using namespace std;
int main()
{
  string s1 = "В лесу родилась ёлочка, в лесу она росла.";
  int n;

  n = s1.find("ёлочка");
  cout << "Ёлочка найдена: " << n << endl;

  n = s1.find_first_of("умка");
  cout << "Первая из умка: " << n << endl;

  n = s1.find_first_not_of("абвгдАБВГД");
  cout << "Первый не из: " << n << endl;

  return 0;
}