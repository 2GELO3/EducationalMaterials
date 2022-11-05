#include <iostream>
using namespace std;
#include <conio.h>
int main()
{
  char dir = 'a';
  int x = 10, y = 10;
  while (dir != '\r')
  {
    cout << "\nВаши координаты: " << x << ", " << y;
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
    case '\r':
      cout << "Выход...\n";
      break;
    default:
      cout << "Попробуйте ещё\n";
    }
  }
  return 0;
}