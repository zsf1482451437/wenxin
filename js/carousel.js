// 轮播模块（单视频版）
const Carousel = (() => {
    const videoEl = document.getElementById('carousel-video');
    let filter = false;

    function show() {
        videoEl.className = filter ? 'movie-filter' : '';
        videoEl.currentTime = 0;
        videoEl.play().catch(()=>{});
    }
    function toggleFilter() {
        filter = !filter;
        show();
    }
    function start() {
        show();
        // 监听播放结束，自动进入告白
        videoEl.onended = () => {
            document.getElementById('carousel-box').classList.add('hidden');
            document.getElementById('confession-box').classList.remove('hidden');
            Confession.start();
        };
    }
    // 只保留电影质感按钮
    return { toggleFilter, start };
})();
window.Carousel = Carousel; 