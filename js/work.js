
$('.hangman').on('click',function(){
    window.open('https://nargizrafi.github.io/hangman/', '_blank')
})
$('.fighting').on('click',function(){
    window.open('https://nargizrafi.github.io/game_1/', '_blank')
})
$('.lottery').on('click',function(){
    window.open('https://nargizrafi.github.io/lottery/', '_blank')
})
$('.gifs').on('click',function(){
    window.open('https://nargizrafi.github.io/gif_searcher/', '_blank')
})
$('.rpss').on('click',function(){
    window.open('https://nargizrafi.github.io/rock-paper-scissors/', '_blank')
})
$('.rpso').on('click',function(){
    window.open('https://nargizrafi.github.io/rpsmultiplayer/', '_blank')
})
$('.snake-game').on('click',function(){
    window.open('https://nargizrafi.github.io/snake-game/', '_blank')
})
$('.web-services').on('click',function(){
    window.open('https://nargizrafi.github.io/web-services-website/', '_blank')
})
$('.shopping').on('click',function(){
    window.open('https://nargizrafi.github.io/shopping-website/', '_blank')
})
$('.bars').on('click',function(){
    $('.menuu').css({
        display:'flex'
    })
})
$('.menubars-x').on('click',function(){
    $('.menuu').css({
        display:'none'
    })
})

