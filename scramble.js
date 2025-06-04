const input = document.getElementById('scrambleInput');
let interval;

function scramble(value) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let iterations = 0;
  clearInterval(interval);
  input.disabled = true;
  input.classList.add('scrambling');
  interval = setInterval(() => {
    const scrambled = value.split('').map((char, idx) => {
      if (idx < iterations) return char;
      return chars[Math.floor(Math.random() * chars.length)];
    }).join('');
    input.value = scrambled;
    if (iterations >= value.length) {
      clearInterval(interval);
      input.value = value;
      input.disabled = false;
      input.classList.remove('scrambling');
    }
    iterations += 1;
  }, 50);
}

input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    scramble(input.value);
  }
});
