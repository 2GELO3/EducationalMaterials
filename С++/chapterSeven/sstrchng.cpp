#include <iostream>
#include <string>
using namespace std;
int main()
{
  string s1("Все хорошо, прекрасная маркиза.");
  string s2("принцесса");
  string s3("Приветствую ");
  s1.erase(0, 12);
  s1.replace(11, 7, s2);
  s1.insert(0, s3);
  s1.erase(s1.size() - 1, 1);
  s1.append(3, '!');
  int x = s1.find(' ');
  while (x < s1.size())
  {
    s1.replace(x, 1, "/");
    x = s1.find(' ');
  }
  cout << "s1: " << s1 << endl;
  return 0;
}