#include <iostream>
#include <iomanip>
using namespace std;

const int DISTRICTS = 4;
const int MONTHS = 3;

int main()
{
  int d, m;
  double sales[DISTRICTS][MONTHS];

  cout << endl;
  for (int d = 0; d < DISTRICTS; d++)
  {
    for (int m = 0; m < MONTHS; m++)
    {
      cout << "Введите объём продаж для отдела" << d + 1;
      cout << ", за месяц " << m + 1 << ": ";
      cin >> sales[d][m];
    }
  }
  cout << "\n\n";
  cout << " Месяц\n";
  cout << " 1 2 3";
  for (d = 0; d < DISTRICTS; d++)
  {
    cout << "\nОтдел " << d + 1;
    for (m = 0; m < MONTHS; m++)
      cout << setiosflags(ios::fixed)
           << setiosflags(ios::showpoint)
           << setprecision(2)
           << setw(10)
           << sales[d][m];
  }
  cout << endl;
  return 0;
}