<template>
  <header class="header">
    <div class="wr header__wr">
      <div class="header__icon-wr">
        <nuxt-link to="/">
          <img src="https://wonder-day.com/wp-content/uploads/2020/10/wonder-day-among-us-21.png" alt="media icon" />
        </nuxt-link>
      </div>
      <nav class="header__menu">
        <div class="header__menu-item-wr">
          <button class="header__faq-btn" @click="openModal">Rules</button>
        </div>
        <div class="header__menu-item-wr">
          <nuxt-link class="header__menu-item" to='/'>Home</nuxt-link>
        </div>
        <div class="header__menu-item-wr">
          <nuxt-link class="header__menu-item" to='/games'>Games</nuxt-link>
          <div class="dropdown">
            <ul class="dropdown__list">
              <li class="dropdown__item">
                <nuxt-link class="dropdown__link" to='/games/spy'>Spy</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    methods: {
      openModal () {
        console.log('open')
      }
    }
  }
</script>

<style lang="scss" scoped>
.header {
  height: 50px;
  background-color: rgba(0, 0, 0, 1);
  &__wr {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__icon-wr {
    width: 40px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__menu {
    display: flex;
  }
  &__menu-item-wr {
    position: relative;
    margin-right: 10px;
  }
  &__menu-item {
    text-decoration: none;
    color: white;
    &.nuxt-link-exact-active {
      color: red;
    }
    &:hover {
      & + .dropdown{
        opacity: 1;
        visibility: visible;
        transition: all .3s;
      }
    }
  }
  .dropdown {
    position: absolute;
    left: 50%;
    top: 100%;
    background: #fff;
    box-shadow: 20px 20px 70px rgb(208 208 217 / 60%);
    border-radius: 10px;
    padding: 30px;
    transition: none;
    opacity: 0;
    visibility: hidden;
    transform: translateX(-50%);
    z-index: 3;
    transition: 0.3s;
    &:hover {
      opacity: 1;
      visibility: visible;
      transition: all .3s;
    }
  }
  &__faq-btn {
    background: transparent;
    border: none;
    color: red;
    padding: 0;
    cursor: pointer;
  }
}
</style>