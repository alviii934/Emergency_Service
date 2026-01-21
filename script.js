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

// call Functionality for Emergency

document.querySelectorAll('.call-btn').forEach(call => {
  call.addEventListener('click', function (e) {
    e.preventDefault();

    console.log('Calling');
    const coinCounter = document.getElementById('coin-counter');
    const availableCoin = Number(coinCounter.innerText);

    const emergencyTitle = document.getElementById('emergency-title').innerText;

    const emergencyNumber =
      document.getElementById('emergency-number').innerText;

    console.log(emergencyTitle, emergencyNumber);

    if (availableCoin >= 20) {
      alert(`Calling ${emergencyTitle} ${emergencyNumber}`);
      coinCounter.innerText = availableCoin - 20;
    } else {
      alert(' Not enough coins');
    }
  });
});

// call Functionality for Police
document
  .getElementById('call-btn-police')
  .addEventListener('click', function (e) {
    e.preventDefault();

    console.log('Calling');
    const coinCounter = document.getElementById('coin-counter');
    const availableCoin = Number(coinCounter.innerText);

    const policeTitle = document.getElementById('police-title').innerText;

    const policeNumber = document.getElementById('police-number').innerText;

    console.log(policeTitle, policeNumber, availableCoin);

    if (availableCoin >= 20) {
      alert(`Calling ${policeTitle} ${policeNumber}`);
      coinCounter.innerText = availableCoin - 20;
    } else {
      alert(' Not enough coins ');
    }
  });

// call Functionality for Fire Service
document
  .getElementById('call-btn-fire')
  .addEventListener('click', function (e) {
    e.preventDefault();

    const coinCounter = document.getElementById('coin-counter');
    const availableCoin = Number(coinCounter.innerText);

    const fireTitle = document.getElementById('fire-title').innerText;
    const fireNumber = document.getElementById('fire-number').innerText;

    if (availableCoin >= 20) {
      alert(`Calling ${fireTitle} ${fireNumber}`);
      coinCounter.innerText = availableCoin - 20;
    } else {
      alert('Not enough coins');
    }
  });

// call Functionality for Ambulance Service
document
  .getElementById('call-btn-ambulance')
  .addEventListener('click', function (e) {
    e.preventDefault();

    const coinCounter = document.getElementById('coin-counter');
    const availableCoin = Number(coinCounter.innerText);

    const ambulanceTitle = document.getElementById('ambulance-title').innerText;
    const ambulanceNumber =
      document.getElementById('ambulance-number').innerText;

    if (availableCoin >= 20) {
      alert(`Calling ${ambulanceTitle} ${ambulanceNumber}`);
      coinCounter.innerText = availableCoin - 20;
    } else {
      alert('Not enough coins');
    }
  });

// call Functionality for Woman Child Helpline
document
  .getElementById('call-btn-woman')
  .addEventListener('click', function (e) {
    e.preventDefault();

    const coinCounter = document.getElementById('coin-counter');
    const availableCoin = Number(coinCounter.innerText);

    const womanTitle = document.getElementById('woman-title').innerText;
    const womanNumber = document.getElementById('woman-number').innerText;

    if (availableCoin >= 20) {
      alert(`Calling ${womanTitle} ${womanNumber}`);
      coinCounter.innerText = availableCoin - 20;
    } else {
      alert('Not enough coins');
    }
  });

// call Functionality for Anti Corruption Helpline
document
  .getElementById('call-btn-anti')
  .addEventListener('click', function (e) {
    e.preventDefault();

    const coinCounter = document.getElementById('coin-counter');
    const availableCoin = Number(coinCounter.innerText);

    const antiTitle = document.getElementById('anti-title').innerText;
    const antiNumber = document.getElementById('anti-number').innerText;

    if (availableCoin >= 20) {
      alert(`Calling ${antiTitle}: ${antiNumber}`);
      coinCounter.innerText = availableCoin - 20;
    } else {
      alert('Not enough coins');
    }
  });
