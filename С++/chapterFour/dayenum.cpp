#include <iostream>
using namespace std;
enum days_of_week
{
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
};

int main()
{
  days_of_week day1, day2;

  day1 = Mon;
  day2 = Thu;
  int diff = day2 - day1;
  cout << "Разница в днях: " << diff << endl;
  if (day1 < day2)
  {
    cout << "day1 наступит раньше, чем day2\n";
  }
  return 0;
}
