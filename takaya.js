var x;
var y;

x = 0;
y = 0;
while (true) {
  x = (typeof x == 'number' ? x : 0) + 17;
  y = (typeof y == 'number' ? y : 0) + 9;
  if (scan(x) < 30) {
    swim(x - 180);
    cannon(x, scan(x));
  } else if (scan(x + 123) < 20) {
    swim(x - 33);
    cannon(x + 123, scan(x + 123));
  } else if (scan(x - 117 ) < 20) {
    swim(x - 207);
    cannon(x - 117, scan(x - 117));
  }  else if (loc_y() > 95) {
    swim(200);
  } else if (loc_x() > 95) {
    swim(110);
  } else if (loc_y() < 5) {
    swim(20);
  } else if (loc_x() < 5) {
    swim(290);
  } else if (scan(y) < 70) {
    swim(y - 30);
    cannon(y, scan(y));
  } else if (scan(y + 120) < 70) {
    swim(y + 90);
    cannon(y + 120, scan(y + 120));
  } else if (scan(y - 120) < 70) {
    swim(y - 150);
    cannon(y - 120, scan(y + 120));
  }
}