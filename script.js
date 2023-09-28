const days = document.querySelector(".days .num");
const hours = document.querySelector(".hours .num");
const minutes = document.querySelector(".minutes .num");
const seconds = document.querySelector(".seconds .num");

// Calculate the target time
const targetTime = new Date();
targetTime.setDate(targetTime.getDate() + 1);
targetTime.setHours(18, 0, 0, 0);

// Function to update the countdown
function updateCountdown() {
  const currentTime = new Date();
  const timeDifference = targetTime - currentTime;

  if (timeDifference <= 0) {
    // Stop the countdown when the target time is reached
    clearInterval(countFunction);
    days.textContent = "0";
    hours.textContent = "0";
    minutes.textContent = "0";
    seconds.textContent = "0";
  } else {
    // Calculate the remaining time
    const secondsValue = Math.floor((timeDifference / 1000) % 60);
    const minutesValue = Math.floor((timeDifference / (1000 * 60)) % 60);
    const hoursValue = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const daysValue = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Update the displayed countdown
    days.textContent = daysValue;
    hours.textContent = hoursValue;
    minutes.textContent = minutesValue;
    seconds.textContent = secondsValue;
  }
}

// Initialize the countdown
updateCountdown();
const countFunction = setInterval(updateCountdown, 1000);
