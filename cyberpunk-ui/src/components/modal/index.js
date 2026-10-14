import { LitElement, css, html } from 'lit'

/**
 * Public API:
 * - `open` property / `open` attribute (Boolean, reflected), default `false`.
 * - `title` property / `title` attribute (String, reflected), default `""`.
 * - `closeOnBackdrop` property / `close-on-backdrop` attribute (Boolean, reflected),
 *   default `true`.
 * - `noPadding` property / `no-padding` attribute (Boolean, reflected), default `false`.
 * - Default slot: modal content. Methods: `openModal()` and `closeModal()`.
 * - Dispatches a bubbling, composed `close` event when dismissed.
 */
export class CyberpunkModal extends LitElement {
  static get properties() {
    return {
      open: { type: Boolean, reflect: true },
      title: { type: String, reflect: true },
      closeOnBackdrop: { type: Boolean, reflect: true },
      noPadding: { type: Boolean, reflect: true },
    }
  }

  constructor() {
    super()
    this.open = false
    this.title = ''
    this.closeOnBackdrop = true
    this.noPadding = false
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

  openModal() {
    this.open = true
  }

  closeModal() {
    if (!this.open) {
      return
    }

    this.open = false
    this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }))
  }

  _onKeydown(event) {
    if (this.open && event.key === 'Escape') {
      this.closeModal()
    }
  }

  _onBackdropClick(event) {
    if (this.closeOnBackdrop && event.target === event.currentTarget) {
      this.closeModal()
    }
  }

  render() {
    if (!this.open) {
      return html``
    }

    return html`
      <div class="backdrop" @click=${this._onBackdropClick}>
        <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <header class="header">
            <h2 id="modal-title" class="title">${this.title || 'Modal'}</h2>
            <button class="close-button" type="button" @click=${() => this.closeModal()} aria-label="Close modal">
              ×
            </button>
          </header>

          <div class="content ${this.noPadding ? 'no-padding' : ''}">
            <slot></slot>
          </div>
        </div>
      </div>
    `
  }

  static get styles() {
    return css`
      :host {
        --modal-bg: rgba(15, 23, 42, 0.72);
        --modal-panel: rgba(15, 23, 42, 0.96);
        --modal-border: rgba(84, 193, 230, 0.5);
        --modal-text: #f8fafc;
        --modal-muted: #cbd5e1;
        --modal-shadow: rgba(254, 232, 1, 0.2);
      }

      .backdrop {
        position: fixed;
        inset: 0;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.5rem;
        background: var(--modal-bg);
        backdrop-filter: blur(4px);
      }

      .modal {
        width: min(100%, 560px);
        max-height: 85vh;
        overflow: hidden;
        background: var(--modal-panel);
        border: 1px solid var(--modal-border);
        border-left: 4px solid var(--primary, #fee801);
        box-shadow: 0 0 28px var(--modal-shadow);
        border-radius: 0;
      }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 1rem 1.25rem;
        border-bottom: 1px solid rgba(148, 163, 184, 0.2);
      }

      .title {
        margin: 0;
        color: var(--modal-text);
        font-size: 1.1rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      .close-button {
        width: 32px;
        height: 32px;
        border: 1px solid rgba(148, 163, 184, 0.4);
        background: transparent;
        color: var(--modal-text);
        border-radius: 0;
        font-size: 1.5rem;
        line-height: 1;
        cursor: pointer;
        transition: background 0.15s ease, border-color 0.15s ease;
      }

      .close-button:hover {
        background: rgba(148, 163, 184, 0.08);
        border-color: rgba(167, 139, 250, 0.9);
      }

      .content {
        padding: 1.25rem;
        color: var(--modal-muted);
        overflow: auto;
      }

      .content.no-padding {
        padding: 0;
      }
    `
  }
}

if (!customElements.get('cyberpunk-modal')) {
  customElements.define('cyberpunk-modal', CyberpunkModal)
}

export default CyberpunkModal
