$(document).ready(function (){
    $('#portfolio-projects1').mixItUp();
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