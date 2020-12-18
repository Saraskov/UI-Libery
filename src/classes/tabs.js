class Tabs {
    constructor(container){
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
        this.tabs.forEach(tab => console.log(tab));
    }
    init(){
        this.tabs.forEach(tab => {
            tab.addEventListener('click', e => {
                this.toggleTabs(e);
                this.toggleContent(e);
            })
        });
    }
    toggleTabs(e){
        //Remove current active classes
        this.tabs.forEach(tab => tab.classList.remove('active'));

        //Add new active class to clicked tab
        e.target.classList.add('active');
    }
    toggleContent(e){
        //Romove current active classes from content
        this.container.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
        //Add new active class to selected content
        const selector = e.target.getAttribute('data-target');
        const content = this.container.querySelector(selector);
        content.classList.add('active');
    }
}

export {Tabs as default}