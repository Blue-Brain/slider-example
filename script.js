$('.myButton').click(function(){
    
    $('#container1').delay(3000).fadeOut('fast').queue(function (next) {
        $('#container2').fadeIn('slow')
    })
})

$('.carousel').carousel({
    interval: false
});