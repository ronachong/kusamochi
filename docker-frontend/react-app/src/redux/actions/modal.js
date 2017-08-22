export default function toggleModal(value, modalType) {
  return {
    type: 'TOGGLE_OVERLAY',
    payload: {
      on: value,
      which: modalType
    }
  }
}
