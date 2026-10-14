class ButtonCustom extends HTMLElement{
    constructor() {
        super();
        this._color = this.getAttribute('color');
        this._size = this.getAttribute('size');
        this._style = document.createElement('style');
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

    updateStyle() {
        this._style.textContent = `
        ${this.localName} button {
            color: ${this._color};
            font-size: ${this._size}px;
        }
        `;
    }

    render() {
        this.updateStyle()
        this.innerHTML = `
        ${this._style.outerHTML}
        <button>Custom Button color: ${this._color} size: ${this._size}</button>
        `;
    }
}

customElements.define("button-custom", ButtonCustom);

