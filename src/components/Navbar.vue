<template>
  <nav>
    <v-app-bar elevate-on-scroll dense clipped-left app>
      <v-app-bar-nav-icon @click="handleMini"></v-app-bar-nav-icon>
      <v-list class="ma-0 pa-0" style="background:transparent;">
        <v-list-item class="brand" link to="/">
          <v-list-item-content>
            <v-list-item-title class="title d-flex align-center" style="background:transparent;line-height:1.2rem;">
              <span class="primary--text">V<span class="hidden-sm-and-down">uetify</span></span>
              <span>D<span class="hidden-sm-and-down">ash</span></span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-spacer></v-spacer>
      <v-autocomplete placeholder="Search..." append-icon prepend-inner-icon="mdi-magnify" rounded hide-no-data
        hide-details></v-autocomplete>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on: tooltip }">
          <v-btn icon class="hidden-sm-and-down" v-on="{ ...tooltip }">
            <v-badge small color="success" :overlap="true">
              <template v-slot:badge>10</template>
              <v-icon>message</v-icon>
            </v-badge>
          </v-btn>
        </template>
        <span>Message</span>
      </v-tooltip>
      <v-btn icon class="hidden-sm-and-down" @click="darkmodemethod">
        <v-icon>invert_colors</v-icon>
      </v-btn>
      <v-menu left offset-y transition="slide-y-transition" bottom>
        <template v-slot:activator="{ on: menu }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on: tooltip }">
              <v-btn icon v-on="{ ...tooltip, ...menu }">
                <v-badge small color="warning" :overlap="true">
                  <template v-slot:badge>{{ numberofmessages }}</template>
                  <v-icon>notifications</v-icon>
                </v-badge>
              </v-btn>
            </template>
            <span>Notifications</span>
          </v-tooltip>
        </template>
        <v-card :max-width="400">
          <v-list three-line>
            <template v-for="(notification, index) in notifications">
              <v-subheader v-if="notification.header" :key="notification.header" v-text="notification.header">
              </v-subheader>
              <v-divider v-else-if="notification.divider" :key="index" :inset="notification.inset"></v-divider>
              <v-list-item v-else :key="notification.title" router link :to="notification.routes">
                <v-list-item-avatar>
                  <v-img :src="notification.avatar"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-html="notification.title"></v-list-item-title>
                  <v-list-item-subtitle v-html="notification.subtitle"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
          <v-btn tile block color="primary">See more</v-btn>
        </v-card>
      </v-menu>
      <v-menu left offset-y transition="slide-y-transition" bottom>
        <template v-slot:activator="{ on: menu }">
          <v-tooltip slot="activator" bottom>
            <template v-slot:activator="{ on: tooltip }">
              <v-btn icon v-on="{ ...tooltip, ...menu }">
                <v-avatar size="25">
                  <!-- <flagicon :iso="" -->
                  <v-img :src=" $i18n.locale == 'en' ? 'https://appstack.bootlab.io/img/flags/us.png' : 'https://appstack.bootlab.io/img/flags/np.png' "></v-img>
                </v-avatar>
                <!-- <v-icon>mdi-dots-vertical</v-icon> -->
              </v-btn>
            </template>
            <span>Language</span>
          </v-tooltip>
        </template>
        <v-list dense>
          <v-list-item v-for="language in languages" :key="language.id" @click="switchlanguage(language.lang)">
            <v-list-item-avatar size="25">
              <!-- <flag :iso="language.lang" /> -->
              <v-img :src="language.src"></v-img>
            </v-list-item-avatar>
            <v-list-item-title>{{ language.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu left offset-y transition="slide-y-transition" bottom>
        <template v-slot:activator="{ on: menu }">
          <v-tooltip slot="activator" bottom>
            <template v-slot:activator="{ on: tooltip }">
              <v-btn text v-on="{ ...tooltip, ...menu }">
                <v-avatar size="30" class="mr-2">
                  <v-img src="https://erskull.now.sh/avatar.png"></v-img>
                </v-avatar>
                <span>erskull</span>
                <v-icon small class="ml-1">mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <span>More</span>
          </v-tooltip>
        </template>
        <v-list dense>
          <v-list-item router link :to="{ name:'Profile' }">
            <v-list-item-title>
              <v-icon class="mr-2">account_circle</v-icon>
              {{ $t('profile') }}
            </v-list-item-title>
          </v-list-item>
          <v-list-item router link :to="{ name:'Analytics' }">
            <v-list-item-title>
              <v-icon class="mr-2">bar_chart</v-icon>
              {{ $t('analytics') }}
            </v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item router link :to="{ name:'Settings' }">
            <v-list-item-title>
              <v-icon class="mr-2">settings</v-icon>
              {{ $t('settings') }}
            </v-list-item-title>
          </v-list-item>
          <v-list-item router link :to="{ name:'Introduction' }">
            <v-list-item-title>
              <v-icon class="mr-2">help</v-icon>
              {{ $t('help') }}
            </v-list-item-title>
          </v-list-item>
          <v-list-item router link :to="{ name:'SignIn' }">
            <v-list-item-title>
              <v-icon class="mr-2">power_settings_new</v-icon>
              {{ $t('signout') }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- mutation -->
    <v-navigation-drawer v-model="drawer" clipped app>
      <v-list class="nav" dense>
        <span v-for="navitem in navitems" :key="navitem.id">
          <v-subheader v-if="navitem.subtitle">{{ $t(navitem.subtitle) }}</v-subheader>
          <span v-if="navitem.subitem">
            <v-list-group :prepend-icon="navitem.icon" v-model="navitem.active">
              <template v-slot:activator>
                <!-- main like dashboard -->
                <v-list-item-title>{{ $t(navitem.title) }}</v-list-item-title>
              </template>
              <span v-for="subitem in navitem.subitems" :key="subitem.id">
                <span v-if="subitem.miniitems">
                  <v-list-group sub-group>
                    <template v-slot:activator>
                      <v-list-item-content>
                        <!-- child's option -->
                        <v-list-item-title style="margin-left:10px">{{ $t(subitem.title) }}</v-list-item-title>
                      </v-list-item-content>
                    </template>
                    <span v-if="subitem.mini">
                      <span v-for="mini in subitem.miniitems" :key="mini.id">
                        <v-list-item router link :to="mini.routes">
                          <v-list-item-icon></v-list-item-icon>
                          <!-- grand child -->
                          <v-list-item-title>{{ $t(mini.title) }}</v-list-item-title>
                        </v-list-item>
                      </span>
                    </span>
                  </v-list-group>
                </span>
                <span v-else>
                  <v-list-item sub-group router link :to="subitem.routes">
                    <v-list-item-content>
                      <!-- child -->
                      <v-list-item-title style="margin-left: 57px;">{{ $t(subitem.title) }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </span>
              </span>
            </v-list-group>
          </span>
          <span v-else>
            <v-list-item router link :to="navitem.routes">
              <v-list-item-icon>
                <v-icon>{{ navitem.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ $t(navitem.title) }}</v-list-item-title>
            </v-list-item>
          </span>
        </span>
      </v-list>
      <v-divider></v-divider>
    </v-navigation-drawer>

  </nav>
</template>
<script>
  export default {
    name: "Navbar",
    data() {
      return {
        dark: true,
        // lang: "",
        languages: [{
            id: "1",
            text: "English",
            lang: "en",
            src: "https://appstack.bootlab.io/img/flags/us.png"
          },
          {
            id: "2",
            text: "Nepali",
            lang: "np",
            src: "https://appstack.bootlab.io/img/flags/np.png"
          }
        ],
        link: "somwehere",
        routes: [],
        drawer: true,
        mini: false,
        navitems: [{
            id: "1",
            icon: "dashboard",
            title: "nav.pages.dash.dashboard",
            subtitle: "nav.pages.page",
            active: false,
            subitem: true,
            subitems: [{
                id: "1",
                title: "nav.pages.dash.default",
                active: true,
                mini: true,
                routes: "/"
              },
              {
                id: "2",
                title: "nav.pages.dash.analytics",
                active: true,
                routes: "/analytics"
              },
              {
                id: "3",
                title: "nav.pages.dash.ecommerce",
                active: true,
                routes: "/ecommerce"
              },
              {
                id: "4",
                title: "nav.pages.dash.social",
                active: true,
                routes: "/social"
              },
              {
                id: "5",
                title: "nav.pages.dash.crypto",
                active: true,
                routes: "/crypto"
              }
            ]
          },
          {
            id: "2",
            icon: "library_books",
            title: "nav.pages.page",
            active: false,
            subitem: true,
            subitems: [{
                id: "1",
                title: "nav.pages.pages.profile",
                routes: "/profile"
              },
              {
                id: "2",
                title: "nav.pages.pages.settings",
                routes: "/settings"
              },
              {
                id: "3",
                title: "nav.pages.pages.clients",
                routes: "/clients"
              },
              {
                id: "4",
                title: "nav.pages.pages.projects",
                active: true,
                mini: true,
                miniitems: [{
                    id: "1",
                    title: "nav.pages.pages.list",
                    routes: "/list"
                  },
                  {
                    id: "2",
                    title: "nav.pages.pages.details",
                    routes: "/detail"
                  }
                ]
              },
              {
                id: "5",
                title: "nav.pages.pages.invoice",
                active: true,
                routes: "/invoice"
              },
              {
                id: "6",
                title: "nav.pages.pages.pricing",
                active: true,
                routes: "/pricing"
              },
              {
                id: "7",
                title: "nav.pages.pages.tasks",
                active: true,
                routes: "/tasks"
              },
              {
                id: "8",
                title: "nav.pages.pages.chat",
                active: true,
                routes: "/chat"
              },
              {
                id: "9",
                title: "nav.pages.pages.blankpage",
                active: true,
                routes: "/blank-page"
              }
            ]
          },
          {
            id: "3",
            icon: "group",
            title: "nav.pages.auth.auth",
            active: false,
            subitem: true,
            subitems: [{
                id: "1",
                title: "nav.pages.auth.signin",
                routes: "/signin",
                active: true
              },
              {
                id: "2",
                title: "nav.pages.auth.signup",
                routes: "/signup",
                active: true
              },
              {
                id: "3",
                title: "nav.pages.auth.resetpassword",
                routes: "/reset-password",
                active: true
              },
              {
                id: "4",
                title: "nav.pages.auth.fourofour",
                routes: "/404",
                active: true
              },
              {
                id: "5",
                title: "nav.pages.auth.fiveoo",
                routes: "/500",
                active: true
              }
            ]
          },
          {
            id: "4",
            icon: "import_contacts",
            title: "nav.pages.document.documentation",
            active: false,
            subitem: true,
            subitems: [{
                id: "1",
                title: "nav.pages.document.introduction",
                routes: "/introduction"
              },
              {
                id: "2",
                title: "nav.pages.document.gettingstarted",
                routes: "/getting-started"
              },
              {
                id: "3",
                title: "nav.pages.document.plugins",
                routes: "/plugins"
              },
              {
                id: "4",
                title: "nav.pages.document.changelog",
                routes: "/changelog"
              }
            ]
          },
          {
            id: "5",
            icon: "layers",
            title: "nav.tool.ui.uielements",
            subtitle: "nav.tool.toolsandcomponents",
            subitem: true,
            active: false,
            subitems: [{
                id: "1",
                title: "nav.tool.ui.alerts",
                routes: "/alerts"
              },
              {
                id: "2",
                title: "nav.tool.ui.buttons",
                routes: "/buttons"
              },
              {
                id: "3",
                title: "nav.tool.ui.cards",
                routes: "/cards"
              },
              {
                id: "4",
                title: "nav.tool.ui.carousel",
                routes: "/carousel"
              },
              {
                id: "5",
                title: "nav.tool.ui.embedvideo",
                routes: "/embed-video"
              },
              {
                id: "6",
                title: "nav.tool.ui.general",
                routes: "/general"
              },
              {
                id: "7",
                title: "nav.tool.ui.grid",
                routes: "/grid"
              },
              {
                id: "8",
                title: "nav.tool.ui.modals",
                routes: "/modals"
              },
              {
                id: "9",
                title: "nav.tool.ui.tabs",
                routes: "/tabs"
              },
              {
                id: "10",
                title: "nav.tool.ui.typography",
                routes: "/typography"
              }
            ]
          },
          {
            id: "6",
            icon: "favorite",
            title: "nav.tool.icon.icons",
            subitem: true,
            active: false,
            subitems: [{
                id: "1",
                title: "Material Design Icon",
                routes: "/mdi"
              },
              {
                id: "2",
                title: "Font Awesome 5",
                routes: "/fa5"
              }
            ]
          },
          {
            id: "7",
            icon: "done",
            title: "nav.tool.form.forms",
            subitem: true,
            active: false,
            subitems: [{
                id: "1",
                title: "nav.tool.form.layouts",
                routes: "/layouts"
              },
              {
                id: "2",
                title: "nav.tool.form.basicinputs",
                routes: "/basic-inputs"
              },
              {
                id: "3",
                title: "nav.tool.form.inputgroups",
                routes: "/input-groups"
              }
            ]
          },
          {
            id: "8",
            icon: "table_chart",
            title: "nav.tool.table.tables",
            routes: "/tables"
          },
          {
            id: "9",
            icon: "check_box",
            title: "Form Plugins",
            subtitle: "Plugin & Addons",
            subitem: true,
            active: false,
            subitems: [{
                id: "1",
                title: "Advanced Inputs",
                routes: "/advanced-inputs"
              },
              {
                id: "2",
                title: "Editors",
                routes: "/editors"
              },
              {
                id: "3",
                title: "Validation",
                routes: "/validation"
              },
              {
                id: "4",
                title: "Wizard",
                routes: "/wizard"
              }
            ]
          },
          {
            id: "10",
            icon: "list",
            title: "Data Tables",
            subitem: true,
            active: false,
            subitems: [{
                id: "1",
                title: "Responsive Tables",
                routes: "/responsive-tables"
              },
              {
                id: "2",
                title: "Table with Buttons",
                routes: "/table-buttons"
              },
              {
                id: "3",
                title: "Column Search",
                routes: "/column-search"
              },
              {
                id: "4",
                title: "Multi Selection",
                routes: "/multi-selection"
              },
              {
                id: "5",
                title: "Ajax Sourced Data",
                routes: "/ajax-sourced-data"
              }
            ]
          },
          {
            id: "11",
            icon: "pie_chart",
            title: "Chart",
            subitem: true,
            active: false,
            subitems: [{
                id: "1",
                title: "Chart.js",
                routes: "/chartjs"
              },
              {
                id: "2",
                title: "ApexCharts",
                routes: "/apexcharts"
              }
            ]
          },
          {
            id: "12",
            icon: "notifications",
            title: "Notifications",
            subitem: false,
            active: false,
            routes: "/notifications"
          },
          {
            id: "13",
            icon: "location_on",
            title: "Maps",
            subitem: true,
            active: false,
            subitems: [{
                id: "1",
                title: "Google Maps",
                routes: "/google-maps"
              },
              {
                id: "2",
                title: "Vector Maps",
                routes: "/vector-maps"
              }
            ]
          },
          {
            id: "14",
            icon: "calendar_today",
            title: "Calendar",
            subitem: false,
            active: false,
            routes: "/calendar"
          },
          {
            id: "15",
            icon: "share",
            title: "Multi Level",
            subitem: true,
            active: false,
            subitems: [{
                id: "1",
                title: "Two Levels",
                routes: "",
                mini: true,
                miniitems: [{
                    id: "1",
                    title: "Item 1",
                    routes: ""
                  },
                  {
                    id: "2",
                    title: "Item 2",
                    routes: ""
                  }
                ]
              },
              {
                id: "2",
                title: "Three Levels",
                routes: "",
                mini: true,
                miniitems: [{
                    id: "1",
                    title: "Item 1",
                    routes: ""
                  },
                  {
                    id: "2",
                    title: "Item 2",
                    routes: ""
                  },
                  {
                    id: "3",
                    title: "Item 3",
                    routes: ""
                  }
                ]
              }
            ]
          }
        ],
        notifications: [{
            header: "Notifications"
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            title: "Brunch this weekend?",
            subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
            routes: "/"
          },
          {
            divider: true,
            inset: true
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
            title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
            subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
            routes: "/"
          },
          {
            divider: true,
            inset: true
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            title: "Oui oui",
            subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
            routes: "/"
          },
          {
            divider: true,
            inset: true
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
            title: "Birthday gift",
            subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
            routes: "/"
          },
          {
            divider: true,
            inset: true
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
            title: "Recipe to try",
            subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
            routes: "/"
          }
        ]
      };
    },
    created() {
      // this.dark = localStorage.getItem('darkmode') === 'true';
      // this.$vuetify.theme.dark = this.dark
      // this.currentlang = "en";
      // this.lang = localStorage.getItem("lang") === "en";
      // i18n.locale = this.lang;
      // this.currentlang =
      //   "https://appstack.bootlab.io/img/flags/" + this.currentlang + ".png";
    },
    watch: {
      darkmodemethod() {
        this.dark = !this.dark;
        localStorage.setItem("darkmode", this.dark);
        this.$vuetify.theme.dark = this.dark;
      },
      // currentlang() {
      //   if (this.$i18n.locale == 'en') {
      //     this.currentlang = "https://appstack.bootlab.io/img/flags/us.png"
      //   }
      //   else {
      //     this.currentlang = "https://appstack.bootlab.io/img/flags/np.png"
      //   }
      // }
    },
    methods: {
      darkmodemethod() {
        this.dark = !this.dark;
        localStorage.setItem("darkmode", this.dark);
        this.$vuetify.theme.dark = this.dark;
      },
      signout() {
        this.signoutAction().then(() => {
          this.$router.replace({
            name: "Login"
          });
        });
      },
      handleMini() {
        this.drawer = !this.drawer;
      },
      switchlanguage(lang) {
        import(`../plugins/langs/${lang}.json`).then(msgs => {
          this.$i18n.setLocaleMessage(lang, msgs);
          this.$i18n.locale = lang;
          // if (lang == "en") {
          //   this.currentlang =
          //     "https://appstack.bootlab.io/img/flags/us.png"
          // } else {
          //   this.currentlang =
          //     "https://appstack.bootlab.io/img/flags/np.png";
          // }
        })
      }
    },
    computed: {
      numberofmessages() {
        return this.notifications.length;
      },
      // currentlang(){
      //   let lang = ""
      //   if( this.i18n.currentlang == "us" ){
      //     this.lang = "https://appstack.bootlab.io/img/flags/us.png"
      //     return lang
      //   } else if ( this.i18n.currentlang == "np" ) {
      //     this.lang = "https://appstack.bootlab.io/img/flags/np.png"
      //     // return lang
      //   } return lang
      // }
    }
  };
</script>
<style scoped>
  .brand.v-list-item--link:before {
    background: transparent;
  }

  .nav{
    overflow: hidden !important;
  }

  .nav .v-list--dense .v-list-item .v-list-item__subtitle,
  .v-list--dense .v-list-item .v-list-item__title,
  .v-list-item--dense .v-list-item__subtitle,
  .v-list-item--dense .v-list-item__title {
    line-height: 1.2rem !important;
  }
</style>