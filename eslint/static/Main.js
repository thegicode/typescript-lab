export default class Main extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        console.log('Main');
        this.render('a');
    }
    render(a) {
        console.log(a, 'render');
    }
}
