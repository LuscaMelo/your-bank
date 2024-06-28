export interface ProductCard {
    category: string
    icon: string
    title: string
    text: string
    border: boolean
}

export interface TestimonialsCard {
    category: string
    testimony: string
    name: string
}

export interface FaqCard {
    id: string
    title: string
    description: string
}

export interface FeaturesCard {
    category: string
    title: string
    description: string
}

export interface OurValuesCard {
    title: string
    description: string
}

export interface BenefitsCard {
    title: string
    description: string
    icon: string
}

export interface JobsCards {
    title: string
    location: string
    department: string
    description: string
    requirements: string[]
}
