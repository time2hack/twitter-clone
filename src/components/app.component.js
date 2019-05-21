import customeEvent from '../custom-event';
import { 
  EVENTS as FORM_EVENTS,
  FORM_COMPONENT,
} from './form/form.component';
import { FEED_COMPONENT } from './feed/feed.component';
import template from './app.html';
import css from './app.css';

export const EVENTS = {
  PUSHED_TWEET: 'tc-event-pushed-tweet'
}
const STORE = {};
const USERS = {
  patel_pankaj_: {
    username: 'patel_pankaj_',
    name: 'Pankaj Patel',
    photo: '',
  },
  time2hack: {
    username: 'time2hack',
    name: 'Time to Hack',
    photo: '',
  },
}
class Clone extends HTMLElement {
  connectedCallback() {
    this.dom = this.attachShadow({ mode: 'open' });
    this.dom.innerHTML = template({ title: 'Twitter', css });
    this.refs = {
      form: this.dom.querySelector(FORM_COMPONENT),
      feed: this.dom.querySelector(FEED_COMPONENT),
    }
    this.dom.addEventListener(FORM_EVENTS.CREATE_TWEET, (e) => {
      const time = +new Date()
      const tweet = {
        tweet: Object.assign({}, e.detail, {time}),
        user: USERS.time2hack,
      };
      STORE[time] = Object.assign({}, tweet);
      this.dispatchEvent(customeEvent(EVENTS.PUSHED_TWEET, { tweet }))
    });

    this.addEventListener(EVENTS.PUSHED_TWEET, (e) => {
      this.refs.feed.pushTweet(e.detail.tweet);
    })

  }
}

customElements.define('twitter-clone', Clone);
