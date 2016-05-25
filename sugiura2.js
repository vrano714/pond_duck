var scan1;
var scan2;
var scan3;
var scan4;
var scan5;
var scan6;
var scan7;
var scan8;


while (true) {
  if (health() >= 40) {
    while (true) {
      scan1 = scan(0);
      scan2 = scan(45);
      scan3 = scan(90);
      scan4 = scan(135);
      scan5 = scan(180);
      scan6 = scan(225);
      scan7 = scan(270);
      scan8 = scan(315);
      if (scan1 <= 60) {
        cannon(0, scan1);
        swim(180);
      } else if (scan2 <= 60) {
        cannon(45, scan2);
        swim(225);
      } else if (scan3 <= 60) {
        cannon(90, scan3);
        swim(270);
      } else if (scan4 <= 60) {
        cannon(135, scan4);
        swim(315);
      } else if (scan5 <= 60) {
        cannon(180, scan5);
        swim(0);
      } else if (scan6 <= 60) {
        cannon(225, scan6);
        swim(45);
      } else if (scan7 <= 60) {
        cannon(270, scan7);
        swim(90);
      } else if (scan8 <= 60) {
        cannon(315, scan8);
        swim(135);
      }
      if (loc_y() <= 3) {
        swim(135);
      } else if (loc_y() >= 97) {
        swim(315);
      } else if (loc_x() <= 3) {
        swim(45);
      } else if (loc_x() >= 97) {
        swim(225);
      }
    }
  }
}

while (true) {
}
