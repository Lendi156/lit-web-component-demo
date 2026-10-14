import { LitElement, css, html } from 'lit';

export class MyButton extends LitElement {
    static properties = {
        label: { type: String },
        disabled: { type: Boolean }
    };

    static styles = css`
        button {
            background: black;
            color: white;
        }
    `

    render() {
        return html`
            <button ?disabled=${this.disabled}>
                ${this.label}
            </button>
        `;
    }
}

customElements.define('my-button', MyButton);
