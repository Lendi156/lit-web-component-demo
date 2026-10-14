import { LitElement, css, html } from 'lit'

/**
 * Public API:
 * - `variant` property / `variant` attribute (String, reflected), default `"info"`.
 *   Supported variants: `info`, `success`, `warning`, and `danger`.
 * - Default slot: alert message content.
 */
export class CyberpunkAlert extends LitElement {
  static get properties() {
    return {
      variant: { type: String, reflect: true },
    }
  }

  constructor() {
    super()
    this.variant = 'info'
  }

  render() {
    return html`
      <div class="alert ${this.variant}" role="alert">
        <slot></slot>
      </div>
    `
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .alert {
        padding: 0.875rem 1rem;
        border: 1px solid transparent;
        border-left-width: 4px;
        background: rgba(15, 23, 42, 0.92);
        color: #e2e8f0;
        line-height: 1.5;
      }

      .alert.info {
        background: rgba(84, 193, 230, 0.12);
        color: #dff7ff;
        border-color: rgba(84, 193, 230, 0.8);
      }

      .alert.success {
        background: rgba(57, 196, 182, 0.12);
        color: #d7fff9;
        border-color: rgba(57, 196, 182, 0.8);
      }

      .alert.warning {
        background: rgba(245, 158, 11, 0.12);
        color: #fff1cc;
        border-color: rgba(245, 158, 11, 0.8);
      }

      .alert.danger,
      .alert.error {
        background: rgba(225, 29, 72, 0.12);
        color: #ffe4eb;
        border-color: rgba(225, 29, 72, 0.8);
      }
    `
  }
}

if (!customElements.get('cyberpunk-alert')) {
  customElements.define('cyberpunk-alert', CyberpunkAlert)
}

export default CyberpunkAlert