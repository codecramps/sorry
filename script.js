function showMessage() {
    const thankYouMessage = document.getElementById('thank-you-message');
    thankYouMessage.style.display = 'block';
    document.querySelector('.forgive-button').disabled = true; // Disable button after clicking
  }
  