import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-steps',
  templateUrl: 'steps.component.html',
  styleUrls: ['steps.component.css'],
})
export class Steps {
  @Input()
  step1Description: string =
    'Create a user account on the platform to access the warehouse management features.'
  @Input()
  step3Description: string =
    'Monitor the quantities of different agricultural supplies in real-time to avoid shortages or overstock.'
  @Input()
  step2Title: string = 'Add Warehouse Details'
  @Input()
  step2Description: string =
    'Input information about your warehouse, including location, capacity, and types of products stored.'
  @Input()
  step1Title: string = 'Sign Up for an Account'
  @Input()
  step3Title: string = 'Track Inventory Levels'
  @Input()
  step4Description: string =
    'Easily list any excess supplies for sale on the platform at competitive prices to connect with potential buyers.'
  @Input()
  step4Title: string = 'List Surplus Supplies for Sale'
  constructor() {}
}
