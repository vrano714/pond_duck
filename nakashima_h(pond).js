while (true) {
  if ((30 <= loc_x() && loc_x() <= 70) && (30 <= loc_y() && loc_y() <= 70)) {
var my_0_360;
var direction;


while (true) {
  my_0_360 = Math.random() * 360;
  direction = scan(my_0_360);
  while (scan(my_0_360) <= 100) {
    cannon(my_0_360, direction);
    swim(my_0_360);
  }
}

  } else {
    if (30 > loc_x() && 30 > loc_y()) {
      swim(45);
    } else if ((30 <= loc_x() && loc_x() <= 70) && 30 > loc_y()) {
      swim(90);
    } else if (loc_x() > 70 && 30 > loc_y()) {
      swim(135);
    } else if (30 > loc_x() && (30 <= loc_y() && loc_y() <= 70)) {
      swim(0);
    } else if (loc_x() > 70 && (30 <= loc_y() && loc_y() <= 70)) {
      swim(180);
    } else if (30 > loc_x() && loc_y() > 70) {
      swim(315);
    } else if ((30 <= loc_x() && loc_x() <= 70) && loc_y() > 70) {
      swim(270);
    } else if (loc_x() > 70 && loc_y() > 70) {
      swim(225);
    }
  }
}
