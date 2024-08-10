import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-testimonial',
  templateUrl: 'testimonial.component.html',
  styleUrls: ['testimonial.component.css'],
})
export class Testimonial {
  @Input()
  author2Position: string = 'Organic Dairy Farmer'
  @Input()
  author1Position: string = 'Owner of Farm Fresh Produce'
  @Input()
  author3Alt: string = 'Image of Tom Johnson'
  @Input()
  author1Name: string = 'John Farmer'
  @Input()
  author1Src: string =
    'https://images.unsplash.com/reserve/9nfsYstTyWEJKScHr3MV_IMG_6450.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxMXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author3Name: string = 'Tom Johnson'
  @Input()
  review2: string =
    "Listing surplus supplies for sale on this platform has been a game-changer for my business. I've connected with buyers quickly and efficiently."
  @Input()
  author2Name: string = 'Mary Smith'
  @Input()
  author4Position: string = 'Livestock Farmer'
  @Input()
  author4Name: string = 'Sarah Lee'
  @Input()
  author4Src: string =
    'https://images.unsplash.com/photo-1472066719480-ecc7314ed065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxMXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author1Alt: string = 'Image of John Farmer'
  @Input()
  author2Src: string =
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxMXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author3Src: string =
    'https://images.unsplash.com/photo-1517916358207-1e49f666e851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxMnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author2Alt: string = 'Image of Mary Smith'
  @Input()
  author4Alt: string = 'Image of Sarah Lee'
  @Input()
  content1: string =
    "This platform has revolutionized how we manage our warehouse supplies. It's user-friendly and has helped us optimize our inventory like never before."
  @Input()
  author3Position: string = 'Wheat Farmer'
  @Input()
  review1: string =
    'I highly recommend this website to all farmers looking to streamline their supply management.'
  @Input()
  heading1: string = 'Testimonials'
  @Input()
  review3: string =
    'The detailed tracking features have helped me keep a close eye on my inventory levels, allowing me to make informed decisions for my farm.'
  @Input()
  review4: string =
    'Selling excess supplies at fair market prices has significantly increased our profitability. Thank you for creating such a valuable tool.'
  constructor() {}
}
