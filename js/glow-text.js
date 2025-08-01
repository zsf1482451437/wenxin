// js/glow-text.js
const GlowText = (() => {
    // 用数组存储几行文字
    const lines = [
        "你甜美可爱充满活力的声线让我沦陷",
        "你积极沟通解决问题的态度让我迷恋",
        "你的出现让我觉得是上天的安排",
        "我想抓住这份美好",
        "我想名正言顺地牵起你的手",
        "我想和你一起看日出日落",
        "我想守候在你左右, 义无反顾地守护你",
        "我想听你撒娇，听你哼歌，听你说我是笨蛋",
        "我想和你玩快玩快答，一起探讨未来的选择",
        "无论未来会怎么样，我都愿意与你共同成长，一起体验酸甜苦辣！",
        "所以，我喜欢你，欣欣大人",
    ];

    let timer = null;
    let heartInterval = null;

    function show() {
        // 播放告白音乐
        const loveMusic = document.getElementById('love-music');
        if (loveMusic) {
            loveMusic.currentTime = 0;
            loveMusic.play().catch(()=>{});
        }

        const modal = document.getElementById('glow-modal');
        const content = document.getElementById('glow-content');
        
        // 显示弹窗
        modal.classList.remove('hidden');
        content.innerHTML = '';
        
        let lineIndex = 0;
        let charIndex = 0;
        let currentLineDiv = null;
        
        function typeWriter() {
            if (lineIndex < lines.length) {
                const currentLine = lines[lineIndex];
                
                // 如果是新的一行，创建新的div并清空之前的内容
                if (charIndex === 0) {
                    content.innerHTML = ''; // 清空之前的行
                    currentLineDiv = document.createElement('div');
                    currentLineDiv.className = 'glow-text current-line';
                    content.appendChild(currentLineDiv);
                }
                
                // 如果当前行还没写完
                if (charIndex < currentLine.length) {
                    // 添加当前字符和光标
                    currentLineDiv.innerHTML = currentLine.substring(0, charIndex + 1) + '<span class="cursor">💗</span>';
                    charIndex++;
                    
                    timer = setTimeout(typeWriter, 300); // 每个字300ms间隔
                } else {
                    // 当前行写完，移除光标，等待一下后换下一行
                    currentLineDiv.innerHTML = currentLine;
                    
                    lineIndex++;
                    charIndex = 0;
                    timer = setTimeout(typeWriter, 1500); // 换行间隔500ms
                }
            } else {
                // 所有行都显示完了，显示最终效果
                showFinalResult();
            }
        }
        
        function showFinalResult() {
            content.innerHTML = '';
            lines.forEach(line => {
                const lineDiv = document.createElement('div');
                lineDiv.className = 'glow-text final-text';
                lineDiv.textContent = line;
                content.appendChild(lineDiv);
            });
            
            // 开始爱心动画
            startHeartAnimation();
        }
        
        // 开始打字效果
        typeWriter();
        
        // 点击弹窗关闭
        modal.onclick = function() {
            close();
        };
    }
    
    function startHeartAnimation() {
        // 每0.2秒生成一个爱心，数量更多
        heartInterval = setInterval(createHeart, 200);
    }
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        
        // 随机选择爱心颜色（增加了更多颜色）
        const colors = ['pink', 'red', 'white', 'purple', 'orange', 'cyan'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        heart.classList.add(randomColor);
        
        // 随机选择爱心符号
        const heartSymbols = ['❤️', '💖', '💕', '💗', '💝', '💘', '💜', '🧡', '💛', '💚', '💙', '欣欣大人', '欣宝', 'I❤️欣欣', '菜菜', '我喜欢欣欣', '欣欣大人', '欣宝', 'I❤️欣欣', '菜菜', '我喜欢你', '文欣'];
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        
        // 设置随机扩散方向和距离
        const randomX = (Math.random() - 0.5) * 600; // -300px 到 300px
        const randomY = (Math.random() - 0.5) * 600; // -300px 到 300px
        heart.style.setProperty('--random-x', randomX + 'px');
        heart.style.setProperty('--random-y', randomY + 'px');
        
        // 随机动画时长
        heart.style.animationDuration = (2 + Math.random() * 2) + 's';
        
        // 添加到页面
        document.body.appendChild(heart);
        
        // 动画结束后移除
        setTimeout(() => {
            if (heart.parentNode) {
                heart.remove();
            }
        }, 4000);
    }
    
    function close() {
        const modal = document.getElementById('glow-modal');
        const content = document.getElementById('glow-content');
        modal.classList.add('hidden');
        content.innerHTML = '';
        clearTimeout(timer);
        
        // 停止爱心动画
        if (heartInterval) {
            clearInterval(heartInterval);
            heartInterval = null;
        }
        
        // 移除所有爱心
        document.querySelectorAll('.heart').forEach(heart => heart.remove());
        
        // 停止音乐
        const loveMusic = document.getElementById('love-music');
        if (loveMusic) {
            loveMusic.pause();
        }
    }

    return { show, close };
})(); 