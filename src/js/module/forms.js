import Requests from "../services/requests";
import PopUpMessage from "./popUpMessage";
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
                        let popUpMessage = new PopUpMessage('Спасибо за заполнение формы:)');
                        popUpMessage.init();
                        console.log(res);
                    })
                    .catch(() => {
                        let popUpMessage = new PopUpMessage('При заполнении формы произошла ошибка','red');
                        popUpMessage.init();
                    })
                    .finally(() => {
                        this.cleanInputs();
                    });
            });
        });
    }
}