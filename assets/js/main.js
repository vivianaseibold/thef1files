document.addEventListener('DOMContentLoaded', function() {

  const decBtn     = document.getElementById('font-decrease');
  const incBtn     = document.getElementById('font-increase');
  const fontSelect = document.getElementById('font-selector');

  let currentSize = 16;            

  function applyFontSize() {
    document.body.style.fontSize = currentSize + 'px';
  }

  const minimumSize = 10;
  decBtn.addEventListener('click', function() {
    //if current size is bigger than the minimum size, then allow function to work
    //so the font can't go smaller than the minimum
    if (currentSize > minimumSize) {
      currentSize -= 2;
      applyFontSize();
    }
  });
  
  const maximumSize = 30;
  incBtn.addEventListener('click', function() {
    //if current size is smaller than the largest size, then allow function to work
    //so the font can't go larger than the max
    if (currentSize < maximumSize) {
      currentSize += 2;
      applyFontSize();
    }
  });

  fontSelect.addEventListener('change', function() {
    document.body.style.fontFamily = this.value;
  });

  applyFontSize();
});