document.addEventListener("DOMContentLoaded", () => {

  /* ==================================================
     1. ハンバーガーメニューの開閉処理
  ================================================== */
  const toggleBtn = document.querySelector(".header__toggleBtn");
  const mask = document.querySelector(".header__mask");
  const maskLinks = document.querySelectorAll(".header__maskLink");

  if (toggleBtn && mask) {
    // ハンバーガーボタンをクリックした時
    toggleBtn.addEventListener("click", () => {
      toggleBtn.classList.toggle("is-active");
      mask.classList.toggle("is-active");
    });

    // メニュー内のリンクをクリックした時にメニューを閉じる
    maskLinks.forEach((link) => {
      link.addEventListener("click", () => {
        toggleBtn.classList.remove("is-active");
        mask.classList.remove("is-active");
      });
    });
  }

  /* ==================================================
     2. スクロール時のフェードイン表示 (Intersection Observer)
  ================================================== */
  const fadeElements = document.querySelectorAll(".js-fadeIn");

  // スクロールして画面に入ってきたかを検知する設定
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2 // 要素が20%見えたらアニメーション開始
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      // 画面内に入ったらクラスを追加
      if (entry.isIntersecting) {
        entry.target.classList.add("is-active");
        // 一度表示されたら監視を終了する（毎回動かしたい場合はこの行を消す）
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 対象の要素を監視スタート
  fadeElements.forEach((el) => {
    observer.observe(el);
  });

});


