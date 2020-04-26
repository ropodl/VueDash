<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col cols="12" class="py-0">
                    <h1>Welcome back, John Doe!</h1>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" class="py-0">
                    <v-row>
                        <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6" v-for="carddetail in carddetails"
                            :key="carddetail.id">
                            <v-card>
                                <v-card-title class="d-flex justify-space-between">{{ carddetail.title }} <v-chip small
                                        :color="carddetail.color">
                                        {{ carddetail.badgetext }}
                                    </v-chip>
                                </v-card-title>
                                <v-card-text>
                                    <v-flex class="d-flex align-center justify-space-between">
                                        <span class="headline font-weight-bold"> {{ carddetail.number }} </span>
                                        <span class="title font-weight-light"> {{ carddetail.percentage }}% </span>
                                    </v-flex>
                                </v-card-text>
                                <v-card-text class="pa-0">
                                    <v-progress-linear :color="carddetail.color" height="6"
                                        :value="carddetail.percentage" rounded striped>
                                    </v-progress-linear>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" class="pa-0">
                    <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
                        <v-card>
                            <v-card-title class="d-flex justify-space-between">
                                Total Revenue
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
                                Insert World Map jokes here
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                    <v-card>
                        <v-card-title class="d-flex justify-space-between">
                            Languages
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
                        <v-card-text class="pa-0">
                            <v-data-table hide-default-footer :headers="languageheader" :items="languages">
                                <template v-slot:item.userpercent="{ item }">
                                    <v-progress-linear color="primary" height="20" :value="item.userpercent" rounded>
                                        {{ item.userpercent }}%
                                    </v-progress-linear>
                                </template>
                            </v-data-table>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                    <v-card>
                        <v-card-title class="d-flex justify-space-between">
                            Mobile / Desktop
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
                            Insert bar chart jokes here
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                    <v-card>
                        <v-card-title class="d-flex justify-space-between">
                            Interests
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
                            Insert Radar chart jokes here
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                    <v-card>
                        <v-card-title class="d-flex justify-space-between">
                            Source / Medium
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
                            Insert Pie chart jokes here
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8">
                    <v-card>
                        <v-card-title class="d-flex justify-space-between">
                            Traffic
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
                        <v-card-text class="pa-0">
                            <v-data-table :headers="trafficheader" :items="traffic">
                                <template v-slot:item.bouncerate="{ item }">
                                    <span class="error--text">
                                        {{ item.bouncerate }}%
                                    </span>
                                </template>
                            </v-data-table>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    export default {
        name: 'AnalyticsDashboard',
        data() {
            return {
                carddetails: [{
                    id: '1',
                    title: 'Visitors',
                    badgetext: 'Today',
                    number: '17.212',
                    percentage: '57',
                    color: 'primary'
                }, {
                    id: '2',
                    title: 'Bounce',
                    badgetext: 'Annual',
                    number: '2.364',
                    percentage: '82',
                    color: 'warning'
                }, {
                    id: '3',
                    title: 'Real-Time',
                    badgetext: 'Monthly',
                    number: '1.856',
                    percentage: '64',
                    color: 'blue darken-4'
                }, {
                    id: '4',
                    title: 'Activity',
                    badgetext: 'Yearly',
                    number: '57.300',
                    percentage: '32',
                    color: 'success'
                }],
                languageheader: [{
                        text: 'Language',
                        align: 'start',
                        value: 'language',
                    },
                    {
                        text: 'Users',
                        align: 'start',
                        value: 'users'
                    },
                    {
                        text: 'Users in %',
                        align: 'center',
                        value: 'userpercent'
                    }
                ],
                languages: [{
                    language: 'en-us',
                    users: '735',
                    userpercent: '43'
                }, {
                    language: 'en-gb',
                    users: '223',
                    userpercent: '27'
                }, {
                    language: 'fr-fr',
                    users: '181',
                    userpercent: '22'
                }, {
                    language: 'es-es',
                    users: '132',
                    userpercent: '16'
                }, {
                    language: 'de-de',
                    users: '118',
                    userpercent: '15'
                }, {
                    language: 'ru-ru',
                    users: '98',
                    userpercent: '13'
                }],
                trafficheader: [{
                    text: 'Source',
                    align: 'start',
                    value: 'source'
                }, {
                    text: 'Users',
                    align: 'center',
                    value: 'users'
                }, {
                    text: 'Sessions',
                    align: 'center',
                    value: 'sessions'
                }, {
                    text: 'Bounce Rate',
                    align: 'center',
                    value: 'bouncerate'
                }, {
                    text: 'Avg. Session Duration',
                    align: 'end',
                    value: 'sessionduration'
                }],
                traffic: [{
                    source: 'Google',
                    users: '1023',
                    sessions: '1265',
                    bouncerate: '27.23',
                    sessionduration: '00:06:18'
                }],
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
        },
        mounted() {
            
        }
    }
</script>