let display = document.getElementsByClassName('disp')[0];


let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button =>{
    button.addEventListener('click', (e) =>{
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                    try{
                        console.log(display.innerText = eval(display.innerText));
                    } catch{
                        display.innerText = "Error"
                    }
                    break;
            case '←':
                        if (display.innerText){
                            display.innerText = display.innerText.slice(0, -1);
                        }
                        break;
                        default:
                           display.innerText += e.target.innerText;
        }
    });
});