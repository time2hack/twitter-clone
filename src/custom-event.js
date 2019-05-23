module.exports = (
  name,
  eventData,
  bubbles = true,
  cancelable = true,
) => new CustomEvent(
  name, {
    detail: eventData,
    bubbles,
    cancelable
  }
);
