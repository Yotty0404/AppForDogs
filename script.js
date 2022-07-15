
$(".start").on("click", function(){
  console.log($("#ball").offset().left);
  console.log($(window).height());
});

var flagReverseX = false;
var flagReverseY = false;
var speedX = 15;
var speedY = 15;

var ballTop = 0;
var ballLeft = 0;
var nextBallTop = 0;
var nextBallLeft = 0;

function animate() {
	requestAnimationFrame(animate);
	var vh = $(window).height();
	var vw = $(window).width();
  ballTop = $("#ball").offset().top ;
	ballLeft = $("#ball").offset().left;

  if(flagReverseY){
    nextBallTop = ballTop - speedY;
  }
  else{
    nextBallTop = ballTop + speedY;
  }

  if(flagReverseX){
    nextBallLeft = ballLeft - speedX;
  }
  else{
    nextBallLeft = ballLeft + speedX;
  }

  $('#ball').offset({top:nextBallTop, left:nextBallLeft});
  
  if(ballTop >= vh-200){
    flagReverseY = true;
  }
  if(ballTop <= -50){
    flagReverseY = false;
  }
  
  if(ballLeft >= vw-200){
    flagReverseX = true;
  }
  if(ballLeft <= -50){
    flagReverseX = false;
  }
}

animate()


$(document).on('touchstart', '#ball', touch);
$(document).on('click', '#ball', touch);

const sleep = waitTime => new Promise( resolve => setTimeout(resolve, waitTime) );

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var music = new Audio('https://drive.google.com/uc?export=view&id=1TEHE471dubM9TR7tG6z5gZcCR6opA8ow');

async function touch(event){
  music.play();
  music.currentTime = 0;
  $('#ball').hide();
  await sleep(1000);
  $('#ball').show();
  
	var vh = $(window).height();
	var vw = $(window).width();
  nextBallTop = getRandomInt(vh - 250) -50;
  nextBallLeft = getRandomInt(vw - 250) -50;  

  $('#ball').offset({top:nextBallTop, left:nextBallLeft});
}
