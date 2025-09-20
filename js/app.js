// window.addEventListener('scroll', e => {
//     document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
// })

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    // Ограничиваем движение вверх, но разрешаем движение вниз
    const limitedScroll = Math.max(0, scrollY);
    document.body.style.setProperty('--scrollTop', `${limitedScroll}px`);
});


