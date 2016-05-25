var lx=loc_x();
var ly=loc_y();
var x,y;
var rad =0;
var sp ;
var dx, dy;

swim(rad,100);

function atan2(y, x) {
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

var count = 0;

while(true){
	sp = speed();
	x = loc_x(); y = loc_y();
	if(count > 0){
		swim(rad,100);
	  count --; continue;
	}
	dx = x-lx; dy = y-ly;
	if(x  < 10 || x  > 90){ // x 方向反転
		
//		rad = atan2(dy,-dx);
		rad+= 180+Math.random()*60-30;
		swim(rad,100);
    count = 50;		
	}
	if(y  < 10 || y  > 90){
//		rad = atan2(-dy,dx);
		rad+= 180+Math.random()*60-30;
		swim(rad,100);
    count = 50;		
	}
	swim(rad,100);
	lx = x; ly = y;
}
