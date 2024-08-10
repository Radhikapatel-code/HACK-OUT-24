import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text01 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card">
                <div className="testimonial-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image"
                  />
                  <div className="testimonial-container03">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text04 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container05">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text07 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container07">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text10 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container09">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text13 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author2Position: 'Organic Dairy Farmer',
  author1Position: 'Owner of Farm Fresh Produce',
  author3Alt: 'Image of Tom Johnson',
  author1Name: 'John Farmer',
  author1Src:
    'https://images.unsplash.com/reserve/9nfsYstTyWEJKScHr3MV_IMG_6450.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxMXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: 'Tom Johnson',
  review2:
    "Listing surplus supplies for sale on this platform has been a game-changer for my business. I've connected with buyers quickly and efficiently.",
  author2Name: 'Mary Smith',
  author4Position: 'Livestock Farmer',
  author4Name: 'Sarah Lee',
  author4Src:
    'https://images.unsplash.com/photo-1472066719480-ecc7314ed065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxMXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'Image of John Farmer',
  author2Src:
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxMXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1517916358207-1e49f666e851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxMnw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Image of Mary Smith',
  author4Alt: 'Image of Sarah Lee',
  content1:
    "This platform has revolutionized how we manage our warehouse supplies. It's user-friendly and has helped us optimize our inventory like never before.",
  author3Position: 'Wheat Farmer',
  review1:
    'I highly recommend this website to all farmers looking to streamline their supply management.',
  heading1: 'Testimonials',
  review3:
    'The detailed tracking features have helped me keep a close eye on my inventory levels, allowing me to make informed decisions for my farm.',
  review4:
    'Selling excess supplies at fair market prices has significantly increased our profitability. Thank you for creating such a valuable tool.',
}

Testimonial.propTypes = {
  author2Position: PropTypes.string,
  author1Position: PropTypes.string,
  author3Alt: PropTypes.string,
  author1Name: PropTypes.string,
  author1Src: PropTypes.string,
  author3Name: PropTypes.string,
  review2: PropTypes.string,
  author2Name: PropTypes.string,
  author4Position: PropTypes.string,
  author4Name: PropTypes.string,
  author4Src: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author3Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  content1: PropTypes.string,
  author3Position: PropTypes.string,
  review1: PropTypes.string,
  heading1: PropTypes.string,
  review3: PropTypes.string,
  review4: PropTypes.string,
}

export default Testimonial
