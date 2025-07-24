// 告白模块
const Confession = (() => {
    function start() {
        let count = 0;
        function showNextBalloon() {
            if (count < 30) {
                createBalloon(() => {
                    count++;
                    showNextBalloon();
                });
            }
        }
        showNextBalloon();

        // 拒绝按钮无法hover
        const refuseBtn = document.getElementById('refuse-btn');
        refuseBtn.onmouseover = () => {
            refuseBtn.style.left = (Math.random()*200-100) + 'px';
        };
    }
    function accept() {
        alert('你是我的女主啦！💖');
        // 复现回忆：气球点破
        document.querySelectorAll('.balloon').forEach(b=>{
            b.onclick = () => {
                b.style.opacity = 0;
                setTimeout(()=>b.remove(), 500);
            }
        });
    }
    return { start, accept };
})(); 