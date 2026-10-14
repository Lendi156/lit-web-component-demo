import { LitElement, css, html } from 'lit'

/**
 * Public API:
 * - `tabs` property (Array, default `[]`); each tab has `value`, `label`, optional
 *   `content`, and optional `disabled`. A `tabs` attribute may be a JSON array.
 * - `activeTab` property / `active-tab` attribute (String, reflected), default `""`.
 * - Emits `tab-changed` with `{ value }` when a tab is selected.
 */
export class CyberpunkTabs extends LitElement {
  static get properties() {
    return {
      tabs: { type: Array },
      activeTab: { type: String, reflect: true },
    }
  }

  constructor() {
    super()
    this.tabs = []
    this.activeTab = ''
  }

  updated(changedProperties) {
    if (changedProperties.has('tabs') && this.tabs.length && !this.activeTab) {
      this.activeTab = this.tabs[0].value
    }

    if (changedProperties.has('activeTab') && this.activeTab && this.tabs.length) {
      const tabExists = this.tabs.some((tab) => tab.value === this.activeTab)
      if (!tabExists) {
        this.activeTab = this.tabs[0].value
      }
    }
  }

  _onTabClick(event, tabValue) {
    this.activeTab = tabValue
    this.dispatchEvent(
      new CustomEvent('tab-changed', {
        detail: { value: tabValue },
        bubbles: true,
        composed: true,
      }),
    )
  }

  render() {
    if (!this.tabs || !this.tabs.length) {
      return html``
    }

    const activeTab = this.tabs.find((tab) => tab.value === this.activeTab) || this.tabs[0]

    return html`
      <div class="tabs">
        <div class="tab-list" role="tablist" aria-label="Tabs">
          ${this.tabs.map(
            (tab) => html`
              <button
                class="tab ${tab.value === activeTab.value ? 'active' : ''}"
                type="button"
                role="tab"
                aria-selected=${tab.value === activeTab.value ? 'true' : 'false'}
                ?disabled=${tab.disabled}
                @click=${(event) => this._onTabClick(event, tab.value)}
              >
                ${tab.label}
              </button>
            `,
          )}
        </div>

        <div class="tab-panel" role="tabpanel">
          ${activeTab && activeTab.content ? activeTab.content : ''}
        </div>
      </div>
    `
  }

  static get styles() {
    return css`
      :host {
        display: block;
        --tab-bg: rgba(15, 23, 42, 0.8);
        --tab-border: rgba(148, 163, 184, 0.45);
        --tab-active: var(--primary, #fee801);
        --tab-active-text: #111827;
        --tab-hover: var(--secondary, #54c1e6);
        --tab-hover-text: #07121c;
        --tab-text: #e2e8f0;
        --tab-disabled-text: #aebdce;
      }

      .tabs {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .tab-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        padding: 0.25rem;
        border: 1px solid var(--tab-border);
        border-radius: 0;
        background: rgba(15, 23, 42, 0.6);
      }

      .tab {
        appearance: none;
        border: 1px solid transparent;
        background: transparent;
        color: var(--tab-text);
        padding: 0.7rem 1rem;
        border-radius: 0;
        font: inherit;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.15s ease;
      }

      .tab:hover:not(:disabled) {
        border-color: var(--tab-hover);
        background: var(--tab-hover);
        color: var(--tab-hover-text);
      }

      .tab.active {
        background: var(--tab-active);
        border-color: var(--tab-active);
        color: var(--tab-active-text);
        box-shadow: 0 0 0 1px rgba(254, 232, 1, 0.35);
      }

      .tab:focus-visible {
        outline: 2px solid var(--secondary, #54c1e6);
        outline-offset: 2px;
      }

      .tab:disabled {
        border-color: rgba(174, 189, 206, 0.35);
        background: rgba(174, 189, 206, 0.08);
        color: var(--tab-disabled-text);
        cursor: not-allowed;
      }

      .tab-panel {
        border: 1px solid rgba(148, 163, 184, 0.25);
        border-radius: 0;
        background: rgba(15, 23, 42, 0.4);
        padding: 1rem;
        color: #e2e8f0;
      }
    `
  }
}

if (!customElements.get('cyberpunk-tabs')) {
  customElements.define('cyberpunk-tabs', CyberpunkTabs)
}

export default CyberpunkTabs
