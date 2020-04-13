<template>
    <nav>
        <v-app-bar color="primary accent-4" dark elevate-on-scroll app>
            <v-app-bar-nav-icon @click="handleMini"></v-app-bar-nav-icon>
            <!-- <v-divider vertical inset v-if="currentRoute != `Home`"></v-divider> -->
            <!-- <v-btn icon @click="$router.go(-1)" v-if="currentRoute != `Home`">
                <v-icon>arrow_back</v-icon>
            </v-btn> -->
            <v-toolbar-title>Lie</v-toolbar-title>
            <!-- <v-toolbar-title>{{currentPageName}}</v-toolbar-title> -->
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
                <template v-slot:activator="{ on: tooltip }">
                    <v-btn icon v-on="{ ...tooltip }">
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                </template>
                <span>Search</span>
            </v-tooltip>
            <v-btn icon class="hidden-sm-and-down" @click="darkmodemethod">
                <v-icon>invert_colors</v-icon>
            </v-btn>
            <v-tooltip bottom>
                <template v-slot:activator="{ on: tooltip }">
                    <v-btn icon class="hidden-sm-and-down" v-on="{ ...tooltip }">
                        <v-icon>help</v-icon>
                    </v-btn>
                </template>
                <span>Help</span>
            </v-tooltip>
            <v-menu left offset-y transition="slide-y-transition" bottom>
                <template v-slot:activator="{ on: menu }">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on: tooltip }">
                            <v-btn icon v-on="{ ...tooltip, ...menu }">
                                <v-badge small color="red" :overlap="true">
                                    <template v-slot:badge>{{ numberofmessages }}</template>
                                    <v-icon>notifications</v-icon>
                                </v-badge>
                            </v-btn>
                        </template>
                        <span>Notifications</span>
                    </v-tooltip>
                </template>
                <v-card :max-width="500">
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
                                <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                        </template>
                        <span>More</span>
                    </v-tooltip>
                </template>
                <v-list>
                    <v-list-item class="hidden-md-and-up">
                        <v-list-item-title>
                            <v-icon class="mr-2">help</v-icon>
                            Help
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>
                            <v-icon class="mr-2">account_circle</v-icon>
                            Profile
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
        <v-card tile>
            <v-navigation-drawer v-model="drawer" app>
                <v-img color="primary" class="profile" :aspect-ratio="16/9"
                    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
                    <v-list>
                        <v-list-item>
                            <v-list-item-avatar>
                                <v-img src="https://www.thispersondoesnotexist.com/"></v-img>
                            </v-list-item-avatar>
                        </v-list-item>
                        <v-list-item link two-line>
                            <v-list-item-content>
                                <v-list-item-title class="title">Name</v-list-item-title>
                                <v-list-item-subtitle>sarox14</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-icon>mdi-menu-down</v-icon>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-img>
                <v-divider></v-divider>
                <v-list rounded dense>
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
                                    <!--                                    <v-list-item-action>-->
                                    <v-icon>{{subItem.action}}</v-icon>
                                    <!--                                    </v-list-item-action>-->

                                    <v-list-item-content>
                                        <v-list-item-title v-text="subItem.title"></v-list-item-title>
                                    </v-list-item-content>

                                </v-list-item>
                            </v-list-group>
                        </div>
                        <div v-else>
                            <v-list-item-group v-model="item.active">
                                <v-list-item link router :to="item.routes" @click="currentPageName=$route.name">
                                    <v-list-item-icon>
                                        <v-icon>{{item.action}}</v-icon>
                                    </v-list-item-icon>
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
                // numberofsmessages: ,
                dark: true,
                currentPageName: '',
                pagetitle: 'Home',
                link: 'somwehee',
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
                          // action: ''
                          name: 'Default',
                          title: 'Default',
                          active: true,
                          routes: '/',
                          items: false
                        }],
                    },
                    //LIST DRAWER *******************************************************
                    {
                        action: 'account_balance',
                        name: 'Academics',
                        title: 'Academics',
                        active: false,
                        routes: '',
                        items: [{
                                action: 'mdi-spade',
                                name: 'Academic Year',
                                title: 'Academic Year',
                                active: true,
                                routes: '/academic-years',
                                items: false,
                            },
                            {
                                action: 'class',
                                title: 'Class',
                                name: 'Class',
                                active: true,
                                routes: '/classes',
                                items: false,
                            },
                            {
                                action: 'edit',
                                title: 'Section',
                                name: 'All Section',
                                active: true,
                                routes: '/sections',
                                items: false,
                            },
                            {
                                action: 'import_export',
                                title: 'Link Section',
                                name: 'Link Section',
                                active: true,
                                routes: '/class-rel-sections',
                                items: false,
                            },
                            {
                                action: 'person',
                                title: 'Student',
                                name: 'Student',
                                routes: '/students',
                                active: true,
                                items: false,
                            },
                            {
                                action: 'house',
                                title: 'House Type',
                                name: 'House Type',
                                routes: '/house-types',
                                active: true,
                                items: false,
                            },
                            {
                                action: 'money_off',
                                title: 'Discount Type',
                                name: 'Discount Type',
                                routes: '/discount-types',
                                active: true,
                                items: false,
                            },
                        ],
                    },
                    {
                        action: 'copyright',
                        name: 'Class & Section',
                        title: 'Subject',
                        active: false,
                        routes: '',
                        items: [{
                                action: 'import_contacts',
                                title: 'Subject',
                                name: 'Subject',
                                routes: '/subjects',
                                active: true,
                                items: false,
                            },
                            {
                                action: 'book',
                                title: 'Link Subject',
                                name: 'Link Subject',
                                routes: '/set-subjects',
                                active: true,
                                items: false,
                            },
                            {
                                action: 'vertical_split',
                                title: 'Routine',
                                name: 'Routine',
                                routes: '/routines',
                                active: true,
                                items: false,
                            },
                        ],
                    },
                    {
                        action: 'supervised_user_circle',
                        name: 'HR / Payroll',
                        title: 'HR / Payroll',
                        active: false,
                        routes: '',
                        items: [{
                                action: 'person_add',
                                title: 'Teacher',
                                name: 'Teacher',
                                routes: '/teachers',
                                items: false
                            },
                            {
                                action: 'person_pin',
                                title: 'Employee',
                                name: 'Employee',
                                routes: '/employees',
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
            // this.currentPageName = this.currentRoute;
        },
        watch: {
            darkmodemethod() {
                this.dark = !this.dark
                localStorage.setItem('darkmode', this.dark);
                //this.dark = !this.dark
                this.$vuetify.theme.dark = this.dark
            },
        },
        methods: {
            // ...mapActions({
            //     signoutAction: "auth/signout"
            // }),
            toggle() {
                this.$root.fullscreen = !this.$root.fullscreen
            },
            darkmodemethod() {
                this.dark = !this.dark
                localStorage.setItem('darkmode', this.dark);
                //this.dark = !this.dark
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
              // this.mini = false
              this.drawer = !this.drawer
                // var a = window.innerWidth;
                // if (a <= 600) {
                //     (this.mini = false), (this.drawer = true);
                // } else if (a >= 601 && a <= 960) {
                //     (this.mini = false), (this.drawer = true);
                // } else if (a >= 961 && a <= 1264) {
                //     (this.mini = false), (this.drawer = true);
                // } else {
                //     if (this.mini == true) {
                //         this.mini = false;
                //         this.drawer = true;
                //     } else {
                //         this.mini = true;
                //         this.drawer = true;
                //     }
                // }
            }
        },
        computed: {
            // ...mapGetters({
            //     authenticated: "auth/authenticated",
            //     user: "auth/user"
            // }),
            // ...mapState({
            //     roles: state => state.auth.roles
            // }),
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
