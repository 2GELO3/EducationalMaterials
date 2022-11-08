#include <iostream>
using namespace std;
void repchar(char, int);
int main()
{
  char chin;
  int nin;
  cout << "Введите символ: ";
  cin >> chin;
  cout << "Введите число повторений символа: ";
  cin >> nin;
  repchar(chin, nin);
  return 0;
}
void repchar(char ch, int n)
{
  for (int j = 0; j < n; j++)
  {
    cout << ch;
  }
  cout << endl;
}