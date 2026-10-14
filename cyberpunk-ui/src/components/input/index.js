import { LitElement, css, html } from 'lit'

/**
 * Public API:
 * - `type` property / `type` attribute (String, reflected), default `"text"`.
 * - `label` property / `label` attribute (String, reflected), default `""`.
 * - `placeholder` property / `placeholder` attribute (String, reflected), default `""`.
 * - `value` property / `value` attribute (String, reflected), default `""`.
 * - `disabled` property / `disabled` attribute (Boolean, reflected), default `false`.
 * - `required` property / `required` attribute (Boolean, reflected), default `false`.
 * - Emits `value-changed` with `{ value }` when the input changes.
 */
export class CyberpunkInput extends LitElement {
  static get properties() {
    return {
      type: { type: String, reflect: true },
      label: { type: String, reflect: true },
      placeholder: { type: String, reflect: true },
      value: { type: String, reflect: true },
      disabled: { type: Boolean, reflect: true },
      required: { type: Boolean, reflect: true },
    }
  }

  constructor() {
    super()
    this.type = 'text'
    this.label = ''
    this.placeholder = ''
    this.value = ''
    this.disabled = false
    this.required = false
  }

  render() {
    return html`
      <label class="field">
        ${this.label ? html`<span class="label">${this.label}</span>` : ''}
        <input
          class="input"
          type=${this.type}
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          ?required=${this.required}
          @input=${this._onInput}
        />
      </label>
    `
  }

  _onInput(event) {
    this.value = event.target.value
    this.dispatchEvent(new CustomEvent('value-changed', {
      detail: { value: this.value },
      bubbles: true,
      composed: true,
    }))
  }

  static get styles() {
    return css`
      :host {
        display: block;
        --input-bg: rgba(15, 23, 42, 0.8);
        --input-border: rgba(148, 163, 184, 0.5);
        --input-focus: var(--primary, #fee801);
        --input-text: #f8fafc;
        --input-placeholder: #94a3b8;
      }

      .field {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .label {
        color: #e2e8f0;
        font-size: 0.85rem;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      .input {
        width: 100%;
        min-height: 46px;
        padding: 0.8rem 0.9rem;
        border: 1px solid var(--input-border);
        background: var(--input-bg);
        color: var(--input-text);
        font: inherit;
        box-sizing: border-box;
        transition: border-color 0.15s ease, box-shadow 0.15s ease;
        border-left: 3px solid var(--primary, #fee801);
      }

      .input::placeholder {
        color: var(--input-placeholder);
      }

      .input:focus {
        outline: none;
        border-color: var(--input-focus);
        box-shadow: 0 0 0 3px rgba(254, 232, 1, 0.2);
      }

      .input:disabled {
        opacity: 0.55;
        cursor: not-allowed;
      }
    `
  }
}

if (!customElements.get('cyberpunk-input')) {
  customElements.define('cyberpunk-input', CyberpunkInput)
}

export default CyberpunkInput
