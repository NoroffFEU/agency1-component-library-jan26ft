const accordionHeaders = document.querySelectorAll('.accordion__header');

accordionHeaders.forEach((header) => {
    header.addEventListener('click', () => {
    const item = header.closest('.accordion__item');
    const chevron = header.querySelector('.accordion__chevron');

    item.classList.toggle('accordion__item--open');
    chevron.classList.toggle('accordion__chevron--open');
    });
});