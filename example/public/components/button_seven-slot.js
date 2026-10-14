class ButtonCustom extends HTMLElement{
    constructor() {
        super();
        this._color = this.getAttribute('color');
        this._size = this.getAttribute('size');
        this._style = document.createElement('style');
        this._shadowRoot = this.attachShadow({ mode: 'closed' });
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
        :host button {
            color: ${this._color};
            font-size: ${this._size}px;
        }
        `;
    }

    render() {
        this.updateStyle()
        const template = `
            ${this._style.outerHTML}
            <button><slot>This is fallback content</slot></button>
        `;
        this._shadowRoot.innerHTML = template;
    }
}

customElements.define("button-custom", ButtonCustom);

