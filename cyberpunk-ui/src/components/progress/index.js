import { LitElement, css, html, nothing } from 'lit'

/**
 * Public API:
 * - `variant` property / `variant` attribute (String, reflected), default `"bar"`;
 *   supports `bar`, `loading`, and `circular`.
 * - `value` property / `value` attribute (Number, default `0`, not reflected).
 * - `max` property / `max` attribute (Number, default `100`, not reflected).
 * - `label` property / `label` attribute (String, default `"Progress"`, not reflected).
 */
export class CyberpunkProgress extends LitElement {
  static get properties() {
    return {
      variant: { type: String, reflect: true },
      value: { type: Number },
      max: { type: Number },
      label: { type: String },
    }
  }

  constructor() {
    super()
    this.variant = 'bar'
    this.value = 0
    this.max = 100
    this.label = 'Progress'
  }

  get progress() {
    const max = Number.isFinite(this.max) && this.max > 0 ? this.max : 100
    const value = Number.isFinite(this.value) ? this.value : 0

    return {
      max,
      value: Math.min(Math.max(value, 0), max),
      percent: (Math.min(Math.max(value, 0), max) / max) * 100,
    }
  }

  render() {
    const { max, value, percent } = this.progress
    const isLoading = this.variant === 'loading'

    if (this.variant === 'circular') {
      const circumference = 2 * Math.PI * 42
      const dashOffset = circumference * (1 - percent / 100)

      return html`
        <div
          class="circular"
          role="progressbar"
          aria-label=${this.label}
          aria-valuemin="0"
          aria-valuemax=${max}
          aria-valuenow=${value}
        >
          <svg viewBox="0 0 100 100" aria-hidden="true">
            <circle class="circular-track" cx="50" cy="50" r="42"></circle>
            <circle
              class="circular-indicator"
              cx="50"
              cy="50"
              r="42"
              style="stroke-dasharray: ${circumference}; stroke-dashoffset: ${dashOffset};"
            ></circle>
          </svg>
          <span class="percentage">${Math.round(percent)}%</span>
        </div>
      `
    }

    return html`
      <div
        class="track ${isLoading ? 'loading' : 'bar'}"
        role="progressbar"
        aria-label=${this.label}
        aria-valuemin="0"
        aria-valuemax=${max}
        aria-valuenow=${isLoading ? nothing : value}
        aria-valuetext=${isLoading ? 'Loading' : `${Math.round(percent)}%`}
      >
        <div
          class="indicator ${isLoading ? 'loading' : ''}"
          style=${isLoading ? '' : `width: ${percent}%`}
        ></div>
      </div>
    `
  }

  static get styles() {
    return css`
      :host {
        display: block;
        --progress-color: var(--primary, #fee801);
        --progress-track: rgba(148, 163, 184, 0.2);
      }

      .track {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 0.75rem;
        border-radius: 0;
        background: var(--progress-track);
      }

      .indicator {
        height: 100%;
        border-radius: 0;
        background: linear-gradient(90deg, var(--secondary, #54c1e6), var(--progress-color));
        box-shadow: 0 0 12px rgba(254, 232, 1, 0.35);
        transition: width 0.25s ease;
      }

      .track.loading .indicator {
        position: absolute;
        width: 40%;
        animation: loading 1.4s ease-in-out infinite;
      }

      .circular {
        position: relative;
        display: inline-grid;
        width: 5rem;
        aspect-ratio: 1;
        place-items: center;
        color: #f5d0fe;
      }

      svg {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        transform: rotate(-90deg);
      }

      circle {
        fill: none;
        stroke-width: 8;
      }

      .circular-track {
        stroke: var(--progress-track);
      }

      .circular-indicator {
        stroke: var(--progress-color);
        stroke-linecap: round;
        transition: stroke-dashoffset 0.25s ease;
      }

      .percentage {
        font-size: 0.8rem;
        font-weight: 700;
      }

      @keyframes loading {
        from {
          transform: translateX(-100%);
        }
        to {
          transform: translateX(250%);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .indicator,
        .circular-indicator {
          transition: none;
        }

        .track.loading .indicator {
          animation: none;
          width: 100%;
          opacity: 0.65;
        }
      }
    `
  }
}

if (!customElements.get('cyberpunk-progress')) {
  customElements.define('cyberpunk-progress', CyberpunkProgress)
}

export default CyberpunkProgress