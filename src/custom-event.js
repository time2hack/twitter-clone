module.exports = (name, eventData, bubbles = true, cancelable = true) => {
  return new CustomEvent(name, { detail: eventData, bubbles, cancelable });
}
