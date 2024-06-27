import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FaqCard } from '../../models/cards.model';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  ngOnInit(): void {
    this.filteredFaqList = this.faqCards.filter((card: FaqCard) => card.id == 'show')
    this.faqList = this.filteredFaqList
  }

  faqList!: FaqCard[]
  filteredFaqList!: FaqCard[]

  btnActive: boolean = false

  //FAQ cards
  faqCards: FaqCard[] = [
    { id: 'show', title: 'How do I open an account with YourBank?', description: 'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.' },
    { id: 'show', title: 'What documents do I need to provide to apply for a loan?', description: "The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process." },
    { id: 'show', title: 'How can I access my accounts online?', description: "Accessing your accounts online is simple and secure. Visit our website and click on the 'Login' button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the 'Enroll Now' button and follow the registration process. If you need assistance, our customer support team is available to guide you." },
    { id: 'show', title: 'Are my transactions and personal information secure?', description: 'At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.' },
    { id: 'hidden', title: 'How can I access my accounts online?', description: "Accessing your accounts online is simple and secure. Visit our website and click on the 'Login' button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the 'Enroll Now' button and follow the registration process. If you need assistance, our customer support team is available to guide you." },
    { id: 'hidden', title: 'How do I open an account with YourBank?', description: 'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.' },
  ]

  showAllCards(): void {
    this.faqList == this.filteredFaqList ? this.faqList = this.faqCards : this.faqList = this.filteredFaqList
    this.btnActive = !this.btnActive
  }

}
