(($)=>{
    class Portfolio {
        init(){
            // this.header();
            this.section1();
            this.section2();
            this.section3();
            this.section4();
            this.section5();
            this.section6();
            this.section7();
            this.footer();
            this.goTopBox();
            this.navMenu();
            // this.quickBox();
        }
        // header(){

        // // 헤더 스크롤 이벤트 ======================================================================================

        //     let upDown = '';
        //     let newTop = $(window).scrollTop();
        //     let oldTop = newTop;
            
        //     $(window).scroll(function(){
        //         newTop = $(window).scrollTop();

        //         // console.log('뉴탑값',newTop);
        //         // console.log('이전탑값',oldTop);
        //         upDown = newTop - oldTop > 0 ? 'DOWN' : 'UP';
        //         if(upDown==='DOWN'){
        //             $('#header').removeClass('show');
        //             $('#header').addClass('hide');
        //             $('.default-logo').fadeOut(300);
        //             $('.white-logo').fadeOut(300);
        //         }
        //         if(upDown==='UP'){
        //             $('#header').removeClass('hide');
        //             $('#header').addClass('show');
        //             $('.white-logo').fadeIn(300);

        //         }
        //         if(newTop===0){
        //             $('#header').removeClass('show');
        //             $('.default-logo').fadeIn(300);
        //             $('.white-logo').fadeOut(300);
        //         }

        //         oldTop = newTop;
        //     });




        // // 네비메뉴바 버튼 이벤트====================================================================================

        //     $('.main-btn').on({
        //         mouseenter: function(){
        //             $('.sub').fadeOut(0);
        //             $(this).next().fadeIn(200);

        //             $('.main-btn').removeClass('on');
        //             $(this).addClass('on');
        //         },
        //         focusin: function(){
        //             $('.sub').fadeOut(0);
        //             $(this).next().fadeIn(200);

        //             $('.main-btn').removeClass('on');
        //             $(this).addClass('on');
        //         }

        //     });

        //     $('.sub-btn').on({
        //         mouseenter: function(){
        //             $('.sub-sub').fadeOut(0);
        //             $(this).next().fadeIn(200);
        //         },
        //         focusin: function(){
        //             $('.sub-sub').fadeOut(0);
        //             $(this).next().fadeIn(200);
        //         }
        //     });

        //     $('#nav').on({
        //         mouseleave: function(){
        //             $('.sub').fadeOut(200);
        //             $('.main-btn').removeClass('on');
        //         }
        //     });

        //     $('.sub-sub').on({
        //         mouseleave: function(){
        //             $(this).fadeOut(200);
        //         }
        //     });
            

        // }
        section1(){

            let cnt = 0;
            let setId = 0;

            function mainSlide(){
                lineBarFn();
                $('.slide').css({zIndex:1}).animate({opacity:1},0);
                $('.slide').eq(cnt).css({zIndex:2});
                $('.slide').eq(cnt).css({zIndex:3});
                $('.slide').eq(cnt).css({zIndex:4});
                $('.slide').eq(cnt===0?4:cnt-1).css({zIndex:5}).animate({opacity:1},0).animate({opacity:0}, 1000);
            }
            function nextCount(){
                cnt++;
                cnt>4?cnt=0:cnt;
                mainSlide();
            }
            function prevCount(){
                cnt--;
                mainSlide();
            }
            function autoTimer(){
                setId = setInterval(nextCount, 4000);
            }
            autoTimer();

            // lineBar 이벤트
            function lineBarFn(){
                if(cnt<=4){
                    $('.lineBar').addClass('on').css({width:`${100*(cnt+1)}%`});
                }
                else if(cnt>4){
                    $('.lineBar').addClass('on').css({width:`${100*(cnt-4)}%`});
                }
            }

        }
        section2(){
            
            const sec2Top = $('#section2').offset().top-$(window).height();

            $(window).scroll(function(){
                if($(window).scrollTop()>sec2Top){

                    let didScroll = false;
                    let moveTitle = document.querySelectorAll('.move-left');
                    let moveTitle2 = document.querySelectorAll('.move-right');

                    const scrollInProgress = () => {
                        didScroll = true;
                    }

                    const tit = () => {
                        if(didScroll) {
                            moveTitle.forEach((element, index) => {
                                element.style.transform = "translateX("+ window.scrollY / -25 + "%)"
                            })
                            moveTitle2.forEach((element, index) => {
                                element.style.transform = "translateX("+ window.scrollY / 25 + "%)"
                            })
                            didScroll = false;
                        }
                        requestAnimationFrame(tit);
                    }

                    requestAnimationFrame(tit);
                    window.addEventListener('scroll', scrollInProgress)

                }

            });

        }
        section3(){

            const sec3Top = $('#section3').offset().top-$(window).height();

            $(window).scroll(function(){

                if($(window).scrollTop()>sec3Top+400){
                    $('.text-box').addClass('sec3Tit');
                }
                if($(window).scrollTop()>sec3Top+1400){
                    $('.left-img').addClass('sec3Img1');
                    $('.right-img').addClass('sec3Img2');
                }

                if($(window).scrollTop()<2200){
                    $('.text-box').removeClass('sec3Tit');
                }
                if($(window).scrollTop()<2500){
                    $('.left-img').removeClass('sec3Img1');
                    $('.right-img').removeClass('sec3Img2');
                }

            });

        }
        section4(){


            $(window).scroll(function(){

                if($(window).scrollTop()>3500 && $(window).scrollTop()<4500){
                    $('#section4').addClass('ani-letter');
                }
                else if($(window).scrollTop()<3200){
                    $('#section4').removeClass('ani-letter');
                }
                else if($(window).scrollTop()>4500){
                    $('#section4').removeClass('ani-letter');
                }
                


                if($(window).scrollTop()>4600){
                    $('.img-box-right').addClass('sec4Img1');
                }

                if($(window).scrollTop()<4300){
                    $('.img-box-right').removeClass('sec4Img1');
                }

            });
            

        }
        section5(){

            const sec5Top = $('#section5').offset().top-$(window).height();

            $(window).scroll(function(){


                if($(window).scrollTop()>sec5Top+1300){
                    $('.text-box').addClass('sec5Tit');
                }
                if($(window).scrollTop()>sec5Top+2500){
                    $('.left-img').addClass('sec5Img1');
                    $('.right-img').addClass('sec5Img2');
                }

                if($(window).scrollTop()<=5600){
                    $('.text-box').removeClass('sec5Tit');
                }
                if($(window).scrollTop()<6200){
                    $('.left-img').removeClass('sec5Img1');
                    $('.right-img').removeClass('sec5Img2');
                }
            });

        }
        section6(){

            let cnt = 0;
            let count = 0;


            function sec6Slide(){
                $('#section6 .slide').stop().animate({left:`${-850*cnt}px`}, 600, 'easeInOutQuad', function(){
                    cnt>11?cnt=0:cnt;
                    cnt<0?cnt=11:cnt;
                    $('#section6 .slide').stop().animate({left:`${-850*cnt}px`}, 0);
                    
                });
            }
            function sec6NextCount(){
                cnt++;
                sec6Slide();
            }
            function sec6PrevCount(){ 
                cnt--;
                sec6Slide();
            }

            // 텍스트 애니메이션
            // nextTextcount
            function sec6TextSlide(){
                $('.slide-tit').eq(count).addClass('on');
                $('.slide-content').eq(count).addClass('on');
                $('.slide-tit').eq(count-1).removeClass('on');
                $('.slide-content').eq(count-1).removeClass('on');
                if(count>0){
                    $('.slide-tit').eq(0).hide();
                    $('.slide-content').eq(0).hide();
                }
                else if(count===12 && count===0){
                    $('.slide-tit').eq(0).show();
                    $('.slide-content').eq(0).show();
                }
            }
            // prevTextcount
            function sec6TextSlide2(){
                $('.slide-tit').eq(count).addClass('on');
                $('.slide-content').eq(count).addClass('on');
                $('.slide-tit').eq(count+1).removeClass('on');
                $('.slide-content').eq(count+1).removeClass('on');
                if(count<0){
                    $('.slide-tit').eq(0).hide();
                    $('.slide-content').eq(0).hide();
                }
                else if(count===0){
                    $('.slide-tit').eq(0).show();
                    $('.slide-content').eq(0).show();
                }
            }
            function sec6TextNext(){
                count>11?count=0:count;
                count++;
                sec6TextSlide();
            }
            function sec6TextPrev(){
                count<0?count=11:count;
                count--;
                sec6TextSlide2();
            }


            // 슬라이드 왼쪽 버튼 이벤트
            $('.left-arrow-btn').on({
                click: function(){

                    sec6PrevCount();
                    sec6TextPrev();

                    if(count<0){
                        $('.slide-tit').eq(0).hide();
                        $('.slide-content').eq(0).hide();
                    }
                    else if(count>0){
                        $('.slide-tit').eq(count).addClass('on');
                        $('.slide-tit').eq(count+1).removeClass('on');
                        $('.slide-content').eq(count).addClass('on');
                        $('.slide-content').eq(count+1).removeClass('on');
                    }
                    else if(count===0 && count===12){
                        $('.slide-tit').eq(0).show();
                        $('.slide-tit').eq(count).removeClass('on');
                        $('.slide-content').eq(0).show();
                        $('.slide-content').eq(count).removeClass('on');
                    }

                    // progress 바 진행 이벤트
                    if(cnt<11 && cnt>-1){
                        $('.pro-btn').addClass('on').css({width:`${100*(cnt+1)}%`});
                    }
                    else if(cnt===-1){
                        $('.pro-btn').addClass('on').css({width:`${100*(cnt+13)}%`});
                    }

                }
            });
            // 슬라이드 오른쪽 버튼 이벤트
            $('.right-arrow-btn').on({
                click: function(){

                    sec6NextCount();
                    sec6TextNext();
                    
                    if(count===12){
                        $('.slide-tit').eq(0).show();
                        $('.slide-content').eq(0).show();
                    }

                    // progress 바 진행 이벤트
                    if(cnt<12){
                        $('.pro-btn').addClass('on').css({width:`${100*(cnt+1)}%`});
                    }
                    else if(cnt===12){
                        $('.pro-btn').addClass('on').css({width:`${100*(cnt-11)}%`});
                    }

                }
            });
            

        }
        section7(){

            let cnt = 0;
            let setId = 0;
            let setId2 = 0;


            function sec7Slide(){
                $('#section7 .slide').stop().animate({left:`${-371*cnt}px`}, 600, 'easeInOutQuad', function(){
                    cnt>14?cnt=0:cnt;
                    cnt<0?cnt=14:cnt;
                    $('#section7 .slide').stop().animate({left:`${-371*cnt}px`}, 0);
                    
                });
            }
            function sec7NextCount(){
                cnt++;
                sec7Slide();
            }
            function sec7PrevCount(){ 
                cnt--;
                sec7Slide();
            }
            function sec7AutoTimer(){
                setId = setInterval(sec7NextCount, 3000);
            }
            sec7AutoTimer();

            function timerPauseFn(){
                let timerCnt = 0;

                clearInterval(setId);
                clearInterval(setId2);


                setId2 = setInterval(function(){
                    timerCnt++;
                    if(timerCnt>=3){
                        clearInterval(setId);
                        clearInterval(setId2);
                        sec7AutoTimer();
                    }
                }, 1000);


            }
            // 슬라이드 왼쪽 버튼 이벤트
            $('.sec7-left-btn').on({
                click: function(){
                    timerPauseFn();
                    sec7PrevCount();
                }
            });
            // 슬라이드 오른쪽 버튼 이벤트
            $('.sec7-right-btn').on({
                click: function(){
                    timerPauseFn();
                    sec7NextCount();
                }
            });
            

        }
        footer(){
            
        }

        goTopBox(){
  
            $(window).scroll(function(){
                if($(window).scrollTop()>300){
                   $('#goTopBox').stop().fadeIn(1000); 
                }
                else{
                  $('#goTopBox').stop().fadeOut(600);
                }


            });
        
            //맨위로 부드럽게 이동 : 스무스 스크롤링 $('html, body').stop().animate({scrollTop: ), 1000)
            $('.goTop-btn').on({
              click: function(){
                  $('html, body').stop().animate({scrollTop: 0 }, 600);
              }
            });

        }
        navMenu(){

            $('#nav').mCustomScrollbar();

            $('#header .menu-btn').on({
                mouseover: function(){
                    $('#nav').css({left:0});
                }
            });

            $('#nav').on({
                mouseleave: function(){
                    $('#nav').css({left:`${-410}px`});
                }
            });

            // 메인메뉴 버튼 클릭 이벤트
            $('.main-btn').on({
                click: function(){
                    $(this).next().slideToggle(300);
                }
            });

        }

        
    }
    const newPortfolio = new Portfolio();

    newPortfolio.init();

})(jQuery);