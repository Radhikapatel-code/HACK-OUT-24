import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-features1',
  templateUrl: 'features1.component.html',
  styleUrls: ['features1.component.css'],
})
export class Features1 {
  @Input()
  feature1ImgAlt: string = 'Inventory Management Image Alt'
  @Input()
  feature3Description: string =
    'List surplus supplies for sale at competitive prices, connecting with potential buyers.'
  @Input()
  feature3Title: string = 'Surplus Sales'
  @Input()
  feature3ImgSrc: string =
    'https://images.unsplash.com/photo-1503919275948-1f118d8ecf0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxMnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature1ImgSrc: string =
    'https://images.unsplash.com/photo-1505231509341-30534a9372ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxM3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature2Description: string =
    'Monitor inventory levels with detailed tracking of various agricultural products and materials.'
  @Input()
  feature1Title: string = 'Inventory Management'
  @Input()
  feature3ImgAlt: string = 'Surplus Sales Image Alt'
  @Input()
  feature1Description: string =
    'Efficiently track and manage all your agricultural supplies stored in warehouses.'
  @Input()
  feature2ImgSrc: string =
    'https://images.unsplash.com/photo-1496395650962-374cae58ca8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxNHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature2ImgAlt: string = 'Detailed Tracking Image Alt'
  @Input()
  feature2Title: string = 'Detailed Tracking'
  activeTab: number = 0
  constructor() {}
}
