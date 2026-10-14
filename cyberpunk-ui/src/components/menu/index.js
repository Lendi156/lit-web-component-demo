import { LitElement, css, html } from 'lit'

/**
 * Public API:
 * - `items` property (Array, default `[]`); each item has `label` and optional
 *   `icon`, `active`, and `disabled`. An `items` attribute may be a JSON array.
 * - `orientation` property / `orientation` attribute (String, reflected),
 *   default `"vertical"`; supported values: `vertical` and `horizontal`.
 * - Emits `menu-item-click` with `{ item }` when an enabled item is selected.
 */
export class CyberpunkMenu extends LitElement {
  static get properties() {
    return {
      items: { type: Array },
      orientation: { type: String, reflect: true },
    }
  }

  constructor() {
    super()
    this.items = []
    this.orientation = 'vertical'
  }

  _handleClick(event, item) {
    if (item.disabled) {
      return
    }

    this.dispatchEvent(
      new CustomEvent('menu-item-click', {
        detail: { item },
        bubbles: true,
        composed: true,
      }),
    )
  }

  render() {
    if (!this.items || !this.items.length) {
      return html``
    }

    return html`
      <nav class="menu ${this.orientation}">
        <ul>
          ${this.items.map(
            (item) => html`
              <li>
                <button
                  type="button"
                  class="menu-item ${item.active ? 'active' : ''}"
                  ?disabled=${item.disabled}
                  @click=${(event) => this._handleClick(event, item)}
                >
                  ${item.icon ? html`<span class="icon">${item.icon}</span>` : ''}
                  <span class="label">${item.label}</span>
                </button>
              </li>
            `,
          )}
        </ul>
      </nav>
    `
  }

  static get styles() {
    return css`
      :host {
        display: block;
        --menu-bg: rgba(15, 23, 42, 0.8);
        --menu-border: rgba(148, 163, 184, 0.3);
        --menu-text: #e2e8f0;
        --menu-hover: rgba(254, 232, 1, 0.1);
        --menu-active: rgba(84, 193, 230, 0.18);
        --menu-active-border: var(--primary, #fee801);
      }

      .menu {
        width: fit-content;
        min-width: 200px;
      }

      ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .menu.vertical ul {
        flex-direction: column;
        gap: 0.5rem;
      }

      .menu.horizontal ul {
        flex-direction: row;
        gap: 0.5rem;
        flex-wrap: wrap;
      }

      .menu-item {
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        width: 100%;
        min-height: 42px;
        padding: 0.7rem 0.9rem;
        border: 1px solid var(--menu-border);
        border-radius: 0;
        background: transparent;
        color: var(--menu-text);
        font: inherit;
        font-weight: 600;
        text-align: left;
        cursor: pointer;
        transition: background 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
      }

      .menu-item:hover:not(:disabled) {
        background: var(--menu-hover);
        border-color: rgba(254, 232, 1, 0.5);
      }

      .menu-item.active {
        background: var(--menu-active);
        border-color: var(--menu-active-border);
        box-shadow: 0 0 0 1px rgba(254, 232, 1, 0.2);
      }

      .menu-item:disabled {
        opacity: 0.45;
        cursor: not-allowed;
      }

      .icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
      }

      .label {
        white-space: nowrap;
      }
    `
  }
}

if (!customElements.get('cyberpunk-menu')) {
  customElements.define('cyberpunk-menu', CyberpunkMenu)
}

export default CyberpunkMenu
