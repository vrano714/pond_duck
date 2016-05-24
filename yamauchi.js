while(true){
while (loc_x() <= 95) {
  swim(0);
 if(scan(0)){
  cannon(0, scan(0));}
 if(scan(270))
 { cannon(270, scan(270));}
 if(scan(180)){
  cannon(180, scan(180));}
 if(scan(90)){
 cannon(90, scan(90));}
}
while (loc_y() >= 5) { swim(270);
   if(scan(0)){
  cannon(0, scan(0));}
 if(scan(270))
 { cannon(270, scan(270));}
 if(scan(180)){
  cannon(180, scan(180));}
 if(scan(90)){
 cannon(90, scan(90));}
}
while (loc_x() >= 5) { swim(180);
 if(scan(0)){
  cannon(0, scan(0));}
 if(scan(270))
 { cannon(270, scan(270));}
 if(scan(180)){
  cannon(180, scan(180));}
 if(scan(90)){
 cannon(90, scan(90));}
}
while (loc_y() <= 95) { swim(90);
 if(scan(0)){
  cannon(0, scan(0));}
 if(scan(270))
 { cannon(270, scan(270));}
 if(scan(180)){
  cannon(180, scan(180));}
 if(scan(90)){
 cannon(90, scan(90));}
}
}