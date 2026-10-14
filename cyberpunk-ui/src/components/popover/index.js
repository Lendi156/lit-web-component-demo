import { LitElement, css, html } from 'lit'

/**
 * Public API:
 * - `open` property / `open` attribute (Boolean, reflected), default `false`.
 * - `placement` property / `placement` attribute (String, reflected), default `"top"`.
 * - `trigger` property / `trigger` attribute (String, reflected), default `"click"`;
 *   supported values: `click` and `hover`.
 * - `content` property (String, default `""`); content may also use the default slot.
 * - `disabled` property / `disabled` attribute (Boolean, reflected), default `false`.
 * - `trigger` slot: custom trigger content.
 */
export class CyberpunkPopover extends LitElement {
  static get properties() {
    return {
      open: { type: Boolean, reflect: true },
      placement: { type: String, reflect: true },
      trigger: { type: String, reflect: true },
      content: { type: String },
      disabled: { type: Boolean, reflect: true },
    }
  }

  constructor() {
    super()
    this.open = false
    this.placement = 'top'
    this.trigger = 'click'
    this.content = ''
    this.disabled = false
  }

  connectedCallback() {
    super.connectedCallback()
    this._onDocumentClick = this._handleDocumentClick.bind(this)
    document.addEventListener('click', this._onDocumentClick)
  }

  disconnectedCallback() {
    document.removeEventListener('click', this._onDocumentClick)
    super.disconnectedCallback()
  }

  toggle() {
    if (this.disabled) return
    this.open = !this.open
  }

  close() {
    this.open = false
  }

  _handleDocumentClick(event) {
    if (!this.contains(event.target)) {
      this.close()
    }
  }

  _handleTriggerClick() {
    if (this.trigger !== 'click') return
    this.toggle()
  }

  render() {
    return html`
      <div class="wrapper">
        <button
          type="button"
          class="trigger"
          ?disabled=${this.disabled}
          @click=${this._handleTriggerClick}
          @mouseenter=${this.trigger === 'hover' ? () => (this.open = true) : null}
          @mouseleave=${this.trigger === 'hover' ? () => (this.open = false) : null}
        >
          <slot name="trigger"></slot>
        </button>

        ${this.open
          ? html`
              <div class="popover ${this.placement}">
                ${this.content || html`<slot name="content"></slot>`}
              </div>
            `
          : ''}
      </div>
    `
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        --popover-bg: rgba(15, 23, 42, 0.97);
        --popover-border: rgba(84, 193, 230, 0.5);
        --popover-text: #f8fafc;
        --popover-shadow: rgba(84, 193, 230, 0.3);
      }

      .wrapper {
        position: relative;
        display: inline-block;
      }

      .trigger {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: none;
        padding: 0;
        cursor: pointer;
        color: inherit;
      }

      .trigger:disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }

      .popover {
        position: absolute;
        z-index: 50;
        min-width: 200px;
        max-width: 280px;
        padding: 0.75rem 0.9rem;
        border: 1px solid var(--popover-border);
        border-radius: 0;
        background: var(--popover-bg);
        color: var(--popover-text);
        box-shadow: 0 18px 30px var(--popover-shadow);
      }

      .popover.top {
        bottom: calc(100% + 0.75rem);
        left: 50%;
        transform: translateX(-50%);
      }

      .popover.bottom {
        top: calc(100% + 0.75rem);
        left: 50%;
        transform: translateX(-50%);
      }

      .popover.left {
        right: calc(100% + 0.75rem);
        top: 50%;
        transform: translateY(-50%);
      }

      .popover.right {
        left: calc(100% + 0.75rem);
        top: 50%;
        transform: translateY(-50%);
      }
    `
  }
}

if (!customElements.get('cyberpunk-popover')) {
  customElements.define('cyberpunk-popover', CyberpunkPopover)
}

export default CyberpunkPopover
