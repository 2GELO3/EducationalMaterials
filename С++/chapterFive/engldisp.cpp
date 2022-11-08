#include <iostream>
using namespace std;
struct Distance
{
  int feet;
  float inches;
};

void engldisp(Distance);
int main()
{
  Distance d1, d2;

  cout << "Введите число футов: ";
  cin >> d1.feet;
  cout << "Введите число дюймов: ";
  cin >> d1.inches;

  cout << "\nВведите число футов: ";
  cin >> d2.feet;
  cout << "Введите число дюймов: ";
  cin >> d2.inches;
  cout << "\nd1 = ";
  engldisp(d1);
  cout << "\nd2 = ";
  engldisp(d2);
  cout << endl;
  return 0;
}
void engldisp(Distance dd)
{
  cout << dd.feet << "\'-" << dd.inches << "\"";
}