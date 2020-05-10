import {LitElement, html, css} from 'lit-element';
import {read, appendToStorage} from './storage';
import './ToDoAdd';
import './ToDoElement';
import './ToDoList'

export class ToDoList extends LitElement {

    static get styles() {
        return css`
            form {
                display: block;
                padding: 3rem;
                background-color: antiquewhite;
                border-radius: 2rem;
              }
            `;
    }

    static get properties() {
        return {
            actionList: {type: Array},
        }
    }

    

    render() {
        this.actionList=read();
        return html`
        <form id="form-delete">
        ${this.actionList.map(element=> html`<todo-element @remove-element=${this._onRemove} .actionId=${element.id} .action=${element.action} .priority=${element.priority}>${element.action}</todo-element>`)}  `
    }

    _onRemove(event) {
        this.dispatchEvent(new CustomEvent('onRemove', {detail:event.detail}));
    }

}
window.customElements.define('todo-list', ToDoList);