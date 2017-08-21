export function toggleOverlay(value, overlayType) {
  return {
    type: 'TOGGLE_OVERLAY',
    payload: {
      on: value,
      which: overlayType
  }
}
