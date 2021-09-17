function preload() {
  //load game assets
 heroImage=loadImage("frog.png");
 obImage=loadImage("worm.png");
 bgImage=loadImage("swampImg.png");
  resImage=loadImage("restart.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  hero=createSprite(100,100,50,50);
  hero.addImage(heroImage);
  hero.scale=0.3;
 obgroup=new Group();
 score=0;
 tl=500;
 res=createSprite(windowWidth/2,windowHeight/2);
 res.addImage(resImage);
 res.visible=false;
}

function draw() {
  background(bgImage);
  if (tl===0&&mousePressedOver(res)){
       tl=500;
     res.visible=false;  
  }
  if(mouseX>windowWidth-200&&mouseX<windowWidth+200&&mouseY>windowheight-100&&mouseY<windowHeight+100&&tl===0){
 tl=500;
     res.visible=false;  
}
  if(tl>0){
  if(windowHeight*0.5<mouseY){
  hero.x=mouseX;
  hero.y=mouseY;     
  }
  
  fill("red");
  stroke("blue");
  //ellipse(windowWidth/2,100,100,50);
  if(frameCount%10===0){genobj()}
  for(i=0;i<obgroup.length;i=i+1){
       t=obgroup.get(i);
       if(hero.isTouching(t)){
            t.destroy();
            t=null;
            score=score+1;
       }
       
  }
  tl=tl-1;
  }
drawSprites();


textSize(30);
text("score="+score,100,100);
text("timeleft="+tl,100,200);
text("taget="+50,500,100);
if(tl===0){text("gameover",500,500);
     //text("press space to restart",500,600);
     res.visible=true;
}

}
function genobj(){
     a=createSprite(random(100,windowWidth-100),100,20,20);
     a.addImage(obImage);
     a.scale=random(0.1,0.3);
     a.shapeColor="yellow";
     a.velocityX=random(-10,10);
      a.velocityY=random(10,20);
     a.lifetime=1000;
     obgroup.add(a);
     
}
function touchStarted
(){
if(mouseX>windowWidth-200&&mouseX<windowWidth+200&&mouseY>windowheight-100&&mouseY<windowHeight+100&&tl===0){
 tl=500;
     res.visible=false;  
}
}
