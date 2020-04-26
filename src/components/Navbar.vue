<template>
    <nav>
        <v-app-bar elevate-on-scroll dense clipped-left app>
            <v-app-bar-nav-icon @click="handleMini"></v-app-bar-nav-icon>
            <v-list class="ma-0 pa-0" style="background:transparent;">
                <v-list-item class="brand" link to="/">
                    <v-list-item-content>
                        <v-list-item-title class="title d-flex align-center" style="line-height:1em;background:transparent;">
                            <span class="primary--text">App</span><span>Dash</span></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-spacer></v-spacer>
            <v-autocomplete placeholder="Search..." append-icon="" prepend-inner-icon="mdi-magnify" rounded hide-no-data
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
                            <v-subheader v-if="notification.header" :key="notification.header"
                                v-text="notification.header"></v-subheader>
                            <v-divider v-else-if="notification.divider" :key="index" :inset="notification.inset">
                            </v-divider>
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
                                    <v-img src="https://appstack.bootlab.io/img/flags/us.png"></v-img>
                                </v-avatar>
                                <!-- <v-icon>mdi-dots-vertical</v-icon> -->
                            </v-btn>
                        </template>
                        <span>Language</span>
                    </v-tooltip>
                </template>
                <v-list dense>
                    <v-list-item v-for="language in languages" :key="language" @click="switchlanguage(language.lang)">
                        <v-list-item-avatar size="25">
                            <!-- <flag :iso="language.lang" /> -->
                            <v-img :src="language.src"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-title>
                            {{ language.text }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-menu left offset-y transition="slide-y-transition" bottom>
                <template v-slot:activator="{ on: menu }">
                    <v-tooltip slot="activator" bottom>
                        <template v-slot:activator="{ on: tooltip }">
                            <v-btn text v-on="{ ...tooltip, ...menu }">
                                <v-avatar size="30" class="mr-2">
                                    <v-img src="https://appstack.bootlab.io/img/avatars/avatar.jpg"></v-img>
                                </v-avatar>
                                <span>
                                    Chris Wood
                                </span>
                                <v-icon small class="ml-1">mdi-chevron-down</v-icon>
                            </v-btn>
                        </template>
                        <span>More</span>
                    </v-tooltip>
                </template>
                <v-list dense>
                    <v-list-item router link to="/profile">
                        <v-list-item-title>
                            <v-icon class="mr-2">account_circle</v-icon>
                            {{ $t('profile') }}
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item router link to="/dashboardanalytics">
                        <v-list-item-title>
                            <v-icon class="mr-2">bar_chart</v-icon>
                            {{ $t('analytics') }}
                        </v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item router link to="/settings">
                        <v-list-item-title>
                            <v-icon class="mr-2">settings</v-icon>
                            {{ $t('settings') }}
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item router link to="/introduction">
                        <v-list-item-title>
                            <v-icon class="mr-2">help</v-icon>
                            {{ $t('help') }}
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item router link to="/signin">
                        <v-list-item-title>
                            <v-icon class="mr-2">power_settings_new</v-icon>
                            {{ $t('signout') }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
        <!-- <v-card tile color="primary"> -->
        <v-navigation-drawer v-model="drawer" clipped app>
            <v-list dense>
                <span v-for="navitem in navitems" :key="navitem.subtitle">
                    <v-subheader v-if="navitem.subtitle">{{ navitem.subtitle }}</v-subheader>
                    <span v-if="navitem.subitem">
                        <v-list-group :prepend-icon="navitem.icon" v-model="navitem.active">
                            <template v-slot:activator>
                                <v-list-item-title>{{ navitem.title }}</v-list-item-title>
                            </template>
                            <span v-for="subitem in navitem.subitems" :key="subitem">
                                <span v-if="subitem.miniitems">
                                    <v-list-group sub-group>
                                        <template v-slot:activator>
                                            <v-list-item-content>
                                                <v-list-item-title style="margin-left:10px">{{ subitem.title }}
                                                </v-list-item-title>
                                            </v-list-item-content>
                                        </template>


                                        <span v-if="subitem.mini">
                                            <span v-for="mini in subitem.miniitems" :key="mini">
                                                <v-list-item router link :to="mini.routes">
                                                    <v-list-item-icon>
                                                        <!-- <v-icon>{{ mini.name }}</v-icon> -->
                                                    </v-list-item-icon>
                                                    <v-list-item-title v-text="mini.title"></v-list-item-title>
                                                </v-list-item>
                                            </span>
                                        </span>
                                    </v-list-group>
                                </span>
                                <span v-else>
                                    <v-list-item sub-group router link :to="subitem.routes">
                                        <v-list-item-content>
                                            <v-list-item-title v-text="subitem.title" style="margin-left: 57px;">
                                            </v-list-item-title>
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
                            <v-list-item-title>{{ navitem.title }}</v-list-item-title>
                        </v-list-item>
                    </span>
                </span>
            </v-list>
            <v-divider></v-divider>
        </v-navigation-drawer>
        <!-- </v-card> -->
    </nav>
</template>
<script>
    import i18n from '@/plugins/i18n'
    export default {
        name: "Navbar",
        data() {
            return {
                dark: true,
                language: '',
                languages: [{
                    text: 'English',
                    lang: 'en',
                    src: 'https://appstack.bootlab.io/img/flags/us.png'
                }, {
                    text: 'Nepali',
                    lang: 'np',
                    src: 'https://appstack.bootlab.io/img/flags/np.png'
                }],
                link: 'somwehere',
                routes: [],
                drawer: true,
                mini: false,
                navitems: [{
                    icon: 'dashboard',
                    title: 'Dashboard',
                    subtitle: 'Pages',
                    active: false,
                    subitem: true,
                    routes: '',
                    subitems: [{
                        title: 'Default',
                        active: true,
                        mini: true,
                        routes: '/',
                    }, {
                        title: 'Analytics',
                        active: true,
                        routes: '/dashboardanalytics',
                    }, {
                        title: 'Ecommerce',
                        active: true,
                        routes: '/dashboardecommerce',
                    }, {
                        title: 'Social',
                        active: true,
                        routes: '/dashboardsocial',
                    }, {
                        title: 'Crypto',
                        active: true,
                        routes: '/dashboardcrypto',
                    }]
                }, {
                    icon: 'library_books',
                    title: 'Pages',
                    active: false,
                    subitem: true,
                    subitems: [{
                        title: 'Profile',
                        routes: '/profile'
                    }, {
                        title: 'Settings',
                        routes: '/settings'
                    }, {
                        title: 'Clients',
                        routes: '/clients'
                    }, {
                        title: 'Projects',
                        active: true,
                        routes: '',
                        mini: true,
                        miniitems: [{
                            title: 'List',
                            routes: '/list'
                        }, {
                            title: 'Detail',
                            routes: '/detail'
                        }]

                    }, {
                        title: 'Invoice',
                        active: true,
                        routes: '/invoice'
                    }, {
                        title: 'Pricing',
                        active: true,
                        routes: '/pricing'
                    }, {
                        title: 'Tasks',
                        active: true,
                        routes: '/tasks'
                    }, {
                        title: 'Chat',
                        active: true,
                        routes: '/chat'
                    }, {
                        title: 'Blank Page',
                        active: true,
                        routes: '/blank-page'
                    }]
                }, {
                    icon: 'group',
                    title: 'Auth',
                    active: false,
                    subitem: true,
                    routes: '',
                    subitems: [{
                            title: 'Sign In',
                            routes: '/signin',
                            active: true
                        },
                        {
                            title: 'Sign Up',
                            routes: '/signup',
                            active: true
                        },
                        {
                            title: 'Reset Password',
                            routes: '/reset-password',
                            active: true
                        },
                        {
                            title: '404 Page',
                            routes: '/404',
                            active: true
                        },
                        {
                            title: '500 Page',
                            routes: '/500',
                            active: true
                        },
                    ],
                }, {
                    icon: 'import_contacts',
                    title: 'Documentation',
                    active: false,
                    subitem: true,
                    subitems: [{
                            title: 'Introduction',
                            routes: '/introduction',
                        },
                        {
                            title: 'Getting Started',
                            routes: '/getting-started',
                        }, {
                            title: 'Plugins',
                            routes: '/plugins'
                        }, {
                            title: 'Changelog',
                            routes: '/changelog'
                        }
                    ],
                }, {
                    icon: 'layers',
                    title: 'UI Elements',
                    subtitle: 'Tool & Components',
                    subitem: true,
                    active: false,
                    subitems: [{
                        title: 'Alerts',
                        routes: '/alerts'
                    }, {
                        title: 'Buttons',
                        routes: '/buttons'
                    }, {
                        title: 'Cards',
                        routes: '/cards'
                    }, {
                        title: 'Carousel',
                        routes: '/carousel'
                    }, {
                        title: 'Embed Video',
                        routes: '/embed-video'
                    }, {
                        title: 'General',
                        routes: '/general'
                    }, {
                        title: 'Grid',
                        routes: '/grid'
                    }, {
                        title: 'Modals',
                        routes: '/modals'
                    }, {
                        title: 'Tabs',
                        routes: '/tabs'
                    }, {
                        title: 'Typography',
                        routes: '/typography'
                    }]
                }, {
                    icon: 'favorite',
                    title: 'Icons',
                    subitem: true,
                    active: false,
                    subitems: [{
                        title: 'Matrial Design Icon',
                        routes: '/mtd'
                    }, {
                        title: 'Font Awesome 5',
                        routes: '/FA5'
                    }]
                }, {
                    icon: 'done',
                    title: 'Forms',
                    subitem: true,
                    active: false,
                    subitems: [{
                        title: 'Layouts',
                        routes: '/layouts'
                    }, {
                        title: 'Basic Inputs',
                        routes: '/basic-inputs'
                    }, {
                        title: 'Input Groups',
                        routes: '/input-groups'
                    }]
                }, {
                    icon: 'table_chart',
                    title: 'Tables',
                    routes: '/table'
                }, {
                    icon: 'check_box',
                    title: 'Form Plugins',
                    subtitle: 'Plugin & Addons',
                    subitem: true,
                    active: false,
                    subitems: [{
                        title: 'Advanced Inputs',
                        routes: '/advanced-inputs'
                    }, {
                        title: 'Editors',
                        routes: '/editors'
                    }, {
                        title: 'Validation',
                        routes: '/validation'
                    }, {
                        title: 'Wizard',
                        routes: '/wizard'
                    }]
                }],
                notifications: [{
                        header: 'Notifications'
                    },
                    {
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                        title: 'Brunch this weekend?',
                        subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
                        routes: '/'
                    },
                    {
                        divider: true,
                        inset: true
                    },
                    {
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
                        subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
                        routes: '/'
                    },
                    {
                        divider: true,
                        inset: true
                    },
                    {
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                        title: 'Oui oui',
                        subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
                        routes: '/'
                    },
                    {
                        divider: true,
                        inset: true
                    },
                    {
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                        title: 'Birthday gift',
                        subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
                        routes: '/'
                    },
                    {
                        divider: true,
                        inset: true
                    },
                    {
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                        title: 'Recipe to try',
                        subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
                        routes: '/'
                    },
                ],
            }
        },
        created() {
            this.dark = localStorage.getItem('darkmode') === 'true';
            this.$vuetify.theme.dark = this.dark
            this.language = 'en'
            i18n.locale = this.language
        },
        watch: {
            darkmodemethod() {
                this.dark = !this.dark
                localStorage.setItem('darkmode', this.dark);
                this.$vuetify.theme.dark = this.dark
            },
        },
        methods: {
            darkmodemethod() {
                this.dark = !this.dark
                localStorage.setItem('darkmode', this.dark);
                this.$vuetify.theme.dark = this.dark
            },
            signout() {
                this.signoutAction().then(() => {
                    this.$router.replace({
                        name: "Login"
                    });
                });
            },
            handleMini() {
                this.drawer = !this.drawer
            },
            switchlanguage(lang) {
                i18n.locale = lang
            }
        },
        computed: {
            numberofmessages() {
                return this.notifications.length;
            },
            currentRoute: {
                get() {
                    return this.$route.name;
                }
            },
        }
    };
</script>
<style scoped>
.brand.v-list-item--link:before{
    background: transparent;
}
</style>