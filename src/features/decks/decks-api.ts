import axios from 'axios'

export type GetDecksResponse = {
  items: Deck[]
  pagination: Pagination
}

export type Deck = {
  author: Author
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}

export type Author = {
  id: string
  name: string
}

export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type AddDeckParams = {
  name: string
}

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  getDecks() {
    return instance.get<GetDecksResponse>('/v2/decks')
  },
  postDeck(params: AddDeckParams) {
    return instance.post<Deck>('/v1/decks', params)
  }
}



