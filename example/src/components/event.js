import { LitElement, css, html } from 'lit';

export class MyButton extends LitElement {
    constructor() {
        super();
        this.count = 0;
    }
    static properties = {
        label: { type: String },
        disabled: { type: Boolean },
        count: {type: Number }
    };

    static styles = css`
        button {
            background: black;
            color: white;
        }
    `

    render() {
        return html`
            <button ?disabled=${this.disabled} @click=${this._increment}>
                ${this.label}
            </button>
            <p>Click Count: ${this.count}</p>
        `;
    }

    _increment() {
        this.count++;
    }
}

customElements.define('my-button', MyButton);
