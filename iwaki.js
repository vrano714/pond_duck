var a;
var b;
var c;
var d;


while (true) {
  a = 0;
  while (loc_x() <= 80 && 80 <= loc_y()) {
    swim(0);
    if (scan(a) <= 70) {
      cannon(a, scan(a));
    }
    a = (typeof a == 'number' ? a : 0) + 10;
    if (a >= 20) {
      a = -20;
    }
  }
  b = 270;
  while (loc_x() >= 80 && 20 <= loc_y()) {
    swim(270);
    if (scan(b) <= 70) {
      cannon(b, scan(b));
    }
    b = (typeof b == 'number' ? b : 0) + 10;
    if (b >= 290) {
      b = 250;
    }
  }
  c = 180;
  while (loc_x() >= 20 && 20 >= loc_y()) {
    swim(180);
    if (scan(c) <= 70) {
      cannon(c, scan(c));
    }
    c = (typeof c == 'number' ? c : 0) + 10;
    if (c >= 200) {
      c = 160;
    }
  }
  d = 90;
  while (loc_x() <= 20 && 80 >= loc_y()) {
    swim(90);
    if (scan(d) <= 70) {
      cannon(d, scan(d));
    }
    d = (typeof d == 'number' ? d : 0) + 10;
    if (d >= 110) {
      d = 70;
    }
  }
}
