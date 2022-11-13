#include <iostream>
#include <string>
using namespace std;
int main()
{
  char charray[80];
  string word;
  cout << "Введите слово: ";
  cin >> word;
  int wlen = word.length();
  cout << "По одному символу: ";
  for (int j = 0; j < wlen; j++)
    cout << word.at(j);
  word.copy(charray, wlen, 0);
  charray[wlen] = 0;
  cout << "\nМассив содержит: " << charray << endl;
  return 0;
}