var nightMode = true
 $('.mode').on('click', function () {
if (nightMode == true) {


        $('.fa-toggle-on').addClass('fa-toggle-off').removeClass('fa-toggle-on')
        $('body').css({
            backgroundColor: '#F7F9FC'
        })

        $('.rr').removeAttr('src')
        $('.rr').attr('src','./images/icon2.svg')
        $('div').css({
            backgroundColor: 'white',
            borderRadius: '30px'
        })
        $('.innerWork').css({
            backgroundColor: '#F7F9FC'
        })
        $('.childWorkOne').css({
            backgroundColor: '#F7F9FC'
        })
        $('.childWorkTwo').css({
            backgroundColor: '#F7F9FC'
        })
        $('.boxes').css({
            backgroundColor: '#F7F9FC'
        })
        $('.img1').css({
            backgroundColor: '#6CBFE7',
            borderRadius: '30px 0px 30px 0px'
        })
        $('.container').css({
            backgroundColor: '#F7F9FC'
        })
        $('strong').css({
            color: '#3E5CE3'
        })
        $('.menu').css({
            backgroundColor: '#F7F9FC'
        })
        $('.texts').css({
            backgroundColor: '#F7F9FC'
        })
        $('header').css({
            backgroundColor: '#F7F9FC'
        })
        $('footer').css({
            backgroundColor: '#F7F9FC'
        })
        $('.miniCon').css({
            backgroundColor: '#F7F9FC'
        })

        $('.top').css({
            backgroundColor: '#F7F9FC'
        })
        $('.top-right').css({
            backgroundColor: '#F7F9FC'
        })

        $('.middle').css({
            backgroundColor: '#F7F9FC'
        })
        $('.bottom').css({
            backgroundColor: '#F7F9FC'
        })

        $('.active').css({
            color: '#3E5CE3'
        })

        $("a").hover(function () {
            $(this).css({
                color: "#3E5CE3"
            })
        });
        $("a").mouseleave(function () {
            $(this).css({
                color: "#8B8B8B"
            })
            $('.active').css({
                color: '#3E5CE3'
            })
        })

        $('.top-left').mouseenter(function () {
            $('.r1').css({
                color: '#3E5CE3'
            })

        })
        $('.top-left').mouseleave(function () {
            $('.r1').css({
                color: '#8B8B8B'
            })
        })

        $('.top-right-bottom-left').mouseenter(function () {
            $('.r2').css({
                color: '#3E5CE3'
            })

        })
        $('.top-right-bottom-left').mouseleave(function () {
            $('.r2').css({
                color: '#8B8B8B'
            })
        })
        $('.top-right-bottom-right').mouseenter(function () {
            $('.r3').css({
                color: '#3E5CE3'
            })

        })
        $('.top-right-bottom-right').mouseleave(function () {
            $('.r3').css({
                color: '#8B8B8B'
            })
        })

        $('.middle-left').mouseenter(function () {
            $('.r4').css({
                color: '#3E5CE3'
            })

        })
        $('.middle-left').mouseleave(function () {
            $('.r4').css({
                color: '#8B8B8B'
            })
        })

        $('.middle-md').mouseenter(function () {
            $('.r5').css({
                color: '#3E5CE3'
            })

        })
        $('.middle-md').mouseleave(function () {
            $('.r5').css({
                color: '#8B8B8B'
            })
        })

        $('.middle-right').mouseenter(function () {
            $('.r6').css({
                color: '#3E5CE3'
            })

        })
        $('.middle-right').mouseleave(function () {
            $('.r6').css({
                color: '#8B8B8B'
            })
        })

        $('.bottom-right').mouseenter(function () {
            $('.r7').css({
                color: '#3E5CE3'
            })

        })
        $('.bottom-right').mouseleave(function () {
            $('.r7').css({
                color: '#8B8B8B'
            })
        })
        $('h1').css({
            color: 'black'
        })
        $('h2').css({
            color: 'black'
        })
        $('.h21').css({
            color: '#3E5CE3'
        })
        $('.bottomsp').css({
            color: 'black'
        })
        $('.top-left-bottom').css({
            backgroundColor: 'transparent'
        })
        $('.menuu').css({
            borderRadius: '0px'
        })
        $('.material-symbols-outlined').css({
            color: '#3E5CE3'
        })
        $(".material-symbols-outlined").hover(function () {
            $(this).css({
                color: '#2f1284'
            })
        });
        $(".material-symbols-outlined").mouseleave(function () {
            $(this).css({
                color: '#3E5CE3'
            })
        })
        $('.fa-brands').css({
            backgroundColor: '#3E5CE3'
        })
        $(".fa-brands").hover(function () {
            $(this).css({
                backgroundColor: '#2f1284',
                color: 'white'
            })
        });
       
        $(".fa-brands").mouseleave(function () {
            $(this).css({
                backgroundColor: '#3E5CE3'
            })
        })
        $(".btn").hover(function () {
            $(this).css({
                backgroundColor: '#3E5CE3',
                color: 'white'
            })
        });
        $(".btn").mouseleave(function () {
            $(this).css({
                backgroundColor: '#323232'
            })
        });
        $('.river').css({
            color: '#3E5CE3'
        })
        $('.h22').css({
            color: '#323232'
        })
        $('.images1').removeAttr('src')
        $('.images1').attr('src','./images/logo-dark.png')

        $('.decor').removeAttr('src')
        $('.decor').attr('src','./images/icon3.png')
        $('.images2').removeAttr('src')
        $('.images2').attr('src','./images/star2.png')

        nightMode = false
        $('a').on('click',function(){
            if(nightMode==false){
                sessionStorage.setItem('mode','light')
            }
            else{
                sessionStorage.setItem('mode','night')
            }
        })
        $('.bars').css({
            backgroundColor: 'transparent',
           
        })
    }
    else {
       
                $('.fa-toggle-off').addClass('fa-toggle-on').removeClass('fa-toggle-off')
                $('body').css({
                    backgroundColor: '#0F0F0F'
                })
                $('.rr').removeAttr('src')
                $('.rr').attr('src','./images/icon.svg')
                $('div').css({
                    backgroundColor: '',
                    borderRadius: '30px'
                })
                $('.menuu').css({
                    borderRadius: '0px'
                })
                $('.img1').css({
                    backgroundColor: '#6CBFE7',
                    borderRadius: '30px 0px 30px 0px'
                })
                $('.container').css({
                    backgroundColor: '#0F0F0F'
                })
                $('strong').css({
                    color: '#FFFFFF'
                })
                $('.menu').css({
                    backgroundColor: '#0F0F0F'
                })
                $('.texts').css({
                    backgroundColor: '#0F0F0F'
                })
                $('header').css({
                    backgroundColor: '#0F0F0F'
                })
                $('footer').css({
                    backgroundColor: '#0F0F0F'
                })
                $('.miniCon').css({
                    backgroundColor: '#0F0F0F'
                })
        
                $('.top').css({
                    backgroundColor: '#0F0F0F'
                })
                $('.top-right').css({
                    backgroundColor: '#0F0F0F'
                })
        
                $('.middle').css({
                    backgroundColor: '#0F0F0F'
                })
                $('.bottom').css({
                    backgroundColor: '#0F0F0F'
                })
        
              

                $('.top-left').mouseenter(function () {
                    $('.r1').css({
                        color: 'white'
                    })
                
                })
                $('.top-left').mouseleave(function () {
                    $('.r1').css({
                        color: '#8B8B8B'
                    })
                })
                
                $('.top-right-bottom-left').mouseenter(function () {
                    $('.r2').css({
                        color: 'white'
                    })
                
                })
                $('.top-right-bottom-left').mouseleave(function () {
                    $('.r2').css({
                        color: '#8B8B8B'
                    })
                })
                $('.top-right-bottom-right').mouseenter(function () {
                    $('.r3').css({
                        color: 'white'
                    })
                
                })
                $('.top-right-bottom-right').mouseleave(function () {
                    $('.r3').css({
                        color: '#8B8B8B'
                    })
                })
                
                $('.middle-left').mouseenter(function () {
                    $('.r4').css({
                        color: 'white'
                    })
                
                })
                $('.middle-left').mouseleave(function () {
                    $('.r4').css({
                        color: '#8B8B8B'
                    })
                })
                
                $('.middle-md').mouseenter(function () {
                    $('.r5').css({
                        color: 'white'
                    })
                
                })
                $('.middle-md').mouseleave(function () {
                    $('.r5').css({
                        color: '#8B8B8B'
                    })
                })
                
                $('.middle-right').mouseenter(function () {
                    $('.r6').css({
                        color: 'white'
                    })
                
                })
                $('.middle-right').mouseleave(function () {
                    $('.r6').css({
                        color: '#8B8B8B'
                    })
                })
                
                $('.bottom-right').mouseenter(function () {
                    $('.r7').css({
                        color: 'white'
                    })
                
                })
                $('.bottom-right').mouseleave(function () {
                    $('.r7').css({
                        color: '#8B8B8B'
                    })
                })

                $('.active').css({
                    color: '#FFFFFF'
                })

                $("a").hover(function () {
                    $(this).css({
                        color: "white"
                    })
                });
                $("a").mouseleave(function () {
                    $(this).css({
                        color: "#8B8B8B"
                    })
                     $('.active').css({
                    color: '#FFFFFF'
                })
                })
        
                 
        
                $('h1').css({
                    color: 'white'
                })
                $('h2').css({
                    color: 'white'
                })
                $('.h21').css({
                    color: 'white'
                })
                $('.bottomsp').css({
                    color: 'white'
                })
                $('.material-symbols-outlined').css({
                    color: 'white'
                })
                $(".material-symbols-outlined").hover(function () {
                    $(this).css({
                         color: 'rgb(136, 134, 134)'
                    })
                });
                $(".material-symbols-outlined").mouseleave(function () {
                    $(this).css({
                       color: 'white'
                    })
                })
                $('.fa-brands').css({
                    backgroundColor: '#181818',
                    color:'white'
                })
                $(".fa-brands").hover(function () {
                    $(this).css({
                        backgroundColor: 'white',
                        color:'#181818' 
                    })
                });
                $(".fa-brands").mouseleave(function () {
                    $(this).css({
                        backgroundColor: '#181818',
                        color:'white'
                    })
                })
                $(".btn").hover(function () {
                    $(this).css({
                        backgroundColor: 'white',
                        color: '#181818'
                    })
                });
                $(".btn").mouseleave(function () {
                    $(this).css({
                        backgroundColor: '#323232',
                        color:'white'
                    })
                });
                $('.h22').css({
                    color: '#bebebe'
                })
                $('.images1').removeAttr('src')
        $('.images1').attr('src','./images/logo.png')

        $('.decor').removeAttr('src')
        $('.decor').attr('src','./images/icon2.png')
        $('.images2').removeAttr('src')
        $('.images2').attr('src','./images/star.png')

                nightMode = true
                $('a').on('click',function(){
                    if(nightMode==false){
                        sessionStorage.setItem('mode','light')
                    }
                    else{
                        sessionStorage.setItem('mode','night')
                    }
                })
        }
})

