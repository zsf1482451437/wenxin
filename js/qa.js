// 问答模块
const QA = (() => {
    const correct = "2025-05-25"; // 这里填正确答案
    return {
        check() {
            const val = document.getElementById('answer').value.trim();
            if(val === correct) {
                document.getElementById('qa-box').classList.add('hidden');
                document.getElementById('carousel-box').classList.remove('hidden');
                Carousel.start();
            } else {
                document.getElementById('qa-tip').innerText = "再想想哦~";
            }
        }
    }
})(); 