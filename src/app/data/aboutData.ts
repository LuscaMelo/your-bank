import { releasesCard } from "../models/cards.model"
import { Overview } from "../models/overview.model"

//Titles
export const aboutTitles: any = {
    mission: { title: 'Mission & ', emphasys: 'Vision', subtitle: 'We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development' },
    pressReleases: { title: 'Press ', emphasys: 'Releases', subtitle: 'Stay updated with the latest happenings and exciting developments at YourBank through our press releases' },
}

//Overview Data
export const overviewData: Overview = {
    title: 'Where Banking Meets ',
    emphasys: 'Excellence!',
    description: 'At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.',
    image: 'overview-about.png'
}

//Releases - Cards Data
export const releasesCards: releasesCard[] = [
    { title: 'YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction', image: 'press-releases1.png', location: 'Brazil', date: '06/11/2024', description: 'YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.' },
    { title: 'YourBank Expands Branch Network with Opening of New Location in Chennai', image: 'press-releases2.png', location: 'Brazil', date: '12/11/2024', description: 'YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.' },
    { title: 'YourBank Partners with Local Nonprofit to Support Financial Education Initiatives', image: 'press-releases3.png', location: 'Brazil', date: '24/12/2024', description: 'YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.' },
    { title: 'YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility', image: 'press-releases4.png', location: 'Brazil', date: '28/12/2024', description: 'YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.' },
]