while(true){
while (loc_x() <= 95) {
  swim(350);
 if(scan(270))
 { cannon(270, scan(270));}
 if(scan(275)){
  cannon(275, scan(275));}
 if(scan(265)){
 cannon(265, scan(265));}
}
while (loc_y() >= 5) { swim(260);
 if(scan(185))
 { cannon(185, scan(185));}
 if(scan(180)){
  cannon(180, scan(180));}
 if(scan(175)){
 cannon(175, scan(175));}
}
while (loc_x() >= 5) { swim(170);
 if(scan(95))
 { cannon(95, scan(95));}
 if(scan(90)){
  cannon(90, scan(90));}
 if(scan(85)){
 cannon(85, scan(85));}
}
while (loc_y() <= 95) { swim(80);
 if(scan(5)){
  cannon(5, scan(5));}
 if(scan(0))
 { cannon(0, scan(0));}
 if(scan(355)){
  cannon(355, scan(355));}
}
}