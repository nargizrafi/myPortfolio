
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
        $('div').css({
            backgroundColor: 'white',
            borderRadius: '10px'
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
        $('p').css({
            color: '#676767'
        })
        $('a').css({
            color: '#8B8B8B'
        })
        $('.btn').css({
            color: 'white'
        })
        $('.active').css({
            color: '#3E5CE3'
        })
       $('button').css({
        backgroundColor: '#323232',
        color: '#fff'
       })
       $("button").hover(function () {
        $(this).css({
            backgroundColor: '#3E5CE3',
    color: 'white'
        })
    })
    $("button").mouseleave(function () {
        $(this).css({
            backgroundColor: '#323232',
            color: '#fff'
        })
        
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

        $('.left').css({
            backgroundColor: '#F7F9FC'
        })
        $('.sections').css({
            backgroundColor: '#F7F9FC'
        })
        $('.text').css({
            backgroundColor: '#F7F9FC'
        })
        $('.social').css({
            backgroundColor: '#F7F9FC'
           
        })
        $('input').css({
            backgroundColor: '#F7F9FC',
            caretColor: "black",
            color:"black"
        })
        $('textarea').css({
            backgroundColor: '#F7F9FC',
            caretColor: "black",
            color:"black"
        })
        $('.icon').css({
            color: '#3E5CE3'
        })
        $('h1').css({
            color: 'black'
        })
        $('h3').css({
            color: 'black'
        })
        $('h4').css({
            color: 'black'
        })
        $('.bottomsp').css({
            color: 'black'
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
        $('.menuu').css({
            borderRadius: '0px'
        })
        $('.river').css({
            color: '#3E5CE3'
        })
        $('.images1').removeAttr('src')
        $('.images1').attr('src','./images/logo-dark.png')

        $('.decor').removeAttr('src')
        $('.decor').attr('src','./images/icon3.png')
        $('.pic').css({
            backgroundColor: 'transparent'
        })
        $('.h22').css({
            color: '#323232'
        })
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
                $('div').css({
                    backgroundColor: '',
                    borderRadius: '10px'
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
                
                 $('.info').css({
            color: 'white'
        })
        $('button').css({
            backgroundColor: '#323232',
            color: '#fff'
           })
           $("button").hover(function () {
            $(this).css({
                backgroundColor: 'white',
        color: '#0F0F0F'
            })
        })
        $("button").mouseleave(function () {
            $(this).css({
                backgroundColor: '#323232',
                color: '#fff'
            })
            
        })   
                
                $('input').css({
                    backgroundColor: '#181818',
                    caretColor: "white",
                    color:"white"
                })
                $('textarea').css({
                    backgroundColor: '#181818',
                    caretColor: "white",
                    color:"white"
                })
                $('.icon').css({
                    color: 'white'
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
                $(".info1").hover(function () {
                    $(this).css({
                          color: "#8B8B8B"
                    })
                });
                $(".info1").mouseleave(function () {
                    $(this).css({
                        color: "white"
                    })
                })
                 
                $('.menuu').css({
                    borderRadius: '0px'
                })
                $('h1').css({
                    color: 'white'
                })
                $('h3').css({
                    color: 'white'
                })
                $('h4').css({
                    color: 'white'
                })
                $('.bottomsp').css({
                    color: 'white'
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
                $('.h22').css({
                    color: '#bebebe'
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
                $('.images1').removeAttr('src')
        $('.images1').attr('src','./images/logo.png')

        $('.decor').removeAttr('src')
        $('.decor').attr('src','./images/icon2.png')


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
    $('div').css({
        backgroundColor: 'white',
        borderRadius: '10px'
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
    $('p').css({
        color: '#676767'
    })
    $('a').css({
        color: '#676767'
    })
    $('.btn').css({
        color: 'white'
    })
    $('.active').css({
        color: '#3E5CE3'
    })
    $('button').css({
        backgroundColor: '#323232',
        color: '#fff'
       })
       $("button").hover(function () {
        $(this).css({
            backgroundColor: '#3E5CE3',
    color: 'white'
        })
    })
    $("button").mouseleave(function () {
        $(this).css({
            backgroundColor: '#323232',
            color: '#fff'
        })
        
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

    $('.left').css({
        backgroundColor: '#F7F9FC'
    })
    $('.sections').css({
        backgroundColor: '#F7F9FC'
    })
    $('.text').css({
        backgroundColor: '#F7F9FC'
    })
    $('.social').css({
        backgroundColor: '#F7F9FC'
       
    })
    $('input').css({
        backgroundColor: '#F7F9FC',
        caretColor: "black",
        color:"black"
    })
    $('textarea').css({
        backgroundColor: '#F7F9FC',
        caretColor: "black",
        color:"black"
    })
    $('.icon').css({
        color: '#3E5CE3'
    })
    $('h1').css({
        color: 'black'
    })
    $('h3').css({
        color: 'black'
    })
    $('h4').css({
        color: 'black'
    })
    $('.bottomsp').css({
        color: 'black'
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
    $('.menuu').css({
        borderRadius: '0px'
    })
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
    $('.pic').css({
        backgroundColor: 'transparent'
    })
    $('.bars').css({
        backgroundColor: 'transparent',
       
    })
    nightMode = false
}

