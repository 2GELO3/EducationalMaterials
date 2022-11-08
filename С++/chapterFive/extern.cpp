#include <iostream>
using namespace std;
#include <conio.h>
char ch = 'a';
void getachar();
void putachar();
int main()
{
  while (ch != '\r')
  {
    getachar();
    putachar();
  }
  cout << endl;
  return 0;
}

void getachar()
{
  ch = getch();
}
void putachar()
{
  cout << ch;
}