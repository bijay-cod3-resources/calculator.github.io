function cal(){
    var first = document.getElementById('first').value;
    var second = document.getElementById('second').value;
    
    var ope = document.getElementById('ope').value;
    
    if (ope == '+'){
        var ans = parseInt (first) + parseInt (second);
    }
    if (ope == '-'){
        var ans = parseInt (first) - parseInt (second);
    }
    if (ope == 'x'){
        var ans = parseInt (first) * parseInt (second);
    }
    if (ope == '/'){
        var ans = parseInt (first) / parseInt (second);
    }

    document.getElementById('ans').value = ans

    
}