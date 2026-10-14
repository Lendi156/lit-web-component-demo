class ButtonCustom extends HTMLElement{
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['color', 'size'];
    }

    connectedCallback() {
        this.render();
        console.log('Komponen terhubung dengan dom');

    }
    disconnectedCallback() {
        console.log('Komponen dilepas dari dom');
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} telah diubah dari ${oldValue} ke ${newValue}`);
    }
    adoptedCallback() {
        console.log('Komponen dipindahkan ke dokumen lain')
    }


    render() {
        this.innerHTML = '<button>Custom Button</button>';
    }
}

customElements.define("button-custom", ButtonCustom);

