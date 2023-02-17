var typingAnimation = document.querySelector('.typing-animation');
var text = typingAnimation.textContent;
typingAnimation.textContent = '';

var timer;

function startTypingAnimation() {
  var i = 0;
  timer = setInterval(function() {
    if (i < text.length) {
      typingAnimation.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
      setTimeout(function() {
        typingAnimation.textContent = '';
        startTypingAnimation();
      }, 5000); // Wait for 20 seconds before starting the animation again
    }
  }, 100);
}

startTypingAnimation();
