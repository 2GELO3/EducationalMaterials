#include <iostream>
using namespace std;
struct part
{
  int modelnumber;
  int partnumber;
  float cost;
};
int main()
{
  part part1 = {6244, 373, 217.55F};
  part part2;

  cout << "Модель " << part1.modelnumber;
  cout << ", деталь " << part1.partnumber;
  cout << ", стоимость $" << part1.cost << endl;
  part2 = part1;

  cout << "Модель " << part2.modelnumber;
  cout << ", деталь " << part2.partnumber;
  cout << ", стоимость $" << part2.cost << endl;
  return 0;
}