#include <iostream>
using namespace std;
#include <conio.h>
int main()
{
  char dir = 'a';
  int x = 10, y = 10;
  cout << "Нажмите Enter для выхода...\n";
  while (dir != '\r')
  {
    cout << "\nВаши координаты: " << x << ", " << y;
    cout << "\nВыберите направление (n, s, e, w): ";
    dir = getche();
    if (dir == 'n')
    {
      y--;
    }
    else
    {
      if (dir == 's')
      {
        y++;
      }
      else
      {
        if (dir == 'w')
        {
          x--;
        }
      }
    }
  }
  return 0;
}