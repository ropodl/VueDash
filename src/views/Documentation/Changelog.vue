<template>
    <div class="changelog">
        <v-container fluid>
            <v-row>
                <v-col cols="12" class="py-0">
                    <h1>Changelog</h1>
                </v-col>
                <v-col cols="12">
                    <v-card>
                        <div v-for="change in changes" :key="change.id">
                            <v-card-text>
                                <v-chip small color="primary" class="mr-2">{{ change.version }}</v-chip>
                                -
                                <span class="ml-2">
                                    5 October, 2020
                                </span>
                            </v-card-text>
                            <v-card-text class="pt-0">
                                <ul>
                                    <li v-for="item in change.items" :key="item">{{ item.text }}</li>
                                </ul>
                            </v-card-text>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    export default {
        name: 'Changelog',
        data() {
            return {
                changes: [{
                    id: '1',
                    version: 'v1.0',
                    date: '2020 May 21',
                    items : [{
                        text: 'Added Localization with i18n package'
                    },{
                        text: 'Added'
                    }]
                }]
            }
        }
    }
</script>