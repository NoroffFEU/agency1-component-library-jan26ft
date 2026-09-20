document.querySelector('.switch__input').addEventListener('change', (e) => {       //listen everytime the user clicks og chenges the switch
    console.log('switch is now:', e.target.checked ? 'On' : 'Off');                //true or false
    });