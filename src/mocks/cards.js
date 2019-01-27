import UUID from 'uuid-js'

export const cards = [
  {
    id: '3c6f4977-c58b-460f-98ad-acd2fae3a2ce',
    text: 'GoldFinger: He\'s the man, the man with...',
    whiteCards: [
      {
        id: '0f46704f-65c1-47b6-a05b-51eaba442817',
        text: 'Lorem ipsum dolor'
      },
      {
        id: 'fb681a10-b46d-498b-b35c-2d07001703e8',
        text: 'Lorem ipsum dolor'
      },
      {
        id: 'b42559cf-efda-42bf-80d9-088976cc697e',
        text: 'Lorem ipsum dolor'
      }
    ]
  },
  {
    id: 'da1f1278-3f91-4529-8e55-81b4ffd621ac',
    text: 'Instead of coal, Santa now gives the bad children...',
    whiteCards: []
  },
  {
    id: 'd50a2288-c93f-448f-8af6-3dc1b7268606',
    text: 'Knock knock. Who\'s there?',
    whiteCards: []
  }
]

export const generateRandomEmptyCard = () => {
  return {
    id: UUID.create().hex,
    text: 'the text',
    whiteCards: []
  }
}
