
$('.top-right-bottom-left').mouseenter(function () {
    $('.r2').css({
        color: 'white'
    })

})
$('.bars').on('click', function () {
    $('.menuu').css({
        display: 'flex'
    })
})
$('.menubars-x').on('click', function () {
    $('.menuu').css({
        display: 'none'
    })
})
$('.top-right-bottom-left').mouseleave(function () {
    $('.r2').css({
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


var nightMode = true
$('.mode').on('click', function () {
    if (nightMode == true) {


        $('.fa-toggle-on').addClass('fa-toggle-off').removeClass('fa-toggle-on')
        $('body').css({
            backgroundColor: '#F7F9FC'
        })
        $('div').css({
            backgroundColor: 'white',
            borderRadius: '30px'
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
        $('.outside').css({
            backgroundColor: '#F7F9FC'
        })
        $('p').css({
            color: 'black'
        })

        $('.top').css({
            backgroundColor: '#F7F9FC'
        })
        $('.h2s').css({
            color: 'black'
        })

        $('.bottom').css({
            backgroundColor: '#F7F9FC'
        })
        $('.left').css({
            backgroundColor: '#F7F9FC'
        })
        $('.first').css({
            backgroundColor: '#F7F9FC'
        })
        $('.right').css({
            backgroundColor: '#F7F9FC'
        })
        $("a").hover(function () {
            $(this).css({
                color: "#3E5CE3"
            })
        });
        $("a").mouseleave(function () {
            $(this).css({
                color: "8B8B8B"
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
        $('form').css({
            backgroundColor: 'white'
        })
        $('input').css({
            backgroundColor: 'white',
            caretColor: 'black'
        })
        $('.cata').css({
            color: 'black',
            opacity: '0.7'
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
        $('.fblog').css({
            color: 'black',
            opacity: '0.7'
            
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
         $(".cata").hover(function () {
            $(this).css({
            color: '#3E5CE3',
            opacity: '0.7'
        })
        });
        $(".cata").mouseleave(function () {
            $(this).css({
            color: 'black',
            opacity: '0.7'
        })
        });
        $(".fblog").hover(function () {
            $(this).css({
            color: '#3E5CE3'
            
        })
        });
        $(".fblog").mouseleave(function () {
            $(this).css({
            color: 'black'
            
        })
        });
       
            
       
      
        $(".tag").hover(function () {
            $(this).css({
                backgroundColor: '#3E5CE3',
                color: 'white'
            })
        });
        $(".tag").mouseleave(function () {
            $(this).css({
                backgroundColor: '#323232'
            })
        });
        $(".readmore").hover(function () {
            $(this).css({
                backgroundColor: '#3E5CE3',
                color: 'white'
            })
        });
        $(".readmore").mouseleave(function () {
            $(this).css({
                backgroundColor: '#323232'
            })
        });
        $("button").hover(function () {
            $(this).css({
                backgroundColor: '#3E5CE3',
                color: 'white'
            })
        });
        $("button").mouseleave(function () {
            $(this).css({
                backgroundColor: '#323232'
            })
        });
        $('.menuu').css({
            borderRadius: '0px'
        })
        $('.texth2').css({
            color: '#687272'
        })
        $('.river').css({
            color: '#3E5CE3'
        })
        $('.h22').css({
            color: '#323232'
        })
        $('.images1').removeAttr('src')
        $('.images1').attr('src', './images/logo-dark.png')

        $('.decor').removeAttr('src')
        $('.decor').attr('src', './images/icon3.png')
        $('input').css({
            color: "black"
        })
        $('.images2').removeAttr('src')
        $('.images2').attr('src', './images/star2.png')
        nightMode = false
        $('a').on('click', function () {
            if (nightMode == false) {
                sessionStorage.setItem('mode', 'light')
            }
            else {
                sessionStorage.setItem('mode', 'night')
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
        $('div').css({
            backgroundColor: '',
            borderRadius: '30px'
        })
        $('.img1').css({
            backgroundColor: '#6CBFE7',
            borderRadius: '30px 0px 30px 0px'
        })
        $('.container').css({
            backgroundColor: '#0F0F0F'
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
        $('p').css({
            color: 'white'
        })
        $('.top').css({
            backgroundColor: '#0F0F0F'
        })
        $('.top-right').css({
            backgroundColor: '#0F0F0F'
        })
        
        $('.bottom').css({
            backgroundColor: '#0F0F0F'
        })


        $('.fblog').css({
            color: 'white',
            opacity: '0.7'
            
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
        $('.h2s').css({
            color: '#5E5E5E'
        })
        $('form').css({
            backgroundColor: '#181818'
        })
        $('input').css({
            backgroundColor: '#181818',
            caretColor: 'white',
            color: 'white'
        })
        $('.cata').css({
            color: 'white'
        })
        $('.texth2').css({
            color: '#687272'
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
            color: 'white'
        })
        $(".fa-brands").hover(function () {
            $(this).css({
                backgroundColor: 'white',
                color: '#181818'
            })
        });
        $(".fa-brands").mouseleave(function () {
            $(this).css({
                backgroundColor: '#181818',
                color: 'white'
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
                color: 'white'
            })
        });
        $(".tag").hover(function () {
            $(this).css({
                backgroundColor: 'white',
                color: '#181818'
            })
        });
        $(".tag").mouseleave(function () {
            $(this).css({
                backgroundColor: '#323232',
                color: 'white'
            })
        });
        $(".readmore").hover(function () {
            $(this).css({
                backgroundColor: 'white',
                color: '#181818'
            })
        });
        $(".readmore").mouseleave(function () {
            $(this).css({
                backgroundColor: '#323232',
                color: 'white'
            })
        });
        $("button").hover(function () {
            $(this).css({
                backgroundColor: 'white',
                color: '#181818'
            })
        });
        $("button").mouseleave(function () {
            $(this).css({
                backgroundColor: '#323232',
                color: 'white'
            })
        });
        $(".cata").hover(function () {
            $(this).css({
            color: '#3E5CE3',
            opacity: '0.7'
        })
        });
        $(".cata").mouseleave(function () {
            $(this).css({
            color: 'white',
            opacity: '0.7'
        })
        });
        $(".fblog").hover(function () {
            $(this).css({
            color: '#3E5CE3'
            
        })
        });
        $(".fblog").mouseleave(function () {
            $(this).css({
            color: 'white'
          
        })
        });
        $('.menuu').css({
            borderRadius: '0px'
        })
        $('.images1').removeAttr('src')
        $('.images1').attr('src', './images/logo.png')

        $('.decor').removeAttr('src')
        $('.decor').attr('src', './images/icon2.png')

        $('.images2').removeAttr('src')
        $('.images2').attr('src', './images/star.png')
        $('.h22').css({
            color: '#bebebe'
        })
        nightMode = true

        $('a').on('click', function () {
            if (nightMode == false) {
                sessionStorage.setItem('mode', 'light')
            }
            else {
                sessionStorage.setItem('mode', 'night')
            }
        })
    }

})

if (sessionStorage.getItem('mode') == 'light') {
    $('.fa-toggle-on').addClass('fa-toggle-off').removeClass('fa-toggle-on')
    $('body').css({
        backgroundColor: '#F7F9FC'
    })
    $('div').css({
        backgroundColor: 'white',
        borderRadius: '30px'
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
    $('.outside').css({
        backgroundColor: '#F7F9FC'
    })
    $('p').css({
        color: 'black'
    })

    $('.top').css({
        backgroundColor: '#F7F9FC'
    })
    $('.h2s').css({
        color: 'black'
    })
    $('input').css({
        color: "black"
    })
    $('.bottom').css({
        backgroundColor: '#F7F9FC'
    })
    $('.left').css({
        backgroundColor: '#F7F9FC'
    })
    $('.first').css({
        backgroundColor: '#F7F9FC'
    })
    $('.right').css({
        backgroundColor: '#F7F9FC'
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
    $(".cata").hover(function () {
        $(this).css({
        color: '#3E5CE3',
        opacity: '0.7'
    })
    });
    $(".cata").mouseleave(function () {
        $(this).css({
        color: 'black',
        opacity: '0.7'
    })
    });
    $('.fblog').css({
        color: 'black',
        opacity: '0.7'
    })
    $(".fblog").hover(function () {
        $(this).css({
        color: '#3E5CE3'
        
    })
    });
    $(".fblog").mouseleave(function () {
        $(this).css({
        color: 'black'
       
    })
    });
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
    $('form').css({
        backgroundColor: 'white'
    })
    $('input').css({
        backgroundColor: 'white',
        caretColor: 'black'
    })
    $('.cata').css({
        color: 'black',
        opacity: '0.7'
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
    $(".tag").hover(function () {
        $(this).css({
            backgroundColor: '#3E5CE3',
            color: 'white'
        })
    });
    $(".tag").mouseleave(function () {
        $(this).css({
            backgroundColor: '#323232'
        })
    });
    $(".readmore").hover(function () {
        $(this).css({
            backgroundColor: '#3E5CE3',
            color: 'white'
        })
    });
    $(".readmore").mouseleave(function () {
        $(this).css({
            backgroundColor: '#323232'
        })
    });
    $("button").hover(function () {
        $(this).css({
            backgroundColor: '#3E5CE3',
            color: 'white'
        })
    });
    $("button").mouseleave(function () {
        $(this).css({
            backgroundColor: '#323232'
        })
    });
    $('.menuu').css({
        borderRadius: '0px'
    })
    $('.texth2').css({
        color: '#687272'
    })
    $('.river').css({
        color: '#3E5CE3'
    })
    $('.h22').css({
        color: '#323232'
    })
    $('.images1').removeAttr('src')
    $('.images1').attr('src', './images/logo-dark.png')

    $('.decor').removeAttr('src')
    $('.decor').attr('src', './images/icon3.png')

    $('.images2').removeAttr('src')
    $('.images2').attr('src', './images/star2.png')
    $('.bars').css({
        backgroundColor: 'transparent',
       
    })
    nightMode = false
}
