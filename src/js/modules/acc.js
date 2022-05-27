import Accordion from 'accordion-js';

export function acc1() {

    new Accordion('.accordion-container', {
        duration: 400,
        showMultiple: false,
        onOpen: function (currentElement) {
            console.log(currentElement);
        }
    });
};