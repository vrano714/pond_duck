var x;
var y;

function ca(c) {
  if (scan(c + 3, 5) < 70) {
    cannon(c + 6, scan(c + 3, 20));
  } else if (scan(c - 3, 5) < 70) {
   cannon(c - 6, scan(c - 3, 20)); 
  } else if (scan(c, 5) < 70) {
    cannon(c, scan(c, 20));
  }
  }

x = 0;
y = 0;
while (true) {
  x = (typeof x == 'number' ? x : 0) + 17;
  y = (typeof y == 'number' ? y : 0) + 9;
  if (scan(x, 12) < 30) {
    swim(x - 150);
    ca(x);
  } else if (scan(x + 123, 12) < 30) {
    swim(x - 3);
    ca(x + 123);
  } else if (scan(x - 117, 12) < 30) {
    swim(x - 177);
    ca(x - 117);
  }  else if (loc_y() > 95) {
    swim(190);
  } else if (loc_x() > 95) {
    swim(100);
  } else if (loc_y() < 5) {
    swim(10);
  } else if (loc_x() < 5) {
    swim(280);
  } else if (scan(y, 12) < 70) {
    swim(y - 40);
    ca(y);
  } else if (scan(y + 123, 12) < 70) {
    swim(y + 80);
    ca(y + 123);
  } else if (scan(y - 117, 12) < 70) {
    swim(y - 160);
    ca(y - 117);
  }
}