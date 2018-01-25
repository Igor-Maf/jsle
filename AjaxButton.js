// http://prntscr.com/hw4e9b

const style = `
<style>
:host {
    display: inline-flex !important;
    align-items: center;
    position: relative;
}
.spinner-animation {
    width: 10px;
    height: 10px;
    margin-left: 10px;
    border-radius: 50%;
    border-top: 3px solid rgba(255, 255, 255, 0.2);
    border-right: 3px solid rgba(255, 255, 255, 0.2);
    border-bottom: 3px solid rgba(255, 255, 255, 0.2);
    border-left: 3px solid #ffffff;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load 1.1s infinite linear;
    animation: load 1.1s infinite linear;
}
@-webkit-keyframes load {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
`;

/**
 * @class AjaxButton
 * @customElements
 */
class AjaxButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this._disabled = false;

        this.addEventListener("click", e => {
            if (this.disabled) {
                e.stopImmediatePropagation();
            }

            if (this.type === 'submit' && !this.disabled) {
                this.closest('form').dispatchEvent(new Event('submit', {bubbles: true, cancelable: true}));
            }
        });
    }

    static get observedAttributes() {
        return ['label', 'disabled', 'type'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'disabled': {
                this._disabled = newValue;
                this.updateUI();
            }
        }
    }

    connectedCallback() {
        this.updateUI();
    }

    render() {
        return `
            ${style}
            <span>${this.label}</span>
            ${this.disabled ? '<div class="spinner-animation"></div>' : ''} 
        `;
    }

    updateUI() {
        this.shadowRoot.innerHTML = this.render();
    }

    get disabled() {
        return this._disabled;
    }

    set disabled(val) {
        this.setAttribute('disabled', val);
    }

    get label() {
        return this.getAttribute('label') || 'Кнопка';
    }

    get type() {
        return this.getAttribute('type');
    }
}

window.customElements.define('ajax-button', AjaxButton);

