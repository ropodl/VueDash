<template>
    <div class="settings">
        <v-container fluid>
            <v-row>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
                    <v-tabs vertical rounded>
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
                        <v-tab>
                            Delete Account
                        </v-tab>

                        <v-tab-item>
                            <v-card>
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
                                    a
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>
                                    <p>
                                        Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus
                                        ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros
                                        et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a
                                        orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
                                        imperdiet, leo. Nunc sed turpis.
                                    </p>

                                    <p>
                                        Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas,
                                        lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin
                                        viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a
                                        accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac
                                        felis sit amet ligula pharetra condimentum.
                                    </p>

                                    <p>
                                        Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis
                                        gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis
                                        ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
                                    </p>

                                    <p>
                                        Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero.
                                        Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
                                    </p>

                                    <p class="mb-0">
                                        Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna,
                                        posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam
                                        arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                                    </p>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>
                                    <p>
                                        Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget
                                        dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique
                                        sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget,
                                        vestibulum et, tempor auctor, justo.
                                    </p>

                                    <p class="mb-0">
                                        Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin
                                        sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis,
                                        ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus
                                        interdum sagittis.
                                    </p>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs>
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

            }
        }
    }
</script>
<style scoped>

</style>