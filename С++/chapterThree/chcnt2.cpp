#include <iostream>
using namespace std;
#include <conio.h>
int main()
{
  int chcount = 0;
  int wdcount = 1;
  char ch;
  while ((ch = getch()) != '\r')
  {
    if (ch == ' ')
    {
      wdcount++;
    }
    else
    {
      chcount++;
    }
  }
  cout << "\nСлов: " << wdcount << endl;
  cout << "Букв: " << chcount << endl;
  return 0;
}