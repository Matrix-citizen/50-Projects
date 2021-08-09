const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = '';
      setTimeout(() => focusInput(codes[idx + 1]), 10);
    } else if (e.key === 'Backspace') {
      setTimeout(() => focusInput(codes[idx - 1]), 10);
    } else {
      // Prevent from typing (comma, dot, e)
      e.preventDefault();
    }
  });
});

function focusInput(input) {
  if (input) {
    input.focus();
  }
}