$(function() {

  /*メニューを開閉 */
  $(".menu-btn").on("click", () => {
    $(".menu-btn").toggleClass("active");
    $("nav").toggleClass("active");
    $(".overlay").toggleClass("active");
  });

  /*メニューリンクをクリックしたらメニューを閉じる*/
  $("a[href ^= '#']").on("click", () => {
    $(".menu-btn").removeClass("active");
    $("nav").removeClass("active");
    $(".overlay").removeClass("active");
  });

  /*メインビジュアルのスライダー設定 */
  $(".mainvisual-items").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    speed: 1000,
    arrows: false,
  });
});