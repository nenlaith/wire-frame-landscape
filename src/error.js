class WireFrameLandscapeError extends Error {
  constructor(message = "") {
    super("WireFrameLandscape Error : " + message);
  }
}

export default WireFrameLandscapeError;
