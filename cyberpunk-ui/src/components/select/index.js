import { LitElement, css, html } from 'lit'

/**
 * Public API:
 * - `label` property / `label` attribute (String, reflected), default `""`.
 * - `placeholder` property / `placeholder` attribute (String, reflected), default `""`.
 * - `value` property / `value` attribute (String, reflected), default `""`.
 * - `options` property (Array, default `[]`); entries are strings or `{ label, value }`
 *   objects. An `options` attribute may be supplied as a JSON array.
 * - `disabled` property / `disabled` attribute (Boolean, reflected), default `false`.
 * - `required` property / `required` attribute (Boolean, reflected), default `false`.
 * - Emits `value-changed` with `{ value }` when the selection changes.
 */
export class CyberpunkSelect extends LitElement {
  static get properties() {
    return {
      label: { type: String, reflect: true },
      placeholder: { type: String, reflect: true },
      value: { type: String, reflect: true },
      options: { type: Array },
      disabled: { type: Boolean, reflect: true },
      required: { type: Boolean, reflect: true },
    }
  }

  constructor() {
    super()
    this.label = ''
    this.placeholder = ''
    this.value = ''
    this.options = []
    this.disabled = false
    this.required = false
  }

  _normalizedOptions() {
    return (Array.isArray(this.options) ? this.options : []).map((option) => {
      if (typeof option === 'string') {
        return { label: option, value: option }
      }

      return {
        label: option?.label ?? option?.value ?? '',
        value: option?.value ?? option?.label ?? '',
      }
    })
  }

  render() {
    const options = this._normalizedOptions()

    return html`
      <label class="field">
        ${this.label ? html`<span class="label">${this.label}</span>` : ''}
        <select
          class="select"
          .value=${this.value}
          ?disabled=${this.disabled}
          ?required=${this.required}
          aria-label=${this.label || this.placeholder || 'Select an option'}
          @change=${this._onChange}
        >
          ${this.placeholder && !this.value
            ? html`<option value="" disabled selected>${this.placeholder}</option>`
            : ''}

          ${options.map(
            (option) => html`
              <option value=${option.value} ?selected=${option.value === this.value}>
                ${option.label}
              </option>
            `,
          )}
        </select>
      </label>
    `
  }

  _onChange(event) {
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
        --select-bg: rgba(15, 23, 42, 0.8);
        --select-border: rgba(148, 163, 184, 0.5);
        --select-focus: var(--primary, #fee801);
        --select-text: #f8fafc;
        --select-placeholder: #94a3b8;
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

      .select {
        width: 100%;
        min-height: 46px;
        padding: 0.8rem 2.5rem 0.8rem 0.9rem;
        border: 1px solid var(--select-border);
        background: var(--select-bg);
        color: var(--select-text);
        font: inherit;
        box-sizing: border-box;
        border-left: 3px solid var(--primary, #fee801);
        appearance: none;
        background-image:
          linear-gradient(45deg, transparent 50%, #f8fafc 50%),
          linear-gradient(135deg, #f8fafc 50%, transparent 50%);
        background-position:
          calc(100% - 20px) calc(50% - 2px),
          calc(100% - 15px) calc(50% - 2px);
        background-size: 5px 5px, 5px 5px;
        background-repeat: no-repeat;
        transition: border-color 0.15s ease, box-shadow 0.15s ease;
      }

      .select:focus {
        outline: none;
        border-color: var(--select-focus);
        box-shadow: 0 0 0 3px rgba(254, 232, 1, 0.2);
      }

      .select:disabled {
        opacity: 0.55;
        cursor: not-allowed;
      }

      option {
        background: #0f172a;
        color: #f8fafc;
      }
    `
  }
}

if (!customElements.get('cyberpunk-select')) {
  customElements.define('cyberpunk-select', CyberpunkSelect)
}

export default CyberpunkSelect
