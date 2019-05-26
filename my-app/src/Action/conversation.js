
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

export const saveMessages = (messages, user, avatar, conversationId) => {
  return {
    type: 'SAVE_MESSAGES',
    payload: messages,
    user: user,
    avatar: avatar,
    conversationId: conversationId
  }
}

