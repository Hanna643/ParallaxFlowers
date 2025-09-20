// window.addEventListener('scroll', e => {
//     document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
// })

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    // Ограничиваем движение вверх, но разрешаем движение вниз
    const limitedScroll = Math.max(0, scrollY);
    document.body.style.setProperty('--scrollTop', `${limitedScroll}px`);
});


function openBotim() {
    // 1. Пытаемся открыть приложение напрямую
    window.location.href = 'botim://app/chat?number=79958830193';
    
    // 2. Если приложения нет, через 500ms пользователь будет перенаправлен на страницу установки
    setTimeout(function() {
        // Проверяем, на каком устройстве находится пользователь
        if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
            window.location.href = 'https://apps.apple.com/app/botim/id1474264132'; // App Store
        } else if (/Android/.test(navigator.userAgent)) {
            window.location.href = 'https://play.google.com/store/apps/details?id=com.botim.me'; // Google Play
        } else {
            window.location.href = 'https://botim.me/cc/79958830193'; // Для ПК или других устройств
        }
    }, 500);
}