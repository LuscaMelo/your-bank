import { CallToAction } from "../models/callToAction.model"
import { FaqCard, FeaturesCard, ProductCard, TestimonialsCard } from "../models/cards.model"
import { UseCasesData } from "../models/useCases.model"

//Titles
export const homeTitles: any = {
    ourProducts: { title: 'Our', emphasys: 'Products', subtitle: 'Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations' },
    useCases: { title: 'Use', emphasys: 'Cases', subtitle: 'At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions' },
    ourFeatures: { title: 'Our', emphasys: 'Features', subtitle: 'Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience' },
    faq: { title: 'Frequently', emphasys: 'Asked Questions', subtitle: 'Still you have any questions? Contact our Team via support@yourbank.com' },
    testimonials: { title: 'Our', emphasys: 'Testimonials', subtitle: 'Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey' },
}

//Our Products - Cards Content
export const productsCards: ProductCard[] = [
    { category: 'individuals', icon: 'products-icon1.png', title: 'Checking Accounts', text: 'Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.', border: false },
    { category: 'individuals', icon: 'products-icon2.png', title: 'Savings Accounts', text: "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.", border: true },
    { category: 'individuals', icon: 'products-icon3.png', title: 'Loans and Mortgages', text: 'Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.', border: false },
    { category: 'businesses', icon: 'products-icon2.png', title: 'Savings Accounts Plus', text: "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.", border: false },
    { category: 'businesses', icon: 'products-icon1.png', title: 'Loans and Mortgages Plus', text: 'Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.', border: true },
    { category: 'businesses', icon: 'products-icon3.png', title: 'Checking Accounts Plus', text: 'Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.', border: false },
]

//Use cases - Individuals Content
export const individualsContent: UseCasesData =
{
    title: 'For Individuals',
    description: 'For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers',
    statistics: [
        { percentage: '78%', text: 'Secure Retirement Planning' },
        { percentage: '63%', text: 'Manageable Debt Consolidation' },
        { percentage: '91%', text: 'Reducing financial burdens' },
    ],
    direction: 'lg:flex-row',
    cards: [
        { text: 'Managing Personal Finances', icon: 'cases-icon1.png' },
        { text: 'Saving for the Future', icon: 'cases-icon2.png' },
        { text: 'Homeownership', icon: 'cases-icon3.png' },
        { text: 'Education Funding', icon: 'cases-icon4.png' },
    ],
}

//Use cases - Businesses Content
export const businessesContent: UseCasesData =
{
    title: 'For Businesses',
    description: ' For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them',
    statistics: [
        { percentage: '65%', text: 'Cash Flow Management' },
        { percentage: '70%', text: 'Drive Business Expansion' },
        { percentage: '45%', text: 'Streamline payroll processing' },
    ],
    direction: 'lg:flex-row-reverse',
    cards: [
        { text: 'Startups and Entrepreneurs', icon: 'cases-icon5.png' },
        { text: 'Cash Flow Management', icon: 'cases-icon6.png' },
        { text: 'Business Expansion', icon: 'cases-icon7.png' },
        { text: 'Payment Solutions', icon: 'cases-icon8.png' },
    ],
}

//Features - Cards Content
export const featuresCards: FeaturesCard[] = [
    { category: 'Online Banking', title: '24/7 Account Access', description: 'Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.' },
    { category: 'Online Banking', title: 'Mobile Banking App', description: 'Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.' },
    { category: 'Online Banking', title: 'Secure Transactions', description: 'Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.' },
    { category: 'Online Banking', title: 'Bill Pay and Transfers', description: 'Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.' },
    { category: 'Financial Tools', title: 'Accounting Software', description: 'While certain accounting software platforms have been considered top-of-the-line for many years, now newer software options are also becoming more popular. Before choosing accounting software for your company, look for features important to your business.' },
    { category: 'Financial Tools', title: 'Expense Tracking', description: "When my employees are on the go, they often have different expenses that will need to be reimbursed – meals and mileage, for example. Monitoring such expenses is part of some accounting software, but not all, so look for a program that integrates with your accounting software if the feature isn't already present." },
    { category: 'Financial Tools', title: 'Budgeting Tools', description: "One of the crucial ways a business can be successful is to maintain careful budgeting. Knowing what money is coming in and going out makes it easier to manage your cash flow and plan for upcoming months." },
    { category: 'Customer Support', title: 'Chatbot', description: "Have unlimited access to our chatbot on our mobile app, to answer any questions you may have regarding your plan." },
    { category: 'Customer Support', title: 'Real-time chat', description: "If by chance you can't resolve it with the chatbot, don't worry, we provide a channel so you can talk to our representatives and get any questions answered." },
]

//FAQ - Cards Data
export const faqCards: FaqCard[] = [
    { id: 'show', title: 'How do I open an account with YourBank?', description: 'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.' },
    { id: 'show', title: 'What documents do I need to provide to apply for a loan?', description: "The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process." },
    { id: 'show', title: 'How can I access my accounts online?', description: "Accessing your accounts online is simple and secure. Visit our website and click on the 'Login' button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the 'Enroll Now' button and follow the registration process. If you need assistance, our customer support team is available to guide you." },
    { id: 'show', title: 'Are my transactions and personal information secure?', description: 'At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.' },
    { id: 'hidden', title: 'How can I access my accounts online?', description: "Accessing your accounts online is simple and secure. Visit our website and click on the 'Login' button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the 'Enroll Now' button and follow the registration process. If you need assistance, our customer support team is available to guide you." },
    { id: 'hidden', title: 'How do I open an account with YourBank?', description: 'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.' },
]

//Testimonials - Cards Data
export const testimonialsCards: TestimonialsCard[] = [
    { category: 'individuals', name: 'Sara T', testimony: 'YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.' },
    { category: 'individuals', name: 'John D', testimony: "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable." },
    { category: 'individuals', name: 'Emily G', testimony: "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind." },
    { category: 'businesses', name: 'TechInnovate', testimony: "YourBank has been essential from the start, offering personalized banking solutions that allow us to focus on growth and innovation." },
    { category: 'businesses', name: 'EcoTech', testimony: 'YourBank understands our unique needs as a sustainable technology company, providing agile banking support and a commitment to sustainability.' },
    { category: 'businesses', name: 'FoodEx', testimony: 'Choosing YourBank was a strategic decision that helped us optimize financial operations and efficiently expand our market presence.' },
]

//Call To Action - Cards Content
export const callToAction: CallToAction = {
    title: 'Start your financial journey with ',
    emphasys: 'YourBank today!',
    description: 'Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service.',
}