import { LitElement, css, html } from 'lit'

/**
 * Public API:
 * - `open` property / `open` attribute (Boolean, reflected), default `false`.
 * - `position` property / `position` attribute (String, reflected), default `"right"`.
 * - `width` property / `width` attribute (String, reflected), default `"360px"`.
 * - `closeOnBackdrop` property / `close-on-backdrop` attribute (Boolean, reflected),
 *   default `true`.
 * - `title` property / `title` attribute (String, reflected), default `"Drawer"`.
 * - Default slot: drawer content. Methods: `openDrawer()` and `closeDrawer()`.
 * - Dispatches a bubbling, composed `close` event when dismissed.
 */
export class CyberpunkDrawer extends LitElement {
  static get properties() {
    return {
      open: { type: Boolean, reflect: true },
      position: { type: String, reflect: true },
      width: { type: String, reflect: true },
      closeOnBackdrop: { type: Boolean, reflect: true },
      title: { type: String, reflect: true },
    }
  }

  constructor() {
    super()
    this.open = false
    this.position = 'right'
    this.width = '360px'
    this.closeOnBackdrop = true
    this.title = 'Drawer'
  }

  connectedCallback() {
    super.connectedCallback()
    this._boundKeydown = this._onKeydown.bind(this)
    document.addEventListener('keydown', this._boundKeydown)
  }

  disconnectedCallback() {
    document.removeEventListener('keydown', this._boundKeydown)
    super.disconnectedCallback()
  }

  openDrawer() {
    this.open = true
  }

  closeDrawer() {
    if (!this.open) {
      return
    }

    this.open = false
    this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }))
  }

  _onKeydown(event) {
    if (this.open && event.key === 'Escape') {
      this.closeDrawer()
    }
  }

  _onBackdropClick(event) {
    if (this.closeOnBackdrop && event.target === event.currentTarget) {
      this.closeDrawer()
    }
  }

  render() {
    if (!this.open) {
      return html``
    }

    return html`
      <div class="backdrop" @click=${this._onBackdropClick}>
        <aside class="drawer ${this.position}" style="width: ${this.width};">
          <header class="header">
            <h2>${this.title}</h2>
            <button class="close-button" type="button" @click=${() => this.closeDrawer()} aria-label="Close drawer">
              ×
            </button>
          </header>

          <div class="content">
            <slot></slot>
          </div>
        </aside>
      </div>
    `
  }

  static get styles() {
    return css`
      :host {
        --drawer-bg: rgba(15, 23, 42, 0.7);
        --drawer-panel: rgba(15, 23, 42, 0.98);
        --drawer-border: rgba(84, 193, 230, 0.4);
        --drawer-text: #f8fafc;
        --drawer-muted: #cbd5e1;
      }

      .backdrop {
        position: fixed;
        inset: 0;
        z-index: 1000;
        background: var(--drawer-bg);
        backdrop-filter: blur(4px);
      }

      .drawer {
        position: absolute;
        top: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        background: var(--drawer-panel);
        border: 1px solid var(--drawer-border);
        box-shadow: -20px 0 40px rgba(254, 232, 1, 0.12);
      }

      .drawer.left {
        left: 0;
        border-left: none;
        border-right: 1px solid var(--drawer-border);
        box-shadow: 20px 0 40px rgba(254, 232, 1, 0.12);
      }

      .drawer.right {
        right: 0;
        border-left: 1px solid var(--drawer-border);
        border-right: none;
      }

      .drawer.top {
        top: 0;
        left: 0;
        right: 0;
        bottom: auto;
        width: 100% !important;
        max-height: 80vh;
        box-shadow: 0 20px 40px rgba(254, 232, 1, 0.12);
      }

      .drawer.bottom {
        bottom: 0;
        left: 0;
        right: 0;
        top: auto;
        width: 100% !important;
        max-height: 80vh;
        box-shadow: 0 -20px 40px rgba(254, 232, 1, 0.12);
      }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        min-height: 64px;
        padding: 1rem 1.25rem;
        border-bottom: 1px solid rgba(148, 163, 184, 0.18);
      }

      .header h2 {
        margin: 0;
        color: var(--drawer-text);
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }

      .close-button {
        width: 32px;
        height: 32px;
        border: 1px solid rgba(148, 163, 184, 0.25);
        border-radius: 0;
        background: transparent;
        color: var(--drawer-text);
        font-size: 1.4rem;
        line-height: 1;
        cursor: pointer;
      }

      .close-button:hover {
        border-color: rgba(167, 139, 250, 0.8);
        background: rgba(167, 139, 250, 0.08);
      }

      .content {
        padding: 1.25rem;
        color: var(--drawer-muted);
        overflow: auto;
      }
    `
  }
}

if (!customElements.get('cyberpunk-drawer')) {
  customElements.define('cyberpunk-drawer', CyberpunkDrawer)
}

export default CyberpunkDrawer
