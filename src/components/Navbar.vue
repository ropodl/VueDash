<template>
    <nav>
        <v-app-bar elevate-on-scroll dense app>
            <v-app-bar-nav-icon @click="handleMini"></v-app-bar-nav-icon>
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
                                    <v-img src="https://appstack.bootlab.io/img/flags/us.png"></v-img>
                                </v-avatar>
                                <!-- <v-icon>mdi-dots-vertical</v-icon> -->
                            </v-btn>
                        </template>
                        <span>Language</span>
                    </v-tooltip>
                </template>
                <v-list dense>
                    <v-list-item>
                        <v-list-item-avatar size="25">
                            <v-img src="https://appstack.bootlab.io/img/flags/us.png"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-title>
                            English
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-avatar size="25">
                            <v-img src="https://appstack.bootlab.io/img/flags/es.png"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-title>
                            Spanish
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-avatar size="25">
                            <v-img src="https://appstack.bootlab.io/img/flags/de.png"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-title>
                            German
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-avatar size="25">
                            <v-img src="https://appstack.bootlab.io/img/flags/nl.png"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-title>
                            Dutch
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
                                <!-- <v-icon>mdi-dots-vertical</v-icon> -->
                            </v-btn>
                        </template>
                        <span>More</span>
                    </v-tooltip>
                </template>
                <v-list dense>
                    <v-list-item router link to="/profile">
                        <v-list-item-title>
                            <v-icon class="mr-2">account_circle</v-icon>
                            Profile
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>
                            <v-icon class="mr-2">bar_chart</v-icon>
                            Analytics
                        </v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <v-list-item-title>
                            <v-icon class="mr-2">settings</v-icon>
                            Setting & Privacy
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>
                            <v-icon class="mr-2">help</v-icon>
                            Help
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>
                            <v-icon class="mr-2">power_settings_new</v-icon>
                            Sign Out
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
        <v-card tile color="primary">
            <v-navigation-drawer v-model="drawer" app>
                <v-list>
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title class="title d-flex align-center">
                                <span class="primary--text">App</span><span>Dash</span></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list rounded dense>
                    <v-subheader>Pages</v-subheader>
                    <div v-for="item in items" :key="item.action">
                        <div v-if="item.items != false ">
                            <v-list-group :key="item.title" v-model="item.active" :prepend-icon="item.action" dense
                                no-action>
                                <template v-slot:activator>
                                    <v-list-item-content>
                                        <v-list-item-title v-text="item.title"></v-list-item-title>
                                    </v-list-item-content>
                                </template>
                                <v-list-item v-for="subItem in item.items" :key="subItem.title" link router dense
                                    :to="subItem.routes">
                                    <v-list-item-content>
                                        <v-list-item-title v-text="subItem.title"></v-list-item-title>
                                    </v-list-item-content>

                                </v-list-item>
                            </v-list-group>
                        </div>
                        <div v-else>
                            <v-list-item-group v-model="item.active">
                                <v-list-item link router :to="item.routes" @click="currentPageName=$route.name">
                                    <v-list-item-content>
                                        <v-list-item-title v-text="item.title"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </div>
                    </div>
                </v-list>
            </v-navigation-drawer>
        </v-card>
    </nav>
