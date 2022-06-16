$(function(){
    
    $('.item').click(function(){
        if ($(this).data('href')) location.assign($(this).data('href'));
    })
    
    if ($('.product').length) {
        $('.mini .rail').css({width: $('.mini .rail img').length * 60 - 10});
        
        $('.bigimage img').click(function(){
            lightbox(this);
        });
        
        $('.gal_left').click(function(){
            if (!$(this).hasClass('disabled')) galSlide('left');
        });
        $('.gal_right').click(function(){
            if (!$(this).hasClass('disabled')) galSlide('right');
        });
        
        $('.rail img').click(function(){
            let attr = $(this).attr('src').split('/');
            attr = attr[0] + '/' + attr[1].split('_')[1];
            $('.bigimage img').attr('src', attr);
        });
    } 
});