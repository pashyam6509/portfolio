$(document).ready(function (){
    $('#portfolio-projects1').mixItUp();
    $('#portfolio-projects2').mixItUp();
    $('#portfolio-projects3').mixItUp();
    $('#portfolio-projects4').mixItUp();
    $('#portfolio-projects2').mixItUp();

});

const formRows = document.querySelectorAll('.form-row')
const formRowsInputs = document.querySelectorAll('.form-row__input')

for (let i = 0; i < formRows.length; i++){
    formRows[i].addEventListener('click', function () {
        const placeholderElement = this.querySelector('.fake-placeholder')
        placeholderElement.classList.add('active')
    })
}

for (let i = 0; i < formRowsInputs.length; i++){
    formRowsInputs[i].addEventListener('blur', function(){
        const thisParent = this.parentElement;

        if (this.value == ''){
            thisParent.querySelector('span').classList.remove('active');
        }
    })
}

// form validate
$('#contact-form').validate({
    rules:{
        email: {
            required: true,
            email: true
        },
        theme: {
            required: true
        },
        message:{
            required:true
        }
    },
    messages:{
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
    submitHandler: function (form){
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