</template>
<script>
    export default {
        name: "Navbar",
        data() {
            return {
                dark: true,
                currentPageName: '',
                pagetitle: 'Home',
                link: 'somwehere',
                routes: [],
                drawer: true,
                mini: false,
                //LIST DRAWER *******************************************************
                items: [{
                        action: 'dashboard',
                        name: 'Home',
                        title: 'Dashboard',
                        active: true,
                        routes: '',
                        items: [{
                            name: 'Default',
                            title: 'Default',
                            active: true,
                            routes: '/',
                            items: false
                        }, {
                            name: 'Analytics',
                            title: 'Analytics',
                            active: false,
                            routes: '/dashboardanalytics',
                            items: false
                        }, {
                            name: 'Ecommerce',
                            title: 'Ecommerce',
                            active: false,
                            routes: '/dashboardecommerce',
                            items: false
                        }, {
                            name: 'Social',
                            title: 'Social',
                            active: false,
                            routes: '/dashboardsocial',
                            items: false
                        }, {
                            name: 'Crypto',
                            title: 'Crypto',
                            active: false,
                            routes: '/dashboardCrypto',
                            items: false
                        }],
                    },
                    //LIST DRAWER *******************************************************
                    {
                        action: 'library_books',
                        name: 'Pages',
                        title: 'Pages',
                        active: false,
                        routes: '',
                        items: [{
                                name: 'Profile',
                                title: 'Profile',
                                active: true,
                                routes: '/profile',
                                items: false,
                            },
                            {
                                title: 'Settings',
                                name: 'Settings',
                                active: true,
                                routes: '/settings',
                                items: false,
                            },
                            {
                                title: 'Clients',
                                name: 'Clients',
                                active: true,
                                routes: '/clients',
                                items: false,
                            },
                            {
                                title: 'Projects',
                                name: 'Projects',
                                active: true,
                                routes: '',
                                items: [{
                                    title: 'List',
                                    name: 'List',
                                    active: false,
                                    routes: '/',
                                    items: false
                                }, {
                                    title: 'Detail',
                                    name: 'Detail',
                                    active: false,
                                    routes: '/',
                                    items: false
                                }],
                            },
                            {
                                title: 'Invoice',
                                name: 'Invoice',
                                routes: '/invoice',
                                active: true,
                                items: false,
                            },
                            {
                                title: 'Pricing',
                                name: 'Pricing',
                                routes: '/pricing',
                                active: true,
                                items: false,
                            },
                            {
                                title: 'Tasks',
                                name: 'Tasks',
                                routes: '/tasks',
                                active: true,
                                items: false,
                            },
                            {
                                title: 'Blank Page',
                                name: 'Blank Page',
                                routes: '/blank-page',
                                active: true,
                                items: false,
                            },
                        ],
                    },
                    {
                        action: 'group',
                        name: 'Auth',
                        title: 'Auth',
                        active: false,
                        routes: '',
                        items: [{
                                title: 'Sign In',
                                name: 'SignIn',
                                routes: '/signin',
                                active: true,
                                items: false,
                            },
                            {
                                title: 'Sign Up',
                                name: 'SignUp',
                                routes: '/signup',
                                active: true,
                                items: false,
                            },
                            {
                                title: 'Reset Password',
                                name: 'ResetPassword',
                                routes: '/reset-password',
                                active: true,
                                items: false,
                            },
                            {
                                title: '404 Page',
                                name: 'fourofourpage',
                                routes: '/404',
                                active: true,
                                items: false,
                            },
                            {
                                title: '500 Page',
                                name: 'fiveoopage',
                                routes: '/500',
                                active: true,
                                items: false,
                            },
                        ],
                    },
                    {
                        action: 'supervised_user_circle',
                        name: 'Documentation',
                        title: 'Documentation',
                        active: false,
                        routes: '',
                        items: [{
                                title: 'Introduction',
                                name: 'Introduction',
                                routes: '/introduction',
                                items: false
                            },
                            {
                                title: 'Getting Started',
                                name: 'Getting Started',
                                routes: '/getting-started',
                                active: true,
                                items: false,
                            }, {
                                title: 'Plugins',
                                name: 'Plugins',
                                routes: '/plugins',
                                active: true,
                                items: false,
                            }, {
                                title: 'Changelog',
                                name: 'Changelog',
                                routes: '/changelog',
                                active: true,
                                items: false,
                            }
                        ],
                    },
                    {
                        action: 'dynamic_feed',
                        name: 'Examination',
                        title: 'Examination',
                        active: false,
                        routes: '',
                        items: [{
                                action: 'menu_book',
                                title: 'Exam Group',
                                name: 'Exam Group',
                                routes: '/exam-groups',
                                items: false
                            },
                            {
                                action: 'grade',
                                title: 'Grade',
                                name: 'Grade',
                                routes: '/grades',
                                active: true,
                                items: false,
                            },
                            {
                                action: '360',
                                title: 'Grade Mapping',
                                name: 'Grade Mapping',
                                routes: '/grade-mappings',
                                active: true,
                                items: false,
                            },
                            {
                                action: 'post_add',
                                title: 'Marks',
                                name: 'Marks',
                                routes: '/markses',
                                active: true,
                                items: false,
                            },
                            {
                                action: 'bar_chart',
                                title: 'Result',
                                name: 'Result',
                                routes: '/results',
                                active: true,
                                items: false,
                            },
                        ],
                    },
                    {
                        action: 'launch',
                        name: 'Activities',
                        title: 'Activities',
                        active: false,
                        routes: '',
                        items: [{
                                action: 'calendar_today',
                                title: 'Calendar',
                                name: 'Calendar',
                                routes: '/calendar',
                                items: false
                            },
                            {
                                action: 'note',
                                title: 'Blog',
                                name: 'Blog',
                                routes: '/blog',
                                items: false
                            },
                            {
                                action: 'whatshot',
                                title: 'Notice',
                                name: 'Notice',
                                routes: '/notices',
                                active: true,
                                items: false,
                            },
                            {
                                action: 'today',
                                title: 'Event',
                                name: 'Event',
                                routes: '/events',
                                active: true,
                                items: false,
                            },
                        ],
                    },
                    {
                        action: 'settings',
                        name: 'Settings',
                        title: 'Settings',
                        active: false,
                        routes: '',
                        items: [{
                                action: 'class',
                                title: 'General Settings',
                                name: 'General Settings',
                                active: true,
                                routes: '/general-setting',
                                items: false,
                            },
                            {
                                action: 'color_lens',
                                title: 'Appearance Settings',
                                name: 'Appearance Settings',
                                active: true,
                                routes: '/section',
                                items: false,
                            },
                            {
                                action: 'import_export',
                                title: 'Class & Section',
                                name: 'All Class & Section',
                                active: true,
                                routes: '/class-rel-section',
                                items: false,
                            },
                        ],
                    },
                ],
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
        },
        watch: {
            darkmodemethod() {
                this.dark = !this.dark
                localStorage.setItem('darkmode', this.dark);
                this.$vuetify.theme.dark = this.dark
            },
        },
        methods: {
            toggle() {
                this.$root.fullscreen = !this.$root.fullscreen
            },
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

</style>