import {LitElement, html, css} from 'lit-element';
import {read, appendToStorage} from './storage';
import './AppAddElement';
import './AppDisplayRow';
import './AppDisplayList'

export class AppMain extends LitElement {
    static properties() {
        return {
            action: {type: String},
            actionList: {type: Array}
        }
    }

    constructor() {
        super();
        this.actionList = read();
    }

    render() {
        return html`
            <app-addelement .action=${this.action} @element-added=${this._onAddingElement}></app-addelement>
            <app-displaylist .actionList=${this.actionList}></app-displaylist>
        `
    }

    _onAddingElement(event) {
        this.action = event.detail.action;
        this.actionList.push(this.action);
    }

}