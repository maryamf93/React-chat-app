
export const addNewMessage = (newMessage) => {
  return {
    type: 'SAVE_NEW_MESSAGE',
    payload: newMessage
  }
}

export const saveConversationList = (conversationList) => {
  return {
    type: 'SAVE_CONVERSATION_LIST',
    payload: conversationList
  }
}
