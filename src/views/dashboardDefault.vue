<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" class="pb-0">
                    <p class="headline">
                        Welcome back, John Doe!
                    </p>
                </v-col>
                <v-col cols="12" xs="12" sm="6" md="3" lg="3" xl="3" v-for="carddetail in carddetails"
                    :key="carddetail.id">
                    <v-card>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" xs="3" sm="3" md="3" lg="3" xl="3" class="d-flex justify-center">
                                    <v-icon :class="carddetail.class">{{ carddetail.icon }}</v-icon>
                                </v-col>
                                <v-col cols="12" xs="7" sm="7" md="7" lg="7" xl="7" class="py-0 px-0">
                                    <v-card-title class="pb-0">{{ carddetail.title }}</v-card-title>
                                    <v-card-text>{{ carddetail.text }}</v-card-text>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                    <v-card>
                        <v-card-title class="d-flex justify-space-between">
                            Calendar
                            <span>
                                <v-btn icon @click="$refs.calendar.prev()">
                                    <v-icon>mdi-chevron-left</v-icon>
                                </v-btn>
                                <v-btn icon @click="$refs.calendar.next()">
                                    <v-icon>mdi-chevron-right</v-icon>
                                </v-btn>
                            </span>
                            <v-menu offset-y>
                                <template v-slot:activator="{ on }">
                                    <v-btn v-on="on" icon>
                                        <v-icon>more_vert</v-icon>
                                    </v-btn>
                                </template>
                                <v-list dense>
                                    <v-list-item v-for="(item, index) in items" :key="index">
                                        <v-list-item-title @click="alert('awdaw')">{{ item.title }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text class="pa-0">
                            <v-calendar ref="calendar"></v-calendar>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                    <v-card>
                        <v-card-title class="d-flex justify-space-between">
                            Weekly Sales
                            <v-menu offset-y>
                                <template v-slot:activator="{ on }">
                                    <v-btn v-on="on" icon>
                                        <v-icon>more_vert</v-icon>
                                    </v-btn>
                                </template>
                                <v-list dense>
                                    <v-list-item v-for="(item, index) in items" :key="index">
                                        <v-list-item-title @click="alert('awdaw')">{{ item.title }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>

                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                    <v-card>
                        <v-card-title class="d-flex justify-space-between">
                            Appointments
                            <v-menu offset-y>
                                <template v-slot:activator="{ on }">
                                    <v-btn v-on="on" icon>
                                        <v-icon>more_vert</v-icon>
                                    </v-btn>
                                </template>
                                <v-list dense>
                                    <v-list-item v-for="(item, index) in items" :key="index">
                                        <v-list-item-title @click="alert('awdaw')">{{ item.title }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>

                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8">
                    <v-card>
                        <v-card-title class="d-flex justify-space-between">Latest Projects <v-spacer></v-spacer>
                            <v-menu offset-y>
                                <template v-slot:activator="{ on }">
                                    <v-btn v-on="on" icon>
                                        <v-icon>more_vert</v-icon>
                                    </v-btn>
                                </template>
                                <v-list dense>
                                    <v-list-item v-for="(item, index) in items" :key="index">
                                        <v-list-item-title @click="alert('awdaw')">{{ item.title }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-data-table :headers="header" :items="project" items-per-page="5">
                            <template v-slot:item.status="{ item }">
                                <v-chip>{{ item.status }}</v-chip>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-col>

                <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                    <v-card>
                        <v-card-title class="d-flex justify-space-between">Sales / Revenue<v-spacer></v-spacer>
                            <v-menu offset-y>
                                <template v-slot:activator="{ on }">
                                    <v-btn v-on="on" icon>
                                        <v-icon>more_vert</v-icon>
                                    </v-btn>
                                </template>
                                <v-list dense>
                                    <v-list-item v-for="(item, index) in items" :key="index">
                                        <v-list-item-title link router :to="item.route">
                                            {{ item.title }}
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-card-title>
                        <v-divider></v-divider>
                        <canvas id="myChart" width="400" height="400"></canvas>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    // import canvas from 'chart.js'
    export default {
        name: 'DefaultDashboard',
        data() {
            return {
                msg: 'Lie',
                carddetails: [{
                    id: '1',
                    icon: 'fas fa-shopping-cart',
                    title: '2.562',
                    text: 'Sales Today',
                    class: 'card-icon primary--text pl-3'
                }, {
                    id: '2',
                    icon: 'fas fa-heartbeat',
                    title: '17.212',
                    text: 'Visitors Today',
                    class: 'card-icon warning--text pl-3'
                }, {
                    id: '3',
                    icon: 'fas fa-dollar-sign',
                    title: '$ 24.300',
                    text: 'Total Earnings',
                    class: 'card-icon success--text pl-3'
                }, {
                    id: '4',
                    icon: 'fas fa-shopping-bag',
                    title: '43',
                    text: 'Pending Orders',
                    class: 'card-icon error--text pl-3'
                }],
                header: [{
                        text: 'Name',
                        align: 'start',
                        value: 'name',
                    },
                    {
                        text: 'Start Date',
                        align: 'center',
                        value: 'startdate'
                    },
                    {
                        text: 'End Date',
                        align: 'center',
                        value: 'enddate'
                    },
                    {
                        text: 'Status',
                        align: 'center',
                        value: 'status'
                    },
                    {
                        text: 'Assignee',
                        align: 'center',
                        value: 'assignee'
                    }
                ],
                project: [{
                        name: 'Project Apollo',
                        startdate: '01/01/2018',
                        enddate: '31/06/2018',
                        status: 'Done',
                        assignee: 'Carl Jenkins',
                        badgecolor: ''
                    },
                    {
                        name: 'Project Apollo',
                        startdate: '01/01/2018',
                        enddate: '31/06/2018',
                        status: 'Done',
                        assignee: 'Carl Jenkins',
                        badgecolor: ''
                    },
                    {
                        name: 'Project Apollo',
                        startdate: '01/01/2018',
                        enddate: '31/06/2018',
                        status: 'Done',
                        assignee: 'Carl Jenkins',
                        badgecolor: ''
                    },
                    {
                        name: 'Project Apollo',
                        startdate: '01/01/2018',
                        enddate: '31/06/2018',
                        status: 'Pending',
                        assignee: 'Carl Jenkins',
                        badgecolor: ''
                    },
                    {
                        name: 'Project Apollo',
                        startdate: '01/01/2018',
                        enddate: '31/06/2018',
                        status: 'Done',
                        assignee: 'Carl Jenkins',
                        badgecolor: ''
                    },
                    {
                        name: 'Project Apollo',
                        startdate: '01/01/2018',
                        enddate: '31/06/2018',
                        status: 'Done',
                        assignee: 'Carl Jenkins',
                        badgecolor: ''
                    },
                    {
                        name: 'Project Apollo',
                        startdate: '01/01/2018',
                        enddate: '31/06/2018',
                        status: 'Done',
                        assignee: 'Carl Jenkins',
                        badgecolor: ''
                    },
                    {
                        name: 'Project Apollo',
                        startdate: '01/01/2018',
                        enddate: '31/06/2018',
                        status: 'In Progess',
                        assignee: 'Carl Jenkins',
                        badgecolor: ''
                    },
                    {
                        name: 'Project Apollo',
                        startdate: '01/01/2018',
                        enddate: '31/06/2018',
                        status: 'Done',
                        assignee: 'Carl Jenkins',
                        badgecolor: ''
                    },
                    {
                        name: 'Project Apollo',
                        startdate: '01/01/2018',
                        enddate: '31/06/2018',
                        status: 'Cancelled',
                        assignee: 'Carl Jenkins',
                        badgecolor: ''
                    },
                    {
                        name: 'Project Apollo',
                        startdate: '01/01/2018',
                        enddate: '31/06/2018',
                        status: 'Done',
                        assignee: 'Carl Jenkins',
                        badgecolor: ''
                    }
                ],
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
                ],
            }
        },
        methods: {},
        mounted(){
            
        }
    }
</script>
<style scoped>
    .card-icon {
        font-size: 50px;
    }
</style>