<template>
    <div class="notifications">
        <v-container fluid>
            <v-row>
                <v-col cols="12" class="py-0">
                    <h1>Notifications</h1>
                </v-col>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Snackbar Notifications</v-card-title>
                        <v-card-subtitle>Simple JavaScript toast notifications</v-card-subtitle>
                        <v-form @submit.prevent="showsnackbar">
                        <v-row>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" class="py-0">

                                <v-card-text>
                                    <v-text-field label="Enter a title" outlined dense></v-text-field>
                                    <v-text-field label="Message" outlined dense></v-text-field>
                                    <v-select label="Type" v-model="type" :items="types" outlined dense></v-select>
                                    <v-select label="Duration" v-model="duration" :items="durations" outlined dense></v-select>
                                    <v-checkbox label="Progress bar" value="John" hide-details></v-checkbox>
                                    <v-checkbox label="Close button" value="John" hide-details></v-checkbox>
                                    <v-checkbox label="Newest on top" value="John" hide-details></v-checkbox>
                                </v-card-text>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" class="py-0">
                                <v-card-title class="pb-0">Position</v-card-title>
                                <v-card-text>
                                    <v-radio-group v-model="radios" :mandatory="false">
                                        <v-radio label="Top Right" value="tr"></v-radio>
                                        <v-radio label="Top Center" value="tc"></v-radio>
                                        <v-radio label="Top Left" value="tl"></v-radio>
                                        <v-radio label="Bottom Right" value="br"></v-radio>
                                        <v-radio label="Bottom Center" value="bc"></v-radio>
                                        <v-radio label="Bottom Left" value="bl"></v-radio>
                                    </v-radio-group>
                                </v-card-text>
                            </v-col>
                        </v-row>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-btn class="px-5" color="primary" type="submit">Show notification</v-btn>
                            <v-btn text class="px-5">Clear all</v-btn>
                        </v-card-actions>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-snackbar v-model="snackbar" multi-line timeout="">
            a
            <v-divider></v-divider>
            b
        </v-snackbar>
    </div>
</template>

<script>
    export default {
        name: 'notifications',
        data() {
            return {
                snackbar: false,
                type: '',
                duration: '',
                timeout: '6000',
                types: ['Primary', 'Error', 'Success', 'Warning'],
                durations: ['2.5s', '5s', '7.5s', '10s']
            }
        },
        methods: {
            showsnackbar(){
                this.snackbar = true
            }
        }
    }
</script>

<style>

</style>