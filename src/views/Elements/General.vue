<template>
    <div class="general">
        <v-container fluid>
            <v-row>
                <v-col cols="12" class="py-0">
                    <h1>General</h1>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                    <v-card>
                        <v-card-title>Accordion</v-card-title>
                        <v-card-subtitle>Accordion with variety</v-card-subtitle>
                        <v-card-text class="pa-0">
                            <v-expansion-panels accordion flat>
                                <v-expansion-panel v-for="i in 5" :key="i">
                                    <v-expansion-panel-header>Item</v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                    <v-card>
                        <v-card-title>Images</v-card-title>
                        <v-card-subtitle>Lightweight styles for images.</v-card-subtitle>
                        <v-card-text class="d-flex justify-space-between">
                            <v-avatar tile size="150">
                                <v-img src="https://appstack.bootlab.io/img/avatars/avatar.jpg"></v-img>
                            </v-avatar>
                            <v-avatar tile size="150" style="border:5px solid #3d3d3d;">
                                <v-img src="https://appstack.bootlab.io/img/avatars/avatar.jpg"></v-img>
                            </v-avatar>
                            <v-avatar size="150">
                                <v-img src="https://appstack.bootlab.io/img/avatars/avatar.jpg"></v-img>
                            </v-avatar>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                    <v-card>
                        <v-card-title>Badges</v-card-title>
                        <v-card-subtitle>Examples for badges.</v-card-subtitle>
                        <v-card-text>
                            <v-badge content="warning"></v-badge>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                    <v-card>
                        <v-card-title>Breadcrumb</v-card-title>
                        <v-card-subtitle>Indicate the current page’s location within a navigational hierarchy.
                        </v-card-subtitle>
                        <v-card-text class="pa-0">
                            <v-breadcrumbs :items="items"></v-breadcrumbs>
                            <v-breadcrumbs :items="items" divider="-"></v-breadcrumbs>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'general',
        data() {
            return {
                items: [{
                        text: 'Dashboard',
                        disabled: false,
                        href: 'breadcrumbs_dashboard',
                    },
                    {
                        text: 'Link 1',
                        disabled: false,
                        href: 'breadcrumbs_link_1',
                    },
                    {
                        text: 'Link 2',
                        disabled: true,
                        href: 'breadcrumbs_link_2',
                    },
                ],
            }
        }
    }
</script>
<style>

</style>