const accordionHeaders = document.querySelectorAll('.accordion__header');

accordionHeaders.forEach((header) => {
    header.addEventListener('click', () => {
    const item = header.closest('.accordion__item');
    const chevron = item.querySelector('.accordion__chevron');

    item.classList.toggle('accordion__item--open');
    chevron.classList.toggle('accordion__chevron--open');
    });
});

// Making the headerSwitches control the bodySwitches
const headerSwitches = document.querySelectorAll('.switch--header .switch__input');

headerSwitches.forEach((switchEl) => {
    
        const item = switchEl.closest('.accordion__item');
        const bodySwitches = item.querySelectorAll('.accordion__body .switch__input');

        if (!switchEl.checked) {
            bodySwitches.forEach((bodySwitch) => {
                bodySwitch.disabled = true;
                bodySwitch.checked = false;
            })
        }

        switchEl.addEventListener('change', ()=> {
            bodySwitches.forEach((bodySwitch) => {
                if(switchEl.checked){
                    bodySwitch.disabled = false;
                    bodySwitch.checked = true;
                }else{
                    bodySwitch.disabled = true;
                    bodySwitch.checked = false;
                }
            });
    });
});