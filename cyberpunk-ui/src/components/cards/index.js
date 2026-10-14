import { LitElement, css, html } from 'lit'

/**
 * Public API:
 * - `elevated` property / `elevated` attribute (Boolean, reflected), default `false`.
 * - Default slot: card body; `header` and `footer` slots provide optional sections.
 */
export class CyberpunkCard extends LitElement {
  static get properties() {
    return {
      elevated: { type: Boolean, reflect: true },
    }
  }

  constructor() {
    super()
    this.elevated = false
  }

  render() {
    return html`
      <article class="card ${this.elevated ? 'elevated' : ''}">
        <header class="header">
          <slot name="header"></slot>
        </header>

        <div class="body">
          <slot></slot>
        </div>

        <footer class="footer">
          <slot name="footer"></slot>
        </footer>
      </article>
    `
  }

  static get styles() {
    return css`
      :host {
        display: block;
        position: relative;
      }

      .card {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background: rgba(15, 23, 42, 0.92);
        border: 1px solid rgba(84, 193, 230, 0.35);
        padding: 1.25rem;
        color: #e2e8f0;
        box-sizing: border-box;
      }

      .card::after, .card::before {
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        pointer-events: none;
        border: 2px solid var(--primary, #fee801);
      }
      .card::after {
          right: -1px;
          bottom: -1px;
          border-top: medium none currentcolor;
          border-left: medium none currentcolor;
        }

      .card::before {
          top: -1px;
          left: -1px;
          border-right: medium none currentcolor;
          border-bottom: medium none currentcolor;
      }

      .card.elevated {
        box-shadow: 0 18px 38px rgba(254, 232, 1, 0.18);
      }

      .body {
        color: #cbd5e1;
        line-height: 1.6;
      }

      ::slotted([slot='header']) {
        font-size: 1.1rem;
        font-weight: 700;
        color: #f5f3ff;
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 0.75rem;
      }

      ::slotted([slot='footer']) {
        margin-left: auto;
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 0.75rem;
      }
    `
  }
}

if (!customElements.get('cyberpunk-card')) {
  customElements.define('cyberpunk-card', CyberpunkCard)
}

export default CyberpunkCard
