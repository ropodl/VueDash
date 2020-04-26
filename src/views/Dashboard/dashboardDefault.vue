<template>
    <div class="dashboardDefault">
        <v-container fluid>
            <v-row>
                <v-col cols="12" class="py-0">
                    <h1>Welcome back, John Doe!</h1>
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
                        <v-card-title class="d-flex justify-space-between">
                            Total Revenue
                            <v-chip small color="primary">Monthly</v-chip>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <canvas id="totalrevenue" style="height:200px;"></canvas>
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                    <v-card>
                        <v-card-title class="d-flex justify-space-between">
                            Daily Feed
                            <v-chip small color="info">Today</v-chip>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            Insert feed jokes here
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                    <v-card>
                        <v-card-title class="d-flex justify-space-between">
                            Calendar
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
                            <!-- <v-sheet height="600"> -->
                                <v-calendar ref="calendar"></v-calendar>
                            <!-- </v-sheet> -->
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
                            <canvas id="weeklysales" height="400px"></canvas>
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
                        <v-card-text class="pa-0">
                            <v-timeline align-top dense>
                                <v-timeline-item color="pink" small>
                                    <v-row>
                                        <v-col cols="3">
                                            <strong>5pm</strong>
                                        </v-col>
                                        <v-col>
                                            <strong>New Icon</strong>
                                            <div class="caption">Mobile App</div>
                                        </v-col>
                                    </v-row>
                                </v-timeline-item>

                                <v-timeline-item color="teal lighten-3" small>
                                    <v-row>
                                        <v-col cols="3">
                                            <strong>3-4pm</strong>
                                        </v-col>
                                        <v-col>
                                            <strong>Design Stand Up</strong>
                                            <div class="caption mb-2">Hangouts</div>
                                            <v-avatar>
                                                <v-img
                                                    src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown">
                                                </v-img>
                                            </v-avatar>
                                            <v-avatar>

                                                <v-img
                                                    src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned">
                                                </v-img>
                                            </v-avatar>
                                            <v-avatar>
                                                <v-img
                                                    src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale">
                                                </v-img>
                                            </v-avatar>
                                        </v-col>
                                    </v-row>
                                </v-timeline-item>

                                <v-timeline-item color="pink" small>
                                    <v-row>
                                        <v-col cols="3">
                                            <strong>12pm</strong>
                                        </v-col>
                                        <v-col>
                                            <strong>Lunch break</strong>
                                        </v-col>
                                    </v-row>
                                </v-timeline-item>

                                <v-timeline-item color="teal lighten-3" small>
                                    <v-row class="pt-1">
                                        <v-col cols="3">
                                            <strong>9-11am</strong>
                                        </v-col>
                                        <v-col>
                                            <strong>Finish Home Screen</strong>
                                            <div class="caption">Web App</div>
                                        </v-col>
                                    </v-row>
                                </v-timeline-item>
                            </v-timeline>
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
                        <v-data-table :headers="header" :items="project">
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
                        <v-card-text>
                            Insert bar chart jokes here
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    import Chart from 'chart.js'
    export default {
        name: 'DefaultDashboard',
        data() {
            return {
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
        mounted() {
            var ctx = document.getElementById('totalrevenue');
            var totalrevenue = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                        label: 'Sales ($)',
                        fill: true,
                        backgroundColor: "transparent",
                        borderColor: '#d64937', //find what this is
                        data: [2015, 1465, 1487, 1796, 1387, 2123, 2866, 2548, 3902, 4938, 3917, 4927]
                    }, {
                        label: "Orders",
                        fill: true,
                        backgroundColor: "transparent",
                        borderColor: '#2d2d2d',
                        borderDash: [4, 4],
                        data: [928, 734, 626, 893, 921, 1202, 1396, 1232, 1524, 2102, 1506, 1887]
                    }],
                },
                options: {
                    maintainAspectRatio: true,
                    legend: {
                        display: true,
                        position: 'bottom'
                    },
                    tooltips: {
                        intersect: false
                    },
                    hover: {
                        intersect: true
                    }
                }
            });
            totalrevenue.render();
            var ctx2 = document.getElementById('weeklysales');
            var weeklysales = new Chart(ctx2, {
                type: 'pie',
                data: {
                    labels: ['Section A', 'Section B', 'Section C', 'Section D', 'Section E', 'Section F'],
                    datasets: [{
                        label: '# of Students',
                        data: [120, 190, 30, 50, 59, 30],
                        backgroundColor: 'rgba(255, 99, 132, 0.1)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 2
                    }, {
                        options: {}
                    }],
                }
            });
            weeklysales.render();
        }
    }
</script>
<style scoped>
    .card-icon {
        font-size: 50px;
    }
</style>