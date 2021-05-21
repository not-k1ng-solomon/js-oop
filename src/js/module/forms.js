import Requests from "../services/requests";

export default class Form {
    constructor(form,input) {
        this.forms = document.querySelectorAll(form);
        this.inputs = document.querySelectorAll(input);
        this.message = {
            'loading': 'Загрузка...',
            'success': 'Спасибо! Скоро мы свяжемся',
            'failure': 'Что-то пошло не так...'
        };
        this.path = {
            question: 'assets/question.php',
        };
    }

    cleanInputs() {
        this.inputs.forEach(item => {
            item.value = "";
        });
    };

    init() {
        this.forms.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(item);
                let api = this.path.question;
                let request = new Requests(api, formData);
                request.postData()
                    .then(res => {
                        console.log(res);
                    })
                    .catch(() => {
                        console.log(message.fail);

                    })
                    .finally(() => {
                        this.cleanInputs();
                    });
            });
        });
    }
}