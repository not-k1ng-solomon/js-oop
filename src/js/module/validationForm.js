export default class ValidationForm {
    constructor(selected, matrix = '+7 (___) ___-__-__') {
        this.inputs = document.querySelectorAll(selected);
        this.matrix = matrix;
    }

    setCursorPosition(pos, elem) {
        elem.focus();
        elem.selectionStart = elem.value.length;
        elem.scrollLeft = elem.scrollWidth;
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }

    createMask(item, event) {
        let matrix = this.matrix,
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = item.value.replace(/\D/g, '');
        if (def.length >= val.length) {
            val = def;
        }

        item.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

        if (event.type === 'blur') {
            if (item.value.length === 2) {
                item.value = "";
            }
        } else {
            this.setCursorPosition(item.value.length, item);
        }
    }

    initMask() {
        this.inputs.forEach(item => {
            ['input', 'focus', 'blur'].forEach(occasion => {
                item.addEventListener(occasion, (e) => {
                    this.createMask(item, e);
                });
            });
            /*            item.addEventListener('input', this.createMask);
                        item.addEventListener('focus', this.createMask);
                        item.addEventListener('blur', this.createMask);*/
            item.addEventListener('click', function () {
                this.setSelectionRange(this.value.length, this.value.length);
            });
        });
    }

    noRussianLetter() {
        this.inputs.forEach(item => {
            item.addEventListener('keypress', (e) => {
                if (!e.key.match(/[^а-яё 0-9]/ig)) {
                    e.preventDefault();
                }
            });
        });
    }
}