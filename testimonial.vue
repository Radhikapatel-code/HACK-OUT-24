<template>
  <div class="thq-section-padding">
    <div class="testimonial-max-width thq-section-max-width">
      <div class="testimonial-container">
        <h2 class="thq-heading-2">{{ heading1 }}</h2>
        <span class="testimonial-text01 thq-body-small">{{ content1 }}</span>
      </div>
      <div class="thq-grid-2">
        <div class="thq-animated-card-bg-2">
          <div class="thq-animated-card-bg-1">
            <div data-animated="true" class="thq-card testimonial-card">
              <div class="testimonial-container02">
                <img
                  :alt="author1Alt"
                  :src="author1Src"
                  class="testimonial-image"
                />
                <div class="testimonial-container03">
                  <strong class="thq-body-large">{{ author1Name }}</strong>
                  <span class="thq-body-small">{{ author1Position }}</span>
                </div>
              </div>
              <span class="testimonial-text04 thq-body-small">{{ review1 }}</span>
            </div>
          </div>
        </div>
        <div class="thq-animated-card-bg-2">
          <div class="thq-animated-card-bg-1">
            <div data-animated="true" class="thq-card testimonial-card1">
              <div class="testimonial-container04">
                <img
                  :alt="author2Alt"
                  :src="author2Src"
                  class="testimonial-image1"
                />
                <div class="testimonial-container05">
                  <strong class="thq-body-large">{{ author2Name }}</strong>
                  <span class="thq-body-small">{{ author2Position }}</span>
                </div>
              </div>
              <span class="testimonial-text07 thq-body-small">{{ review2 }}</span>
            </div>
          </div>
        </div>
        <div class="thq-animated-card-bg-2">
          <div class="thq-animated-card-bg-1">
            <div data-animated="true" class="thq-card testimonial-card2">
              <div class="testimonial-container06">
                <img
                  :alt="author3Alt"
                  :src="author3Src"
                  class="testimonial-image2"
                />
                <div class="testimonial-container07">
                  <strong class="thq-body-large">{{ author3Name }}</strong>
                  <span class="thq-body-small">{{ author3Position }}</span>
                </div>
              </div>
              <span class="testimonial-text10 thq-body-small">{{ review3 }}</span>
            </div>
          </div>
        </div>
        <div class="thq-animated-card-bg-2">
          <div class="thq-animated-card-bg-1">
            <div data-animated="true" class="thq-card testimonial-card3">
              <div class="testimonial-container08">
                <img
                  :alt="author4Alt"
                  :src="author4Src"
                  class="testimonial-image3"
                />
                <div class="testimonial-container09">
                  <strong class="thq-body-large">{{ author4Name }}</strong>
                  <span class="thq-body-small">{{ author4Position }}</span>
                </div>
              </div>
              <span class="testimonial-text13 thq-body-small">{{ review4 }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testimonial',
  props: {
    author2Position: {
      type: String,
      default: 'Organic Dairy Farmer',
    },
    author1Position: {
      type: String,
      default: 'Owner of Farm Fresh Produce',
    },
    author3Alt: {
      type: String,
      default: 'Image of Tom Johnson',
    },
    author1Name: {
      type: String,
      default: 'John Farmer',
    },
    author1Src: {
      type: String,
      default:
        'https://images.unsplash.com/reserve/9nfsYstTyWEJKScHr3MV_IMG_6450.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxMXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    author3Name: {
      type: String,
      default: 'Tom Johnson',
    },
    review2: {
      type: String,
      default:
        "Listing surplus supplies for sale on this platform has been a game-changer for my business. I've connected with buyers quickly and efficiently.",
    },
    author2Name: {
      type: String,
      default: 'Mary Smith',
    },
    author4Position: {
      type: String,
      default: 'Livestock Farmer',
    },
    author4Name: {
      type: String,
      default: 'Sarah Lee',
    },
    author4Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1472066719480-ecc7314ed065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxMXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    author1Alt: {
      type: String,
      default: 'Image of John Farmer',
    },
    author2Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1469334031218-e382a71b716b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxMXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    author3Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1517916358207-1e49f666e851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxMnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    author2Alt: {
      type: String,
      default: 'Image of Mary Smith',
    },
    author4Alt: {
      type: String,
      default: 'Image of Sarah Lee',
    },
    content1: {
      type: String,
      default:
        "This platform has revolutionized how we manage our warehouse supplies. It's user-friendly and has helped us optimize our inventory like never before.",
    },
    author3Position: {
      type: String,
      default: 'Wheat Farmer',
    },
    review1: {
      type: String,
      default:
        'I highly recommend this website to all farmers looking to streamline their supply management.',
    },
    heading1: {
      type: String,
      default: 'Testimonials',
    },
    review3: {
      type: String,
      default:
        'The detailed tracking features have helped me keep a close eye on my inventory levels, allowing me to make informed decisions for my farm.',
    },
    review4: {
      type: String,
      default:
        'Selling excess supplies at fair market prices has significantly increased our profitability. Thank you for creating such a valuable tool.',
    },
  },
}
</script>

<style scoped>
.testimonial-max-width {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.testimonial-container {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: 600px;
  align-items: center;
  margin-bottom: var(--dl-space-space-fourunits);
  flex-direction: column;
}
.testimonial-text01 {
  text-align: center;
}
.testimonial-container02 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.testimonial-image {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.testimonial-container03 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.testimonial-text04 {
  text-align: left;
}
.testimonial-container04 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.testimonial-image1 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.testimonial-container05 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.testimonial-text07 {
  text-align: left;
}
.testimonial-container06 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.testimonial-image2 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.testimonial-container07 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.testimonial-text10 {
  text-align: left;
}
.testimonial-container08 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.testimonial-image3 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.testimonial-container09 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.testimonial-text13 {
  text-align: left;
}
@media(max-width: 991px) {
  .testimonial-container {
    margin-bottom: var(--dl-space-space-threeunits);
  }
}
@media(max-width: 767px) {
  .testimonial-container {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .testimonial-card {
    width: 100%;
  }
  .testimonial-card1 {
    width: 100%;
  }
  .testimonial-card2 {
    width: 100%;
  }
  .testimonial-card3 {
    width: 100%;
  }
}
</style>
