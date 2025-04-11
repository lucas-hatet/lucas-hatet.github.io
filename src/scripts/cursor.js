const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.classList.add('active');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('active');
});

document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
});

// Show cursor when entering the page
document.addEventListener('mouseenter', () => {
    cursor.style.display = 'block';
});