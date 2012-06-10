function FishNode(ctx){
  this.ctx = ctx;
  this.angle = 0;
  this.x  = 0;
  this.y  = 0;
  this.color = "0,0,0";
};
FishNode.prototype.draw = function(){
};

function FishHead(ctx,headSize,eyeSize){
  FishNode.call(this,ctx);
  this.headSize = headSize;
  this.eyeSize  = eyeSize;
};
FishHead.prototype.draw = function(){
  this.ctx.save();
  var headStyle = this.ctx.createRadialGradient(this.headSize/2,0,0,0,0,this.headSize*1.2);
  headStyle.addColorStop(0, 'rgba('+this.color+',1)');
  headStyle.addColorStop(0.2, 'rgba('+this.color+',0.9)');
  headStyle.addColorStop(1, 'rgba(255,255,255,0)');
  this.ctx.fillStyle = headStyle;
  this.ctx.beginPath();
  this.ctx.arc(0,0,this.headSize,0,Math.PI*2,true);
  this.ctx.closePath();
  this.ctx.fill();

  var leyeX = Math.cos(-Math.PI/4)*this.headSize;
  var leyeY = Math.sin(-Math.PI/4)*this.headSize;
  var leyeStyle = this.ctx.createRadialGradient(leyeX,leyeY,0,leyeX,leyeY,this.eyeSize*1.2);
  leyeStyle.addColorStop(0, 'rgba('+this.color+',1)');
  leyeStyle.addColorStop(0.1, 'rgba('+this.color+',0.9)');
  leyeStyle.addColorStop(1, 'rgba(255,255,255,0)');
  this.ctx.fillStyle = leyeStyle;
  this.ctx.beginPath();
  this.ctx.arc(leyeX,leyeY,this.eyeSize,0,Math.PI*2,true);
  this.ctx.closePath();
  this.ctx.fill();

  var reyeX = Math.cos(Math.PI/4)*this.headSize;
  var reyeY = Math.sin(Math.PI/4)*this.headSize;
  var reyeStyle = this.ctx.createRadialGradient(reyeX,reyeY,0,reyeX,reyeY,this.eyeSize*1.2);
  reyeStyle.addColorStop(0, 'rgba('+this.color+',1)');
  reyeStyle.addColorStop(0.1, 'rgba('+this.color+',0.9)');
  reyeStyle.addColorStop(1, 'rgba(255,255,255,0)');
  this.ctx.fillStyle = reyeStyle;
  this.ctx.beginPath();
  this.ctx.arc(reyeX,reyeY,this.eyeSize,0,Math.PI*2,true);
  this.ctx.closePath();
  this.ctx.fill();

  this.ctx.restore();
}


function FishBody(ctx,bodySize,boneSize,finScale,finOffset){
  FishNode.call(this,ctx);
  this.bodySize = bodySize;
  this.boneSize = boneSize;
  this.leftFin  = new FishFin(this.ctx,"l",finScale);
  this.rightFin = new FishFin(this.ctx,"r",finScale);
  this.finScale = finScale;
  this.finOffset = finOffset;
}
FishBody.prototype.draw = function(){
  this.ctx.save();
  this.ctx.fillStyle = 'rgba('+this.color+',0.1)';
  this.ctx.beginPath();
  this.ctx.arc(0,0,this.bodySize,0,Math.PI*2,true);
  this.ctx.closePath();
  this.ctx.fill();
  this.ctx.restore();
  
  this.ctx.save();
  this.ctx.fillStyle = 'rgba('+this.color+',0.1)';
  this.ctx.beginPath();
  this.ctx.scale(1,0.2)
  this.ctx.arc(0,0,this.boneSize,0,Math.PI*2,true);
  this.ctx.closePath();
  this.ctx.fill();
  this.ctx.restore();

  this.ctx.save();
  this.ctx.translate(0,0-this.finOffset);
  this.leftFin.draw();
  this.ctx.restore();
  this.ctx.save();
  this.ctx.translate(0,this.finOffset);
  this.rightFin.draw();
  this.ctx.restore();
}

