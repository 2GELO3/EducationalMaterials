#include <iostream>
#include <string>
using namespace std;
int main()
{
  string s1("Рыба");
  string s2 = "Мясо";
  string s3;
  s3 = s1;
  cout << "s3 >> " << s3 << endl;
  s3 = "Ни " + s1 + " ни ";
  s3 += s2;
  cout << "s3 >> " << s3 << endl;
  s1.swap(s2);
  cout << s1 << " не " << s2 << endl;
  return 0;
}