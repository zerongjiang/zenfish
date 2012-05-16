function FishNode(angle){
  this.angle = angle;
  this.x  = 0;
  this.y  = 0;
}
FishNode.prototype.draw = function(){
}

function FishHead(angle,headSize,eyeSize){
  FishNode.call(this,angle);
  this.headSize = headSize;
  this.eyeSize  = eyeSize;
}

FishHead.prototype.draw = function(){
  ctx.save();
  var headStyle = ctx.createRadialGradient(this.headSize/2,0,0,0,0,this.headSize*1.2);
  headStyle.addColorStop(0, 'rgba(0,0,0,1)');
  headStyle.addColorStop(0.2, 'rgba(0,0,0,0.9)');
  headStyle.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = headStyle;
  ctx.beginPath();
  ctx.arc(0,0,this.headSize,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();

  var leyeX = Math.cos(-Math.PI/4)*this.headSize;
  var leyeY = Math.sin(-Math.PI/4)*this.headSize;
  var leyeStyle = ctx.createRadialGradient(leyeX,leyeY,0,leyeX,leyeY,this.eyeSize*1.2);
  leyeStyle.addColorStop(0, 'rgba(0,0,0,1)');
  leyeStyle.addColorStop(0.1, 'rgba(0,0,0,0.9)');
  leyeStyle.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = leyeStyle;
  ctx.beginPath();
  ctx.arc(leyeX,leyeY,this.eyeSize,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();

  var reyeX = Math.cos(Math.PI/4)*this.headSize;
  var reyeY = Math.sin(Math.PI/4)*this.headSize;
  var reyeStyle = ctx.createRadialGradient(reyeX,reyeY,0,reyeX,reyeY,this.eyeSize*1.2);
  reyeStyle.addColorStop(0, 'rgba(0,0,0,1)');
  reyeStyle.addColorStop(0.1, 'rgba(0,0,0,0.9)');
  reyeStyle.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = reyeStyle;
  ctx.beginPath();
  ctx.arc(reyeX,reyeY,this.eyeSize,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();

  ctx.restore();
}


function FishBody(angle,bodySize,boneSize,finScale,finOffset){
  FishNode.call(this,angle);
  this.bodySize = bodySize;
  this.boneSize = boneSize;
  this.leftFin  = new FishFin("l",finScale);
  this.rightFin = new FishFin("r",finScale);
  this.finScale = finScale;
  this.finOffset = finOffset;
}
FishBody.prototype.draw = function(){
  ctx.save();
  ctx.fillStyle = 'rgba(0,0,0,0.1)';
  ctx.beginPath();
  ctx.arc(0,0,this.bodySize,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
  
  ctx.save();
  ctx.fillStyle = 'rgba(0,0,0,0.1)';
  ctx.beginPath();
  ctx.scale(1,0.2)
  ctx.arc(0,0,this.boneSize,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.translate(0,0-this.finOffset);
  this.leftFin.draw();
  ctx.restore();
  ctx.save();
  ctx.translate(0,this.finOffset);
  this.rightFin.draw();
  ctx.restore();
}

function FishFin(lr,scale){
  this.lr  = lr;
  this.scale = scale;
}
FishFin.prototype.draw = function(){
  ctx.save();
  if(this.lr == "l"){
    ctx.scale(this.scale,this.scale);
  }
  else if(this.lr == "r"){
    ctx.scale(this.scale,0-this.scale);
  }
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.beginPath();
  ctx.moveTo(99.834161,-23.154407);
  ctx.bezierCurveTo(99.834161,-23.154407,51.796080999999994,6.640861700000002,-31.220635000000016,-1.6100226000000006);
  ctx.bezierCurveTo(-114.23773000000001,-9.861016900000001,-119.83417000000001,-25.446102,-119.83417000000001,-25.446102);
  ctx.bezierCurveTo(-119.83417000000001,-25.446102,-84.38890200000002,-50.657461,-37.750163000000015,-45.156748);
  ctx.bezierCurveTo(8.888595599999988,-39.656136000000004,16.039912999999984,-35.579472,40.39856099999999,-31.424151000000002);
  ctx.bezierCurveTo(67.59919299999999,-26.783683000000003,95.63667099999998,-26.821542,99.834161,-23.154407000000003);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(-15.829885,-47.90709);
  ctx.bezierCurveTo(-15.829885,-47.90709,-4.0600594,-102.84101999999999,41.069411,-99.70481);
  ctx.bezierCurveTo(87.24171100000001,-96.496112,97.129451,-44.333192,95.17029099999999,-35.988969999999995);
  ctx.bezierCurveTo(93.77114099999999,-30.029880999999996,77.447561,-30.488346999999994,69.51908399999999,-30.946793999999993);
  ctx.bezierCurveTo(59.265587999999994,-31.539486999999994,-11.632438000000008,-44.23998499999999,-15.829885000000004,-47.90709);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function FishTail(angle,scale){
  FishNode.call(this,angle);
  this.scale = scale;
}
FishTail.prototype.draw = function(){
  ctx.save();
  ctx.scale(this.scale,this.scale);
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.beginPath();
  ctx.moveTo(-52.425581,-124.5897);
  ctx.bezierCurveTo(-43.25419,-124.6691,-9.171051599999998,-112.46136999999999,-1.976571800000002,-18.52001299999999);
  ctx.bezierCurveTo(-1.976571800000002,-18.52001299999999,-19.723750000000003,-49.59616899999999,-63.718563,-53.87657999999999);
  ctx.bezierCurveTo(-73.18514400000001,-54.79762699999999,-78.71506600000001,-69.02821399999999,-78.705517,-81.10640699999999);
  ctx.bezierCurveTo(-78.695217,-94.10374399999999,-60.997258,-124.51549,-52.425581,-124.5897);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(-1.1326777,-15.248245);
  ctx.bezierCurveTo(1.5473723000000001,-10.314784,-0.6835076999999998,118.64150000000001,-53.692227,124.48856);
  ctx.bezierCurveTo(-65.092129,125.74601000000001,-82.00744800000001,114.98328000000001,-81.977288,104.01353);
  ctx.bezierCurveTo(-81.936288,89.080989,-66.357178,61.585891000000004,-66.357178,61.585891000000004);
  ctx.bezierCurveTo(-66.357178,61.585891000000004,-112.58791000000001,73.528976,-144.24665,70.662439);
  ctx.bezierCurveTo(-146.11008999999999,65.83433000000001,-170.06367999999998,48.11863400000001,-170.20979,41.32193900000001);
  ctx.bezierCurveTo(-170.3785,33.47468400000001,-168.58774,36.346700000000006,-168.73221,28.234803000000007);
  ctx.bezierCurveTo(-169.01464,12.376572000000007,-196.02542,12.198251000000006,-195.96187,1.427309200000007);
  ctx.bezierCurveTo(-195.87687,-12.982708999999993,-172.55219,-15.434284999999992,-161.55541,-24.746962999999994);
  ctx.bezierCurveTo(-148.13457,-36.11244599999999,-140.04711,-47.89973099999999,-140.59642,-63.910312999999995);
  ctx.bezierCurveTo(-60.307418,-63.989912999999994,-24.734876999999997,-31.895048999999993,-1.132677699999988,-15.248244999999997);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}


function GoldFish(x,y){
  this.x = x;
  this.y = y;

  this.angle =0;

  this.fishNodes = new Array();
  this.scale = 0.5;
  this.free = true;
  this.nodeDis = 10*this.scale;
  
}
GoldFish.prototype.numOfBodies = 12;
GoldFish.prototype.bodySizes = new Array(20,28,36,40,0,29,24,20,17,14,11,10);
GoldFish.prototype.boneSizes = new Array(0,0,30,30,0,30,30,30,30,30,30,30);
GoldFish.prototype.numOfTails = 12;

GoldFish.prototype.init = function(){
    
  this.fishNodes.push(new FishHead(0,60,20));
  this.fishNodes[0].x = this.x;
  this.fishNodes[0].y = this.y;
  for(var i=1; i < 1+this.numOfBodies; i++){
    this.fishNodes.push(new FishBody(0,this.bodySizes[i-1],this.boneSizes[i-1],0.2+i*0.02,33+3*i));
    this.fishNodes[i].x = this.fishNodes[i-1].x-this.nodeDis;
    this.fishNodes[i].y = this.fishNodes[i-1].y;
  }
  for(var i = 1+this.numOfBodies; i< 1+this.numOfBodies+this.numOfTails; i++){
    this.fishNodes.push(new FishTail(0,0.2+(i-1-this.numOfBodies)*0.05));
    this.fishNodes[i].x = this.fishNodes[i-1].x-this.nodeDis;
    this.fishNodes[i].y = this.fishNodes[i-1].y;
  }
}

GoldFish.prototype.draw = function(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(var i in this.fishNodes){
    ctx.save();
    ctx.translate(this.fishNodes[i].x,this.fishNodes[i].y);
    ctx.rotate(Math.PI*this.fishNodes[i].angle/180);
    ctx.scale(this.scale, this.scale);
    this.fishNodes[i].draw();
    ctx.restore();
  }
}
GoldFish.prototype.next = function(x,y,angle){

  for(var i=this.numOfBodies+this.numOfTails; i >= 1 ; i--){
    this.fishNodes[i].x = this.fishNodes[i-1].x ;
    this.fishNodes[i].y = this.fishNodes[i-1].y ;
    this.fishNodes[i].angle = this.fishNodes[i-1].angle ;
  }

  this.fishNodes[0].x = x;
  this.fishNodes[0].y = y;
  this.fishNodes[0].angle = angle;

}
GoldFish.prototype.hit = function(x,y){
  if( Math.sqrt( Math.pow((x-this.x),2)+Math.pow((y-this.y),2) ) < 10){
    return true;
  }
  else{
    return false;
  }
}
GoldFish.prototype.go = function(x,y){
  var angleXY = Math.atan2(y-this.y,x-this.x);
  var angle   = Math.PI*this.angle/180;
  if( Math.abs(angleXY-angle) <= Math.PI/30 && Math.abs(angleXY-angle) >= Math.PI*59/30 ){
  }
  else if( Math.abs(angleXY-angle) <= Math.PI){
    if( angleXY > angle){
      this.angle = this.angle + Math.random()*3;
      if(this.angle > 180){
        this.angle = this.angle - 360;
      }
    }
    else{
      this.angle = this.angle - Math.random()*3;
      if(this.angle < -180){
        this.angle = this.angle + 360;
      }
    }
  }
  else if( Math.abs(angleXY-angle) > Math.PI){
    if( angleXY < angle){
      this.angle = this.angle + Math.random()*3;
      if(this.angle > 180){
        this.angle = this.angle - 360;
      }
    }
    else{
      this.angle = this.angle - Math.random()*3;
      if(this.angle < -180){
        this.angle = this.angle + 360;
      }
    }
  }
  this.x = this.x + this.nodeDis*Math.cos(Math.PI*this.angle/180);
  this.y = this.y + this.nodeDis*Math.sin(Math.PI*this.angle/180);
  this.next(this.x,this.y,this.angle);
}


var canvas = document.getElementById('fish');  
if (canvas.getContext){  
  var ctx = canvas.getContext('2d');
  var gf = new GoldFish(0,0);
  gf.init();
  var time=0;
	gf.draw();
  window.setInterval(function(){
    gf.go(500,300);
    gf.draw();
  },50);
}  
