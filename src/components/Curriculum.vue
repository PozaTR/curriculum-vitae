<template>
  <div class="curriculum">
    <header class="curriculum__header">
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
    </header>
    <section class="curriculum__content">

    </section>
    <Dropdown
      :title="$t('experience_title')"
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
      :title="$t('projects_title')"
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
      :title="$t('education_title')"
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
      :title="$t('languages_title')"
    >
      <h4 class="info__title">{{$t('languages_title-0')}}</h4>
    </Dropdown>
    <Dropdown
      :title="$t('skills_title')"
    >
      <ul class="list">
        <li v-for="(skill, idx) in skillsInfo"
            :key="`skill--${idx}-${Math.round(Math.random() * 1000)}`"
            class="curriculum__skill"
        >
          <h4 class="info__title">{{$t(skill.title)}}</h4>
          <img v-for="(logo, idx) in skill.logos"
               :src="require(`@/assets/images/logo_${logo}.svg`)"
               :alt="`Imagen con el logo de ${logo}`"
               :key="`logo--${idx}-${Math.round(Math.random() * 1000)}`"
               class="curriculum__skill__logo"
          />
        </li>
      </ul>
    </Dropdown>
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
      publicPath: process.env.BASE_URL,
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
              url: 'https://roci-invitation.web.app/',
              icon: 'icon-new-tab'
            },
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
              url: 'https://pozatr.github.io/g-m3-React-React-pita/#/',
              icon: 'icon-new-tab'
            },
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
              'nativescriptVue',
              'angular',
              'react',
              'laravel'
          ]
        },
        {
          title: 'skills_title-1',
          logos: [
            'javascript',
            'html',
            'css3',
            'sass',
            'php',
            'MySQL',
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
              'visual',
              'phpStorm'
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
  }
}
</script>

<style lang="scss" scoped>
.curriculum {
  &__header {
    background: linear-gradient(30deg, $c-tertiary-pure 0%, $c-primary-darken 100%);
    display: grid;
    justify-content: center;
    padding: $gap-xl $gap-xl $gap-xxl;
    text-align: center;

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
      margin-bottom: $gap-l;
    }

    &__image {
      border-radius: 8px;
      border: 2px solid $c-white;
      max-width: 320px;
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
        margin-left: $gap-xxs;
      }
    }
  }

  &__skill {
    &__logo {
      height: 32px;
    }
  }


  @media all and (min-width: 724px) {
    &__header {

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
}


.info {
  &+& {
    margin-top: $gap-m;
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
    margin-bottom: $gap-xxs;
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

    &::first-letter {
      text-transform: capitalize;
    }
  }
}

</style>
