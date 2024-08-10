import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class Footer {
  @Input()
  column2Title: string = 'Quick Links'
  @Input()
  link7: string = 'Blog'
  @Input()
  link5: string = 'Privacy Policy'
  @Input()
  link8: string = 'Sell Surplus Supplies'
  @Input()
  action1: string = 'Subscribe to Newsletter'
  @Input()
  content3: string = 'Designed and developed by FarmTech Solutions'
  @Input()
  link4: string = 'Terms of Service'
  @Input()
  logoSrc: string =
    'https://presentation-website-assets.teleporthq.io/logos/logo.png'
  @Input()
  cookiesLink: string = '/cookies-policy'
  @Input()
  content2: string = '© 2023 Farmers Warehouse Management. All rights reserved.'
  @Input()
  link9: string = 'Warehouse Management'
  @Input()
  link6: string = 'FAQs'
  @Input()
  logoAlt: string = 'Farmers Warehouse Management Logo'
  @Input()
  link1: string = 'Home'
  @Input()
  privacyLink: string = '/privacy-policy'
  @Input()
  link10: string = 'Login / Sign Up'
  @Input()
  column1Title: string = 'Company'
  @Input()
  termsLink: string = '/terms-of-service'
  @Input()
  link3: string = 'Contact Us'
  @Input()
  link2: string = 'About Us'
  @Input()
  socialLinkTitleCategory: string = 'Connect with Us'
  constructor() {}
}
