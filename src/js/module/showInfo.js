export default class ShowInfo{

    constructor({trigger, message, display = 'block'}) {
        this.trigger = document.querySelectorAll(trigger) ;
        this.message = document.querySelectorAll(message) ;
        this.display = display ;
    }

    init(){
        for (let i = 0; i < this.trigger.length; i++){
            this.trigger[i].addEventListener('click',()=>{
                let message = this.message[i];
                console.log(message.style.display);
                if(message.style.display === 'none' || message.style.display === ""){
                    message.style.display = this.display;
                    message.classList.remove('animated', 'fadeOutDown');
                    message.classList.add('animated', 'fadeInUp');
                }
                else {
                    message.classList.remove('animated', 'fadeInUp');
                    message.classList.add('animated', 'fadeOutDown');
                    setTimeout(()=> message.style.display = 'none', 700);
                }
            });
        }

    }
}