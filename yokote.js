
 var counter;
 var direction

while (true) {
  
  counter = 0;
  direction = Math.random() * 360;
  while(counter<=50){
    if(scan(direction)<70){
      cannon(direction,scan(direction));
    }
  swim(direction);
  counter+=1;
}
}
