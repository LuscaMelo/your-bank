export interface Statistic {
    percentage: string
    text: string
}

export interface Card {
    text: string
    icon: string
}

export interface UseCasesData {
    title: string
    description: string
    statistics: Statistic[]
    direction: string
    cards: Card[]
}