$(document).ready(function () {
    $('#portfolio-projects1').mixItUp();
    $('#portfolio-projects2').mixItUp();
    // $('#portfolio-projects3').mixItUp();

});

const formRows = document.querySelectorAll('.form-row')
const formRowsInputs = document.querySelectorAll('.form-row__input')

for (let i = 0; i < formRows.length; i++) {
    formRows[i].addEventListener('click', function () {
        const placeholderElement = this.querySelector('.fake-placeholder')
        placeholderElement.classList.add('active')
    })
}

for (let i = 0; i < formRowsInputs.length; i++) {
    formRowsInputs[i].addEventListener('blur', function () {
        const thisParent = this.parentElement;

        if (this.value == '') {
            thisParent.querySelector('span').classList.remove('active');
        }
    })
    formRowsInputs[i].addEventListener('keypress', function () {
        const thisParent = this.parentElement;
        thisParent.querySelector('span').classList.add('active');
    })
}

// form validate
$('#contact-form').validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        theme: {
            required: true
        },
        message: {
            required: true
        }
    },
    messages: {
        email: {
            required: 'Введите ваш Email',
            email: 'Отсутствует символ @'
        },
        theme: {
            required: 'Введите тему сообщения'
        },
        message: {
            required: 'Введите текст сообщения'
        }
    },
    submitHandler: function (form) {
        ajaxFormSubmit();
    }
});

function ajaxFormSubmit() {
    let string = $("#contact-form").serialize(); //сохранение всех данных введеннуб в форму

    $.ajax({
        type: "POST",
        url: "php/mail.php",
        data: string,


        success: function (html) {
            $("#contact-form").slideUp(800);
            $('#answer').html(html);
        }
    });

    return false;
}

$('#backTop').hide();
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('#backTop').fadeIn();
    } else {
        $('#backTop').fadeOut();
    }
})


$(document).ready(function () {
    $('#page-nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 500,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {},
        end: function () {},
        scrollChange: function ($currentListItem) {}
    });
})


function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('.burger-menu__overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overflow', 'hidden');
            $('.overlay').addClass('show');
        } else {
            $('body').css('overflow', 'visible');
            $('.overlay').removeClass('show');
        }
    }
}
burgerMenu('.burger-menu');