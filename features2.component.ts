import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-features2',
  templateUrl: 'features2.component.html',
  styleUrls: ['features2.component.css'],
})
export class Features2 {
  @Input()
  feature3Description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
  @Input()
  feature1ImgAlt: string = 'feature 1'
  @Input()
  feature1Description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
  @Input()
  feature3ImgAlt: string = 'image'
  @Input()
  feature2Title: string = 'Real-Time Inventory Tracking'
  @Input()
  feature1Title: string = 'Feature #1'
  @Input()
  feature1ImgSrc: string =
    'https://images.unsplash.com/photo-1487646709898-58d3c6e8d886?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxMnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature3ImgSrc: string =
    'https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxM3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature2Description: string =
    'Efficiently monitor and manage your supplies with real-time updates on inventory levels and stock movements.'
  @Input()
  feature3Title: string = 'Feature #3'
  @Input()
  feature2ImgAlt: string = 'Real-Time Inventory Tracking Image'
  @Input()
  feature2ImgSrc: string =
    'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxNHw&ixlib=rb-4.0.3&q=80&w=1080'
  activeTab: number = 0
  constructor() {}
}
