#include <iostream>
#include <cstring>
using namespace std;
int main()
{
  char str1[] = "Уронили мишку на пол, оторвали мишке лапу!";
  const int MAX = 80;
  char str2[MAX];
  strcpy(str2, str1);
  cout << str2 << endl;
  return 0;
}