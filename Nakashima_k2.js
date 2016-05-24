var LocInitiate = false;
var SwimAngle = 0;
var Going = 1;
var Distance = 0;

//所定の位置まで移動
if (loc_x() < 50 && loc_y() > 50) { //左上：黄色ポジション
  swim(0,50);
}
if (loc_x() > 50 && loc_y() > 50) { //右上：黒色ポジション
  swim(180,50);
}
if (loc_x() < 50 && loc_y() < 50) { //左下：緑色ポジション
  swim(0,50);
  SwimAngle = 180;
}
if (loc_x() > 50 && loc_y() < 50) { //右下：赤色ポジション
  swim(180,50);
  SwimAngle = 180;
}

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