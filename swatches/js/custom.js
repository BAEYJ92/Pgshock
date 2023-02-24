$(document).ready(function(){

  //화면의 넓이 값과 높이 값
  let ht = $(window).height();
  // console.log(ht);
  let wt = $(window).width();
  // console.log(wt);

  $('section').height(ht);

  // 화면의 사이즈가 변하면 section 높이값을 고정
  $('window').resize(function(){
    let ht = $(window).height();
    $('section').height(ht);
  });

  // 마우스의 움직임에 따라 이미지의 위치 반응
  $('section').mousemove(function(e){
    // 커서의 위치 값
    let posX = e.pageX;
    let posY = e.pageY;
    // console.log(posX, posY);

  $('img.p12').css({right : 130-(posX/20), bottom : -40-(posY/20)})
  $('img.p13').css({right : 60+(posX/20), top : 180+(posY/20)})

  $('img.p21').css({right : -100-(posX/30), bottom : -100-(posY/30)})
  $('img.p22').css({right : 130+(posX/50), bottom : 40+(posY/50)})

  $('img.p31').css({right : 90-(posX/30), bottom : 80-(posY/30)})
  $('img.p33').css({right : 70+(posX/20), bottom : -130+(posY/20)})

  $('img.p41').css({right : 200-(posX/30), top : -50-(posY/30)})
  $('img.p42').css({right :20+(posX/20), bottom : 270-(posY/20)})

  });

  // 메뉴 클릭 시 상하스크롤 하기
  $('ul#menu li').click(function(e){
    
    // 고유의 기능을 막아준다.(a 태그)
    e.preventDefault();

    // 화면의 높이값
    let ht = $(window).height();
    // 클릭한 요소의 인덱스 값
    let i = $(this).index();
    // 인덱스 값 * 화면의 높이 값
    let nowTop = i * ht;
    // 해당 위치로 스크롤 이동
    $('html, body').stop().animate({scrollTop : nowTop}, 1400);

  });

  // 스크롤 될 때 마다 현재 영역에 해당하는 메뉴 활성화
  $(window).scroll(function(){

    let ht = $(window).height();
    //현재 문서가 스크롤 된 거리
    let scroll = $(window).scrollTop();
    // console.log(scroll);
    // if(scroll >= ht * 0 && scroll < ht * 1) {
    //   $('ul#menu li').removeClass();
    //   $('ul#menu li').eq(0).addClass('on');
    // }
    // if(scroll >= ht * 1 && scroll < ht * 2) {
    //   $('ul#menu li').removeClass();
    //   $('ul#menu li').eq(1).addClass('on');
    // }
    // if(scroll >= ht * 2 && scroll < ht * 3) {
    //   $('ul#menu li').removeClass();
    //   $('ul#menu li').eq(2).addClass('on');
    // }
    // if(scroll >= ht * 3 && scroll < ht * 4) {
    //   $('ul#menu li').removeClass();
    //   $('ul#menu li').eq(3).addClass('on');
    // }

    for(let i = 0; i < 5; i++){
      if(scroll >= ht * i && scroll < ht * (i+1)) {
        $('ul#menu li').removeClass();
        $('ul#menu li').eq(i).addClass('on');
      }
    }
  });

  // 마우스 휠의 움직임에 따라 화면 스크롤
  $('section').mousewheel(function(event, delta){
    if(delta > 0){
      let prev = $(this).prev().offset().top;
      $('html, body').stop().animate({scrollTop : prev}, 1400,'easeOutBounce');
    } else if(delta < 0){
      let next = $(this).next().offset().top;
      $('html, body').stop().animate({scrollTop : next}, 1400,'easeOutBounce');
    }
  });

});