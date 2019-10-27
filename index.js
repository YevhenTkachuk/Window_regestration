//Функция показа
function show(state) {
    document.getElementById('window').style.display = state;
    document.getElementById('window__wrap').style.display = state;

}

document.querySelector(".regButton").addEventListener("click", function(){
    document.querySelector("#window").style.display = "block";
    document.querySelector("#window__wrap").style.display = "block";
});

function Validate(obj) {
    var username=obj.username.value;
    var tel=obj.tel.value;
    var country=obj.country.value;
    var pass=obj.pass.value;
    var passagain=obj.passagain.value;
    var mail=obj.mail.value;
    var date=obj.date.value.split('-');
    var errors="";
    if (username==="" || pass==="" || passagain==="" || mail==="" || tel==="" || country==="")
    {
        alert("Все поля должны быть заполнены!!");
        return false;
    }
    if (pass!==passagain)
    {
        errors+="Пароли не совпадают!!\n";
    }
    if (pass.length<6)
    {
        errors+="Слишком короткий пароль!!\n";
    }
    var reg = /^\w+@\w+\.\w{2,4}$/i;
    if (!reg.test(mail))
    {
        errors+="Неправильный e-mail адрес!!\n";
    }
    if (date[0]<1930)
    {
        errors+="Указана неверная дата рождения!!\n";
    }
    if(errors==="")
        return true;
    else
    {
        alert(errors);
        return false;
    }
}