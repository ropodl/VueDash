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

                <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8">
                    <v-card>
                        <v-card-subtitle>Latest Projects</v-card-subtitle>
                        <v-divider></v-divider>
                        <v-data-table :headers="header" :items="project">
                            <template v-slot:item.status="{ item }">
                                <v-chip>{{ item.status }}</v-chip>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-col>

            </v-row>
        </v-container>
    </div>
</template>
<script>
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
                        value: 'startdate'
                    },
                    {
                        text: 'End Date',
                        value: 'enddate'
                    },
                    {
                        text: 'Status',
                        value: 'status'
                    },
                    {
                        text: 'Assignee',
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
                }]
            }
        },
        computed: {},
        watch: {}
    }
</script>
<style scoped>
    .card-icon {
        font-size: 50px;
    }
</style>