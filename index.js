//nav

(function () {

    // Create mobile element
    var mobile = document.createElement('div');
    mobile.className = 'nav-mobile';
    document.querySelector('.nav').appendChild(mobile);

    // hasClass
    function hasClass(elem, className) {
        return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
    }

    // toggleClass
    function toggleClass(elem, className) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (hasClass(elem, className)) {
            while (newClass.indexOf(' ' + className + ' ') >= 0) {
                newClass = newClass.replace(' ' + className + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        } else {
            elem.className += ' ' + className;
        }
    }

    // Mobile nav function
    var mobileNav = document.querySelector('.nav-mobile');
    var toggle = document.querySelector('.nav-list');
    mobileNav.onclick = function () {
        toggleClass(this, 'nav-mobile-open');
        toggleClass(toggle, 'nav-active');
    };
})();


// smooth scroll

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {

	    });
	});
});





// active class

$(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});
});
