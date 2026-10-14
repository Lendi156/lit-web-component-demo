// class ButtonCustom extends HTMLElement{
//     constructor() {
//         super();
//         this.render();
//     }

//     render() {
//         this.innerHTML = 'Custom Button';
//     }
// }

// customElements.define("button-custom", ButtonCustom);


class ButtonCustom extends HTMLElement{
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = '<button>Custom Button</button>';
    }
}

customElements.define("button-custom", ButtonCustom);

