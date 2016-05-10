while(true){if (speed() == 0) {
  swim(Math.random());
}
while (loc_x() <= 95) {
  if (scan(0) <= 70) {
    cannon(0, scan(0));
  } else if (scan(90) <= 70) {
    cannon(90, scan(90));
  } else if (scan(180) <= 70) {
    cannon(180, scan(180));
  } else if (scan(270) <= 70) {
    cannon(270, scan(270));
  } else {
    swim(0);
  }
}
stop();
while (loc_y() >= 5) {
  if (scan(0) <= 70) {
    cannon(0, scan(0));
  } else if (scan(90) <= 70) {
    cannon(90, scan(90));
  } else if (scan(180) <= 70) {
    cannon(180, scan(180));
  } else if (scan(270) <= 70) {
    cannon(270, scan(270));
  } else {
    swim(270);
  }
}
stop();
while (loc_x() >= 5) {
  if (scan(0) <= 70) {
    cannon(0, scan(0));
  } else if (scan(90) <= 70) {
    cannon(90, scan(90));
  } else if (scan(180) <= 70) {
    cannon(180, scan(180));
  } else if (scan(270) <= 70) {
    cannon(270, scan(270));
  } else {
    swim(180);
  }
}
stop();
while (loc_y() <= 95) {
  if (scan(0) <= 70) {
    cannon(0, scan(0));
  } else if (scan(90) <= 70) {
    cannon(90, scan(90));
  } else if (scan(180) <= 70) {
    cannon(180, scan(180));
  } else if (scan(270) <= 70) {
    cannon(270, scan(270));
  } else {
    swim(90);
  }
}
stop();
}
