var wImg = document.getElementById("wrap").getElementsByTagName("button");
for(var i=0;i<wImg.length;i++){
	wImg[i].onclick = function(){
		var siblings = this.parentNode.children;
		for (var j=0;j<siblings.length;j++ )
		{
			siblings[j].className = 'btn';
			
		}
		this.className = 'on';		
	}
}


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

var navigation = document.getElementsByClassName("navigation")[0];
var siblings = document.getElementsByTagName("a")[1];
navigation.onmouseout = function(){
	siblings.className = 'selected';
}
navigation.onmouseover = function(){
	siblings.className = 'navigationlink';
}
