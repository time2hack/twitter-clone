const template = (scope) => `
<div class="card">
  <div class="card-body">
    <h5 class="card-title">${scope.user.name}</h5>
    <p class="card-text">${scope.tweet.text}</p>
    <!--
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
    -->
    <p class="card-text">
      <a href="#" class="card-link">Retweet</a>
      <a href="#" class="card-link">Like</a>
      <small class="float-right text-muted">3 mins ago</small>
    </p>
  </div>
</div>`;

export const TWEET_COMPONENT = 'tc-tweet';

class Tweet extends HTMLElement {
  connectedCallback() {
    this.data = JSON.parse(this.getAttribute('tweet') || '{}');
    this.render();
  }

  render() {
    this.innerHTML = template(this.data);
  }
}

customElements.define(TWEET_COMPONENT, Tweet);
