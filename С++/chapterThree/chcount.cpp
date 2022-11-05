#include <iostream>
using namespace std;
#include <conio.h>
int main()
{
  int chcount = 0;
  int wdcount = 1;
  char ch = 'a';
  cout << "Введите строку: ";
  while (ch != '\r')
  {
    ch = getche();
    if (ch == ' ')
    {
      wdcount++;
    }
    else
    {
      chcount++;
    }
    cout << "\nСлов: " << wdcount << endl;
    cout << "Букв: " << (chcount - 1) << endl;
    return 0;
  }