#include <iostream>
using namespace std;
class Distance
{
private:
  int feet;
  float inches;

public:
  void getdist()
  {
    cout << "\n Введите футы: ";
    cin >> feet;
    cout << " Введите дюймы: ";
    cin >> inches;
  }
  void showdist() const
  {
    cout << feet << "\'-" << inches << '\"';
  }
};
int main()
{
  Distance dist[100];
  int n = 0;
  char ans;
  cout << endl;
  do
  {
    cout << "Введите длину номер " << n + 1;
    dist[n++].getdist();
    cout << "Продолжить ввод (y/n)?: ";
    cin >> ans;
  } while (ans != 'n');
  for (int j = 0; j < n; j++)
  {
    cout << "\nДлина номер " << j + 1 << " : ";
    dist[j].showdist();
  }
  cout << endl;
  return 0;
}