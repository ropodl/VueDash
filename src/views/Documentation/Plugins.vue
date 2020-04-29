<template>
    <div class="plugins">
        <v-container fluid>
            <v-row>
                <v-col cols="12" class="py-0">
                    <h1>Plugins</h1>
                </v-col>
                <v-col cols="12">
                    <v-card>
                        <v-card-text>
                            This template comes with multiple plugins for the demo pages, here is the list with the
                            official documentation/website for each one.
                        </v-card-text>
                        <v-card-text class="pa-0">
                            <v-simple-table>
                                <template v-slot:default>
                                    <thead>
                                        <tr>
                                            <th class="text-left">Name</th>
                                            <th class="text-left">Documentation / Website</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="plugin in plugins" :key="plugin.name">
                                            <td>{{ plugin.name }}</td>
                                            <td>
                                                <router-link :to='plugin.web'>
                                                    {{ plugin.web }}
                                                </router-link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    export default {
        name: 'Plugins',
        data() {
            return {
                plugins: [{
                    name: 'Vue i18n',
                    web: 'https://kazupon.github.io/vue-i18n/'
                }, {
                    name: 'Chart.js',
                    web: 'https://www.chartjs.org/'
                }, {
                    name: 'ApexCharts',
                    web: 'https://apexcharts.com/'
                }]

            }
        }
    }
</script>
<style scoped>

</style>