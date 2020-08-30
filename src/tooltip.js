const element = document.querySelector('.element');
const tooltip = document.querySelector('.tooltip');

window.addEventListener('mousemove', handleTooltip);

function handleTooltip({ target, clientX, clientY, pageY }) {
  if (target === element) {
    if (pageY < 80) {
      tooltip.style.display = 'block';
      tooltip.classList.add('bottom');
      tooltip.style.left = clientX - 28 + 'px';
      tooltip.style.top = clientY + 45 + 'px';
    } else {
      tooltip.style.display = 'block';
      tooltip.classList.add('top');
      tooltip.style.left = clientX - 28 + 'px';
      tooltip.style.top = clientY - 68 + 'px';
    }
  } else {
    tooltip.classList.remove('bottom');
    tooltip.classList.remove('top');
    tooltip.style.display = 'none';
  }
}
