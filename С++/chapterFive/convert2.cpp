#include <iostream>
using namespace std;
float lbstokg(float);
int main()
{
  float lbs;
  cout << "\nВведите весв фунтах: ";
  cin >> lbs;
  cout << "Вес в килограммах равен " << lbstokg(lbs) << endl;
  return 0;
}
float lbstokg(float pounds)
{
  return 0.453592 * pounds;
}