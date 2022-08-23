<template>
  <div class="curriculum">
    <header class="curriculum__header">
      <div class="curriculum__wrapper curriculum__header__wrapper">
        <h1 class="curriculum__header__title">Rocío Poza Tejeda</h1>
        <h2 class="curriculum__header__subtitle">Front end developer</h2>
        <ul class="curriculum__header__list">
          <li v-for="(item, idx) in contactInfo"
              :key="`item--${idx}`" class="curriculum__header__item">
            <component
                :is="item.link ? 'a' : 'div'"
                :href="item.link"
                :target="item.link ? '_blank' : null">
              <i :class="[
                'header__item__icon',
                'icon',
                item.icon,
                `curriculum__header__item__icon--${item.name}`
            ]"></i>
              <p class="curriculum__header__item__label">{{item.label}}</p>
              <i v-if="item.link" class="icon icon-new-tab curriculum__header__item__link"></i>
            </component>
          </li>
        </ul>
        <img class="curriculum__header__image" src="../assets/images/rocio_poza_portrait.jpg" alt="Foto Rocío Poza">
      </div>
    </header>
    <section
        ref="masonryContainer"
        class="curriculum__wrapper curriculum__content">
      <Dropdown
          class="curriculum__content__dropdown"
          :title="$t('personal-info_title')"
          :forcedOpenStatus="isDesktopMode"
      >
        <div>
          <p class="info__content">{{$t('personal-info_text-0')}}</p>
          <p class="info__content">{{$t('personal-info_text-1')}}</p>
          <p class="info__content">{{$t('personal-info_text-2')}}</p>
          <p class="info__content">{{$t('personal-info_text-3')}}</p>
        </div>
      </Dropdown>
      <Dropdown
          class="curriculum__content__dropdown"
          :title="$t('experience_title')"
          :forcedOpenStatus="isDesktopMode"
      >
        <ol class="list">
          <li
              v-for="(item, idx) in jobExperience"
              :key="`dropdown--${idx}-${Math.round(Math.random() * 1000)}`"
              class="info">
            <h4 class="info__title">{{$t(item.title)}}</h4>
            <p class="info__date">{{ item.dateEnd ? `${formatDate(item.dateStart)} - ${formatDate(item.dateEnd)}` : `${formatDate(item.dateStart)} - ${$t('date_now')}` }}</p>
            <p class="info__subtitle">{{item.company}}</p>
            <p v-if="item.topics"
               class="info__content">{{$t(item.topics)}}</p>
          </li>
        </ol>
      </Dropdown>
      <Dropdown
          class="curriculum__content__dropdown"
          :title="$t('skills_title')"
          :forcedOpenStatus="isDesktopMode"
      >
        <ul class="list">
          <li v-for="(skill, idx) in skillsInfo"
              :key="`skill--${idx}-${Math.round(Math.random() * 1000)}`"
              class="curriculum__skill"
          >
            <h4 class="info__title">{{$t(skill.title)}}</h4>
            <div class="curriculum__skill__container">
              <img v-for="(logo, idx) in skill.logos"
                   :src="require(`@/assets/images/logo-${logo}.svg`)"
                   :alt="`Imagen con el logo de ${logo}`"
                   :key="`logo--${idx}-${Math.round(Math.random() * 1000)}`"
                   class="curriculum__skill__logo"
              />
            </div>
          </li>
        </ul>
      </Dropdown>
      <Dropdown
          class="curriculum__content__dropdown"
          :title="$t('projects_title')"
          :forcedOpenStatus="isDesktopMode"
      >
        <ol class="list">
          <li v-for="(project, idx) in projectsInfo"
              :key="`dropdown--${idx}-${Math.round(Math.random() * 1000)}`"
              class="info">
            <div class="info__header">
              <h4 class="info__title">{{$t(project.title)}}</h4>
              <div class="info__header">
                <a v-for="(link, idx) in project.links"
                   class="info__link"
                   :key="`link--${idx}-${Math.round(Math.random() * 1000)}`"
                   :href="link.url"
                   target="_blank">
                  <i class="icon"
                     :class="[
                       link.icon,
                       `info__icon__${link.icon}`
                   ]"
                  ></i>
                </a>
              </div>
            </div>
            <p class="info__date">{{formatDate(project.date, true)}}</p>
            <p v-if="project.type"
               class="info__subtitle">{{project.type}}</p>
            <p v-if="project.topics"
               class="info__content">{{$t(project.topics)}}</p>
          </li>
        </ol>
      </Dropdown>
      <Dropdown
          class="curriculum__content__dropdown"
          :title="$t('education_title')"
          :forcedOpenStatus="isDesktopMode"
      >
        <ol class="list">
          <li
              v-for="(education, idx) in educationInfo"
              :key="`dropdown--${idx}-${Math.round(Math.random() * 1000)}`"
              class="info">
            <h4 class="info__title">{{$t(education.title)}}</h4>
            <p class="info__date">{{ education.dateEnd ? `${formatDate(education.dateStart)} - ${formatDate(education.dateEnd)}` : `${formatDate(education.dateStart)} - ${$t('date_now')}` }}</p>
            <p v-if="education.place"
               class="info__subtitle">{{education.place}}</p>
            <p v-if="education.topics"
               class="info__content">{{$t(education.topics)}}</p>
          </li>
        </ol>
      </Dropdown>
      <Dropdown
          class="curriculum__content__dropdown"
          :title="$t('languages_title')"
          :forcedOpenStatus="isDesktopMode"
      >
        <ul>
          <li
              v-for="(language, idx1) in languages"
              :key="`language--${idx1}-${Math.round(Math.random() * 1000)}`"
              class="info">
            <h4 class="info__title">{{$t(language.title)}}</h4>
            <ol>
              <li
                  v-for="(certificate, idx2) in language.certificates"
                  :key="`certificate--${idx2}-${Math.round(Math.random() * 1000)}`">
                <p class="info__subtitle">{{certificate.name}}</p>
                <p class="info__date">{{ formatDate(certificate.date, true)}}</p>
              </li>
            </ol>
          </li>
        </ul>
      </Dropdown>
    </section>
  </div>
