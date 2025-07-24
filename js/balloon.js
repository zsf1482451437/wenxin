// js/balloon.js
function createBalloon(onEnd) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * 90 + '%';
    balloon.style.background = `radial-gradient(circle at 50% 30%, hsl(${Math.random()*360},80%,80%) 60%, hsl(${Math.random()*360},80%,60%) 100%)`;
    // 透明度渐变动画
    balloon.style.animation = `floatUp 6s linear forwards, fadeOut 1.5s linear forwards 4.5s`;

    balloon.addEventListener('animationend', function(e) {
        // 只在fadeOut动画结束时触发
        if (e.animationName === 'fadeOut') {
            balloon.remove();
            if (typeof onEnd === 'function') onEnd();
        }
    });

    document.getElementById('balloon-bg').appendChild(balloon);
}