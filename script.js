
const btn = document.querySelector('.btn');
btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = '#4CAF50';
});
btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = '#333';
});

document.getElementById('ctaButton').addEventListener('click', function() {
    alert('Obrigado por se inscrever! Você receberá mais informações em breve.');
});