</template>

<script>
import Dropdown from '@/components/Dropdown'
import {clearMasonryStyles, delay, relocateMasonryItems} from '@/utils/methods'

export default {
  name: 'Curriculum',
  components: {
    Dropdown
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      isDesktopMode: false,
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
      jobExperience: [
        {
          title: 'job_experience_title-0',
          dateStart: 1610406000000,
          dateEnd: 0,
          company: 'Gyoza Studio',
          topics: 'job_experience_info-0'
        },
        {
          title: 'job_experience_title-0',
          dateStart: 1547161200000,
          dateEnd: 1610406000000,
          company: 'JSV Logistic',
          topics: 'job_experience_info-1'
        },
        {
          title: 'job_experience_title-1',
          dateStart: 1293836400000,
          dateEnd: 0,
          company: 'Orquesta Metropolitana de Madrid'
        },
        {
          title: 'job_experience_title-2',
          dateStart: 1294527600000,
          dateEnd: 1546729200000
        }
      ],
      educationInfo: [
        {
          title: "Adalab",
          dateStart: 1546729200000,
          dateEnd: 1569880800000
        },
        {
          title: "Máster Universitario en Formación del profesorado en Educación Secundaria",
          dateStart: 1441058400000,
          dateEnd: 1464732000000,
          place: 'Universidad Internacional de Valencia',
          topics: 'education_info-1'
        },
        {
          title: "Grado superior de Música",
          dateStart: 1157061600000,
          dateEnd: 1306879200000,
          place: 'Conservatorio Superior de Música de Aragón',
          topics: 'education_info-2'
        },
      ],
      projectsInfo: [
        {
          title: "Curriculum",
          date: 1651356000000,
          topics: 'projects_info-0',
          links: [
            {
              url: 'https://github.com/PozaTR/curriculum-vitae',
              icon: 'icon-github'
            }
          ]
        },
        {
          title: "Casita de inglés",
          date: 1630447200000,
          type: 'Gyoza Studio',
          topics: 'projects_info-1',
        },
        {
          title: "Enasui",
          date: 1622498400000,
          links: [
            {
              url: 'https://apps.apple.com/es/app/enasui/id1585633800',
              icon: 'icon-appleinc'
            },
            {
              url: 'https://play.google.com/store/apps/details?id=com.enasui.enasui',
              icon: 'icon-android'
            },
          ],
          type: 'Gyoza Studio',
          topics: 'projects_info-2',
        },
        {
          title: "Teikei",
          date: 1609455600000,
          links: [
            {
              url: 'https://apps.apple.com/es/app/teikei/id1570240755',
              icon: 'icon-appleinc'
            },
            {
              url: 'https://play.google.com/store/apps/details?id=com.teikei.teikei',
              icon: 'icon-android'
            },
          ],
          type: 'Gyoza Studio',
          topics: 'projects_info-3'
        },
        {
          title: "Invitación online",
          date: 1577833200000,
          links: [
            {
              url: 'https://github.com/PozaTR/roci-Invitation',
              icon: 'icon-github'
            }
          ],
          topics: 'projects_info-4'
        },
        {
          title: "Dashboard ChartJS",
          date: 1546297200000,
          links: [
            {
              url: 'https://pozatr.github.io/prueba_meteologica/#/',
              icon: 'icon-new-tab'
            },
            {
              url: 'https://github.com/PozaTR/prueba_meteologica',
              icon: 'icon-github'
            }
          ],
          topics: 'projects_info-5'
        },
        {
          title: "Tealify",
          date: 1546297200000,
          links: [
            {
              url: 'https://github.com/PozaTR/g-m4-bridgeforbillions',
              icon: 'icon-github'
            }
          ],
          topics: 'projects_info-6'
        },
        {
          title: "Caso de código heredado",
          date: 1546297200000,
          links: [
            {
              url: 'https://github.com/PozaTR/g-m3-React-React-pita',
              icon: 'icon-github'
            }
          ],
          topics: 'projects_info-7'
        }
      ],
      skillsInfo: [
        {
          title: 'skills_title-0',
          logos: [
              'vue',
              'ns_vue',
              'angular',
              'react',
              'laravel'
          ]
        },
        {
          title: 'skills_title-1',
          logos: [
            'js',
            'html5',
            'css3',
            'sass',
            'php',
            'mysql',
            'git',
          ]
        },
        {
          title: 'skills_title-2',
          logos: [
              'slack',
              'trello',
              'postman',
              'jira',
              'vscode',
              'php_storm'
          ]
        }
      ],
      languages: [
        {
          title: 'languages_title-0',
          certificates: [
            {
              name: 'Cambridge First Certificate (B2)',
              date: 1546297200000
            },
            {
              name: 'Cambridge First Certificate (B1)',
              date: 1514761200000
            }
          ]
        }
      ]
    }
  },
  methods: {
    formatDate(timestamp, onlyYear) {
      return onlyYear
        ? new Date(timestamp).toLocaleDateString('es', { year: 'numeric' })
        : new Date(timestamp).toLocaleDateString('es', { year: 'numeric', month: 'long'})
    }
  },
  mounted() {
    const desktopMode = window.matchMedia('(min-width: 724px)')

    const relocateMasonryItemsHandler = () => {
      relocateMasonryItems({
        masonryContainer: this.$refs.masonryContainer,
        columnQty: 2
      })
    }

    const desktopModeResize = () => {
      this.$refs.masonryContainer.style.visibility = 'hidden'
      delay(() => {
        relocateMasonryItems({
          masonryContainer: this.$refs.masonryContainer,
          columnQty: 2
        })
      }, 500)
          .then(() => {
            this.$refs.masonryContainer.style.visibility = 'visible'
          })

      window.addEventListener('resize', relocateMasonryItemsHandler)
    }

    if (window.innerWidth >= 724) {
      this.isDesktopMode = true
      desktopModeResize()
    }

    desktopMode.addListener((isDesktopMode) => {
      this.isDesktopMode = isDesktopMode.matches

      if (this.isDesktopMode) {
        desktopModeResize()
      } else {
        window.removeEventListener('resize', relocateMasonryItemsHandler)
        clearMasonryStyles({ masonryContainer: this.$refs.masonryContainer })
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.curriculum {
  &__wrapper {
    margin: 0 auto;
    max-width: 1024px;
  }

  &__header {
    background: linear-gradient(30deg, $c-tertiary-pure 0%, $c-primary-darken 100%);

    &__wrapper {
      display: grid;
      justify-content: center;
      padding: $gap-xl $gap-xl $gap-xxl;
      text-align: center;
    }

    &__title {
      @include font-secondary;
      color: $c-secondary;
      font-size: $fs-x-large;
      font-weight: $fw-bold;
      padding-bottom: 0.2em;
    }

    &__subtitle {
      color: $c-white;
      font-size: $fs-large;
      margin-bottom: $gap-m;
    }

    &__image {
      border-radius: 8px;
      border: 2px solid $c-white;
      justify-self: center;
      max-width: 275px;
      width: 100%;
    }

    &__list {
      align-items: center;
      display: flex;
      flex-direction: column;
      margin-bottom: $gap-xl;
    }

    &__item {
      & + & {
        margin-top: $gap-xxs;
      }

      > * {
        align-items: center;
        background-color: rgba($c-white, 0.9);
        border-radius: 2px;
        color: $c-black;
        display: flex;
        padding: 4px $gap-xxs;
        text-decoration: none;
      }

      &__icon {
        color: $c-tertiary-darken;

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

      &__label {
        margin: 0 $gap-xxs;
      }

      &__link {
        color: $c-secondary-darken;
        margin-left: $gap-xxs / 2;
      }
    }
  }

  &__content {
    padding: $gap-m $gap-s;

    &__dropdown {
      & + & {
        margin-top: $gap-xs;
      }
    }
  }

  &__skill {
    &__container {
      display: flex;
      flex-wrap: wrap;
    }

    &__logo {
      $size: 40px;
      height: $size;
      margin: $gap-xxs;
      width: $size;
    }
  }


  @media all and (min-width: 724px) {
    &__header {
      &__wrapper {
        grid-template-columns: 2fr 1fr;
        text-align: left;
      }

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
        justify-self: flex-end;
      }

      &__list {
        display: block;
      }

      &__item {
        max-width: fit-content;

        &:last-child {
          margin-bottom: 0;
        }

        &__link {
          margin-left: $gap-xxs;
        }
      }
    }

    &__content {
      padding: $gap-xl;
      position: relative;

      &__dropdown {
        position: absolute;
        margin: 0 !important;
      }
    }
  }
}

.info {
  &+& {
    margin-top: $gap-l;
  }

  &__header {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  &__title {
    color: $c-tertiary;
    font-size: $fs-medium;
    font-weight: bold;

    &::first-letter {
      text-transform: capitalize;
    }
  }

  &__link {
    align-items: center;
    display: flex;
    font-size: $fs-medium;
    justify-content: space-between;
    text-decoration: none;

    &:last-child {
      margin-left: $gap-xxs;
    }
  }

  &__icon {

    &__icon-github {
      color: #24292f;
    }

    &__icon-new-tab {
      color: $c-secondary-darken;
    }

    &__icon-appleinc {
      color: #000;
    }

    &__icon-android {
      color: #a3c438;
    }
  }

  &__date {
    font-size: $fs-x-small;
    color: $c-primary;
    margin: ($gap-xxs - 4) 0 $gap-xxs;
    font-weight: 400;

    &::first-letter {
      text-transform: capitalize;
    }
  }

  &__subtitle {
    color: $c-tertiary-darken;
  }

  &__content {
    color: $c-tertiary-darken;
    font-weight: 300;
    margin-bottom: $gap-xxs;

    &::first-letter {
      text-transform: capitalize;
    }
  }
}

</style>
