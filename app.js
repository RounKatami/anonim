const select = document.querySelector('select');
const allLang = ['ru', 'eng', 'ua'];

select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage(){
    let lang = select.value;
    location.href = window.location.pathname + '#' +lang;
    location.reload();
}

function changeLanguage(){
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ru';
        location.reload();
    }
    select.value = hash;
    document.querySelector('lng-o-nas').innerHTML = langArr['o-nas'][hash];
    for (let key in langArr) {
        document.querySelector('.lng-' + key).innerHTML = langArr[key][hash];
    }
}

changeLanguage();