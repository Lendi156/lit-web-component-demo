import { LitElement, css, html } from 'lit'

/**
 * Public API:
 * - `columns` property (Array, default `[]`); each column uses `key` and optional
 *   `label`. A `columns` attribute may be supplied as a JSON array.
 * - `rows` property (Array, default `[]`); each row is an object keyed by column key.
 *   A `rows` attribute may be supplied as a JSON array.
 * - `striped` property / `striped` attribute (Boolean, reflected), default `false`.
 */
export class CyberpunkTable extends LitElement {
  static get properties() {
    return {
      columns: { type: Array },
      rows: { type: Array },
      striped: { type: Boolean, reflect: true },
    }
  }

  constructor() {
    super()
    this.columns = []
    this.rows = []
    this.striped = false
  }

  _renderCell(value) {
    if (value === null || value === undefined || value === '') {
      return html`—`
    }

    if (typeof value === 'string' && value.startsWith('<')) {
      return html`<span part="cell-content">${value}</span>`
    }

    return value
  }

  render() {
    if (!this.columns || !this.columns.length) {
      return html``
    }

    return html`
      <div class="table-wrapper">
        <table class="table ${this.striped ? 'striped' : ''}">
          <thead>
            <tr>
              ${this.columns.map(
                (column) => html`<th scope="col">${column.label || column.key || ''}</th>`,
              )}
            </tr>
          </thead>
          <tbody>
            ${this.rows.map(
              (row) => html`
                <tr>
                  ${this.columns.map((column) => {
                    const value = row[column.key]
                    return html`<td>${this._renderCell(value)}</td>`
                  })}
                </tr>
              `,
            )}
          </tbody>
        </table>
      </div>
    `
  }

  static get styles() {
    return css`
      :host {
        display: block;
        --table-bg: rgba(15, 23, 42, 0.8);
        --table-border: rgba(148, 163, 184, 0.3);
        --table-head: rgba(17, 24, 39, 0.9);
        --table-text: #e2e8f0;
        --table-muted: #cbd5e1;
        --table-accent: var(--primary, #fee801);
      }

      .table-wrapper {
        width: 100%;
        overflow-x: auto;
        border: 1px solid var(--table-border);
        border-radius: 0;
        background: var(--table-bg);
      }

      .table {
        width: 100%;
        border-collapse: collapse;
        color: var(--table-text);
      }

      thead th {
        background: var(--table-head);
        color: var(--table-text);
        text-align: left;
        font-size: 0.8rem;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        padding: 0.9rem 1rem;
        border-bottom: 1px solid var(--table-border);
      }

      tbody td {
        padding: 0.9rem 1rem;
        border-bottom: 1px solid rgba(148, 163, 184, 0.18);
        color: var(--table-muted);
      }

      tbody tr:last-child td {
        border-bottom: none;
      }

      .table.striped tbody tr:nth-child(even) {
        background: rgba(148, 163, 184, 0.04);
      }

      tbody tr:hover {
        background: rgba(254, 232, 1, 0.05);
      }
    `
  }
}

if (!customElements.get('cyberpunk-table')) {
  customElements.define('cyberpunk-table', CyberpunkTable)
}

export default CyberpunkTable
