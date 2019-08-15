$('.myButton').click(function(){
    
    $('#container1').delay(5000).fadeOut('fast').queue(function (next) {
        $('#slides').fadeIn('fast')
    })
})
