let num1, operator;

document.addEventListener('DOMContentLoaded', function() {
    
    window.addEventListener('mouseup', unclicked);

    let clr = document.querySelector('.clear');
    clr.addEventListener('click', clear);

    let eql = document.querySelector('.equal');
    eql.addEventListener('click', calculate);

    let btns = document.querySelectorAll('button');
    btns.forEach(btn=>{
        btn.addEventListener('mousedown', clicked);
    });

    let numpads = document.querySelectorAll('.num');
    numpads.forEach(numpad=>{
        numpad.addEventListener('click', numEntry);
    });

    let oprts = document.querySelectorAll('.oprt');
    oprts.forEach(oprt=>{
        oprt.addEventListener('click', oprtEntry);
    });
});

function clicked(){
    this.classList.add('clicked');    
}

function unclicked(){
    let elem = document.querySelector('.clicked');
    if (elem) {
        elem.classList.remove('clicked');
    }
}

function clear(){
    num1 = null;
    operator = null;
    document.getElementById('mainScreen').innerHTML = '0';
}

function calculate(){
    if (operator) {
        let screen = document.getElementById('mainScreen');
        let initialNum = screen.innerHTML;
        let ans;
        switch(operator) {
            case '+':
              ans = parseInt(num1) + parseInt(initialNum);
              break;
            case '-':
              ans = parseInt(num1) - parseInt(initialNum);
              break;
            case 'x':
              ans = parseInt(num1) * parseInt(initialNum);
              break;
            case '/':
              ans = parseInt(num1) / parseInt(initialNum);
              break;
            default:
              // code block
        }

        if (Number.isInteger(ans)) {
            screen.innerHTML = ans;
        } else {
            screen.innerHTML = ans.toFixed(2);
        }

        num1 = screen.innerHTML;
        operator = null;
    } 
}

function numEntry(){
    let screen = document.getElementById('mainScreen');
    let initialNum = screen.innerHTML;

    if (initialNum.length > 11) {
        return;
    }

    if (operator) {
        
        if (initialNum == num1) {           
            screen.innerHTML = this.innerHTML ;
        }else{
            screen.innerHTML = initialNum + this.innerHTML ;
        }

    } else {
        if (initialNum == '0') {
            screen.innerHTML = this.innerHTML ;
            num1 = this.innerHTML;
        } else {
            screen.innerHTML = initialNum + this.innerHTML ;
            num1 = screen.innerHTML;
        }
    }    
}

function oprtEntry(){
    if (operator) {
        let screen = document.getElementById('mainScreen');
        let initialNum = screen.innerHTML;

        if (initialNum != num1) {
            calculate();
        }
        operator = this.innerHTML;
        
    } else {
        operator = this.innerHTML;
    }
}