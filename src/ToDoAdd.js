import {LitElement, html, css} from 'lit-element';
import {read, appendToStorage} from './storage';
class ToDoAdd extends LitElement {
    static get styles() {
        return css`
          form {
            display: block;
            padding: 3rem;
          }
        `;
      }

    render() {

        return html `
        <form id="addForm" @submit=${this._onSubmit}>
            <label>Please insert your activity here: <input type="text" name="action"/></label>
            <br>
            <label>Please classify the importance of the item:</label>
            <select id="importance">
                <option value="optional" selected>Optional</option>
                <option value="necessary">Necessary</option>
                <option value="highly-important">Highly important</option>
            </select>
            <button>Add</button>
        </form>
        `;
    }


    _onSubmit(event) {

        function getColor(optionsArray) {
            if(optionsArray[0].selected === true) {
                return 'green';
            } else if(optionsArray[1].selected === true) {
                return 'orange';
            } else if(optionsArray[2].selected === true) {
                return 'red';
            }
        }

        this.selectorColor = getColor(event.target.querySelector('select').options);
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        data.set('id', Date.now());
        const action = Object.fromEntries(data);
        action.priority = event.target.querySelector('select').value;
        appendToStorage(action);
        this.dispatchEvent(new CustomEvent('element-added', {detail:data}));
    }

}

window.customElements.define('todo-add', ToDoAdd);