#include <iostream>
using namespace std;
struct Distance
{
  int feet;
  float inches;
};

void engldisp(Distance);
void engldisp(float);
int main()
{
  Distance d1;
  float d2;
  cout << "\nВведите число футов: ";
  cin >> d1.feet;
  cout << "Введите число дюймов: ";
  cin >> d1.inches;
  cout << "Введите длину в дюймах: ";
  cin >> d2;
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
void engldisp(float dd)
{
  int feet = static_cast<int>(dd / 12);
  float inches = dd - feet * 12;
  cout << feet << "\'-" << inches << "\"";
}