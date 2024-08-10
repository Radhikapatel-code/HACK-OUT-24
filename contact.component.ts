import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'],
})
export class Contact {
  @Input()
  content2: string =
    'Our team is here to help you with any inquiries regarding our platform.'
  @Input()
  email1: string = 'info@farmerswarehouse.com'
  @Input()
  address1: string = '123 Farm Way, Agriculture City, Country'
  @Input()
  content3: string = 'Stay connected with us for the latest updates and news.'
  @Input()
  content1: string =
    'Have a question or need assistance? Feel free to reach out to us.'
  @Input()
  content4: string =
    'Reach out to us for any technical support or feedback on our services.'
  @Input()
  heading1: string = 'Contact Us'
  @Input()
  content5: string =
    'We value your feedback and are committed to providing excellent customer service.'
  @Input()
  phone1: string = '+1-234-567-8901'
  constructor() {}
}
