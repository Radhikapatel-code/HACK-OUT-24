import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-cta',
  templateUrl: 'cta.component.html',
  styleUrls: ['cta.component.css'],
})
export class CTA {
  @Input()
  heading1: string = 'Start Managing Your Farm Supplies Efficiently'
  @Input()
  content1: string =
    'Track, monitor, and sell your agricultural products with ease on our platform.'
  @Input()
  action1: string = 'Sign Up Now'
  constructor() {}
}
