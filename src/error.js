class WireFrameLandscapeError extends Error {
  constructor(message = "") {
    super("[WireFrameLandscape] " + message);
  }
}

export default WireFrameLandscapeError;
