import { LitElement, css, html } from 'lit'

/**
 * Public API:
 * - `label` property / `label` attribute (String, reflected), default `"Menu"`.
 * - `items` property (Array, default `[]`); each item has `label` and optional `icon`
 *   and `disabled`. An `items` attribute may be supplied as a JSON array.
 * - `open` property / `open` attribute (Boolean, reflected), default `false`.
 * - `disabled` property / `disabled` attribute (Boolean, reflected), default `false`.
 * - Emits `dropdown-item-click` with `{ item }` when an item is selected.
 */
export class CyberpunkDropdown extends LitElement {
  static get properties() {
    return {
      label: { type: String, reflect: true },
      items: { type: Array },
      open: { type: Boolean, reflect: true },
      disabled: { type: Boolean, reflect: true },
    }
  }

  constructor() {
    super()
    this.label = 'Menu'
    this.items = []
    this.open = false
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

  _handleItemClick(item) {
    this.close()
    this.dispatchEvent(
      new CustomEvent('dropdown-item-click', {
        detail: { item },
        bubbles: true,
        composed: true,
      }),
    )
  }

  render() {
    return html`
      <div class="dropdown">
        <button
          class="trigger"
          type="button"
          ?disabled=${this.disabled}
          aria-expanded=${this.open ? 'true' : 'false'}
          @click=${() => this.toggle()}
        >
          <span>${this.label}</span>
          <span class="caret">▾</span>
        </button>

        ${this.open
          ? html`
              <div class="menu" role="menu">
                ${this.items.map(
                  (item) => html`
                    <button
                      type="button"
                      class="menu-item"
                      role="menuitem"
                      ?disabled=${item.disabled}
                      @click=${() => this._handleItemClick(item)}
                    >
                      ${item.icon ? html`<span class="icon">${item.icon}</span>` : ''}
                      <span>${item.label}</span>
                    </button>
                  `,
                )}
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
        position: relative;
        --dropdown-bg: rgba(15, 23, 42, 0.9);
        --dropdown-border: rgba(84, 193, 230, 0.4);
        --dropdown-text: #f8fafc;
        --dropdown-hover: rgba(254, 232, 1, 0.1);
        --dropdown-shadow: rgba(84, 193, 230, 0.25);
      }

      .dropdown {
        position: relative;
        display: inline-block;
      }

      .trigger {
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;
        min-width: 150px;
        min-height: 42px;
        padding: 0.7rem 0.9rem;
        border: 1px solid var(--dropdown-border);
        border-radius: 0;
        background: var(--dropdown-bg);
        color: var(--dropdown-text);
        font: inherit;
        font-weight: 600;
        cursor: pointer;
        transition:
          background-color 0.2s ease,
          border-color 0.2s ease,
          box-shadow 0.2s ease,
          color 0.2s ease,
          transform 0.2s ease;
      }

      .trigger:hover:not(:disabled) {
        border-color: rgba(254, 232, 1, 0.7);
      }

      :host([open]) .trigger {
        border-color: var(--primary, #fee801);
        background: rgba(254, 232, 1, 0.12);
        color: var(--primary, #fee801);
        box-shadow:
          0 0 0 1px rgba(254, 232, 1, 0.3),
          0 0 18px rgba(254, 232, 1, 0.35);
      }

      .trigger:focus-visible {
        outline: 3px solid #facc15;
        outline-offset: 3px;
      }

      .trigger:disabled {
        opacity: 0.55;
        cursor: not-allowed;
      }

      .caret {
        font-size: 0.9rem;
        opacity: 0.8;
        transition: transform 0.2s ease;
      }

      :host([open]) .caret {
        transform: rotate(180deg);
      }

      .menu {
        position: absolute;
        top: calc(100% + 0.5rem);
        left: 0;
        min-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        padding: 0.5rem;
        border: 1px solid var(--dropdown-border);
        border-radius: 0;
        background: rgba(15, 23, 42, 0.97);
        box-shadow: 0 16px 30px var(--dropdown-shadow);
        z-index: 20;
        transform-origin: top;
        animation: dropdown-enter 0.18s ease-out both;
      }

      @keyframes dropdown-enter {
        from {
          opacity: 0;
          transform: translateY(-0.5rem) scaleY(0.92);
        }
        to {
          opacity: 1;
          transform: translateY(0) scaleY(1);
        }
      }

      .menu-item {
        display: flex;
        align-items: center;
        gap: 0.65rem;
        width: 100%;
        border: 1px solid transparent;
        background: transparent;
        color: var(--dropdown-text);
        border-radius: 0;
        padding: 0.7rem 0.75rem;
        text-align: left;
        font: inherit;
        cursor: pointer;
        transition: background 0.15s ease, border-color 0.15s ease;
      }

      .menu-item:hover:not(:disabled) {
        background: var(--dropdown-hover);
        border-color: rgba(254, 232, 1, 0.5);
      }

      .menu-item:disabled {
        opacity: 0.45;
        cursor: not-allowed;
      }

      .icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      @media (prefers-reduced-motion: reduce) {
        .trigger,
        .caret {
          transition: none;
        }

        .menu {
          animation: none;
        }
      }
    `
  }
}

if (!customElements.get('cyberpunk-dropdown')) {
  customElements.define('cyberpunk-dropdown', CyberpunkDropdown)
}

export default CyberpunkDropdown
