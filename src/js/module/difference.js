export default class Difference {
    constructor(officer = null, items = null) {
        this.officer = document.querySelector(officer);
        this.items = this.officer.querySelectorAll(items);
        this.counter = 0;
    }

    bindTriggers(plus, items, counter) {
        plus.addEventListener('click', () => {
            items[counter].style.display = 'flex';
            items[items.length - 1].classList.add('animated', 'slideInDown');
            setTimeout(() => {
                items[items.length - 1].classList.remove('animated', 'slideInDown')
            }, 800);

            if (counter === items.length - 2) {
                items[items.length - 1].remove();
            } else {
                counter++;
            }
        });
    }

    hideItems(items) {
        items.forEach((item, i, arr) => {
            if (i !== arr.length - 1) {
                item.style.display = 'none';
            }
        });
    }

    init() {
        this.hideItems(this.items);
        this.bindTriggers(this.officer.querySelector('.plus'), this.items, this.counter);
    }
}