const ex1 = document.getElementById('ex1');
const ex2 = document.getElementById('ex2');
const ex3 = document.getElementById('ex3');
const ex1btn = document.getElementById('ex1btn');
const ex2btn = document.getElementById('ex2btn');
const ex3btn = document.getElementById('ex3btn');
const previewBtn = document.getElementById('preview-btn');
const content = document.querySelector('.content');

ex1btn.addEventListener('click',  () => {
    ex1.style.display = 'none' ? 'flex' : 'none';
    ex2.style.display = 'none';
    ex3.style.display = 'none';
});

ex2btn.addEventListener('click',  () => {
    ex2.style.display = 'none' ? 'flex' : 'none';
    ex1.style.display = 'none';
    ex3.style.display = 'none';
});

ex3btn.addEventListener('click', () => {
    ex3.style.display = 'none' ? 'flex' : 'none';
    ex1.style.display = 'none';
    ex2.style.display = 'none';
});

previewBtn.addEventListener('click', () => {
    const previewContainer = document.getElementById('preview');
    content.style.height = '800px';
    content.style.padding = '10px';
    previewBtn.style.display = 'none';

    setInterval(() => {
        previewContainer.style.display = 'none' ? 'flex' : 'none';
    }, 100);
});