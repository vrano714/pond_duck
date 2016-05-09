var x;


x = 46;
while (true) {
  swim(x);
  cannon(x + 90, scan(x + 90));
  if (loc_y() == 90 || loc_y() == 10) {
    x = (typeof x == 'number' ? x : 0) + 90;
  }
  if (speed() == 0 || (loc_x() == 90 || loc_x() == 10)) {
    x = (typeof x == 'number' ? x : 0) + 90;
  }
}

;