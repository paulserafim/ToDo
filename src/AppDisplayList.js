import {LitElement, html, css} from 'lit-element';
import {read, appendToStorage} from './storage';
import './AppAddElement';
import './AppDisplayRow';
import './AppDisplayList'

export class AppDisplayList extends LitElement {
    static properties() {
        return {
            actionList: {type: Array},
        }
    }

    constructor() {
        super();
        this.actionList = read();
        //initialize properties
    }
    

    render() {
        return html`
        <form id="form-delete">
        ${this.actionList.map(element=> html`<app-displayrow .actionId=${element.id} .action=${element.action}>${element.action}</app-displayrow>`)}
        `
    }

}
window.customElements.define('app-displaylist', AppDisplayList);