export const GolfingerId = '3c6f4977-c58b-460f-98ad-acd2fae3a2ce'
const KnockKnockId = 'd50a2288-c93f-448f-8af6-3dc1b7268606'

export const GoldFingerCard = {
  id: GolfingerId,
  text: 'GoldFinger: He\'s the man, the man with...'
}

export const FleshEatingBacteriaCard = {
  id: 'b42559cf-efda-42bf-80d9-088976cc697e',
  text: 'Flesh eating bacteria',
  parentId: GolfingerId
}

export const VictoriaMaidCard = {
  id: 'r42559cf-efda-42bf-80d9-088976cc697x',
  text: 'Victoria, my terrible maid',
  parentId: GolfingerId
}

export const SantasCard = {
  id: 'da1f1278-3f91-4529-8e55-81b4ffd621ac',
  text: 'Instead of coal, Santa now gives the bad children...'
}

export const KnockKnockCard = {
  id: KnockKnockId,
  text: 'Knock knock. Who\'s there?'
}

export const cards = [
  GoldFingerCard,
  SantasCard,
  KnockKnockCard,
  FleshEatingBacteriaCard,
  VictoriaMaidCard,
  {
    id: '0f46704f-65c1-47b6-a05b-51eaba442817',
    text: 'Chemical weapons',
    parentId: KnockKnockId
  },
  {
    id: 'fb681a10-b46d-498b-b35c-2d07001703e8',
    text: 'The ugliest boy in town',
    parentId: KnockKnockId
  }
]
