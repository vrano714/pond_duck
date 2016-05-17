var Angle;

var ChangeAngle;

var BattleStartHealth;

var Detect;

var AngleJudge;

var MoveAngle;

var TimeCount;

var TempAngle;

var MoveComplete;




Angle = 0;

ChangeAngle = 7;

BattleStartHealth = 65;

Detect = 0;

AngleJudge = 0;

MoveAngle = 0;

TimeCount = 0;

TempAngle = 0;

MoveComplete = 0;


while (health() >= BattleStartHealth) {

  if (speed() == 0) {

    swim(Math.random() * 360);

  }

}
while (true) {

  Angle = 0;

  while (Detect == 0) {

    if (scan(Angle) >= 70) {

      Angle = (typeof Angle == 'number' ? Angle : 0) + ChangeAngle;

      if (Angle > 360) {

        Detect = 2;

      }

    } else {

      Detect = 1;

    }

  }

  while (Detect == 1) {

    if (scan(Angle) <= 70) {

      cannon(Angle, scan(Angle));

    } else {

      TimeCount = 0;

      while (TimeCount <= 9) {

        TempAngle = Angle - (10 + Math.random() * 15);
        if (scan(TempAngle) < 70) {

          cannon(TempAngle, scan(TempAngle));

          Angle = TempAngle;

          TimeCount = 100;

        }

        TimeCount = (typeof TimeCount == 'number' ? TimeCount : 0) + 1;

        if (TimeCount == 10) {

          Detect = 2;

        }

      }

    }

  }

  AngleJudge = 0;

  if (Detect == 2) {

    while (AngleJudge == 0) {

      MoveAngle = Math.random() * 360;

      if (loc_x() <= 25) {

        if (MoveAngle < 90 || MoveAngle > 270) {

          AngleJudge = 1;

        }

      } else {

        if (loc_x() >= 75) {

          if (MoveAngle > 90 && MoveAngle < 270) {

            AngleJudge = 1;

          }

        } else {

          if (loc_y() <= 25) {

            if (MoveAngle > 0 && MoveAngle < 180) {

              AngleJudge = 1;

            }

          } else {

            if (loc_y() >= 75) {

              if (MoveAngle > 180 && MoveAngle < 360) {

                AngleJudge = 1;

              }

            } else {

            }

          }

        }

      }

    }

    swim(MoveAngle);

    TimeCount = 0;

    while (TimeCount <= 59) {

      TimeCount = (typeof TimeCount == 'number' ? TimeCount : 0) + 1;

    }

    MoveComplete = 0;

    while (MoveComplete == 0) {

      if (loc_x() <= 25 || loc_x() >= 75) {

        stop();

        MoveComplete = 1;

      } else {

        if (loc_y() <= 25 || loc_y() >= 75) {

          stop();

          MoveComplete = 1;

        } else {

        }

      }

    }

    Detect = 0;

  }

}