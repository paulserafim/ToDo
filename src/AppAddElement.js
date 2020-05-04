import {LitElement, html, css} from 'lit-element';
import {read, appendToStorage} from './storage';
class AppAddElement extends LitElement {
    render() {
        return html `
        <form @submit=${this._onSubmit}>
            <label>Please insert your activity here: <input type="text" name="action"/></label>
            <button>Add</button>
        </form>
        `;
    }

    _onSubmit(event) {
        const form = event.target;
        const data = new FormData(form);
        data.set('id', Date.now());
        const action = Object.fromEntries(data);
        appendToStorage(action);
        this.dispatchEvent(new CustomEvent('element-added', {detail:data}));
    }

}

window.customElements.define('app-addelement', AppAddElement);