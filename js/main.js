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
    speed: 2000,
    arrows: false,
    pauseOnHover:false
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

   /*SP時にフッターのアコーディオンメニューを閉じておく*/
   $(window).on("resize load", () => {
     if(window.matchMedia("(max-width: 768px)").matches) {
        $(".footer-link").hide();
      }else if(window.matchMedia("(min-width: 769px)").matches){
        $(".footer-link").show();
      }
    });
    
  /*フッターのアコーディオンメニュー開閉*/
  $(".link-title").on("click", (e) => {
    if(window.matchMedia("(max-width: 768px)").matches) {
      $(e.currentTarget).next().slideToggle(400);
    }else {
      return false;
    }
  });

});