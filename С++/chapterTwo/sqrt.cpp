#include <iostream>
#include <cmath>
using namespace std;
int main()
{
  double number, answer;

  cout << "Введите число: ";
  cin >> number;
  answer = sqrt(number);
  cout << "Квадратный корень равен " << answer << endl;
  return 0;
}