$(function(){
    
    var pos = [];
    var base = -300;
    var tmp_html='';
    
    $('#gnb>li').on('mouseenter', function(){
        $(this).addClass('on'); 
    });
    $('#gnb>li').on('mouseleave', function(){
        $(this).removeClass('on');
    });
    
    $('section').each(function(){
        tmp_html += '<a href="#"></a>'
    });
    $('.move_page').html(tmp_html);
    
    save_offset_top();
    
    $(window).on('resize', function(){
        save_offset_top();
    });
    
    function save_offset_top(){
        var tmp;
        pos=[];
        $('section').each(function(){
            pos.push($(this).offset().top);
        });

        pos[0]=0;
        tmp = $('section').last().offset().top + $('section').last().height();
        pos.push(tmp);
    }
    
    $(window).on('scroll', function(){
        var scroll = $(this).scrollTop();
        
        $('section').each(function(index){
            if(scroll >= pos[index]+base && scroll < pos[index+1]){
                $(this).addClass('on').siblings().removeClass('on');
            }
        });
    });
    
    $('.move_page').on('click', 'a', function(){
        var i = $(this).index();
        $('html, body').stop().animate({scrollTop : pos[i]} ,1000)
    });
    
    
});

