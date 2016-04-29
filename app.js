$( document ).ready(function() {


    $('.logo-grey').hover( function () {
        $('.client-text').removeClass('logo-hover'), $('.logo-grey').removeClass('logo-hover')
        var currentHover = "." + this.classList[this.classList.length -1]
        $(currentHover).addClass("logo-hover")
    })

});
