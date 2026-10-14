import { LitElement, html } from 'lit';

export class MyButton extends LitElement {
    render() {
        return html`
            <button>Hello World</button>
        `;
    }
}

customElements.define('my-button', MyButton);
