import { LitElement, css, html } from 'lit'

/**
 * Public API:
 * - `items` property (Array, default `[]`); each item has a `label` and optional `href`.
 *   An `items` attribute may be supplied as a JSON array.
 * - `separator` property / `separator` attribute (String, reflected), default `"/"`.
 */
export class CyberpunkBreadcrumb extends LitElement {
  static get properties() {
    return {
      items: { type: Array },
      separator: { type: String, reflect: true },
    }
  }

  constructor() {
    super()
    this.items = []
    this.separator = '/' 
  }

  render() {
    if (!this.items || !this.items.length) {
      return html``
    }

    return html`
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <ol>
          ${this.items.map(
            (item, index) => html`
              <li>
                ${index > 0 ? html`<span class="separator" aria-hidden="true">${this.separator}</span>` : ''}
                ${item.href
                  ? html`<a href=${item.href} class="crumb">${item.label}</a>`
                  : html`<span class="crumb current">${item.label}</span>`}
              </li>
            `,
          )}
        </ol>
      </nav>
    `
  }

  static get styles() {
    return css`
      :host {
        display: block;
        --crumb-text: #cbd5e1;
        --crumb-current: #f8fafc;
        --crumb-hover: var(--primary, #fee801);
      }

      .breadcrumb {
        width: 100%;
      }

      ol {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.35rem;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      li {
        display: flex;
        align-items: center;
        gap: 0.35rem;
        min-width: 0;
      }

      .crumb {
        color: var(--crumb-text);
        text-decoration: none;
        font-size: 0.85rem;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        transition: color 0.15s ease;
      }

      .crumb:hover {
        color: var(--crumb-hover);
      }

      .crumb.current {
        color: var(--crumb-current);
        font-weight: 700;
      }

      .separator {
        color: rgba(203, 213, 225, 0.75);
        user-select: none;
      }
    `
  }
}

if (!customElements.get('cyberpunk-breadcrumb')) {
  customElements.define('cyberpunk-breadcrumb', CyberpunkBreadcrumb)
}

export default CyberpunkBreadcrumb
