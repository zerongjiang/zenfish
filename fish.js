function FishNode(angle){
  this.angle = angle;
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
  var leyeStyle = ctx.createRadialGradient(leyeX,leyeY,0,leyeX,leyeY,this.eyeSize*1.2);
  leyeStyle.addColorStop(0, 'rgba(0,0,0,1)');
  leyeStyle.addColorStop(0.1, 'rgba(0,0,0,0.9)');
  leyeStyle.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = leyeStyle;
  ctx.beginPath();
  ctx.arc(leyeX,leyeY,this.eyeSize,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();

  var reyeX = Math.cos(Math.PI*3/4)*this.headSize;
  var reyeY = -Math.sin(Math.PI*3/4)*this.headSize;
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
  ctx.scale(0.2,1)
  ctx.arc(0,0,this.boneSize,0,Math.PI*2,true);
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
    ctx.translate(-210,-100);
  }
  else if(this.lr == "r"){
    ctx.scale(0-this.scale,this.scale);
    ctx.translate(-210,-100);
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

function FishTail(angle,scale){
  FishNode.call(this,angle);
  this.scale = scale;
}
FishTail.prototype.draw = function(){
  ctx.save();
  ctx.scale(this.scale,this.scale);
  ctx.translate(-160,0);
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.beginPath();
  ctx.moveTo(9.2440678,69.740678);
  ctx.bezierCurveTo(9.1474869,58.583844,23.997949,17.122299,138.27585,8.3703387);
  ctx.bezierCurveTo(138.27585,8.3703387,100.47229999999999,29.959476000000002,95.265255,83.47839);
  ctx.bezierCurveTo(94.144829,94.99432,76.833572,101.72138,62.140678,101.70975);
  ctx.bezierCurveTo(46.32966,101.69723,9.3343332,80.167955,9.2440678,69.740678);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(142.25593,7.3432201);
  ctx.bezierCurveTo(148.25743,4.082971799999999,305.13119,6.7968089,312.24406999999997,71.281356);
  ctx.bezierCurveTo(313.77374999999995,85.149204,300.68100999999996,105.72651,287.33644,105.68983);
  ctx.bezierCurveTo(269.17118,105.63993,235.72373,86.688135,235.72373,86.688135);
  ctx.bezierCurveTo(235.72373,86.688135,250.25235999999998,142.92732,246.76524999999998,181.43983);
  ctx.bezierCurveTo(240.89190999999997,183.70668,219.34096999999997,212.84597,211.07288,213.02373);
  ctx.bezierCurveTo(201.52679,213.22896,205.02056,211.05052,195.15254,211.22627);
  ctx.bezierCurveTo(175.86118,211.56984,175.64425999999997,244.42816,162.54153,244.35085);
  ctx.bezierCurveTo(145.01193,244.24742,142.02961,215.87323,130.70085,202.49576000000002);
  ctx.bezierCurveTo(116.87486,186.16946,102.53579,176.33114,83.059096,176.99937);
  ctx.bezierCurveTo(82.962228,79.328651,122.00529,36.055052,142.25593,7.3432201);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}


function GoldFish(x,y){
  this.x = x;
  this.y = y;

  this.fishNodes = new Array();
  this.angle = 1;
  this.angles = new Array();
  this.scale = 0.5;
  this.free = true;
  
}
GoldFish.prototype.nodeDis = new Array(20,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
GoldFish.prototype.numOfBodies = 12;
GoldFish.prototype.bodySizes = new Array(20,28,36,40,0,29,24,20,17,14,11,10);
GoldFish.prototype.boneSizes = new Array(0,0,30,30,0,30,30,30,30,30,30,30);
GoldFish.prototype.numOfTails = 12;

GoldFish.prototype.init = function(){
  for(var i=0; i< 1+this.numOfBodies+this.numOfTails; i++){
    this.angles[i] = 1;
  }
  
  this.fishNodes.push(new FishHead(this.angles[0],60,20));
  for(var i=0; i < this.numOfBodies; i++){
    //this.fishNodes.push(new FishBody(0,20+20*Math.sin(Math.PI*(i+3)/this.numOfBodies),0.1+i/this.numOfBodies/10,30+3*i));
	this.fishNodes.push(new FishBody(this.angles[1+i],this.bodySizes[i],this.boneSizes[i],0.1+i*0.01,33+3*i));
  }
  for(var i=0; i< this.numOfTails; i++){
    this.fishNodes.push(new FishTail(this.angles[1+this.numOfBodies+i],0.2+i*0.05));
  }
  
}

GoldFish.prototype.draw = function(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.save();
  ctx.translate(this.x,this.y);
  ctx.scale(this.scale, this.scale);
  ctx.rotate(Math.PI*this.angle/90);
  for(var i in this.fishNodes){
	this.fishNodes[i].angle = this.angles[i];
    ctx.rotate(Math.PI*this.fishNodes[i].angle/90);
    this.fishNodes[i].draw();
	ctx.translate(0,this.nodeDis[i]);
  }
  ctx.restore();
}


var canvas = document.getElementById('fish');  
if (canvas.getContext){  
  var ctx = canvas.getContext('2d');  
  var gf = new GoldFish(300,300);
  gf.init();
  var time=0;
  window.setInterval(function(){
	
	
	gf.angles.splice(0,0,0);
	gf.angles.pop();
	gf.draw();
	gf.x = gf.x + 8*Math.sin(Math.PI*gf.angle/90);
	gf.y = gf.y - 8*Math.cos(Math.PI*gf.angle/90);
	
	
  },50);
  
}  
