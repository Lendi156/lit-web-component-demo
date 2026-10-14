import { LitElement, css, html } from 'lit'

/**
 * Public API:
 * - `size` property / `size` attribute (String, reflected), default `"lg"`.
 * - `fluid` property / `fluid` attribute (Boolean, reflected), default `false`.
 * - `padding` property / `padding` attribute (String, reflected), default `"1rem"`.
 * - Default slot: container content.
 */
export class CyberpunkContainer extends LitElement {
  static get properties() {
    return {
      size: { type: String, reflect: true },
      fluid: { type: Boolean, reflect: true },
      padding: { type: String, reflect: true },
    }
  }

  constructor() {
    super()
    this.size = 'lg'
    this.fluid = false
    this.padding = '1rem'
  }

  render() {
    return html`
      <div class="container ${this.fluid ? 'fluid' : this.size}">
        <slot></slot>
      </div>
    `
  }

  static get styles() {
    return css`
      :host {
        display: block;
        --container-max-width: 1200px;
        --container-padding: 1rem;
      }

      .container {
        width: 100%;
        box-sizing: border-box;
        margin: 0 auto;
        padding: 0 var(--container-padding, 1rem);
      }

      .container.fluid {
        max-width: none;
      }

      .container.sm {
        max-width: 640px;
      }

      .container.md {
        max-width: 860px;
      }

      .container.lg {
        max-width: 1200px;
      }

      .container.xl {
        max-width: 1400px;
      }
    `
  }
}

if (!customElements.get('cyberpunk-container')) {
  customElements.define('cyberpunk-container', CyberpunkContainer)
}

export default CyberpunkContainer
