<template>
    <div class="pricing">
        <v-container fluid>
            <v-row>
                <v-col cols="12" class="pa-12 text-center">
                    <div class="display-2 font-weight-thin">
                        We have a plan for everyone
                    </div>
                    <div class="headline mt-2 font-weight-light">
                        Whether you're a business or an individual, 14-day trial no credit card required.
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" class="px-12">
                    <v-tabs v-model="tab" centered  :vertical="vertical" :right="right">
                        <v-tabs-slider></v-tabs-slider>
                        <v-tab v-for="i in tabs" :key="i" :href="`#tab-${i}`">
                            Tab {{ i }}
                            <!-- <v-icon v-if="icons">mdi-phone</v-icon> -->
                        </v-tab>
                    </v-tabs>
                </v-col>
                <v-col cols="12" class="pb-12">
                    <v-tabs-items v-model="tab">
                        <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i">
                            <v-card flat>
                                <v-card-text>{{ text }}</v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs-items>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    export default {
        name: 'pricing',
        data() {
            return {
                tab: null,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                icons: false,
                centered: false,
                grow: false,
                vertical: false,
                prevIcon: false,
                nextIcon: false,
                right: false,
                tabs: 3,
            }
        }
    }
</script>