import { HowWeProtectYouCard } from "../models/cards.model"
import { Overview } from "../models/overview.model"

//Titles
export const securityTitles: any = {
    howWeProtectYou: { title: 'How We ', emphasys: 'Protect You', subtitle: 'At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times.' },
    faq: { title: 'Frequently', emphasys: 'Asked Questions', subtitle: 'Still you have any questions? Contact our Team via support@yourbank.com' },
}

//Overview Data
export const overviewData: Overview = {
    title: 'Your Security is Our ',
    emphasys: 'Top Priority!',
    description: 'At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.',
    image: 'overview-security.png'
}

//How We Protect You - Cards Data
export const howWeProtectYouCards: HowWeProtectYouCard[] = [
    { icon: 'benefits-icon1.png', title: 'Secure Online Banking Platform', description: 'Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.' },
    { icon: 'benefits-icon2.png', title: 'Multi-Factor Authentication', description: "To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account." },
    { icon: 'benefits-icon3.png', title: 'Fraud Monitoring', description: 'We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.' },
    { icon: 'benefits-icon4.png', title: 'Secure Mobile Banking', description: "Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected." }
]
