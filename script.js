
const btn = document.querySelector('.btn');
btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = '#4CAF50';
});
btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = '#333';
});