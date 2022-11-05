#include <iostream>
using namespace std;
#include <process.h>
#include <conio.h>
int main()
{
  char dir = 'a';
  int x = 10, y = 10;
  while (dir != '\r')
  {
    cout << "\n\nВаши координаты: " << x << ", " << y;
    if (x < 5 || x > 15)
    {
      cout << "\nОсторожно - драконы!";
      cout << "\nВыберите направление (n, s, e, w): ";
      dir = getche();
      switch (dir)
      {
      case 'n':
        y--;
        break;
      case 's':
        y++;
        break;
      case 'e':
        x++;
        break;
      case 'w':
        x--;
        break;
      }
    }
  }
  return 0;
}