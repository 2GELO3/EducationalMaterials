#include <iostream>
#include <cstring>
using namespace std;
///////////////////////////////////////////////////////////
class part
{
private:
  char partname[30];
  int partnumber;
  double cost;

public:
  void setpart(char pname[], int pn, double c)
  {
    strcpy(partname, pname);
    partnumber = pn;
    cost = c;
  }
  void showpart()
  {
    cout << "\nНазвание =" << partname;
    cout << ", номер =" << partnumber;
    cout << ", цена =$" << cost;
  }
};
int main()
{
  part part1, part2;
  part1.setpart("муфта", 4473, 217.55);
  part2.setpart("вороток", 9924, 419.25);
  cout << "\nПервая деталь: ";
  part1.showpart();
  cout << "\nВторая деталь: ";
  part2.showpart();
  cout << endl;
  return 0;
}