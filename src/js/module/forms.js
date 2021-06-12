import Requests from "../services/requests";
import PopUpMessage from "./popUpMessage";

export default class Form {

    constructor(form, url) {
        this.forms = document.querySelectorAll(form);
        this.path = url;
    }

    disabledForm(inputs){
        inputs.forEach(input=>{
            input.setAttribute('disabled','disabled');
        });
    }

    unDisabledForm(inputs){
        inputs.forEach(input=>{
            input.removeAttribute('disabled');
        });
    }
    cleanInputs(inputs){
        inputs.forEach(item => {
            item.value = "";
        });
    };
    init() {
        this.forms.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();
                let inputs = item.querySelectorAll('input');
                this.disabledForm(inputs);

                let btn = item.querySelector('button');

                let btnBeforeText = btn.textContent;
                btn.textContent = '.';

                let btnInterval = setInterval(()=>{
                    if(btn.textContent.length >=3){
                        btn.textContent = '.';
                    }else btn.append('.');
                },300);

                const formData = new FormData(item);
                let request = new Requests(this.path, formData);
                request.postData()
                    .then(res => {
                        let popUpMessage = new PopUpMessage({
                            message: 'Спасибо за заполнение формы:)',
                            horizon: 'right'
                        });
                        popUpMessage.init();
                        console.log(res);
                    })
                    .catch(() => {
                        let popUpMessage = new PopUpMessage({
                            message:'При заполнении формы произошла ошибка',
                            background: 'red'
                        });
                        popUpMessage.init();
                    })
                    .finally(() => {
                        clearInterval(btnInterval);
                        btn.textContent = btnBeforeText;
                        this.unDisabledForm(inputs,btnBeforeText,btnInterval);
                        item.reset();
                        cleanInputs(inputs);
                    });
            });
        });
    }
}