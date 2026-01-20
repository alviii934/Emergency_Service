// heart count functoionality
count = 0;
document.querySelectorAll('.heart-btn').forEach(heart => {
  heart.addEventListener('click', function (e) {
    e.preventDefault();
    count++;

    const availableHeart = parseInt(
      document.getElementById('heart-counts').innerText,
    );
    const newavailableHeart = availableHeart + count;
    document.getElementById('heart-counts').innerText = newavailableHeart;
    count = 0;
  });
});

// copy count functoionality
count1 = 0;
document.querySelectorAll('.copy-btn').forEach(copy => {
  copy.addEventListener('click', function (e) {
    e.preventDefault();
    count1++;
    const availableCopy = parseInt(
      document.getElementById('copy-counter').innerText,
    );
    const newavailableCopy = availableCopy + count1;
    document.getElementById('copy-counter').innerText = newavailableCopy;
    count1 = 0;
  });
});

// call Functionality
