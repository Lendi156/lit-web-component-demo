class ButtonCustom extends HTMLElement{
    constructor() {
        super();
        this._color = this.getAttribute('color');
        this._size = this.getAttribute('size');
    }

    static get observedAttributes() {
        return ['color', 'size'];
    }

    connectedCallback() {
        this.render();
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} telah diubah dari ${oldValue} ke ${newValue}`);
        this[`_${name}`] = newValue;
        this.render();
    }


    render() {
        this.innerHTML = `<button>Custom Button color: ${this._color} size: ${this._size}</button>`;
    }
}

customElements.define("button-custom", ButtonCustom);

