swim(Math.random() * 360);
while (true) {
  if (loc_x() < 5) {
    swim(Math.random() * 90 - 90);
  } else if (95 < loc_x()) {
    swim(Math.random() * 90 + 120);
  } else if (loc_y() < 5) {
    swim(Math.random() * 180);
  } else if (95 < loc_y()) {
    swim(Math.random() * 180 + 120);
  } else if (speed() == 0) {
    swim(315);
  }
  if (scan(45) < 70) {
    cannon(45, scan(45));
  } else if (scan(225) < 70) {
    cannon(225, scan(225));
  } else if (scan(135) < 70) {
    cannon(135, scan(135));
  } else if (scan(315) < 70) {
    cannon(315, scan(315));
  } else if (scan(0) < 70) {
    cannon(0, scan(0));
  } else if (scan(90) < 70) {
    cannon(90, scan(90));
  } else if (scan(180) < 70) {
    cannon(180, scan(180));
  } else if (scan(270) < 70) {
    cannon(270, scan(270));
  }
}