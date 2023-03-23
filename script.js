'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '润,pleas,just run';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (score > 1) {
    if (!guess) {
      //   document.querySelector('.message').textContent = '请输入数字💬';
      displayMessage('请输入数字💬');
    } else if (guess === secretNumber) {
      //   document.querySelector('.message').textContent = '恭喜你猜对了🎉';
      displayMessage('恭喜你猜对了🎉');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = '#60b347';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      document.querySelector('.highscore').textContent = highscore;
    } else if (guess > secretNumber) {
      //   document.querySelector('.message').textContent = '猜大了📈';
      displayMessage('恭喜你猜对了🎉');
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
      //   document.querySelector('.message').textContent = '猜小了📉';
      displayMessage('猜小了📉');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    // document.querySelector('.message').textContent = '败北，再来一次吧😭';
    displayMessage('败北，再来一次吧😭');
    document.querySelector('.score').textContent = 0;
  }
});

// document.querySelector('.again').addEventListener('click', function () {
//   location.reload();
// });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = '请输入数字💬';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
