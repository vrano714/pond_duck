 {
  ret = 0;
  if (x > 0) {
    ret = Math.atan_deg(y / x);
  } else if (y >= 0 && x < 0) {
    ret = Math.atan_deg(y / x) + 180;
  } else if (y < 0 && x < 0) {
    ret = Math.atan_deg(y / x) - 180;
  } else if (y > 0 && x == 0) {
    ret = 90;
  } else if (y < 0 && x == 0) {
    ret = -90;
  } else if (y == 0 && x == 0) {
    ret = 0;
  }
  return ret;
}

function pow2(x) {
  return x * x;
}

function diff(x, y) {
  return x + y;
}


prev_health = health();
prev_x = loc_x();
prev_y = loc_y();
loc_diff = 0;
while (loc_y() > 60) {
  if (loc_y() >= 60) {
    swim(270);
  }
}
stop();
while (true) {
  my_rand = (Math.random() - 0.5) * 10;
  if (health() != prev_health) {
    while (loc_diff <= 10) {
      swim(atan2((20 + my_rand) - loc_y(), (57 + my_rand) - loc_x()));
      loc_diff = Math.sqrt(pow2(diff(loc_x(), prev_x)) + pow2(diff(loc_y(), prev_y)));
    }
    prev_health = health();
  }
  deg_count = 0;
  while (deg_count <= 360) {
    scan_result = scan(deg_count);
    if (scan_result <= 70) {
      cannon(deg_count, scan_result);
    }
    deg_count = (typeof deg_count == 'number' ? deg_count : 0) + 5;
  }
  prev_x = loc_x();
  prev_y = loc_y();
  loc_diff = 0;
  while (loc_diff <= 7) {
    swim(atan2((44 + my_rand) - loc_y(), (63 + my_rand) - loc_x()));
    loc_diff = Math.sqrt(pow2(diff(loc_x(), prev_x)) + pow2(diff(loc_y(), prev_y)));
  }
  prev_x = loc_x();
  prev_y = loc_y();
  loc_diff = 0;
}
