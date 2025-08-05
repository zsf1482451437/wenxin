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

    // 拒绝按钮始终无法被点击（hover），并且鼠标靠近时按钮会"躲开"，始终无法聚焦。
    const refuseBtn = document.getElementById("refuse-btn");
    refuseBtn.onmouseenter = (e) => {
      // 随机移动按钮位置
      refuseBtn.style.left = Math.random() * 200 - 100 + "px";
      refuseBtn.style.top = Math.random() * 60 - 30 + "px";
    };
    // 防止聚焦
    refuseBtn.onmousedown = (e) => e.preventDefault();
    refuseBtn.onfocus = (e) => refuseBtn.blur();
    refuseBtn.onclick = (e) => e.preventDefault();
  }
  function accept() {
    // 修改：先显示情书而不是直接显示发光文字
    LoveLetter.show();

    // 复现回忆：气球点破
    document.querySelectorAll(".balloon").forEach((b) => {
      b.onclick = () => {
        b.style.opacity = 0;
        setTimeout(() => b.remove(), 500);
      };
    });
  }
  return { start, accept };
})();
