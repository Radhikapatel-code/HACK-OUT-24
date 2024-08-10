<template>
  <div class="pricing-pricing23 thq-section-padding">
    <div class="pricing-max-width thq-section-max-width">
      <div class="pricing-section-title">
        <span class="pricing-text thq-body-small">{{ content1 }}</span>
        <div class="pricing-content">
          <h2 class="pricing-text01 thq-heading-2">{{ heading1 }}</h2>
          <p class="pricing-text02 thq-body-large">{{ content2 }}</p>
        </div>
      </div>
      <div class="pricing-tabs">
        <button
          @click="isMonthly = true"
          v-if="isMonthly"
          class="pricing-button thq-button-animated thq-button-filled"
        >
          <span class="thq-body-small">Monthly</span>
        </button>
        <button
          @click="isMonthly = true"
          v-if="!isMonthly"
          class="pricing-button01 thq-button-outline thq-button-animated"
        >
          <span class="thq-body-small">Monthly</span>
        </button>
        <button
          @click="isMonthly = false"
          v-if="!isMonthly"
          class="pricing-button02 thq-button-animated thq-button-filled"
        >
          <span class="thq-body-small">Yearly</span>
        </button>
        <button
          @click="isMonthly = false"
          v-if="isMonthly"
          class="pricing-button03 thq-button-outline thq-button-animated"
        >
          <span class="thq-body-small">Yearly</span>
        </button>
      </div>
      <div v-if="isMonthly" class="pricing-container">
        <div class="pricing-column thq-card">
          <div class="pricing-price">
            <div class="pricing-price01">
              <p class="pricing-text07 thq-body-large">{{ plan1 }}</p>
              <h3 class="pricing-text08 thq-heading-3">{{ plan1Price }}</h3>
              <p class="thq-body-large">{{ plan1Yearly }}</p>
            </div>
            <div class="pricing-list">
              <div class="pricing-list-item">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan1Feature1 }}</span>
              </div>
              <div class="pricing-list-item01">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan1Feature2 }}</span>
              </div>
              <div class="pricing-list-item02">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan1Feature3 }}</span>
              </div>
            </div>
          </div>
          <button class="pricing-button04 thq-button-outline thq-button-animated">
            <span class="thq-body-small">{{ plan1Action }}</span>
          </button>
        </div>
        <div class="pricing-column1 thq-card">
          <div class="pricing-price02">
            <div class="pricing-price03">
              <p class="pricing-text14 thq-body-large">{{ plan2 }}</p>
              <h3 class="pricing-text15 thq-heading-3">{{ plan2Price }}</h3>
              <p class="thq-body-large">{{ plan2Yearly }}</p>
            </div>
            <div class="pricing-list1">
              <div class="pricing-list-item03">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan2Feature1 }}</span>
              </div>
              <div class="pricing-list-item04">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan2Feature2 }}</span>
              </div>
              <div class="pricing-list-item05">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan2Feature3 }}</span>
              </div>
              <div class="pricing-list-item06">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan2Feature4 }}</span>
              </div>
            </div>
          </div>
          <button class="pricing-button05 thq-button-animated thq-button-filled">
            <span class="thq-body-small">{{ plan2Action }}</span>
          </button>
        </div>
        <div class="pricing-column2 thq-card">
          <div class="pricing-price04">
            <div class="pricing-price05">
              <p class="pricing-text22 thq-body-large">{{ plan3 }}</p>
              <h3 class="pricing-text23 thq-heading-3">{{ plan3Price }}</h3>
              <p class="thq-body-large">{{ plan3Yearly }}</p>
            </div>
            <div class="pricing-list2">
              <div class="pricing-list-item07">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan3Feature1 }}</span>
              </div>
              <div class="pricing-list-item08">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan3Feature2 }}</span>
              </div>
              <div class="pricing-list-item09">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan3Feature3 }}</span>
              </div>
              <div class="pricing-list-item10">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan3Feature4 }}</span>
              </div>
              <div class="pricing-list-item11">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan3Feature5 }}</span>
              </div>
            </div>
          </div>
          <button class="pricing-button06 thq-button-animated thq-button-filled">
            <span class="thq-body-small">{{ plan3Action }}</span>
          </button>
        </div>
      </div>
      <div v-if="!isMonthly" class="pricing-container1">
        <div class="pricing-column3 thq-card">
          <div class="pricing-price06">
            <div class="pricing-price07">
              <span class="pricing-text31 thq-body-large">{{ plan11 }}</span>
              <h3 class="pricing-text32 thq-heading-3">{{ plan1Price1 }}</h3>
              <span class="thq-body-large">{{ plan1Yearly1 }}</span>
            </div>
            <div class="pricing-list3">
              <div class="pricing-list-item12">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan1Feature11 }}</span>
              </div>
              <div class="pricing-list-item13">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan1Feature21 }}</span>
              </div>
              <div class="pricing-list-item14">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan1Feature31 }}</span>
              </div>
            </div>
          </div>
          <button class="pricing-button07 thq-button-outline thq-button-animated">
            <span class="thq-body-small">{{ plan1Action1 }}</span>
          </button>
        </div>
        <div class="pricing-column4 thq-card">
          <div class="pricing-price08">
            <div class="pricing-price09">
              <span class="pricing-text38 thq-body-large">{{ plan21 }}</span>
              <h3 class="pricing-text39 thq-heading-3">{{ plan2Price1 }}</h3>
              <span class="thq-body-large">{{ plan2Yearly1 }}</span>
            </div>
            <div class="pricing-list4">
              <div class="pricing-list-item15">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan2Feature11 }}</span>
              </div>
              <div class="pricing-list-item16">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan2Feature21 }}</span>
              </div>
              <div class="pricing-list-item17">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan2Feature31 }}</span>
              </div>
              <div class="pricing-list-item18">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan2Feature41 }}</span>
              </div>
            </div>
          </div>
          <button class="pricing-button08 thq-button-animated thq-button-filled">
            <span class="thq-body-small">{{ plan2Action1 }}</span>
          </button>
        </div>
        <div class="pricing-column5 thq-card">
          <div class="pricing-price10">
            <div class="pricing-price11">
              <span class="pricing-text46 thq-body-large">{{ plan31 }}</span>
              <h3 class="pricing-text47 thq-heading-3">{{ plan3Price1 }}</h3>
              <span class="thq-body-large">{{ plan3Yearly1 }}</span>
            </div>
            <div class="pricing-list5">
              <div class="pricing-list-item19">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan3Feature11 }}</span>
              </div>
              <div class="pricing-list-item20">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan3Feature21 }}</span>
              </div>
              <div class="pricing-list-item21">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan3Feature31 }}</span>
              </div>
              <div class="pricing-list-item22">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan3Feature41 }}</span>
              </div>
              <div class="pricing-list-item23">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan3Feature51 }}</span>
              </div>
            </div>
          </div>
          <button class="pricing-button09 thq-button-animated thq-button-filled">
            <span class="thq-body-small">{{ plan3Action1 }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pricing',
  props: {
    plan3Price: {
      type: String,
      default: '$59.99/month',
    },
    plan3Action: {
      type: String,
      default: 'Sign up now',
    },
    plan11: {
      type: String,
      default: 'Basic plan',
    },
    plan1Action: {
      type: String,
      default: 'Sign up now',
    },
    plan31: {
      type: String,
      default: 'Enterprise plan',
    },
    plan3Feature41: {
      type: String,
      default: 'Feature text goes here',
    },
    plan1Feature2: {
      type: String,
      default: 'Track inventory levels in real-time',
    },
    plan2Feature11: {
      type: String,
      default: 'Feature text goes here',
    },
    plan3Feature51: {
      type: String,
      default: 'Feature text goes here',
    },
    plan2Feature41: {
      type: String,
      default: 'Feature text goes here',
    },
    plan2Feature2: {
      type: String,
      default: 'Advanced analytics and reporting tools',
    },
    plan3Feature21: {
      type: String,
      default: 'Feature text goes here',
    },
    plan2Feature4: {
      type: String,
      default: 'Feature text goes here',
    },
    plan2Yearly: {
      type: String,
      default: 'or $299 yearly',
    },
    plan1Action1: {
      type: String,
      default: 'Get started',
    },
    plan2Action: {
      type: String,
      default: 'Sign up now',
    },
    plan3Feature1: {
      type: String,
      default: 'Unlimited monitoring of agricultural products',
    },
    plan2Feature3: {
      type: String,
      default: 'Automated notifications for low inventory levels',
    },
    plan1Price1: {
      type: String,
      default: '$200/yr',
    },
    plan2: {
      type: String,
      default: 'Business plan',
    },
    plan2Feature21: {
      type: String,
      default: 'Feature text goes here',
    },
    plan2Action1: {
      type: String,
      default: 'Get started',
    },
    plan3Feature2: {
      type: String,
      default: 'Customizable alerts and notifications',
    },
    content1: {
      type: String,
      default: 'Choose the perfect plan for you',
    },
    plan2Feature1: {
      type: String,
      default: 'Monitor up to 500 different types of agricultural products',
    },
    heading1: {
      type: String,
      default: 'Pricing plan',
    },
    plan3Feature31: {
      type: String,
      default: 'Feature text goes here',
    },
    plan1: {
      type: String,
      default: 'Basic plan',
    },
    plan21: {
      type: String,
      default: 'Business plan',
    },
    plan1Feature11: {
      type: String,
      default: 'Feature text goes here',
    },
    plan1Feature21: {
      type: String,
      default: 'Feature text goes here',
    },
    plan3Feature5: {
      type: String,
      default: 'Feature text goes here',
    },
    plan2Yearly1: {
      type: String,
      default: 'or $29 monthly',
    },
    plan2Price: {
      type: String,
      default: '$39.99/month',
    },
    plan3Yearly1: {
      type: String,
      default: 'or $49 monthly',
    },
    plan2Feature31: {
      type: String,
      default: 'Feature text goes here',
    },
    plan3Feature11: {
      type: String,
      default: 'Feature text goes here',
    },
    plan1Yearly1: {
      type: String,
      default: 'or $20 monthly',
    },
    plan2Price1: {
      type: String,
      default: '$299/yr',
    },
    plan3Yearly: {
      type: String,
      default: 'or $499 yearly',
    },
    plan3Feature4: {
      type: String,
      default: 'Feature text goes here',
    },
    plan3Price1: {
      type: String,
      default: '$499/yr',
    },
    plan1Feature31: {
      type: String,
      default: 'Feature text goes here',
    },
    plan1Feature3: {
      type: String,
      default: 'List surplus supplies for sale on the platform',
    },
    plan1Yearly: {
      type: String,
      default: 'or $200 yearly',
    },
    plan1Feature1: {
      type: String,
      default: 'Monitor up to 100 different types of agricultural products',
    },
    plan3Feature3: {
      type: String,
      default: 'Priority customer support',
    },
    content2: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    plan3Action1: {
      type: String,
      default: 'Get started',
    },
    plan1Price: {
      type: String,
      default: '$19.99/month',
    },
    plan3: {
      type: String,
      default: 'Enterprise plan',
    },
  },
  data() {
    return {
      isMonthly: true,
    }
  },
}
</script>

