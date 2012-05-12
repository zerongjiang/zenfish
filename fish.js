function FishNode(angle){
  this.angle = Math.PI*angle/90;
  this.elements = new Array();
}
FishNode.prototype.draw = function(){
}

function FishHead(angle,headSize,eyeSize){
  FishNode.call(angle);
  this.headSize = headSize;
  this.eyeSize  = eyeSize;
}

FishHead.prototype.draw = function(){
  ctx.save();
  var headStyle = ctx.createRadialGradient(0,-this.headSize/2,0,0,0,this.headSize*1.2);
  headStyle.addColorStop(0, 'rgba(0,0,0,1)');
  headStyle.addColorStop(0.2, 'rgba(0,0,0,0.9)');
  headStyle.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = headStyle;
  ctx.beginPath();
  ctx.arc(0,0,this.headSize,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();

  var leyeX = Math.cos(Math.PI/4)*this.headSize;
  var leyeY = -Math.sin(Math.PI/4)*this.headSize;
  var leyeStyle = ctx.createRadialGradient(leyeX,leyeY,0,leyeX,leyeY,this.eyeSize*1.5);
  leyeStyle.addColorStop(0, 'rgba(0,0,0,1)');
  leyeStyle.addColorStop(0.2, 'rgba(0,0,0,0.9)');
  leyeStyle.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = leyeStyle;
  ctx.beginPath();
  ctx.arc(leyeX,leyeY,this.eyeSize,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();

  var reyeX = Math.cos(Math.PI*3/4)*this.headSize;
  var reyeY = -Math.sin(Math.PI*3/4)*this.headSize;
  var reyeStyle = ctx.createRadialGradient(reyeX,reyeY,0,reyeX,reyeY,this.eyeSize*1.5);
  reyeStyle.addColorStop(0, 'rgba(0,0,0,1)');
  reyeStyle.addColorStop(0.2, 'rgba(0,0,0,0.9)');
  reyeStyle.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = reyeStyle;
  ctx.beginPath();
  ctx.arc(reyeX,reyeY,this.eyeSize,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();

  ctx.restore();
}

function FishBody(angle,bodySize,finScale,finOffset){
  FishNode.call(this,angle);
  this.bodySize = bodySize;
  this.leftFin  = new FishFin("l",finScale);
  this.rightFin = new FishFin("r",finScale);
  this.finOffset = finOffset;
}
FishBody.prototype.draw = function(){
  ctx.save();
  ctx.fillStyle = 'rgba(0,0,0,0.1)';
  ctx.beginPath();
  ctx.arc(0,this.bodySize,this.bodySize,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
  ctx.save();
  ctx.translate(0-this.finOffset,0);
  this.leftFin.draw();
  ctx.restore();
  ctx.save();
  ctx.translate(this.finOffset,0);
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
    ctx.translate(-210,0);
  }
  else if(this.lr == "r"){
    ctx.scale(0-this.scale,this.scale);
    ctx.translate(-210,0);
  }
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.beginPath();
  ctx.moveTo(159.51078,5.3545826);
  ctx.bezierCurveTo(159.51078,5.3545826,219.10282,99.784923,202.60048,262.97511000000003);
  ctx.bezierCurveTo(186.09808,426.16549000000003,154.92679,437.16694000000007,154.92679,437.16694000000007);
  ctx.bezierCurveTo(154.92679,437.16694000000007,104.50293000000002,367.49025000000006,115.50453000000002,275.8103400000001);
  ctx.bezierCurveTo(126.50599000000001,184.13042000000013,134.65942,170.07289000000011,142.97080000000003,122.18986000000012);
  ctx.bezierCurveTo(152.25189000000003,68.72025200000013,152.17641000000003,13.605773000000127,159.51078,5.354582600000128);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(110.00377,232.72078);
  ctx.bezierCurveTo(110.00377,232.72078,0.1327156100000053,209.58406,6.405329600000002,120.87127999999998);
  ctx.bezierCurveTo(12.822926,30.108163,117.1518,10.671353,133.84055,14.522573);
  ctx.bezierCurveTo(145.75895,17.272973,144.84211000000002,49.360943,143.92526,64.94650299999999);
  ctx.bezierCurveTo(142.73972,85.102083,117.33811,224.4696,110.00377,232.72078);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}


function GoldFish(x,y){
  this.x = x;
  this.y = y;

  this.fishNodes = new Array();
  this.angle = Math.PI*0/90;

  this.head = new FishHead(0,60,20);
  this.fishNodes.push(this.head);
  this.body1 = new FishBody(3,25,0.1,30);
  this.fishNodes.push(this.body1);
}

GoldFish.prototype.nodeDis = 10;

GoldFish.prototype.draw = function(){
  ctx.save();
  ctx.translate(this.x,this.y);
  ctx.rotate(this.angle);
  for(var i in this.fishNodes){
    ctx.rotate(this.fishNodes[i].angle);
    this.fishNodes[i].draw();
    ctx.translate(0,this.nodeDis);
  }
  ctx.restore();
}

function test(){
  ctx.save();
  ctx.fillStyle="#FF0000";
  ctx.fillRect(0,0,150,75);
  ctx.restore();
}

var canvas = document.getElementById('fish');  
if (canvas.getContext){  
  var ctx = canvas.getContext('2d');  
  var gf = new GoldFish(300,100);
  gf.draw();

}  