function FishFin(ctx,lr,scale){
  this.ctx = ctx;
  this.lr  = lr;
  this.scale = scale;
  this.color = "0,0,0";
}
FishFin.prototype.draw = function(){
  this.ctx.save();
  if(this.lr == "l"){
    this.ctx.scale(this.scale,this.scale);
  }
  else if(this.lr == "r"){
    this.ctx.scale(this.scale,0-this.scale);
  }
  this.ctx.fillStyle = 'rgba('+this.color+',0.05)';
  this.ctx.beginPath();
  this.ctx.moveTo(99.834161,-23.154407);
  this.ctx.bezierCurveTo(99.834161,-23.154407,51.796080999999994,6.640861700000002,-31.220635000000016,-1.6100226000000006);
  this.ctx.bezierCurveTo(-114.23773000000001,-9.861016900000001,-119.83417000000001,-25.446102,-119.83417000000001,-25.446102);
  this.ctx.bezierCurveTo(-119.83417000000001,-25.446102,-84.38890200000002,-50.657461,-37.750163000000015,-45.156748);
  this.ctx.bezierCurveTo(8.888595599999988,-39.656136000000004,16.039912999999984,-35.579472,40.39856099999999,-31.424151000000002);
  this.ctx.bezierCurveTo(67.59919299999999,-26.783683000000003,95.63667099999998,-26.821542,99.834161,-23.154407000000003);
  this.ctx.closePath();
  this.ctx.fill();

  this.ctx.beginPath();
  this.ctx.moveTo(-15.829885,-47.90709);
  this.ctx.bezierCurveTo(-15.829885,-47.90709,-4.0600594,-102.84101999999999,41.069411,-99.70481);
  this.ctx.bezierCurveTo(87.24171100000001,-96.496112,97.129451,-44.333192,95.17029099999999,-35.988969999999995);
  this.ctx.bezierCurveTo(93.77114099999999,-30.029880999999996,77.447561,-30.488346999999994,69.51908399999999,-30.946793999999993);
  this.ctx.bezierCurveTo(59.265587999999994,-31.539486999999994,-11.632438000000008,-44.23998499999999,-15.829885000000004,-47.90709);
  this.ctx.closePath();
  this.ctx.fill();
  this.ctx.restore();
}

function FishTail(ctx,scale){
  FishNode.call(this,ctx);
  this.scale = scale;
}
FishTail.prototype.draw = function(){
  this.ctx.save();
  this.ctx.scale(this.scale,this.scale);
  this.ctx.fillStyle = 'rgba('+this.color+',0.05)';
  this.ctx.beginPath();
  this.ctx.moveTo(-52.425581,-124.5897);
  this.ctx.bezierCurveTo(-43.25419,-124.6691,-9.171051599999998,-112.46136999999999,-1.976571800000002,-18.52001299999999);
  this.ctx.bezierCurveTo(-1.976571800000002,-18.52001299999999,-19.723750000000003,-49.59616899999999,-63.718563,-53.87657999999999);
  this.ctx.bezierCurveTo(-73.18514400000001,-54.79762699999999,-78.71506600000001,-69.02821399999999,-78.705517,-81.10640699999999);
  this.ctx.bezierCurveTo(-78.695217,-94.10374399999999,-60.997258,-124.51549,-52.425581,-124.5897);
  this.ctx.closePath();
  this.ctx.fill();
  this.ctx.beginPath();
  this.ctx.moveTo(-1.1326777,-15.248245);
  this.ctx.bezierCurveTo(1.5473723000000001,-10.314784,-0.6835076999999998,118.64150000000001,-53.692227,124.48856);
  this.ctx.bezierCurveTo(-65.092129,125.74601000000001,-82.00744800000001,114.98328000000001,-81.977288,104.01353);
  this.ctx.bezierCurveTo(-81.936288,89.080989,-66.357178,61.585891000000004,-66.357178,61.585891000000004);
  this.ctx.bezierCurveTo(-66.357178,61.585891000000004,-112.58791000000001,73.528976,-144.24665,70.662439);
  this.ctx.bezierCurveTo(-146.11008999999999,65.83433000000001,-170.06367999999998,48.11863400000001,-170.20979,41.32193900000001);
  this.ctx.bezierCurveTo(-170.3785,33.47468400000001,-168.58774,36.346700000000006,-168.73221,28.234803000000007);
  this.ctx.bezierCurveTo(-169.01464,12.376572000000007,-196.02542,12.198251000000006,-195.96187,1.427309200000007);
  this.ctx.bezierCurveTo(-195.87687,-12.982708999999993,-172.55219,-15.434284999999992,-161.55541,-24.746962999999994);
  this.ctx.bezierCurveTo(-148.13457,-36.11244599999999,-140.04711,-47.89973099999999,-140.59642,-63.910312999999995);
  this.ctx.bezierCurveTo(-60.307418,-63.989912999999994,-24.734876999999997,-31.895048999999993,-1.132677699999988,-15.248244999999997);
  this.ctx.closePath();
  this.ctx.fill();
  this.ctx.restore();
}


