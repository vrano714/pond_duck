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

function pow2(x) {
  return x * x;
}


var a  = 0;
var x0,y0;
var r=40;
var last_d=health();
var delta = 0.025;

function no_damage(){
  if( last_d == health()) return true;
  last_d = health();
  return false;
}
var sc = 0;
var dsc = 15;
var cancount=0;
while(true){
  x = loc_x();
  y = loc_y();
  
  if( no_damage()){
    x0 = r*Math.cos(a)+50;
    y0 = r*Math.sin(a)+50;

    swim(atan2(y0-loc_y(),x0-loc_x()),100);
    a += delta;
    
    if((d = scan(sc)) < 70){
      cannon(sc,d);
      cancount ++;
    }
    if(cancount>0){
      cancount++;
      if(cancount > 6) {
          dsc =-dsc;
          cancount = 0;
      }
    }
    
    
  }else{
    a -= 0.1;
    x0 = r*Math.cos(a)+50;
    y0 = r*Math.sin(a)+50;
    
    swim(atan2(y0-loc_y(),x0-loc_x()),100);
    
    delta = -delta;  
    if((d = scan(sc)) < 70){
      cannon(sc,d);
    }
  }
  sc += dsc;
}
