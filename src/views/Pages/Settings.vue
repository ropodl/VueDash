<template>
    <div class="settings">
        <v-container fluid>
            <v-row>
                <v-col cols="12" class="py-0">
                    <h1>Settings</h1>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
                    <v-card>
                    <v-tabs vertical>
                        <v-tab>
                            Appearance
                        </v-tab>
                        <v-tab>
                            Account
                        </v-tab>
                        <v-tab>
                            Password
                        </v-tab>
                        <v-tab>
                            Privacy and Safety
                        </v-tab>
                        <v-tab>
                            Email and Notifications
                        </v-tab>
                        <v-tab>
                            Web Notifications
                        </v-tab>
                        <v-tab>
                            Widgets
                        </v-tab>
                        <v-tab>
                            Your Data
                        </v-tab>
                        <v-tab class="error--text">
                            <!-- <div class="error--text"> -->
                                Delete Account
                            <!-- </div> -->
                        </v-tab>

                        <v-tab-item>
                            <v-card flat>
                                <v-card-title class="justify-space-between">Appearance Settings
                                    <v-menu offset-y>
                                        <template v-slot:activator="{ on }">
                                            <v-btn v-on="on" icon>
                                                <v-icon>more_vert</v-icon>
                                            </v-btn>
                                        </template>
                                        <v-list dense>
                                            <v-list-item v-for="(item, index) in items" :key="index">
                                                <v-list-item-title @click="alert('awdaw')">{{ item.title }}
                                                </v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text class="py-0">
                                    <v-list>
                                        <v-list-item two-line>
                                            <v-list-item-content>
                                                <v-list-item-title>Dark Mode</v-list-item-title>
                                                <v-list-item-subtitle>Give your eye some rest?</v-list-item-subtitle>
                                            </v-list-item-content>
                                            <v-list-item-action>
                                                <v-switch></v-switch>
                                            </v-list-item-action>
                                        </v-list-item>
                                    </v-list>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-text class="py-0">
                                    <v-list>
                                        <v-list-item two-line>
                                            <v-list-item-content class="pt-0">
                                                <v-list-item-title>Primary Color</v-list-item-title>
                                                <v-list-item-subtitle>What is your favourite color?
                                                </v-list-item-subtitle>
                                            </v-list-item-content>
                                            <v-list-item-action>
                                                <div>
                                                    <v-text-field solo dense rounded v-model="color"
                                                        style="width:180px;">
                                                        <template v-slot:prepend-inner>
                                                            <v-avatar class="mr-2" size="30" :color="color">
                                                            </v-avatar>
                                                        </template>
                                                    </v-text-field>
                                                </div>
                                            </v-list-item-action>
                                        </v-list-item>
                                    </v-list>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>

                        <v-tab-item>
                            <v-card flat class="mb-3">
                                <v-card-title class="d-flex justify-space-between">
                                    Public Info
                                    <v-menu offset-y>
                                        <template v-slot:activator="{ on }">
                                            <v-btn v-on="on" icon>
                                                <v-icon>more_vert</v-icon>
                                            </v-btn>
                                        </template>
                                        <v-list dense>
                                            <v-list-item v-for="(item, index) in items" :key="index">
                                                <v-list-item-title @click="alert('awdaw')">{{ item.title }}
                                                </v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text>
                                    <v-row>
                                        <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8" class="py-0">
                                            <v-text-field label="Username" outlined dense></v-text-field>
                                            <v-textarea label="Biography" outlined dense></v-textarea>
                                            <v-btn color="primary">Save changes</v-btn>
                                        </v-col>
                                        <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                                            <v-flex class="d-flex justify-center" style="width:100%;">
                                                <v-avatar size="120">
                                                    <v-img src="https://appstack.bootlab.io/img/avatars/avatar.jpg">
                                                    </v-img>
                                                </v-avatar>
                                            </v-flex>
                                            <br>
                                            <v-btn class="d-flex mx-auto" color="primary" small>
                                                <v-icon class="mr-3">cloud_upload</v-icon> Upload
                                            </v-btn>
                                            <p class="mt-2 body-2 text-center">For best results, use an image at least
                                                128px by 128px in .jpg format</p>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>

                            <v-card flat>
                                <v-card-title class="d-flex justify-space-between">
                                    Private Info
                                    <v-menu offset-y>
                                        <template v-slot:activator="{ on }">
                                            <v-btn v-on="on" icon>
                                                <v-icon>more_vert</v-icon>
                                            </v-btn>
                                        </template>
                                        <v-list dense>
                                            <v-list-item v-for="(item, index) in items" :key="index">
                                                <v-list-item-title @click="alert('awdaw')">{{ item.title }}
                                                </v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text>
                                    <v-row>
                                        <v-col cols="6" class="py-0">
                                            <v-text-field label="First Name" outlined dense></v-text-field>
                                        </v-col>
                                        <v-col cols="6" class="py-0">
                                            <v-text-field label="Last Name" outlined dense></v-text-field>
                                        </v-col>
                                        <v-col cols="12" class="py-0">
                                            <v-text-field label="Email" outlined dense></v-text-field>
                                        </v-col>
                                        <v-col cols="12" class="py-0">
                                            <v-text-field label="Address" outlined dense></v-text-field>
                                        </v-col>
                                        <v-col cols="12" class="py-0">
                                            <v-text-field label="Address 2" outlined dense></v-text-field>
                                        </v-col>
                                        <v-col cols="6" class="py-0">
                                            <v-text-field label="City" outlined dense></v-text-field>
                                        </v-col>
                                        <v-col cols="3" class="py-0">
                                            <v-select :items="items" label="Choose" outlined dense></v-select>
                                        </v-col>
                                        <v-col cols="3" class="py-0">
                                            <v-text-field label="Zip Code" outlined dense></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-btn color="primary">Save Changes</v-btn>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-title class="d-flex justify-space-between">
                                    Password
                                    <v-menu offset-y>
                                        <template v-slot:activator="{ on }">
                                            <v-btn v-on="on" icon>
                                                <v-icon>more_vert</v-icon>
                                            </v-btn>
                                        </template>
                                        <v-list dense>
                                            <v-list-item v-for="(item, index) in items" :key="index">
                                                <v-list-item-title @click="alert('awdaw')">{{ item.title }}
                                                </v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field label="Current Password" outlined dense>
                                                <a href="https://www.facebook.com">Forgot password?</a>
                                            </v-text-field>
                                            <div class="d-flex justify-end body-2">
                                                <router-link to="/">Forgot Password?</router-link>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" class="py-0">
                                            <v-text-field label="New Password" outlined dense></v-text-field>
                                        </v-col>
                                        <v-col cols="12" class="py-0">
                                            <v-text-field label="Verify Password" outlined dense></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-title class="d-flex justify-space-between">
                                    Privacy and Safety
                                    <v-menu offset-y>
                                        <template v-slot:activator="{ on }">
                                            <v-btn v-on="on" icon>
                                                <v-icon>more_vert</v-icon>
                                            </v-btn>
                                        </template>
                                        <v-list dense>
                                            <v-list-item v-for="(item, index) in items" :key="index">
                                                <v-list-item-title @click="alert('awdaw')">{{ item.title }}
                                                </v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text>
                                    <p>
                                        Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget
                                        dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique
                                        sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget,
                                        vestibulum et, tempor auctor, justo.
                                    </p>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-title class="d-flex justify-space-between">
                                    Email and Notifications
                                    <v-menu offset-y>
                                        <template v-slot:activator="{ on }">
                                            <v-btn v-on="on" icon>
                                                <v-icon>more_vert</v-icon>
                                            </v-btn>
                                        </template>
                                        <v-list dense>
                                            <v-list-item v-for="(item, index) in items" :key="index">
                                                <v-list-item-title @click="alert('awdaw')">{{ item.title }}
                                                </v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text>
                                    <p>
                                        Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget
                                        dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique
                                        sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget,
                                        vestibulum et, tempor auctor, justo.
                                    </p>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-title class="d-flex justify-space-between">
                                    Web Notifications
                                    <v-menu offset-y>
                                        <template v-slot:activator="{ on }">
                                            <v-btn v-on="on" icon>
                                                <v-icon>more_vert</v-icon>
                                            </v-btn>
                                        </template>
                                        <v-list dense>
                                            <v-list-item v-for="(item, index) in items" :key="index">
                                                <v-list-item-title @click="alert('awdaw')">{{ item.title }}
                                                </v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text>
                                    <p>
                                        Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget
                                        dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique
                                        sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget,
                                        vestibulum et, tempor auctor, justo.
                                    </p>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-title class="d-flex justify-space-between">
                                    Widgets
                                    <v-menu offset-y>
                                        <template v-slot:activator="{ on }">
                                            <v-btn v-on="on" icon>
                                                <v-icon>more_vert</v-icon>
                                            </v-btn>
                                        </template>
                                        <v-list dense>
                                            <v-list-item v-for="(item, index) in items" :key="index">
                                                <v-list-item-title @click="alert('awdaw')">{{ item.title }}
                                                </v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text>
                                    <p>
                                        Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget
                                        dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique
                                        sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget,
                                        vestibulum et, tempor auctor, justo.
                                    </p>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-title class="d-flex justify-space-between">
                                    Your Data
                                    <v-menu offset-y>
                                        <template v-slot:activator="{ on }">
                                            <v-btn v-on="on" icon>
                                                <v-icon>more_vert</v-icon>
                                            </v-btn>
                                        </template>
                                        <v-list dense>
                                            <v-list-item v-for="(item, index) in items" :key="index">
                                                <v-list-item-title @click="alert('awdaw')">{{ item.title }}
                                                </v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text>
                                    <p>
                                        Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget
                                        dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique
                                        sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget,
                                        vestibulum et, tempor auctor, justo.
                                    </p>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-title class="d-flex justify-space-between">
                                    Delete Account
                                    <v-menu offset-y>
                                        <template v-slot:activator="{ on }">
                                            <v-btn v-on="on" icon>
                                                <v-icon>more_vert</v-icon>
                                            </v-btn>
                                        </template>
                                        <v-list dense>
                                            <v-list-item v-for="(item, index) in items" :key="index">
                                                <v-list-item-title @click="alert('awdaw')">{{ item.title }}
                                                </v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text>
                                    <p>
                                        Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget
                                        dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique
                                        sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget,
                                        vestibulum et, tempor auctor, justo.
                                    </p>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    export default {
        name: 'Settings',
        data() {
            return {
                color: '#2d2d2d',
                items: [{
                        title: 'Action',
                        route: '/'
                    },
                    {
                        title: 'Another Action',
                        route: '/'
                    },
                    {
                        title: 'Something else here',
                        route: '/'
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    .v-tab {
        justify-content: start !important;
    }
</style>