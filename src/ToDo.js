import {LitElement, html, css} from 'lit-element';
import {read, appendToStorage} from './storage';
import './ToDoAdd';
import './ToDoElement';
import './ToDoList'

export class ToDo extends LitElement {

    static get styles() {
        return css`
            fieldset {
                border-radius: 2rem;
                border: groove;
            }
            legend {
                border: 0.1rem groove;
                border-radius: 1rem;
            }
            .square {
                float: left;
                width: 1rem;
                height: 1rem;
                margin: 0.5rem;
                border: 0 solid rgba(0, 0, 0, .2);
            }
            .emplanation {
                float: right;
            }
            .green {
                background: green;
            }
            .orange {
                background: orange;
            }
            .red {
                background: red;
            }
        `
    }

    static get properties() {
        return {
            action: {type: String},
            actionList: {type: Array}
        }
    }

    render() {

        this.actionList = read();

        return html`
            <todo-add .action=${this.action} @element-added=${this._onAddingElement}></todo-add>
            <fieldset>
            <legend>
                <div class="square green"></div><div class="explanation">Optional</div><br>
                <div class="square orange"></div><div class="explanation">Necessary</div><br>
                <div class="square red"></div><div class="explanation">Highly important</div>
            </legend>
                <todo-list @onRemove=${this._onRemovingElement} .actionList=${this.actionList}></todo-list>
            </fieldset>
        `
    }

    _onAddingElement(event) {
        this.actionList = read();
    }

    _onRemovingElement(event) {
        this.actionList = read();
    }
}