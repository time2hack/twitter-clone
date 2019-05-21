import { TWEET_COMPONENT } from '../tweet/tweet.component';

export const FEED_COMPONENT = 'tc-feed';
const template = (scope) => `<div class="list-group" ref="list">
  <h4>Your Feed</h4>
  ${scope.tweets.map(getTweetMarkup).join('')}
</div>`;

const TWEET = {
  user: {
    username: 'patel_pankaj_',
    name: 'Pankaj Patel',
    photo: '',
  },
  tweet: {
    text: 'lsjdhjgj gdfgdfg gdfgdfg dfgfd',
    time: +new Date,
  }
}

const getTweetMarkup = (tweet) => `<${TWEET_COMPONENT} 
  tweet='${JSON.stringify(tweet)}'
></${TWEET_COMPONENT}>`;

class List extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    console.log(TWEET);
    this.innerHTML = template({
      tweets: [].concat([TWEET, TWEET]),
    });
  }
  pushTweet(_tweet) {
    const tweet = document.createElement('div');
    tweet.innerHTML = getTweetMarkup(_tweet);
    this.querySelector('[ref="list"]').appendChild(tweet.firstChild);
  }
}

customElements.define(FEED_COMPONENT, List);
