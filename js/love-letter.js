// 情书模块 - 简化版本，只显示打开动画
const LoveLetter = (() => {
  let isOpening = false;

  function show() {
    // 创建情书容器
    const letterContainer = document.createElement("div");
    letterContainer.id = "love-letter-container";
    letterContainer.innerHTML = `
            <div class="letter-envelope" id="letter-envelope">
                <div class="envelope-top"></div>
                <div class="envelope-body">
                    <div class="envelope-flap"></div>
                    <div class="letter-paper" id="letter-paper">
                        <div class="letter-header">💌 给最亲爱的文欣 💌</div>
                        <div class="letter-content">
                            <p style="text-align: center; color: #666; font-size: 1rem; margin-top: 50px;">
                                点击信封打开情书...
                            </p>
                        </div>
                    </div>
                </div>
                <div class="letter-seal">💕</div>
            </div>
        `;

    document.body.appendChild(letterContainer);

    // 添加点击事件
    const envelope = document.getElementById("letter-envelope");
    envelope.addEventListener("click", openLetter);

    // 显示动画
    setTimeout(() => {
      letterContainer.classList.add("show");
    }, 100);
  }

  function openLetter() {
    if (isOpening) return;
    isOpening = true;

    const envelope = document.getElementById("letter-envelope");
    const paper = document.getElementById("letter-paper");

    // 信封打开动画
    envelope.classList.add("opening");

    // 1秒后开始信纸展开动画
    setTimeout(() => {
      paper.classList.add("unfolding");

      // 信纸展开后等待1.5秒，然后直接进入原来的发光文字动画
      setTimeout(() => {
        // 情书淡出动画
        const letterContainer = document.getElementById(
          "love-letter-container"
        );
        letterContainer.classList.add("fade-out");

        // 1秒后移除情书并显示原来的发光文字动画
        setTimeout(() => {
          letterContainer.remove();
          GlowText.show(); // 直接调用原来的发光文字动画
        }, 1000);
      }, 1500);
    }, 1000);
  }

  function close() {
    const letterContainer = document.getElementById("love-letter-container");
    if (letterContainer) {
      letterContainer.remove();
    }
    isOpening = false;
  }

  return { show, close };
})();
