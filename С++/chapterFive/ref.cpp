#include <iostream>
using namespace std;
int main()
{
  void intfrac(float, float &, float &);
  float number, intpart, fracpart;
  do
  {
    cout << "\nВведите вещественное число: ";
    cin >> number;
    intfrac(number, intpart, fracpart);
    cout << "Целая часть равна " << intpart
         << ", дробная часть равна " << fracpart << endl;

  } while (number != 0.0);
  return 0;
}
void intfrac(float n, float &intp, float &fracp)
{
  long temp = static_cast<long>(n);
  intp = static_cast<float>(temp);
  fracp = n - intp;
}