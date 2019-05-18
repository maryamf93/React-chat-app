
export default function addNewMessage (newMessage) {
  return {
    type: 'SAVE_NEW_MESSAGE',
    payload: newMessage
  }
}
