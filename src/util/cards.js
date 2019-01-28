import UUID from 'uuid-js'

export const getBlackCards = (cardList = []) => {
  return cardList.filter((card) => {
    return !card.parentId
  })
}

export const getWhiteCardsByParent = (cardList, parentId) => {
  return cardList.filter((card) => {
    return card.parentId === parentId
  })
}

export const generateRandomEmptyCard = (parentId) => {
  return {
    id: UUID.create().hex,
    text: 'random text, please edit',
    whiteCards: [],
    isEditing: true,
    parentId
  }
}
