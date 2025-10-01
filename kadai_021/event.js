const btn = document.getElementById('btn');
const text = document.getElementById('text');

// btn.addEventListener('', () => {

btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました'
  }, 2000);
 
});