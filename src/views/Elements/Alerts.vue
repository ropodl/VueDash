<template>
    <div class="alerts">
        <v-container fluid>
            <v-row>
                <v-col cols="12" class="py-0">
                    <h1>Alerts</h1>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
                    <v-card>
                        <v-card-title>Default alerts</v-card-title>
                        <v-card-subtitle>Alerts with contextual background color.</v-card-subtitle>
                        <v-card-text>
                            <v-alert v-for="defaultalert in defaultalerts" :key="defaultalert.id"
                                :color="defaultalert.color" dark dismissible> Hello there! A simple {{ defaultalert.color }}
                                alert—check it out! </v-alert>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
                    <v-card>
                        <v-card-title>Icon alerts</v-card-title>
                        <v-card-subtitle>Alerts with icon and background color.</v-card-subtitle>
                        <v-card-text>
                            <v-alert v-for="defaultalert in defaultalerts" :key="defaultalert.id"
                                :color="defaultalert.color" icon="notifications" dark dismissible>
                                Hello there! A simple {{ defaultalert.color }} alert—check it
                                out!
                            </v-alert>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
                    <v-card>
                        <v-card-title>Icon alerts</v-card-title>
                        <v-card-subtitle>Alerts with contextual outline color.</v-card-subtitle>
                        <v-card-text>
                            <v-alert v-for="defaultalert in defaultalerts" :key="defaultalert.id"
                                :color="defaultalert.color" outlined dismissible>
                                <!-- <v-avatar> -->
                                <v-icon class="mr-2" :color="defaultalert.color">notifications</v-icon>
                                Hello there! A simple {{ defaultalert.color }} alert—check it
                                out!
                            </v-alert>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
                    <v-card>
                        <v-card-title>Dense alerts</v-card-title>
                        <v-card-subtitle>Alerts with contextual outline color but dense.</v-card-subtitle>
                        <v-card-text>
                            <v-alert v-for="defaultalert in defaultalerts" :key="defaultalert.id"
                                :color="defaultalert.color" icon="notifications" outlined dismissible dense>
                                Hello there! A simple {{ defaultalert.color }} alert—check it
                                out!
                            </v-alert>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
                    <v-card>
                        <v-card-title>Alerts with additional content</v-card-title>
                        <v-card-subtitle>Alerts with large contents.</v-card-subtitle>
                        <v-card-text>
                            <v-alert v-for="defaultalert in defaultalerts" :key="defaultalert.id"
                                :color="defaultalert.color" outlined dismissible>
                                <div class="title">Well Done!</div>
                                Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                                <v-divider class="my-2"></v-divider>
                                Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                            </v-alert>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
                    <v-card>
                        <v-card-title>Alerts with buttons</v-card-title>
                        <v-card-subtitle>Alerts with actions.</v-card-subtitle>
                        <v-card-text>
                            <v-alert v-for="defaultalert in defaultalerts" :key="defaultalert.id"
                                :color="defaultalert.color" outlined dismissible>
                                <div class="title">Well Done!</div>
                                Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                                <v-divider class="my-2"></v-divider>
                                <v-btn color="success" class="mr-2">Okay!</v-btn>
                                <v-btn color="error">No thanks</v-btn>
                            </v-alert>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'Alerts',
        data() {
            return {
                defaultalerts: [{
                    id: '1',
                    color: 'primary'
                }, {
                    id: '2',
                    color: 'secondary'
                }, {
                    id: '3',
                    color: 'success'
                }, {
                    id: '4',
                    color: 'error'
                }, {
                    id: '5',
                    color: 'warning'
                }]
            }
        }
    }
</script>

<style>

</style>