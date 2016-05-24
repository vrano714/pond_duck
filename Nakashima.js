var LocInitiate = false;
var SwimAngle = 0;
var Going = 1;
var Distance = 0;

swim(0,50);

//所定の位置まで移動
while(LocInitiate == false) {
  if (loc_x() >= 49 && loc_x() <= 51) {
    stop();
    LocInitiate = true;
  }
}

//円形移動
while(true) {
  if (speed() == 0) { //移動処理
    Going *= -1;
    SwimAngle += 180;
  }
  swim(SwimAngle, 50);
  if (Going == 1) {
    SwimAngle -= 10;
  }
  else {
    SwimAngle += 10;
  }
  
  //敵との衝突回避＆射撃処理
  for (var i = 0; i < 17; i++) {
    Distance = scan(SwimAngle + (i * 20), 10);
    if (Distance <= 70) {
      cannon(SwimAngle + (i * 20), Distance);
      if (Distance <= 30 && (i <= 2 || i >= 16)) {
        Going *= -1;
        SwimAngle += 180;
      }
    }
  }
}