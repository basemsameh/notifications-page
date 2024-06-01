let navBtn = document.querySelector('.nav-btn');
let numNotifications = document.querySelector('.num-noti');
let newSymbol = document.querySelectorAll('.new .content p span');
let newNotifications = document.querySelectorAll('.notifications .new');

// When click on mark all read button
navBtn.onclick = () => {
  numNotifications.textContent = '0';
  newNotifications.forEach(e => {
    e.classList.remove('new');
  })
  newSymbol.forEach(e => e.style.opacity = 0);
}

// When click on a specific new notification
newNotifications.forEach((ele, index) => {
  ele.onclick = () => {
    ele.classList.remove('new');
    numNotifications.textContent -= 1;
    newSymbol[index].style.opacity = 0;
  }
})