function GoldFish(ctx){
  this.ctx = ctx;

  this.x = 0;
  this.y = 0;
  this.angle =0;

  this.fishHead;
  this.fishNodes = new Array();

  this.speed = 1;
  this.agility = 6;
  this.scale = 0.3;
  this.nodeDis = 10*this.scale;
  
  this.free = true;
  this.chasingX = 0;
  this.chasingY = 0;
  this.shaking = false;
  this.timer = 0;
}
GoldFish.prototype.numOfBodies = 12;
GoldFish.prototype.bodySizes = new Array(20,28,36,40,0,29,24,20,17,14,11,10);
GoldFish.prototype.boneSizes = new Array(0,0,30,30,0,30,30,30,30,30,30,30);
GoldFish.prototype.numOfTails = 12;
GoldFish.prototype.color = {black:"0,0,0", red:"255,0,0"};

GoldFish.prototype.init = function(x,y){
  this.x = x;
  this.y = y;
    

  this.fishNodes.push(new FishHead(this.ctx,60,20));
  this.fishNodes[0].ctx = this.ctx;
  this.fishNodes[0].x = this.x;
  this.fishNodes[0].y = this.y;

  this.fishHead = this.fishNodes[0];

  for(var i=1; i < 1+this.numOfBodies; i++){
    this.fishNodes.push(new FishBody(this.ctx,this.bodySizes[i-1],this.boneSizes[i-1],0.2+i*0.02,33+3*i));
    this.fishNodes[i].ctx = this.ctx;
    this.fishNodes[i].x = this.fishNodes[i-1].x-this.nodeDis;
    this.fishNodes[i].y = this.fishNodes[i-1].y;
  }
  for(var i = 1+this.numOfBodies; i< 1+this.numOfBodies+this.numOfTails; i++){
    this.fishNodes.push(new FishTail(this.ctx,0.2+(i-1-this.numOfBodies)*0.05));
    this.fishNodes[i].ctx = this.ctx;
    this.fishNodes[i].x = this.fishNodes[i-1].x-this.nodeDis;
    this.fishNodes[i].y = this.fishNodes[i-1].y;
  }
}

GoldFish.prototype.draw = function(){
  this.ctx.clearRect(0,0,canvas.width,canvas.height);
  for(var i in this.fishNodes){
    this.ctx.save();
    this.ctx.translate(this.fishNodes[i].x,this.fishNodes[i].y);
    this.ctx.rotate(Math.PI*this.fishNodes[i].angle/180);
    this.ctx.scale(this.scale, this.scale);
    this.fishNodes[i].draw();
    this.ctx.restore();
  }
}
GoldFish.prototype.next = function(){
  for(var j = 0; j < this.speed; j++){
    this.timer = (this.timer + 1)%36;
    this.angle = this.angle + Math.sin(Math.PI*this.timer*10/180)*2;

    this.x = this.x + this.nodeDis*Math.cos(Math.PI*this.angle/180);
    this.y = this.y + this.nodeDis*Math.sin(Math.PI*this.angle/180);

    for(var i = this.fishNodes.length-1; i >= 1 ; i--){
      this.fishNodes[i].x = this.fishNodes[i-1].x ;
      this.fishNodes[i].y = this.fishNodes[i-1].y ;
      this.fishNodes[i].angle = this.fishNodes[i-1].angle;
    }

    this.fishNodes[0].x = this.x;
    this.fishNodes[0].y = this.y;
    this.fishNodes[0].angle = this.angle;
  }

}
GoldFish.prototype.hit = function(x,y){
  if( Math.sqrt( Math.pow((x-this.x),2)+Math.pow((y-this.y),2) ) < 10){
    return true;
  }
  else{
    return false;
  }
}

GoldFish.prototype.chase = function(x,y){
  var angleXY = Math.atan2(y-this.y,x-this.x);
  var angle   = Math.PI*this.angle/180;
  if( Math.abs(angleXY-angle) <= Math.PI*this.agility/180 || Math.abs(angleXY-angle) >= Math.PI*(360-this.agility)/180 ){
  }
  else if( Math.abs(angleXY-angle) <= Math.PI){
    if( angleXY > angle){
      this.angle = this.angle + Math.random()*this.agility;
      if(this.angle > 180){
        this.angle = this.angle - 360;
      }
    }
    else{
      this.angle = this.angle - Math.random()*this.agility;
      if(this.angle < -180){
        this.angle = this.angle + 360;
      }
    }
  }
  else if( Math.abs(angleXY-angle) > Math.PI){
    if( angleXY < angle){
      this.angle = this.angle + Math.random()*this.agility;
      if(this.angle > 180){
        this.angle = this.angle - 360;
      }
    }
    else{
      this.angle = this.angle - Math.random()*this.agility;
      if(this.angle < -180){
        this.angle = this.angle + 360;
      }
    }
  }
  this.next();
}
