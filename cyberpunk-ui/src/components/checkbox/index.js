import { LitElement, css, html } from 'lit'

/**
 * Public API:
 * - `label` property / `label` attribute (String, reflected), default `""`.
 * - `checked` property / `checked` attribute (Boolean, reflected), default `false`.
 * - `disabled` property / `disabled` attribute (Boolean, reflected), default `false`.
 * - `required` property / `required` attribute (Boolean, reflected), default `false`.
 * - `value` property / `value` attribute (String, reflected), default `"on"`.
 * - Emits `value-changed` with `{ checked, value }` when the checkbox changes.
 */
export class CyberpunkCheckbox extends LitElement {
  static get properties() {
    return {
      label: { type: String, reflect: true },
      checked: { type: Boolean, reflect: true },
      disabled: { type: Boolean, reflect: true },
      required: { type: Boolean, reflect: true },
      value: { type: String, reflect: true },
    }
  }

  constructor() {
    super()
    this.label = ''
    this.checked = false
    this.disabled = false
    this.required = false
    this.value = 'on'
  }

  render() {
    return html`
      <label class="checkbox-wrapper">
        <input
          class="checkbox"
          type="checkbox"
          .checked=${this.checked}
          ?disabled=${this.disabled}
          ?required=${this.required}
          value=${this.value}
          @change=${this._onChange}
        />
        ${this.label ? html`<span class="label">${this.label}</span>` : ''}
      </label>
    `
  }

  _onChange(event) {
    this.checked = event.target.checked
    this.dispatchEvent(
      new CustomEvent('value-changed', {
        detail: { checked: this.checked, value: this.value },
        bubbles: true,
        composed: true,
      }),
    )
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        --checkbox-bg: rgba(15, 23, 42, 0.8);
        --checkbox-border: rgba(148, 163, 184, 0.5);
        --checkbox-checked: var(--primary, #fee801);
        --checkbox-check: #111827;
        --checkbox-text: #e2e8f0;
      }

      .checkbox-wrapper {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        color: var(--checkbox-text);
        cursor: pointer;
      }

      .checkbox {
        appearance: none;
        position: relative;
        width: 20px;
        height: 20px;
        margin: 0;
        border: 2px solid var(--checkbox-border);
        border-radius: 0;
        background: var(--checkbox-bg);
        cursor: pointer;
        transition: border-color 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease;
      }

      .checkbox:checked {
        background: var(--checkbox-checked);
        border-color: var(--checkbox-checked);
        box-shadow: 0 0 0 3px rgba(254, 232, 1, 0.2);
      }

      .checkbox:checked::after {
        content: '';
        position: absolute;
        left: 6px;
        top: 2px;
        width: 5px;
        height: 10px;
        border: solid var(--checkbox-check);
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }

      .checkbox:focus-visible {
        outline: 3px solid #facc15;
        outline-offset: 3px;
      }

      .checkbox:disabled {
        opacity: 0.55;
        cursor: not-allowed;
      }

      .label {
        font-size: 0.9rem;
        font-weight: 600;
        letter-spacing: 0.02em;
        color: var(--checkbox-text);
      }
    `
  }
}

if (!customElements.get('cyberpunk-checkbox')) {
  customElements.define('cyberpunk-checkbox', CyberpunkCheckbox)
}

export default CyberpunkCheckbox
