#include <iostream>
using namespace std;
int main()
{
  // символьная переменная со значением 'A'
  char charvar1 = 'A';
  // символьная переменная со значением символа табуляции
  char charvar2 = '\t';
  cout << charvar1;
  cout << charvar2;
  charvar1 = 'B';

  cout << charvar1;
  cout << '\n';
  return 0;
}