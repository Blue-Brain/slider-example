$('.myButton').click(function(){
    
    $('#container1').delay(5000).fadeOut('fast').queue(function (next) {
        $('#slides').fadeIn(5000)
    })
})

$('.carousel').carousel({
    interval: false
});