export default class PopUpMessage {
    constructor(message, background = '#5B72C4', color = '#fff', vertical = 'bottom', horizon = 'left', display = 'block') {
        this.message = message;
        this.vertical = vertical;
        this.horizon = horizon;
        this.background = background;
        this.color = color;
        this.display = display;
    }

    showPopUp(element) {
        console.log(12);
        document.body.appendChild(element);
        element.style.display = this.display;
        element.classList.add('animated', 'fadeInUp');
    }

    hidePopUP(element) {
        element.classList.remove('fadeInUp');
        element.classList.add('fadeOutDown');
        setTimeout(() => {
            element.remove();
        }, 900);
    }

    createBlock() {
        let div = document.createElement('div');
        div.style.cssText = `
            min-width: 200px;
            min-height: 50px;
            position: fixed;
            display: none;
            background-color: ${this.background};
            color: ${this.color};
            font-size: 0.9rem;
            padding: 20px;
            z-index: 100;
            border-radius: 5px;
        
        `;

        if (this.vertical === 'top') {
            div.style.top = '5%';
        } else div.style.bottom = '5%';
        if (this.horizon === 'left') {
            div.style.left = '2%';
        } else div.style.right = '2%';

        return div;
    };

    init() {
        this.div = this.createBlock();
        this.div.textContent = this.message;
        this.showPopUp(this.div);
        setTimeout(() => {
            this.hidePopUP(this.div);
        }, 3000);
    }
}

