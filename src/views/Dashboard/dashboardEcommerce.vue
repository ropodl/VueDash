<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col cols="12" class="py-0">
                    <h1>Welcome back, John Doe!</h1>
                </v-col>
                <v-col cols="12" xs="12" sm="6" md="3" lg="3" xl="3" v-for="carddetail in carddetails"
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
                            <v-progress-linear :color="carddetail.color" height="6" :value="carddetail.percentage" rounded striped>
                            </v-progress-linear>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                    <v-card>
                        <v-card-title class="d-flex justify-space-between">
                            Sales by State
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
                            Insert Map jokes here
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
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
                            Insert Lines chart jokes here
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                    <v-card>
                        <v-card-title class="d-flex justify-space-between">
                            Order Activity
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
                            Insert Timeline jokes here
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8">
                    <v-card>
                        <v-card-title class="d-flex justify-space-between">
                            Top Selling Products
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
                            <v-data-table :headers="topsellingheader" :items="sales">
                                <template v-slot:item.tech="{ item }">
                                    <v-chip color="error" small>{{ item.tech }}</v-chip>
                                </template>
                            </v-data-table>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                    <v-card>
                        <v-card-title class="d-flex justify-space-between">
                            Sales / Revenue
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
                            Insert Bar chart jokes here
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    export default {
        name: 'EcommerceDashboard',
        data() {
            return {
                carddetails: [{
                    id: '1',
                    title: 'Income',
                    badgetext: 'Today',
                    number: '$37.500',
                    percentage: '57',
                    color: 'primary'
                }, {
                    id: '2',
                    title: 'Orders',
                    badgetext: 'Annual',
                    number: '3.282',
                    percentage: '82',
                    color: 'warning'
                }, {
                    id: '3',
                    title: 'Activity',
                    badgetext: 'Monthly',
                    number: '$82.400',
                    percentage: '32',
                    color: 'blue darken-4'
                }, {
                    id: '4',
                    title: 'Revenue',
                    badgetext: 'Yearly',
                    number: '$82.400',
                    percentage: '32',
                    color: 'success'
                }],
                topsellingheader: [{
                    text: 'Name',
                    align: 'start',
                    value: 'name'
                },{
                    text: 'Tech',
                    align: 'center',
                    value: 'tech'
                },{
                    text: 'License',
                    align: 'center',
                    value: 'license'
                },{
                    text: 'Tickets',
                    align: 'center',
                    value: 'ticket'
                },{
                    text: 'Sales',
                    align: 'end',
                    value: 'sale'
                }],
                sales: [{
                    name: 'Abel Theme',
                    tech : 'Angular',
                    license: 'Single License',
                    ticket: '80',
                    sale: '150'
                }],
                items: [{
                        title: 'Action',
                        route: '/'
                    },{
                        title: 'Another Action',
                        route: '/'
                    },{
                        title: 'Something else here',
                        route: '/'
                    }
                ]
            }
        }
    }
</script>
<style scoped>

</style>