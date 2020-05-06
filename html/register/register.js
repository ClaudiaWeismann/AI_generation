var btn = document.getElementsByClassName("avatar")[0];
var box = document.getElementsByClassName("dropdown-content")[0];
btn.onclick=function(e){
	box.style.visibility='visible';
	window.event?window.event.cancelBubble = true :e.stopPropagation();
}
document.onclick=function(e){
	box.style.visibility='hidden';
}
box.onclick=function(e){
    window.event? window.event.cancelBubble = true : e.stopPropagation();
}



function pop (e) {
  let amount = 30;
  if (e.clientX === 0 && e.clientY === 0) {
    const bbox = e.target.getBoundingClientRect();
    const x = bbox.left + bbox.width / 2;
    const y = bbox.top + bbox.height / 2;
    for (let i = 0; i < 30; i++) {
      createParticle(x, y, e.target.dataset.type);
    }
  } else {
    for (let i = 0; i < amount; i++) {
      createParticle(e.clientX, e.clientY + window.scrollY, e.target.dataset.type);
    }
  }
}
function createParticle (x, y, type) {
  const particle = document.createElement('particle');
  document.body.appendChild(particle);
  let width = Math.floor(Math.random() * 30 + 8);
  let height = width;
  let destinationX = (Math.random() - 0.5) * 300;
  let destinationY = (Math.random() - 0.5) * 300;
  let rotation = Math.random() * 520;
  let delay = Math.random() * 200;
  
 switch (type) {
    case 'bubble1':
		particle.style.backgroundImage = 'url(img/bubble1.png)'
		break;
	case 'bubble2':
		particle.style.backgroundImage = 'url(img/bubble2.png)'
		break;
	case 'bubble3':
		particle.style.backgroundImage = 'url(img/bubble3.png)'
		break;
	case 'bubble4':
		particle.style.backgroundImage = 'url(img/bubble4.png)'
		break;
	case 'bubble5':
		particle.style.backgroundImage = 'url(img/bubble5.png)'
		break;
	case 'bubble6':
		particle.style.backgroundImage = 'url(img/bubble6.png)'
		break;
	case 'bubble7':
		particle.style.backgroundImage = 'url(img/bubble7.png)'
		break;

  }
  
  particle.style.width = `${width}px`;
  particle.style.height = `${height}px`;
  const animation = particle.animate([
    {
      transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
      opacity: 1
    },
    {
      transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY}px) rotate(${rotation}deg)`,
      opacity: 0
    }
  ], {
    duration: Math.random() * 1000 + 5000,
    easing: 'cubic-bezier(0, .9, .57, 1)',
    delay: delay
  });
  animation.onfinish = removeParticle;
}
function removeParticle (e) {
  e.srcElement.effect.target.remove();
}

if (document.body.animate) {
	document.getElementsByClassName("bubble7")[0].addEventListener('click',pop);
	document.getElementsByClassName("bubble1")[0].addEventListener('click',pop);
	document.getElementsByClassName("bubble2")[0].addEventListener('click',pop);
	document.getElementsByClassName("bubble3")[0].addEventListener('click',pop);
	document.getElementsByClassName("bubble4")[0].addEventListener('click',pop);
	document.getElementsByClassName("bubble5")[0].addEventListener('click',pop);
	document.getElementsByClassName("bubble6")[0].addEventListener('click',pop);
}

function bubblefloat(a,b,c){
	var img=document.getElementsByClassName(a)[0];
	var bubble = document.getElementById(b);
	var x=c*10;
	var y=c*10;
	var xSpeed=c;
	var ySpeed=c;
	var h=bubble.offsetHeight;
	var w=bubble.offsetWidth;
	function floatimg(){
		   if(x>w||x<0){
			   x=x<0?0:w;
			   xSpeed=-xSpeed;
		   }else{
			   x+=xSpeed;
		   }
		   if(y>h||y<0){
				   y=y<0?0:h;
				   ySpeed=-ySpeed;
		   }else{
				   y+=ySpeed;
		   }
		   img.style.left=x+"px";
		   img.style.top=y+"px"
		   setTimeout(floatimg,50);
	}
	floatimg();
}
bubblefloat("bubble1","div1",4); 
bubblefloat("bubble2","div2",3);
bubblefloat("bubble3","div3",4);
bubblefloat("bubble4","div3",1.5);
bubblefloat("bubble5","div3",3);
bubblefloat("bubble6","div4",2);
bubblefloat("bubble7","div4",4);
