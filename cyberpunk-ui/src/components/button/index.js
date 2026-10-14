import { LitElement, css, html } from 'lit'

/**
 * Public API:
 * - `variant` property / `variant` attribute (String, reflected), default `"primary"`.
 * - `type` property / `type` attribute (String, reflected), default `"button"`.
 * - `disabled` property / `disabled` attribute (Boolean, reflected), default `false`.
 * - Default slot: button label/content.
 */
export class CyberpunkButton extends LitElement {
  static get properties() {
    return {
      variant: { type: String, reflect: true },
      type: { type: String, reflect: true },
      disabled: { type: Boolean, reflect: true },
    }
  }

  constructor() {
    super()
    this.variant = 'primary'
    this.type = 'button'
    this.disabled = false
  }

  render() {
    return html`
      <button
        class="button ${this.variant}"
        type=${this.type}
        ?disabled=${this.disabled}
        aria-disabled=${this.disabled ? 'true' : 'false'}
      >
        <slot></slot>
      </button>
    `
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        --button-bg: var(--primary, #fee801);
        --button-bg-hover: var(--primary-2, #9a9f17);
        --button-text: #111827;
        --button-border: var(--primary, #fee801);
        --button-shadow: rgba(254, 232, 1, 0.35);
        --button-secondary-bg: rgba(15, 23, 42, 0.9);
        --button-secondary-text: #e2e8f0;
        --button-secondary-border: var(--secondary, #54c1e6);
        --button-muted-bg: transparent;
        --button-muted-text: #e2e8f0;
        --button-muted-border: rgba(148, 163, 184, 0.5);
      }

      .button {
        appearance: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 44px;
        min-width: 120px;
        padding: 0.75rem 1.25rem;
        border: 2px solid transparent;
        font: inherit;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        cursor: pointer;
        transition:
          transform 0.15s ease,
          box-shadow 0.15s ease,
          background-color 0.15s ease,
          border-color 0.15s ease;
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      }

      .button:hover:not(:disabled) {
        transform: translateY(-1px);
      }

      .button:focus-visible {
        outline: 3px solid #facc15;
        outline-offset: 3px;
      }

      .button:disabled {
        cursor: not-allowed;
        opacity: 0.55;
        filter: grayscale(0.2);
      }

      .button.primary {
        background: linear-gradient(135deg, var(--button-bg), var(--button-bg-hover));
        color: var(--button-text);
        border-color: var(--button-border);
        box-shadow: 0 0 18px var(--button-shadow);
      }

      .button.primary:hover:not(:disabled) {
        background: linear-gradient(135deg, var(--primary-2, #9a9f17), var(--primary, #fee801));
      }

      .button.secondary {
        background: linear-gradient(135deg, var(--secondary, #54c1e6), var(--secondary-2, #39c4b6));
        color: #08141d;
        border-color: var(--button-secondary-border);
      }

      .button.secondary:hover:not(:disabled) {
        background: linear-gradient(135deg, var(--secondary-2, #39c4b6), var(--secondary, #54c1e6));
      }

      .button.ghost {
        background: var(--button-muted-bg);
        color: var(--button-muted-text);
        border-color: var(--button-muted-border);
      }

      .button.ghost:hover:not(:disabled) {
        background: rgba(84, 193, 230, 0.08);
      }

      .button.info {
        background: linear-gradient(135deg, var(--secondary, #54c1e6), var(--secondary-2, #39c4b6));
        color: #08141d;
        border-color: rgba(84, 193, 230, 0.9);
      }

      .button.success {
        background: linear-gradient(135deg, var(--success, #39c4b6), var(--secondary-2, #39c4b6));
        color: #041b1a;
        border-color: rgba(57, 196, 182, 0.9);
      }

      .button.warning {
        background: linear-gradient(135deg, #fbbf24, #f59e0b);
        color: #1c1917;
        border-color: rgba(245, 158, 11, 0.9);
      }

      .button.danger {
        background: linear-gradient(135deg, #f43f5e, #e11d48);
        color: #fff1f2;
        border-color: rgba(225, 29, 72, 0.9);
      }
    `
  }
}

if (!customElements.get('cyberpunk-button')) {
  customElements.define('cyberpunk-button', CyberpunkButton)
}

export default CyberpunkButton
