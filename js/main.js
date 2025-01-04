
$(function() {
  
  /*メニューを開閉 */
  $(".pc-menu-btn, .header-sp-menu, .close-btn").on("click", () => {
    $("nav").toggleClass("active");
  });

 

  /*メニューリンクをクリックしたらメニューを閉じる*/
  $("a[href^='#'], a[href^='https']").on("click", (e)=>{ 
    $("nav").removeClass("active");

  //押したリンクのセクションまでスクロールする
    let href = $(e.currentTarget).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position =target.offset().top;
    $("html, body").animate({scrollTop: position}, 400, "swing");
    return false;
   });
 
  /*メインビジュアルのスライダー設定 */
  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 0,
    },
    speed: 6000,
    allowTouchMove: false,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      }
    }
  });
  
  /*Q&Aのアコーディオンメニューにアニメーションを追加*/
  const details = $(".details");
  const question = $(".question");
  const answer = $(".answer");
  const speed = 300;

  question.each((_, el)=>{  
    $(el).on("click", (e) => {
      e.preventDefault();
      if($(el).closest(details).attr("open")) {
        $(el).next(answer).slideUp(speed, ()=> {
          $(el).closest(details).removeAttr("open");
          $(el).show();
        });
      }else{
        $(el).closest(details).attr("open", "true");
        $(el).next(answer).hide().slideDown(speed);
      }
    });

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

  /*contactの生年月日のopitonを追加*/

  const year = $(".year");
  const month = $(".month");
  const day = $(".day");

  let date = new Date();
  let thisYear = date.getFullYear();

  for(let i = 1930; i <= thisYear; i++) {
    year.append($("<option>").html(i).val(i));
  }

  for(let i = 1; i <= 12; i++) {
    month.append($("<option>").html(i).val(i));
  }

  for(let i = 1; i <= 31; i++) {
    day.append($("<option>").html(i).val(i));
  }
/*contactの郵便番号を入力し「住所自動入力」ボタンを押すと住所を自動入力させる*/
$(".zip1").jpostal({
  click: ".zip-btn",
  postcode : [
    ".zip1",
    ".zip2"
  ],
  address: {
    ".pref":"%3",
    ".address1":"%4",
    ".address2":"%5"
  }
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

/*ローディング画面を非表示にする*/
$(window).on("load", () => {
  const loadingScreen = $(".loading");
  //3秒後にローディング画面を非表示にする
  setTimeout(() => {
      loadingScreen.addClass("loaded");
  }, 3000);
});