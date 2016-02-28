var fname = document.querySelector('#fname');
var age = document.querySelector('#age');
var err = document.querySelector('#fnameerr');

function checkLName() {
    fname = document.querySelector('#lname');
    err = document.querySelector('#lnameerr')
    checkFName();
}

function checkFName() {
    var name = fname.value;
    var flag = 0;
    for(var i = 0; i < name.length; i++) {
        var temp = parseInt(name.charAt(i));
        if(!(isNaN(temp))) {
            flag = 1;
            break;
        }
    }
    if (flag === 1) {
        fname.setAttribute('class','error');
        err.setAttribute('class','errormsg');
    } else {
        fname.setAttribute('class','');
        err.setAttribute('class','hidden');
    }
    fname = document.querySelector('#fname');
    err = document.querySelector('#fnameerr');
}

function checkAge() {
    var name = age.value;
    err = document.querySelector('#ageerr')
    var flag = 0;
    for(var i = 0; i < name.length; i++) {
        var temp = parseInt(name.charAt(i));
        if(isNaN(temp)) {
            flag = 1;
            break;
        }
    }
    if (flag === 1) {
        age.setAttribute('class','error');
        err.setAttribute('class','errormsg');
    } else {
        age.setAttribute('class','');
        err.setAttribute('class','hidden');
    }
}

function checkFinal() {
    var inputs = document.querySelectorAll('input[type=text]'),
        err = document.querySelectorAll('.errmsg'),
        falg = 0, 
        result = document.querySelector('#result');
    for(var i = 0; i < inputs.length; i++) {
        var temp = inputs[i].value;
        if(temp.length === 0) {
            flag = 1;
            break;
        }
    }
    if(err.length > 0 || flag === 1) {
        result.textContent = "Please Correct your data before submitting";
        return false;
    } else {
        result.textContent = "Thank you, your form is submitted";
        return true;
    }
    /*for(var i = 0; i < inputs.length; i++) {
        var temp = inputs.getAttribute()
    }*/
}