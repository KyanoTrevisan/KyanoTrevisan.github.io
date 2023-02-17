var typingAnimation = document.querySelector('.typing-animation');
var text = typingAnimation.textContent;
typingAnimation.textContent = '';

var i = 0;
var timer = setInterval(function() {
  if (i < text.length) {
    typingAnimation.textContent += text.charAt(i);
    i++;
  } else {
    clearInterval(timer);
  }
}, 100);
