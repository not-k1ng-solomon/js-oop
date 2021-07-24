export default class Download{
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
        this.path = 'assets/img/mainbg.jpg'
        this.dow = document.querySelectorAll('.module__info-book')
    }

    downloadItem(path){
        const elClick = document.createElement('a');
        elClick.setAttribute('href',path);
        elClick.setAttribute('download','picture');
        elClick.setAttribute('target','_blank');

        elClick.style.display = 'none';
        document.body.appendChild(elClick);

        elClick.click();

        document.body.removeChild(elClick);
    }

    init(){
        this.btns.forEach(btn=>{
            btn.addEventListener('click',(e)=>{
                e.stopPropagation();
                this.downloadItem(this.path);
            });
        });
/*        this.dow.forEach(item =>{
            item.addEventListener('click',(e)=>{
                console.log(item)
            })
        })*/
    }

}