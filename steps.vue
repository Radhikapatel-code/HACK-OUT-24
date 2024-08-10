<template>
  <div class="steps-container thq-section-padding">
    <div class="steps-max-width thq-section-max-width">
      <div class="steps-container1 thq-grid-2">
        <div class="steps-section-header">
          <h2 class="thq-heading-2">Discover the Power of Our Products</h2>
          <p class="thq-body-large">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis viverra
            ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
          <div class="steps-actions">
            <button class="thq-button-animated thq-button-filled steps-button">
              <span class="thq-body-small">Main action</span>
            </button>
          </div>
        </div>
        <div class="steps-container2">
          <div class="steps-container3 thq-card">
            <h2 class="thq-heading-2">{{ step1Title }}</h2>
            <span class="steps-text04 thq-body-small">
              {{ step1Description }}
            </span>
            <label class="steps-text05 thq-heading-3">01</label>
          </div>
          <div class="steps-container4 thq-card">
            <h2 class="thq-heading-2">{{ step2Title }}</h2>
            <span class="steps-text07 thq-body-small">
              {{ step2Description }}
            </span>
            <label class="steps-text08 thq-heading-3">02</label>
          </div>
          <div class="steps-container5 thq-card">
            <h2 class="thq-heading-2">{{ step3Title }}</h2>
            <span class="steps-text10 thq-body-small">
              {{ step3Description }}
            </span>
            <label class="steps-text11 thq-heading-3">03</label>
          </div>
          <div class="steps-container6 thq-card">
            <h2 class="thq-heading-2">{{ step4Title }}</h2>
            <span class="steps-text13 thq-body-small">
              {{ step4Description }}
            </span>
            <label class="steps-text14 thq-heading-3">04</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Steps',
  props: {
    step1Description: {
      type: String,
      default:
        'Create a user account on the platform to access the warehouse management features.',
    },
    step3Description: {
      type: String,
      default:
        'Monitor the quantities of different agricultural supplies in real-time to avoid shortages or overstock.',
    },
    step2Title: {
      type: String,
      default: 'Add Warehouse Details',
    },
    step2Description: {
      type: String,
      default:
        'Input information about your warehouse, including location, capacity, and types of products stored.',
    },
    step1Title: {
      type: String,
      default: 'Sign Up for an Account',
    },
    step3Title: {
      type: String,
      default: 'Track Inventory Levels',
    },
    step4Description: {
      type: String,
      default:
        'Easily list any excess supplies for sale on the platform at competitive prices to connect with potential buyers.',
    },
    step4Title: {
      type: String,
      default: 'List Surplus Supplies for Sale',
    },
  },
}
</script>

<style scoped>
.steps-container {
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.steps-max-width {
  gap: var(--dl-space-space-fourunits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.steps-container1 {
  align-items: start;
}
.steps-section-header {
  gap: var(--dl-space-space-oneandhalfunits);
  top: 10%;
  display: flex;
  position: sticky;
  align-items: flex-start;
  flex-direction: column;
}
.steps-actions {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: flex-start;
}
.steps-container2 {
  grid-area: span 1/span 1/span 1/span 1;
}
.steps-container3 {
  top: 10%;
  position: sticky;
  transform: rotate(-2deg);
  margin-bottom: var(--dl-space-space-twounits);
  background-color: var(--dl-color-theme-accent1);
}
.steps-text04 {
  text-align: center;
}
.steps-text05 {
  top: var(--dl-space-space-unit);
  right: var(--dl-space-space-unit);
  position: absolute;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
}
.steps-container4 {
  top: 10%;
  position: sticky;
  transform: rotate(2deg);
  margin-bottom: var(--dl-space-space-twounits);
  background-color: var(--dl-color-theme-accent2);
}
.steps-text07 {
  text-align: center;
}
.steps-text08 {
  top: var(--dl-space-space-unit);
  right: var(--dl-space-space-unit);
  position: absolute;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
}
.steps-container5 {
  top: 10%;
  position: sticky;
  transform: rotate(-2deg);
  margin-bottom: var(--dl-space-space-twounits);
  background-color: var(--dl-color-theme-accent1);
}
.steps-text10 {
  text-align: center;
}
.steps-text11 {
  top: var(--dl-space-space-unit);
  right: var(--dl-space-space-unit);
  position: absolute;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
}
.steps-container6 {
  top: 10%;
  position: sticky;
  transform: rotate(2deg);
  background-color: var(--dl-color-theme-accent2);
}
.steps-text13 {
  text-align: center;
}
.steps-text14 {
  top: var(--dl-space-space-unit);
  right: var(--dl-space-space-unit);
  position: absolute;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
}
@media(max-width: 991px) {
  .steps-max-width {
    flex-direction: column;
  }
}
@media(max-width: 767px) {
  .steps-section-header {
    position: static;
    margin-bottom: var(--dl-space-space-twounits);
  }
  .steps-actions {
    width: 100%;
    align-self: flex-start;
  }
  .steps-container3 {
    width: 100%;
  }
  .steps-container4 {
    width: 100%;
  }
  .steps-container5 {
    width: 100%;
  }
  .steps-container6 {
    width: 100%;
  }
}
@media(max-width: 479px) {
  .steps-button {
    width: 100%;
  }
}
</style>
