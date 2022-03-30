<template>
  <div class="curriculum">
    <header class="header">
      <h1 class="header__title">Rocío Poza Tejeda</h1>
      <h2 class="header__subtitle">Front end developer</h2>
      <ul class="header__list">
        <li v-for="(item, idx) in contactInfo" :key="`item--${idx}`" class="header__item">
          <component :is="item.link ? 'a' : 'div'" :href="item.link" target="_blank">
            <i :class="['header__item__icon', 'icon', item.icon, `header__item__icon--${item.name}`]"></i>
            <p class="header__item__label">{{item.label}}</p>
            <i v-if="item.link" class="icon icon-new-tab header__item__link"></i>
          </component>
        </li>
      </ul>
      <img class="header__image" src="../assets/images/rocio_poza_portrait.jpg" alt="Foto Rocío Poza">
    </header>
    <Dropdown
      title="Experiencia laboral"
      :list="experienceInfo"
    ></Dropdown>
    <Dropdown
      title="Experiencia laboral"
      :list="experienceInfo"
    ></Dropdown>
    <Dropdown
      title="Experiencia laboral"
      :list="experienceInfo"
    ></Dropdown>
    <Dropdown
      title="Experiencia laboral"
      :list="experienceInfo"
    ></Dropdown>
  </div>
</template>

<script>
import Dropdown from '@/components/Dropdown'

export default {
  name: 'Curriculum',
  components: {
    Dropdown
  },
  data() {
    return {
      contactInfo: [
        {
          name: 'location',
          label: 'Madrid',
          icon: 'icon-location',
        },
        {
          name: 'phone',
          label: '659 743 684',
          icon: 'icon-phone',
          link: 'tel://659743684'
        },
        {
          name: 'email',
          label: 'rocio.poza.tejeda@gmail.com',
          icon: 'icon-mail',
          link: 'mailto://rocio.poza.tejeda@gmail.com'
        },
        {
          name: 'github',
          label: 'rociopozatejeda',
          icon: 'icon-github',
          link: 'https://github.com/PozaTR'
        },
        {
          name: 'twitter',
          label: 'PozaTR',
          icon: 'icon-twitter',
          link: 'https://twitter.com/TrPoza'
        },
        {
          name: 'linkedin',
          label: 'TrPoza',
          icon: 'icon-linkedin',
          link: 'https://www.linkedin.com/in/rociopozatejeda/'
        },
      ],
      experienceInfo: [
        {
          title: 'Desarrolladora front end',
          date: 'Enero 2021-actualidad',
          info: [
            {
              name: 'Gyoza Studio',
              label: 'Desarrollo con Vue, Vuex y Nativescript'
            }
          ]
        },
        {
          title: 'Desarrolladora front end',
          date: 'Noviembre 2019- Diciembre 2021',
          info: [
            {
              name: 'JSV Logistic',
              label: 'Desarrollo con Angular 7, Laravel y MySQL'
            }
          ]
        }
      ],

    }
  }
}
</script>

<style lang="scss" scoped>

.header {
  display: grid;
  justify-content: center;
  padding: $gap-xl;
  text-align: center;

  &__title {
    @include font-secondary;
    color: $c-tertiary;
    font-size: $fs-x-large;
    font-weight: $fw-bold;
    padding-bottom: 0.2em;
  }

  &__subtitle {
    color: $c-primary;
    font-size: $fs-large;
    padding-bottom: 0.5em;
  }

  &__image {
    border-radius: 16px;
    box-shadow: 8px 8px $c-primary-darken;
    max-width: 320px;
    width: 100%;
  }

  &__list {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  &__item {
    margin-bottom: $gap-s;

    >* {
      align-items: center;
      color: $c-black;
      display: flex;
      text-decoration: none;
    }

    &__icon {
      color: $c-secondary-darken;
      margin-right: $gap-xxs;

      &--location {
        color: #ea4435;
      }

      &--phone {
        color: $c-primary;
      }

      &--email {
        color: #33a952;
      }

      &--github {
        color: #24292f;
      }

      &--twitter {
        color: rgb(29, 155, 240);
      }

      &--linkedin {
        color: #0a66c2;
      }
    }

    &__link {
      color: $c-secondary-darken;
      margin-left: $gap-xxs;
    }
  }

  @media all and (min-width: 724px) {
    grid-template-columns: 2fr 1fr;
    text-align: left;

    &__title {
      grid-column: 1;
      grid-row: 1;
    }

    &__subtitle {
      grid-column: 1;
      grid-row: 2;
    }

    &__image {
      grid-column: 2;
      grid-row: 1 / 4;
    }

    &__list {
      display: block;
    }

    &__item {

      &:last-child {
        margin-bottom: 0;
      }

    }
  }

}

</style>
