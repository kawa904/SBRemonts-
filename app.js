// app.js - минимальная версия
console.log('SBRemonts Mini App loaded');

// Telegram Web App
if (typeof Telegram !== 'undefined') {
    const tg = window.Telegram.WebApp;
    
    // Всегда расширяем на весь экран
    tg.expand();
    
    // Инициализируем
    tg.ready();
    
    // Логируем данные пользователя
    console.log('User:', tg.initDataUnsafe?.user);
    console.log('Language:', tg.initDataUnsafe?.user?.language_code);
    
    // Если у пользователя есть язык в Telegram, используем его
    const tgLang = tg.initDataUnsafe?.user?.language_code;
    if (tgLang && ['ru', 'lv', 'en'].includes(tgLang)) {
        localStorage.setItem('sbremonts_lang', tgLang);
    }
}
