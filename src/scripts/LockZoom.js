document.addEventListener('gesturestart', function (e) {
e.preventDefault();
});
document.addEventListener('gesturechange', function (e) {
e.preventDefault();
});
document.addEventListener('gestureend', function (e) {
e.preventDefault();
});

document.addEventListener('wheel', function (e) {
if (e.ctrlKey) {
    e.preventDefault();
}
}, { passive: false });