if(sessionStorage.getItem('mode')=='light'){
    $('.fa-toggle-on').addClass('fa-toggle-off').removeClass('fa-toggle-on')
    $('body').css({
        backgroundColor: '#F7F9FC'
    })

    $('.rr').removeAttr('src')
    $('.rr').attr('src','./images/icon2.svg')
    $('div').css({
        backgroundColor: 'white',
        borderRadius: '30px'
    })
    $('.innerWork').css({
        backgroundColor: '#F7F9FC'
    })
    $('.childWorkOne').css({
        backgroundColor: '#F7F9FC'
    })
    $('.childWorkTwo').css({
        backgroundColor: '#F7F9FC'
    })
    $('.boxes').css({
        backgroundColor: '#F7F9FC'
    })
    $('.img1').css({
        backgroundColor: '#6CBFE7',
        borderRadius: '30px 0px 30px 0px'
    })
    $('.container').css({
        backgroundColor: '#F7F9FC'
    })
    $('strong').css({
        color: '#3E5CE3'
    })
    $('.menu').css({
        backgroundColor: '#F7F9FC'
    })
    $('.texts').css({
        backgroundColor: '#F7F9FC'
    })
    $('header').css({
        backgroundColor: '#F7F9FC'
    })
    $('footer').css({
        backgroundColor: '#F7F9FC'
    })
    $('.miniCon').css({
        backgroundColor: '#F7F9FC'
    })

    $('.top').css({
        backgroundColor: '#F7F9FC'
    })
    $('.top-right').css({
        backgroundColor: '#F7F9FC'
    })

    $('.middle').css({
        backgroundColor: '#F7F9FC'
    })
    $('.bottom').css({
        backgroundColor: '#F7F9FC'
    })

    $('.active').css({
        color: '#3E5CE3'
    })

    $("a").hover(function () {
        $(this).css({
            color: "#3E5CE3"
        })
    });
    $("a").mouseleave(function () {
        $(this).css({
            color: "#676767"
        })
        $('.active').css({
            color: '#3E5CE3'
        })
    })

    $('.top-left').mouseenter(function () {
        $('.r1').css({
            color: '#3E5CE3'
        })

    })
    $('.top-left').mouseleave(function () {
        $('.r1').css({
            color: '#8B8B8B'
        })
    })

    $('.top-right-bottom-left').mouseenter(function () {
        $('.r2').css({
            color: '#3E5CE3'
        })

    })
    $('.top-right-bottom-left').mouseleave(function () {
        $('.r2').css({
            color: '#8B8B8B'
        })
    })
    $('.top-right-bottom-right').mouseenter(function () {
        $('.r3').css({
            color: '#3E5CE3'
        })

    })
    $('.top-right-bottom-right').mouseleave(function () {
        $('.r3').css({
            color: '#8B8B8B'
        })
    })

    $('.middle-left').mouseenter(function () {
        $('.r4').css({
            color: '#3E5CE3'
        })

    })
    $('.middle-left').mouseleave(function () {
        $('.r4').css({
            color: '#8B8B8B'
        })
    })

    $('.middle-md').mouseenter(function () {
        $('.r5').css({
            color: '#3E5CE3'
        })

    })
    $('.middle-md').mouseleave(function () {
        $('.r5').css({
            color: '#8B8B8B'
        })
    })

    $('.middle-right').mouseenter(function () {
        $('.r6').css({
            color: '#3E5CE3'
        })

    })
    $('.middle-right').mouseleave(function () {
        $('.r6').css({
            color: '#8B8B8B'
        })
    })

    $('.bottom-right').mouseenter(function () {
        $('.r7').css({
            color: '#3E5CE3'
        })

    })
    $('.bottom-right').mouseleave(function () {
        $('.r7').css({
            color: '#8B8B8B'
        })
    })
    $('h1').css({
        color: 'black'
    })
    $('h2').css({
        color: 'black'
    })
    $('.h21').css({
        color: '#3E5CE3'
    })
    $('.bottomsp').css({
        color: 'black'
    })
    $('.top-left-bottom').css({
        backgroundColor: 'transparent'
    })
    $('.menuu').css({
        borderRadius: '0px'
    })
    $('.material-symbols-outlined').css({
        color: '#3E5CE3'
    })
    $(".material-symbols-outlined").hover(function () {
        $(this).css({
            color: '#2f1284'
        })
    });
    $(".material-symbols-outlined").mouseleave(function () {
        $(this).css({
            color: '#3E5CE3'
        })
    })
    $('.fa-brands').css({
        backgroundColor: '#3E5CE3'
    })
    $(".fa-brands").hover(function () {
        $(this).css({
            backgroundColor: '#2f1284',
            color: 'white'
        })
    });
    $(".fa-brands").mouseleave(function () {
        $(this).css({
            backgroundColor: '#3E5CE3'
        })
    })
    $(".btn").hover(function () {
        $(this).css({
            backgroundColor: '#3E5CE3',
            color: 'white'
        })
    });
    $(".btn").mouseleave(function () {
        $(this).css({
            backgroundColor: '#323232'
        })
    });
    $('.river').css({
        color: '#3E5CE3'
    })
    $('.h22').css({
        color: '#323232'
    })
    $('.images1').removeAttr('src')
    $('.images1').attr('src','./images/logo-dark.png')

    $('.decor').removeAttr('src')
    $('.decor').attr('src','./images/icon3.png')
    $('.images2').removeAttr('src')
    $('.images2').attr('src','./images/star2.png')
    $('.bars').css({
        backgroundColor: 'transparent',
       
    })
    nightMode = false
}
