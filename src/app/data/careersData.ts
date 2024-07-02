import { CallToAction } from "../models/callToAction.model";
import { BenefitsCard, FaqCard, JobsCard, OurValuesCard } from "../models/cards.model";
import { Overview } from "../models/overview.model";

//Titles
export const careersTitles: any = {
    ourValues: { title: 'Our', emphasys: 'Values', subtitle: 'At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.' },
    ourBenefits: { title: 'Our', emphasys: 'Benefits', subtitle: 'At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.' },
    jobsOpening: { title: 'Jobs', emphasys: 'Opening', subtitle: 'Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry.' },
    faq: { title: 'Frequently', emphasys: 'Asked Questions', subtitle: 'Still you have any questions? Contact our Team via support@yourbank.com' },
}

//Overview Data
export const overviewData: Overview = {
    title: 'Welcome to ',
    emphasys: 'YourBank Careers!',
    description: 'Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.',
    image: 'overview-careers.png'
}

//Cards - Our Products
export const benefitsCards: BenefitsCard[] = [
    { icon: 'benefits-icon1.png', title: 'Competitive Compensation', description: 'We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.' },
    { icon: 'benefits-icon2.png', title: 'Health and Wellness', description: "We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle." },
    { icon: 'benefits-icon3.png', title: 'Retirement Planning', description: 'YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.' },
    { icon: 'benefits-icon4.png', title: 'Work-Life Balance', description: "We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments." }
]

//Cards - Our Products
export const ourValuesCards: OurValuesCard[] = [
    { title: 'Integrity', description: 'We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.' },
    { title: 'Customer Centricity', description: "Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations." },
    { title: 'Collaboration', description: 'We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.' },
    { title: 'Innovation', description: "We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking." }
]

//Jobs Opnenings - Cards Data
export const jobsCards: JobsCard[] = [
    {
        title: 'Relationship Manager',
        location: 'Brazil',
        department: 'Retail Banking',
        description: 'As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.',
        requirements: ["Bachelor's degree in Business, Finance, or a related field", "Minimum of 3 years of experience in sales or relationship management in the banking industry", "Proven track record of meeting and exceeding sales targets", "Excellent interpersonal and negotiation skills", "Strong knowledge of banking products and services",],
    },
    {
        title: 'Risk Analyst',
        location: 'Brazil',
        department: 'Risk Management',
        description: 'As a Risk Analyst at YourBank, you will play a vital role in identifying and assessing potential risks to our organization. You will analyze data, conduct risk assessments, and develop strategies to mitigate risks. We are looking for detail-oriented individuals with strong analytical skills and a solid understanding of risk management principles.',
        requirements: ["Bachelor's degree in Finance, Economics, or a related field", "Minimum of 2 years of experience in risk management or a similar role", "Proficiency in risk analysis tools and techniques", "Strong analytical and problem-solving skills", "Knowledge of regulatory requirements and industry best practices",],
    },
    {
        title: 'IT Security Specialist',
        location: 'Brazil',
        department: 'Information Technology',
        description: 'As an IT Security Specialist at YourBank, you will be responsible for ensuring the security and integrity of our information systems. You will develop and implement security protocols, conduct vulnerability assessments, and respond to security incidents. We are seeking individuals with a strong technical background, knowledge of cybersecurity best practices, and a commitment to maintaining the confidentiality of customer data.',
        requirements: ["Bachelor's degree in Computer Science, Information Security, or a related field", "Minimum of 5 years of experience in IT security or a similar role", "In-depth knowledge of network security protocols and technologies", "Familiarity with regulatory frameworks such as PCI DSS and GDPR", "Professional certifications such as CISSP or CISM are preferred",],
    },
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

//Call To Action
export const callToAction: CallToAction = {
    title: 'Start your Career with ',
    emphasys: 'YourBank today!',
    description: 'Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus.',
}
