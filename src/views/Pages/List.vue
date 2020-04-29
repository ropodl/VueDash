<template>
    <div class="list">
        <v-container fluid>
            <v-row>
                <v-col cols="12" class="py-0">
                    <h1>Project List</h1>
                </v-col>
                <v-col cols="12" xs="12" sm="6" md="6" lg="4" xl="4" v-for="todo in todos" :key="todo">
                    <v-card>
                        <v-img height="150" v-if="todo.src" :src="todo.src"></v-img>
                        <v-card-title class="d-flex justify-space-between pb-0">
                            <div>
                                {{ todo.title }}
                            </div>
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
                        <!-- <v-divider></v-divider> -->
                        <v-card-text>
                            <v-chip small :color="todo.color">
                                {{ todo.badgeStatus }}
                            </v-chip>
                        </v-card-text>
                        <v-card-text class="pt-0">
                            {{ todo.desc }}
                        </v-card-text>
                        <v-card-text class="pt-0">
                            <v-avatar class="mr-2" size="40" v-for="avatar in todo.avatars" :key="avatar.src">
                                <v-img :src="avatar.src"></v-img>
                            </v-avatar>
                        </v-card-text>
                        <v-card-text class="py-0">
                            <div class="d-flex justify-space-between body-1">
                                <span>
                                Progress
                                </span>
                                <span>
                                    {{ todo.progressValue }}%
                                </span>
                            </div>
                        </v-card-text>
                        <v-card-text class="pa-0">
                            <v-progress-linear color="success" height="6" :value="todo.progressValue" rounded striped></v-progress-linear>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'List',
        data() {
            return {
                todos: [{
                    id: '1',
                    src: '',
                    title: 'Landing Page Redesign',
                    badgeStatus: 'Finished',
                    desc: 'Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.',
                    avatars: [{
                        src: 'https://appstack.bootlab.io/img/avatars/avatar.jpg'
                    }, {
                        src: 'https://appstack.bootlab.io/img/avatars/avatar-2.jpg'
                    },{
                        src: 'https://appstack.bootlab.io/img/avatars/avatar-3.jpg'
                    }],
                    color: 'success',
                    progressValue: '100'
                },{
                    id: '2',
                    src: 'https://images.unsplash.com/photo-1587666146633-78b032acb7c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                    title: 'Landing Page Redesign',
                    badgeStatus: 'In Progress',
                    desc: 'Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.',
                    avatars: [{
                        src: 'https://appstack.bootlab.io/img/avatars/avatar.jpg'
                    }, {
                        src: 'https://appstack.bootlab.io/img/avatars/avatar-2.jpg'
                    },{
                        src: 'https://appstack.bootlab.io/img/avatars/avatar-3.jpg'
                    }],
                    color: 'warning',
                    progressValue: '75'

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
        }
    }
</script>

<style>

</style>