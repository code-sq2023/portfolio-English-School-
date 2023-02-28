$(function() {

  /*メニューを開閉 */
  $(".menu-btn").on("click", () => {
    $(".menu-btn").toggleClass("active");
    $("nav").toggleClass("active");
    $(".overlay").toggleClass("active");
  });

  /*メニューリンクをクリックしたらメニューを閉じる*/
  $("a[href^='#']").on("click", (e)=>{ 
    $(".menu-btn").removeClass("active");
    $(".overlay").removeClass("active");
    $("nav").removeClass("active");

  //押したリンクのセクションまでスクロールする
     let href = $(e.currentTarget).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position =target.offset().top;
    $("html, body").animate({scrollTop: position}, 400, "swing");
    return false;
   });
 
  /*メインビジュアルのスライダー設定 */
  $(".mainvisual-list").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    speed: 1000,
    arrows: false,
  });

  /*メインビジュアルより下にスクロールすると戻るボタンを表示する*/
  let returnBtn_show = () => {
    if($(window).scrollTop() > 600) {
      $(".return-btn").addClass("show");
    }else {
      $(".return-btn").removeClass("show");
    }
  }

  returnBtn_show();

  $(window).on("scroll", () => {
    returnBtn_show();
  });

   /*戻るボタンでページのトップに戻る*/

   $(".return-btn").on("click", () => {
    $("html, body").animate({
      scrollTop: 0
    }, 300);
   });


});