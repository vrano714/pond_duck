var cannonDirection;
var counter;
var moveDirection;

cannonDirection = 0;
while (true) {
  moveDirection = Math.random() * 359;
  while (cannonDirection < 180) {
    if (scan(cannonDirection) < 70) {
      cannon(cannonDirection, scan(cannonDirection));
    }
    if (scan(cannonDirection + 180) < 70) {
      cannon(cannonDirection + 180, scan(cannonDirection + 180));
    }
    cannonDirection = (typeof cannonDirection == 'number' ? cannonDirection : 0) + 10;
    if ((loc_x() > 10 && loc_x() < 90) && (loc_y() > 10 && loc_y() < 90)) {
    } else if (loc_x() < 10) {
      moveDirection = 0;
    } else if (loc_x() > 90) {
      moveDirection = 180;
    } else if (loc_y() < 10) {
      moveDirection = 90;
    } else if (loc_y() > 90) {
      moveDirection = 270;
    }
    swim(moveDirection);
  }
  cannonDirection = 0;
}
