'use strict';

// Создаем новый элемент с указанным именем тега
const div = document.createElement("div");

//ищем окно с формой оценки
const form = document.querySelector(".b-screen__foot");


// Добавляем к div класс
div.classList.add('forma-otsenki');

// Добавляем к div стили
div.style.cssText = 'width: 100%; display: flex; justify-content: flex-end; position: absolute; bottom: 70px';

// Добавляем в конец окна с формой оценки тег div
form.appendChild(div);


//разметка div-a
div.insertAdjacentHTML("afterbegin", '<button class="form-btn form-btn-golos">Голос</button>');
div.insertAdjacentHTML("afterbegin", '<button class="form-btn form-btn-text">Письмо</button>');
div.insertAdjacentHTML("afterbegin", '<button class="form-btn form-btn-telemarket">Телемаркетинг</button>');

//находим кнопки 
const formBtnTxt = document.querySelectorAll(".form-btn");

//добавляем стили через цикл для каждой кнопки
document.querySelectorAll('.form-btn').forEach((e, i) => {
    e.style = 'font-size: 13px; line-height: 28px; background-color: #fc0; margin-right: 40px; padding: 0 13px; border-radius: 5px';
})


//находим кнопку Голос
const golos = document.querySelector('.form-btn-golos');

//логика ф-ии оценки Голос
function golosClick() {
    //заполняем поля
    document.getElementsByName('ustanovkaKontaktaPrivetstvie')[0].value = "5";
    document.getElementsByName('ustanovkaKontaktaProsanie')[0].value = "5";
    document.getElementsByName('logikaPredostavlenieInformacii')[0].value = "20";
    document.getElementsByName('logikaLogikaDejstvij')[0].value = "20";
    document.getElementsByName('logikaZapolnenieVidzeta')[0].value = "5";
    document.getElementsByName('etikaPravilaRecevogoEtiketa')[0].value = "10";
    document.getElementsByName('etikaGramotnost')[0].value = "5";
    document.getElementsByName('etikaNekorrektnyeFrazy')[0].value = "10";
    document.getElementsByName('etikaKacestvoReci')[0].value = "5";
    document.getElementsByName('etikaLisnieZvuki')[0].value = "5";
    document.getElementsByName('etikaKontrolNadRazgovorom')[0].value = "5";
    document.getElementsByName('etikaPostanovkaNaUderzanie')[0].value = "5";
    //устанавливаем фокус на нижнием поле
    document.getElementsByName('etikaPostanovkaNaUderzanie')[0].focus();
    telemarket.removeEventListener('click', telemarketClick);
}

//вешаем событие на кнопку Голос
golos.addEventListener('click', golosClick);
//отписываемся от события
//golos.removeEventListener('click', golosClick);



//находим кнопку Текст
const text = document.querySelector('.form-btn-text');
//логика ф-ии оценки Текст
function textClick() {
    //заполняем поля
    document.getElementsByName('logikaZapolnenieTiketa')[0].value = "15";
    document.getElementsByName('logikaPredostavlenieInformacii')[0].value = "40";
    document.getElementsByName('etikaPrivetstvie')[0].value = "5";
    document.getElementsByName('etikaGramotnost')[0].value = "15";
    document.getElementsByName('etikaOformlenieOtveta')[0].value = "10";
    document.getElementsByName('etikaNekorrektnyeFrazy')[0].value = "15";
    //устанавливаем фокус на нижнием поле
    document.getElementsByName('etikaNekorrektnyeFrazy')[0].focus();
}

//вешаем событие на кнопку Текст
text.addEventListener('click', textClick);


//находим кнопку Телемаркетинг
const telemarket = document.querySelector('.form-btn-telemarket');
//логика ф-ии оценки Телемаркетинг
function telemarketClick() {
    //заполняем поля
    document.getElementsByName('ustanovkaKontaktaPrivetstvie')[0].value = "5";
    document.getElementsByName('ustanovkaKontaktaProsanie')[0].value = "5";
    document.getElementsByName('logikaPredostavlenieInformacii')[0].value = "20";
    document.getElementsByName('logikaLogikaDejstvij')[0].value = "10";
    document.getElementsByName('objectionsResultOriented')[0].value = "10";
    document.getElementsByName('objectionsAsksQuestions')[0].value = "10";
    document.getElementsByName('objectionsCorrectArguments')[0].value = "20";
    document.getElementsByName('etikaGramotnost')[0].value = "5";
    document.getElementsByName('etikaNekorrektnyeFrazy')[0].value = "5";
    document.getElementsByName('etikaKacestvoReci')[0].value = "5";
    document.getElementsByName('etikaLisnieZvuki')[0].value = "5";
    //устанавливаем фокус на нижнием поле
    document.getElementsByName('etikaLisnieZvuki')[0].focus();
    golos.removeEventListener('click', golosClick);
}

//вешаем событие на кнопку Телемаркетинг
telemarket.addEventListener('click', telemarketClick);
//отписываемся от события
//telemarket.removeEventListener('click', telemarketClick);

