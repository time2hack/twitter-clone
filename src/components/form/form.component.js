import template from './form.html';
import customeEvent from '../../custom-event';

export const FORM_COMPONENT = 'tc-form';
export const EVENTS = {
  CREATE_TWEET: 'tc-event-new-tweet'
}

class Form extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = template({});
    this.collectRefs();
    this.refs.button.addEventListener('click', (e) => {
      if(!this.refs.text.value) {
        return;
      }
      this.dispatchEvent(customeEvent(EVENTS.CREATE_TWEET, {
        text: this.refs.text.value,
      }));
      this.refs.form.reset();
    });
  }
  collectRefs() {
    this.refs = {
      text: this.querySelector('[ref="text"]'),
      form: this.querySelector('[ref="form"]'),
      button: this.querySelector('[ref="btn-submit"]'),
    }
  }
}

customElements.define(FORM_COMPONENT, Form);
