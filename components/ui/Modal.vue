<template>
  <transition name="modal">
    <div class="modal-mask" v-if="sessionsData.length">
      <div class="modal-wrapper" @click="close">
        <div class="modal-container">

          <div class="modal-header">
            <h2>Book a ticket</h2>
          </div>

          <div class="modal-body">
            <slot></slot>
          </div>

          <div class="modal-footer">
            <button class="modal-default-button" @click="$emit('close')">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {

    },
    data () {
      return {

      }
    },
    created () {
    },
    computed: {

    },
    methods: {
      close (e) {
        if (e.target.className === 'modal-wrapper') {
          this.$emit('close')
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
@import '~/assets/_variables.scss';
.modal-mask {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  margin: 0px auto;
  padding: 20px 0px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  max-width: 1100px;
  width: 90%;
  @media screen and (max-width: $desctop-m) {
    max-width: 700px;
  }
  @media screen and (max-width: $tablet) {
    max-width: 400px;
  }
  @media screen and (max-width: $mobile-l) {
    max-width: 320px;
  }
}

.modal-header {
  padding: 0 20px;
  display: flex;
}
.modal__go-back {
  margin-right: 20px;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
}
.modal-body {
  margin: 20px 0;
  overflow: auto;
}

.modal-footer {
  padding: 0px 20px;
}

.modal-default-button {
  float: right;
  cursor: pointer;
}
</style>