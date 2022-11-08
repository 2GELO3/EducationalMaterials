#include <iostream>
using namespace std;
float lbstokg(float);
int main()
{
  float lbs, kgs;
  cout << "\nВведите вес в фунтах: ";
  cin >> lbs;
  kgs = lbstokg(lbs);
  cout << "Вес в килограммах равен " << kgs << endl;
  return 0;
}
float lbstokg(float pounds)
{
  float kilograms = 0.453592 * pounds;
  return kilograms;
}