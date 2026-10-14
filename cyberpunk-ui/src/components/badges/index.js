import { LitElement, css, html } from 'lit'

/**
 * Public API:
 * - `variant` property / `variant` attribute (String, reflected), default `"primary"`.
 * - `size` property / `size` attribute (String, reflected), default `"medium"`;
 *   supported sizes: `small`, `medium`, and `large`.
 * - Default slot: badge label.
 */
export class CyberpunkBadge extends LitElement {
  static get properties() {
    return {
      variant: { type: String, reflect: true },
      size: { type: String, reflect: true },
    }
  }

  constructor() {
    super()
    this.variant = 'primary'
    this.size = 'medium'
  }

  render() {
    return html`
      <span class="badge ${this.variant} ${this.size}">
        <slot></slot>
      </span>
    `
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }

      .badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        border: 1px solid transparent;
        white-space: nowrap;
      }

      .badge.small {
        min-height: 24px;
        padding: 0.2rem 0.6rem;
        font-size: 0.68rem;
      }

      .badge.medium {
        min-height: 30px;
        padding: 0.35rem 0.75rem;
        font-size: 0.75rem;
      }

      .badge.large {
        min-height: 36px;
        padding: 0.5rem 0.9rem;
        font-size: 0.8rem;
      }

      .badge.primary {
        background: rgba(254, 232, 1, 0.2);
        color: #1f2937;
        border-color: rgba(154, 159, 23, 0.7);
      }

      .badge.info {
        background: rgba(84, 193, 230, 0.16);
        color: #dbf8ff;
        border-color: rgba(84, 193, 230, 0.7);
      }

      .badge.success {
        background: rgba(57, 196, 182, 0.16);
        color: #d7fff9;
        border-color: rgba(57, 196, 182, 0.7);
      }

      .badge.warning {
        background: rgba(245, 158, 11, 0.14);
        color: #fff0bf;
        border-color: rgba(245, 158, 11, 0.7);
      }

      .badge.danger {
        background: rgba(225, 29, 72, 0.14);
        color: #ffe4eb;
        border-color: rgba(225, 29, 72, 0.7);
      }

      .badge.neutral {
        background: rgba(84, 193, 230, 0.12);
        color: #e2f7ff;
        border-color: rgba(84, 193, 230, 0.5);
      }
    `
  }
}

if (!customElements.get('cyberpunk-badge')) {
  customElements.define('cyberpunk-badge', CyberpunkBadge)
}

export default CyberpunkBadge
