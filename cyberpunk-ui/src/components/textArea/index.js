import { LitElement, css, html } from 'lit'

/**
 * Public API:
 * - `label` property / `label` attribute (String, reflected), default `""`.
 * - `placeholder` property / `placeholder` attribute (String, reflected), default `""`.
 * - `value` property / `value` attribute (String, reflected), default `""`.
 * - `rows` property / `rows` attribute (Number, reflected), default `4`.
 * - `disabled` property / `disabled` attribute (Boolean, reflected), default `false`.
 * - `required` property / `required` attribute (Boolean, reflected), default `false`.
 * - Emits `value-changed` with `{ value }` when the textarea changes.
 */
export class CyberpunkTextArea extends LitElement {
  static get properties() {
    return {
      label: { type: String, reflect: true },
      placeholder: { type: String, reflect: true },
      value: { type: String, reflect: true },
      rows: { type: Number, reflect: true },
      disabled: { type: Boolean, reflect: true },
      required: { type: Boolean, reflect: true },
    }
  }

  constructor() {
    super()
    this.label = ''
    this.placeholder = ''
    this.value = ''
    this.rows = 4
    this.disabled = false
    this.required = false
  }

  render() {
    return html`
      <label class="field">
        ${this.label ? html`<span class="label">${this.label}</span>` : ''}
        <textarea
          class="textarea"
          rows=${this.rows}
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          ?required=${this.required}
          @input=${this._onInput}
        ></textarea>
      </label>
    `
  }

  _onInput(event) {
    this.value = event.target.value
    this.dispatchEvent(
      new CustomEvent('value-changed', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    )
  }

  static get styles() {
    return css`
      :host {
        display: block;
        --textarea-bg: rgba(15, 23, 42, 0.8);
        --textarea-border: rgba(148, 163, 184, 0.5);
        --textarea-focus: var(--primary, #fee801);
        --textarea-text: #f8fafc;
        --textarea-placeholder: #94a3b8;
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

      .textarea {
        width: 100%;
        min-height: 120px;
        padding: 0.8rem 0.9rem;
        border: 1px solid var(--textarea-border);
        background: var(--textarea-bg);
        color: var(--textarea-text);
        font: inherit;
        resize: vertical;
        box-sizing: border-box;
        border-left: 3px solid var(--primary, #fee801);
        transition: border-color 0.15s ease, box-shadow 0.15s ease;
      }

      .textarea::placeholder {
        color: var(--textarea-placeholder);
      }

      .textarea:focus {
        outline: none;
        border-color: var(--textarea-focus);
        box-shadow: 0 0 0 3px rgba(254, 232, 1, 0.2);
      }

      .textarea:disabled {
        opacity: 0.55;
        cursor: not-allowed;
      }
    `
  }
}

if (!customElements.get('cyberpunk-textarea')) {
  customElements.define('cyberpunk-textarea', CyberpunkTextArea)
}

export default CyberpunkTextArea