<style scoped>
.pricing-pricing23 {
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.pricing-max-width {
  gap: var(--dl-space-space-threeunits);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.pricing-section-title {
  gap: var(--dl-space-space-unit);
  width: 100%;
  display: flex;
  max-width: 800px;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.pricing-text {
  text-align: center;
}
.pricing-content {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  max-width: 800px;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.pricing-text01 {
  text-align: center;
}
.pricing-text02 {
  text-align: center;
}
.pricing-tabs {
  display: flex;
  align-items: flex-start;
}
.pricing-button {
  gap: var(--dl-space-space-halfunit);
  color: var(--dl-color-theme-neutral-light);
  width: 120px;
  height: 60px;
  border-top-left-radius: var(--dl-radius-radius-buttonradius);
  border-top-right-radius: 0;
  border-bottom-left-radius: var(--dl-radius-radius-buttonradius);
  border-bottom-right-radius: 0;
}
.pricing-button01 {
  gap: var(--dl-space-space-halfunit);
  width: 120px;
  height: 60px;
  border-style: solid;
  border-top-left-radius: var(--dl-radius-radius-buttonradius);
  border-top-right-radius: 0;
  border-bottom-left-radius: var(--dl-radius-radius-buttonradius);
  border-bottom-right-radius: 0;
}
.pricing-button02 {
  gap: var(--dl-space-space-halfunit);
  color: var(--dl-color-theme-neutral-light);
  width: 120px;
  height: 60px;
  border-top-left-radius: 0;
  border-top-right-radius: var(--dl-radius-radius-buttonradius);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: var(--dl-radius-radius-buttonradius);
}
.pricing-button03 {
  gap: var(--dl-space-space-halfunit);
  width: 120px;
  height: 60px;
  border-style: solid;
  border-top-left-radius: 0;
  border-top-right-radius: var(--dl-radius-radius-buttonradius);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: var(--dl-radius-radius-buttonradius);
}
.pricing-container {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
.pricing-column {
  gap: var(--dl-space-space-twounits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-color: var(--dl-color-theme-neutral-dark);
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
}
.pricing-price {
  gap: var(--dl-space-space-twounits);
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.pricing-price01 {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.pricing-text07 {
  font-style: normal;
  font-weight: 600;
}
.pricing-text08 {
  font-size: 48px;
}
.pricing-list {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.pricing-list-item {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.pricing-list-item01 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.pricing-list-item02 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.pricing-button04 {
  width: 100%;
}
.pricing-column1 {
  gap: var(--dl-space-space-twounits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-color: var(--dl-color-theme-neutral-dark);
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
  background-color: var(--dl-color-theme-accent1);
}
.pricing-price02 {
  gap: var(--dl-space-space-twounits);
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.pricing-price03 {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.pricing-text14 {
  font-style: normal;
  font-weight: 600;
}
.pricing-text15 {
  font-size: 48px;
}
.pricing-list1 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.pricing-list-item03 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.pricing-list-item04 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.pricing-list-item05 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.pricing-list-item06 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.pricing-button05 {
  width: 100%;
}
.pricing-column2 {
  gap: var(--dl-space-space-twounits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-shrink: 0;
  border-color: var(--dl-color-theme-neutral-dark);
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
  background-color: var(--dl-color-theme-accent2);
}
.pricing-price04 {
  gap: var(--dl-space-space-twounits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.pricing-price05 {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.pricing-text22 {
  font-style: normal;
  font-weight: 600;
}
.pricing-text23 {
  font-size: 48px;
}
.pricing-list2 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.pricing-list-item07 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.pricing-list-item08 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.pricing-list-item09 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.pricing-list-item10 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.pricing-list-item11 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.pricing-button06 {
  width: 100%;
}
.pricing-container1 {
  gap: 32px;
  width: 100%;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
.pricing-column3 {
  gap: var(--dl-space-space-twounits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-color: var(--dl-color-theme-neutral-dark);
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
}
.pricing-price06 {
  gap: var(--dl-space-space-twounits);
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.pricing-price07 {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.pricing-text31 {
  font-style: normal;
  font-weight: 600;
}
.pricing-text32 {
  font-size: 48px;
}
.pricing-list3 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.pricing-list-item12 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.pricing-list-item13 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.pricing-list-item14 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.pricing-button07 {
  width: 100%;
}
.pricing-column4 {
  gap: var(--dl-space-space-twounits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-color: var(--dl-color-theme-neutral-dark);
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
  background-color: var(--dl-color-theme-accent1);
}
.pricing-price08 {
  gap: var(--dl-space-space-twounits);
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.pricing-price09 {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.pricing-text38 {
  font-style: normal;
  font-weight: 600;
}
.pricing-text39 {
  font-size: 48px;
}
.pricing-list4 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.pricing-list-item15 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.pricing-list-item16 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.pricing-list-item17 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.pricing-list-item18 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.pricing-button08 {
  width: 100%;
}
.pricing-column5 {
  gap: var(--dl-space-space-twounits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-shrink: 0;
  border-color: var(--dl-color-theme-neutral-dark);
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
  background-color: var(--dl-color-theme-accent2);
}
.pricing-price10 {
  gap: var(--dl-space-space-twounits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.pricing-price11 {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.pricing-text46 {
  font-style: normal;
  font-weight: 600;
}
.pricing-text47 {
  font-size: 48px;
}
.pricing-list5 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.pricing-list-item19 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.pricing-list-item20 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.pricing-list-item21 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.pricing-list-item22 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.pricing-list-item23 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.pricing-button09 {
  width: 100%;
}
@media(max-width: 991px) {
  .pricing-container {
    flex-direction: column;
  }
  .pricing-column2 {
    width: 100%;
  }
  .pricing-container1 {
    flex-direction: column;
  }
  .pricing-column5 {
    width: 100%;
  }
}
@media(max-width: 479px) {
  .pricing-max-width {
    gap: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
