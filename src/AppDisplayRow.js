import {LitElement, html, css} from 'lit-element';
import {remove} from './storage';
class AppDisplayRow extends LitElement {
    static properties() {
        return {
            action: {type: String},
            actionId: {type: Number}
        }
    }

    constructor() {
        super();
    }

    render() {
        return html `
            <fieldset>
                <textarea name="action-row" readonly>${this.action}</textarea>
                <button @click=${this._onRemove} name="id" value=${this.actionId}>Remove</button>
            </fieldset>

        `;
    }

    _onRemove(event) {

        const button = event.target;
        remove(button.value);
        location.reload();
    }

}

window.customElements.define('app-displayrow', AppDisplayRow);