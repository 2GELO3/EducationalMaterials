#include <iostream>
using namespace std;
int main()
{
  int numb;
  cout << "Введите число: ";
  cin >> numb;
  cout << "numb < 10 равно " << (numb < 10) << endl;
  cout << "numb > 20 равно " << (numb > 10) << endl;
  cout << "numb == 10 равно " << (numb == 10) << endl;
  return 0;
}