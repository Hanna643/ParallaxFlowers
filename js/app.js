// window.addEventListener('scroll', e => {
//     document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
// })

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    // Ограничиваем движение вверх, но разрешаем движение вниз
    const limitedScroll = Math.max(0, scrollY);
    document.body.style.setProperty('--scrollTop', `${limitedScroll}px`);
});


function openBotimChat(phoneNumber) {
    // Пробуем ВСЕ возможные схемы глубоких ссылок
    const deepLinks = [
        `botim://chat?phone=${phoneNumber}`,
        `botim://open?phone=${phoneNumber}`,
        `botim://start?phone=${phoneNumber}`,
        `botim://?phone=${phoneNumber}`,
        `botim://send?phone=${phoneNumber}`,
        `https://botim.me/contact/${phoneNumber}` // универсальная ссылка
    ];

    const isIos = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);

    // Пытаемся открыть глубокую ссылку
    function tryOpenLink(link) {
        window.location.href = link;
    }

    // Пробуем открыть первую ссылку в массиве
    tryOpenLink(deepLinks[0]);

    // Если приложения нет, через время перенаправляем в магазин
    let redirectTimer = setTimeout(function() {
        if (isIos) {
            window.location.href = 'https://apps.apple.com/app/botim/id1474264132';
        } else if (isAndroid) {
            window.location.href = 'https://play.google.com/store/apps/details?id=com.botim.me';
        } else {
            // Если это ПК, просто открываем сайт BOTIM
            window.location.href = 'https://botim.me';
        }
    }, 800); // Даем больше времени на перенаправление (800 мс)

    // Сбрасываем таймер, если уход со страницы успешен (приложение открылось)
    window.onblur = function() {
        clearTimeout(redirectTimer);
    }
}