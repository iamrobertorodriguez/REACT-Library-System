import React from 'react';
import '../styles/BackToTopButton.css'
import $ from 'jquery'


const BackToTopButton = () => {

    let btn = $('#button');
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

    return (
        <a id="button" title='Scroll back to top'></a>
    );
};

export default BackToTopButton;