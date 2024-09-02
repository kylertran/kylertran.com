var current = 0,
    fbla2022 = document.getElementsByClassName("fbla-2022-photos");

var current1 = 0,
    snake = document.getElementsByClassName("snake-photos");

var current2 = 0,
    bestbuy = document.getElementsByClassName("bestbuy-photos");

var current3 = 0,
    lithophane = document.getElementsByClassName("lithophane-photos");

var current4 = 0,
    basketball = document.getElementsByClassName("basketball-photos");

var current5 = 0,
    heartlamp = document.getElementsByClassName("heart-photos");

setInterval(function() {
  for (var i = 0; i < fbla2022.length; i++) {
    fbla2022[i].style.opacity = 0;
  }
  current = (current != fbla2022.length - 1) ? current + 1 : 0;
  fbla2022[current].style.opacity = 1;
}, 3000);

setInterval(function() {
    for (var i = 0; i < snake.length; i++) {
      snake[i].style.opacity = 0;
    }
    current1 = (current1 != snake.length - 1) ? current1 + 1 : 0;
    snake[current1].style.opacity = 1;
}, 3000);

setInterval(function() {
    for (var i = 0; i < bestbuy.length; i++) {
      bestbuy[i].style.opacity = 0;
    }
    current2 = (current2 != bestbuy.length - 1) ? current2 + 1 : 0;
    bestbuy[current2].style.opacity = 1;
}, 3000);

setInterval(function() {
    for (var i = 0; i < lithophane.length; i++) {
      lithophane[i].style.opacity = 0;
    }
    current3 = (current3 != lithophane.length - 1) ? current3 + 1 : 0;
    lithophane[current3].style.opacity = 1;
}, 3000);

setInterval(function() {
  for (var i = 0; i < basketball.length; i++) {
    basketball[i].style.opacity = 0;
  }
  current4 = (current4 != basketball.length - 1) ? current4 + 1 : 0;
  basketball[current4].style.opacity = 1;
}, 3000);

setInterval(function() {
  for (var i = 0; i < heartlamp.length; i++) {
    heartlamp[i].style.opacity = 0;
  }
  current5 = (current5 != heartlamp.length - 1) ? current5 + 1 : 0;
  heartlamp[current5].style.opacity = 1;
}, 3000);