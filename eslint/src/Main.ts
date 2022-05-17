export default class Main extends HTMLElement {
    constructor() {
		super()
	}

    connectedCallback() {
        console.log('Main');
        this.render('a')
    }

    render(a: string) {
        console.log(a, 'render')
    }
}

