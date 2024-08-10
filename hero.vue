<template>
  <div class="hero-header78">
    <div class="hero-column thq-section-padding thq-section-max-width">
      <div class="hero-content">
        <h1 class="hero-text thq-heading-1">{{ heading1 }}</h1>
        <p class="hero-text1 thq-body-large">{{ content1 }}</p>
      </div>
      <div class="hero-actions">
        <button class="thq-button-filled hero-button">
          <span class="thq-body-small">{{ action1 }}</span>
        </button>
        <button class="thq-button-outline hero-button1">
          <span class="thq-body-small">{{ action2 }}</span>
        </button>
      </div>
    </div>
    <div class="hero-content1">
      <div
        class="hero-row-container thq-animated-group-container-horizontal thq-mask-image-horizontal"
      >
        <div class="thq-animated-group-horizontal">
          <img
            :alt="image1Alt"
            :src="image1Src"
            class="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image2Alt"
            :src="image2Src"
            class="hero-placeholder-image01 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image3Alt"
            :src="image3Src"
            class="hero-placeholder-image02 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image4Alt"
            :src="image4Src"
            class="hero-placeholder-image03 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image5Alt"
            :src="image5Src"
            class="hero-placeholder-image04 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image6Alt"
            :src="image6Src"
            class="hero-placeholder-image05 thq-img-scale thq-img-ratio-1-1"
          />
        </div>
        <div class="thq-animated-group-horizontal">
          <img
            :alt="image1Alt"
            :src="image1Src"
            class="hero-placeholder-image06 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image2Alt"
            :src="image2Src"
            class="hero-placeholder-image07 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image3Alt"
            :src="image3Src"
            class="hero-placeholder-image08 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image4Alt"
            :src="image4Src"
            class="hero-placeholder-image09 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image5Alt"
            :src="image5Src"
            class="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            alt="Hero Image"
            src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
            class="hero-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
          />
        </div>
      </div>
      <div
        class="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal"
      >
        <div class="thq-animated-group-horizontal-reverse">
          <img
            :alt="image7Alt"
            :src="image7Src"
            class="hero-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image8Alt"
            :src="image8Src"
            class="hero-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image9Alt"
            :src="image9Src"
            class="hero-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image10Alt"
            :src="image10Src"
            class="hero-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image11Alt"
            :src="image11Src"
            class="hero-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image12Alt"
            :src="image12Src"
            class="hero-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
          />
        </div>
        <div class="thq-animated-group-horizontal-reverse">
          <img
            :alt="image7Alt"
            :src="image7Src"
            class="hero-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image8Alt"
            :src="image8Src"
            class="hero-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image9Alt"
            :src="image9Src"
            class="hero-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image10Alt"
            :src="image10Src"
            class="hero-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image11Alt"
            :src="image11Src"
            class="hero-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            alt="Hero Image"
            src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
            class="hero-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
          />
        </div>
      </div>
    </div>
    <div>
      <div class="hero-container1">
        <DangerousHTML
          html="<style>
    @keyframes scroll-x {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(calc(-100% - 16px));
      }
    }
  
    @keyframes scroll-y {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(calc(-100% - 16px));
      }
    }
  </style>
  "
        ></DangerousHTML>
      </div>
    </div>
  </div>
</template>

<script>
import DangerousHTML from 'dangerous-html/dist/vue/lib.js'

export default {
  name: 'Hero',
  props: {
    image3Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1505455184862-554165e5f6ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxMXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image8Alt: {
      type: String,
      default: 'Hero Image',
    },
    image2Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1444312645910-ffa973656eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxMnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image6Alt: {
      type: String,
      default: 'Hero Image',
    },
    image11Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1491911923017-19f90d8d7f83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxM3w&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image5Alt: {
      type: String,
      default: 'Hero Image',
    },
    image1Alt: {
      type: String,
      default: 'Farm Supplies Management',
    },
    image7Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1524671470795-c7d181eca26e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxNHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image7Alt: {
      type: String,
      default: 'Hero Image',
    },
    image12Alt: {
      type: String,
      default: 'Hero Image',
    },
    image2Alt: {
      type: String,
      default: 'Hero Image',
    },
    image6Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1459486208975-05d4c74eff9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxNHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image12Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1510377971269-d723c13cc478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxNXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image3Alt: {
      type: String,
      default: 'Hero Image',
    },
    image9Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1551356522-ec7d957e3743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxNXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image11Alt: {
      type: String,
      default: 'Hero Image',
    },
    action2: {
      type: String,
      default: 'Secondary action',
    },
    action1: {
      type: String,
      default: 'Main action',
    },
    image8Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1495837174058-628aafc7d610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxNXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image5Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1424115087662-5845efc6b366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxNnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image4Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1485846299386-f367c81034d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxNnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image10Alt: {
      type: String,
      default: 'Hero Image',
    },
    image4Alt: {
      type: String,
      default: 'Hero Image',
    },
    heading1: {
      type: String,
      default: 'Efficiently Manage Your Farm Supplies',
    },
    content1: {
      type: String,
      default:
        'Track and monitor your agricultural products and materials stored in warehouses with ease. Optimize storage, maximize profitability, and sell surplus supplies at competitive prices.',
    },
    image10Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1590122696319-152756c73526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxNnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image9Alt: {
      type: String,
      default: 'Hero Image',
    },
    image1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1458501534264-7d326fa0ca04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzIxNzMxN3w&ixlib=rb-4.0.3&q=80&w=1080',
    },
  },
  components: {
    DangerousHTML,
  },
}
</script>

<style scoped>
.hero-header78 {
  gap: var(--dl-space-space-threeunits);
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.hero-column {
  gap: var(--dl-space-space-oneandhalfunits);
  width: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
}
.hero-content {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.hero-text {
  text-align: center;
}
.hero-text1 {
  text-align: center;
}
.hero-actions {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-unit);
}
.hero-content1 {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.hero-row-container {
  width: 100%;
}
.hero-placeholder-image {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image01 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image02 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image03 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image04 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image05 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image06 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image07 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image08 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image09 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image10 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image11 {
  width: 400px;
  height: 400px;
}
.hero-row-container1 {
  width: 100%;
}
.hero-placeholder-image12 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image13 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image14 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image15 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image16 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image17 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image18 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image19 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image20 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image21 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image22 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image23 {
  width: 400px;
  height: 400px;
}
.hero-container1 {
  display: contents;
}
@media(max-width: 767px) {
  .hero-content1 {
    width: 100%;
  }
}
@media(max-width: 479px) {
  .hero-actions {
    width: 100%;
    flex-direction: column;
  }
  .hero-button {
    width: 100%;
  }
  .hero-button1 {
    width: 100%;
  }
}
</style>
