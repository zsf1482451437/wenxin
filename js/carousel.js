// 轮播模块（单视频版）
const Carousel = (() => {
  const videoEl = document.getElementById("carousel-video");
  const malePersonEl = document.getElementById("male-person");
  const femalePersonEl = document.getElementById("female-person");
  const loveHeartEl = document.getElementById("love-heart");
  let filter = false;

  function updateLoveProgress() {
    if (!videoEl.duration) return;

    const progress = videoEl.currentTime / videoEl.duration;

    // 计算两个小人的位置（从5%和95%位置开始相互靠近，为图片留出空间）
    const malePosition = 5 + progress * 35; // 从5%移动到40%
    const femalePosition = 95 - progress * 35; // 从95%移动到60%

    malePersonEl.style.left = malePosition + "%";
    femalePersonEl.style.right = 100 - femalePosition + "%";

    // 当进度超过80%时显示爱心
    if (progress > 0.8) {
      loveHeartEl.classList.add("visible");
    } else {
      loveHeartEl.classList.remove("visible");
    }
  }

  function show() {
    videoEl.className = filter ? "movie-filter" : "";
    videoEl.currentTime = 0;
    videoEl.play().catch(() => {});

    // 重置小人位置
    malePersonEl.style.left = "5%";
    femalePersonEl.style.right = "5%";
    loveHeartEl.classList.remove("visible");
  }

  function toggleFilter() {
    filter = !filter;
    show();
  }

  function start() {
    show();

    // 监听视频播放进度
    videoEl.addEventListener("timeupdate", updateLoveProgress);

    // 监听播放结束，自动进入告白
    videoEl.onended = () => {
      document.getElementById("carousel-box").classList.add("hidden");
      document.getElementById("confession-box").classList.remove("hidden");
      Confession.start();
    };
  }

  // 只保留电影质感按钮
  return { toggleFilter, start };
})();
window.Carousel = Carousel;
