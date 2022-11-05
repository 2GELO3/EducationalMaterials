#include <iostream>
using namespace std;
int main()
{
  unsigned int numb;
  unsigned long fact = 1;
  cout << "Введите целое число: ";
  cin >> numb;
  for (int j = numb; j > 0; j--)
  {
    fact *= j;
    cout << "Факториал исла равен " << fact << endl;
  }
  return 0;
}