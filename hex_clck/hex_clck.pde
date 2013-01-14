void setup() {
  size(600,600);
  noStroke();
}
 
void draw() {
  float hpos = map(hour(),0,23,30,(width-30));
  float mpos = map(minute(),0,60,30,(width-30));
  float spos = map(second(),0,60,30,(width-30));
  
  float hcol = map(hour(),0,23,0,255);
  float mcol = map(minute(),0,59,0,255);
  float scol = map(second(),0,59,0,255);
  
  String htxt = Integer.toString(hour());
  if (htxt.length() == 1){
     htxt = String.format("%02d", hour()); 
  }
  String mtxt = Integer.toString(minute());
  if (mtxt.length() == 1){
     mtxt = String.format("%02d", minute()); 
  }
  String stxt = Integer.toString(second());
  if (stxt.length() == 1){
     stxt = String.format("%02d", second()); 
  }
  
  color clrtm = color(hcol, mcol, scol);
  hex(clrtm, 6);
    
  background(clrtm);
  
  fill(hcol);
  rect(hpos,0,10,height/3);
  fill(mcol);
  rect(mpos,height/3,10,height/3);
  fill(scol);
  rect(spos, 2*height/3,10,height/3);
 
  fill(240);
  if((mouseX>20)&&(mouseX<width-40)) {
    text((htxt + ":" + mtxt + ":" + stxt ),mouseX,mouseY);
    noCursor();
  }
   
}
 
void mouseMoved() {
   
}



