
count = 0;
document.querySelectorAll('.heart-btn').forEach(heart => {
  heart.addEventListener('click', function (e) {
    e.preventDefault();
    count++;
    console.log(count);

    const availableHeart = parseInt(
      document.getElementById('heart-counts').innerText,
    );
    console.log(availableHeart);
    const newavailableHeart = availableHeart + count;
    document.getElementById('heart-counts').innerText = newavailableHeart;
    count = 0;
  });
});
