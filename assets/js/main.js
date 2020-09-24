function timerRFL() {
  const timerCounterElement = document.querySelector('.timer__counter');

  let time = 0;
  let timerAction = 'pause';
  
  document.addEventListener('click', function(event) {
    const element = event.target;
  
    if(element.classList.contains('button--start')) startTimer();
    if(element.classList.contains('button--pause')) pauseTimer();
    if(element.classList.contains('button--restart')) restartTimer();
  });
  
  const timerFormat = (seconds) => {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'GMT'
    });
  }
  
  const timerCounter = setInterval(() => {
    if (timerAction == 'start') {
      time++;
      timerCounterElement.innerHTML = timerFormat(time);
    };
  }, 1000);
  
  const startTimer = () => {
    timerAction = 'start';
    timerCounterElement.classList.remove('timer__counter--paused');
  };
  
  const pauseTimer = () => {
    timerAction = 'pause';
    timerCounterElement.classList.add('timer__counter--paused');
  };
  
  const restartTimer = () => {
    timerAction = 'restart';
    timerCounterElement.classList.remove('timer__counter--paused'); 
    
    time = 0;
    timerCounterElement.innerHTML = timerFormat(time);
  };
}

timerRFL();