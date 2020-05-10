import {LitElement, html, css, unsafeCSS} from 'lit-element';
import {remove} from './storage';
class ToDoElement extends LitElement {
   

    static get styles() {
        return css`
        :host{
            padding:3rem;
        }
        fieldset{
            border-radius:0.5rem;
            border: none;
        }
        `
    }
    
    static get properties() {
        return {
            action: {type: String},
            actionId: {type: Number},
            priority: {type: String}
        }
    }


    render() {
        function getColorByPriority(importance) {
            switch(importance) {
                case 'optional': return 'green';break;
                case 'necessary': return 'orange'; break;
                case 'highly-important': return 'red'; break;
            }
        }
        const color = getColorByPriority(this.priority);
        
        return html `
            <fieldset style="
            background-color: ${color};
          ">
                <textarea name="action-row" readonly>${this.action}</textarea>
                <button @click=${this._onRemove} name="id" value=${this.actionId}>Remove</button>
            </fieldset>

        `;
    }
/*
    updated(changedProperties) {
        if(changedProperties.has('priority')) {
            if (this.priority === 'optional') {
                this.style.backgroundColor = 'green';
            } 
            else {
                if(this.priority === 'necessary') {
                    this.style.backgroundColor = 'orange';
                }
                else {
                    if(this.priority === 'highly-important') {
                        this.style.backgroundColor = 'red';
                    }
                }
            }

        }
    }
    */

    _onRemove(event) {

        event.preventDefault();
        const button = event.target;
        remove(button.value);
        this.dispatchEvent(new CustomEvent('remove-element', {detail:button.value}));
    }
}

window.customElements.define('todo-element', ToDoElement);