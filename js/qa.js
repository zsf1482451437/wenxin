// 问答模块
const QA = (() => {
    const correct = "2025-05-25"; // 这里填正确答案
    
    // 初始化函数，添加回车键监听
    function init() {
        const answerInput = document.getElementById('answer');
        if (answerInput) {
            answerInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    check();
                }
            });
            // 自动聚焦到输入框
            answerInput.focus();
        }
    }
    
    function check() {
        const val = document.getElementById('answer').value.trim();
        if(val === correct) {
            document.getElementById('qa-box').classList.add('hidden');
            document.getElementById('carousel-box').classList.remove('hidden');
            Carousel.start();
        } else {
            document.getElementById('qa-tip').innerText = "再想想哦~";
        }
    }
    
    // 页面加载完成后初始化
    document.addEventListener('DOMContentLoaded', init);
    
    return { check, init };
})(); 