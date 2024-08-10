import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { CTA } from './cta/cta.component'
import { Navbar } from './navbar/navbar.component'
import { Contact } from './contact/contact.component'
import { Steps } from './steps/steps.component'
import { Features1 } from './features1/features1.component'
import { Features2 } from './features2/features2.component'
import { Pricing } from './pricing/pricing.component'
import { Footer } from './footer/footer.component'
import { Testimonial } from './testimonial/testimonial.component'
import { Hero } from './hero/hero.component'

@NgModule({
  declarations: [
    CTA,
    Navbar,
    Contact,
    Steps,
    Features1,
    Features2,
    Pricing,
    Footer,
    Testimonial,
    Hero,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CTA,
    Navbar,
    Contact,
    Steps,
    Features1,
    Features2,
    Pricing,
    Footer,
    Testimonial,
    Hero,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
