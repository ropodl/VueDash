<template>
    <div class="footer">
        <v-container class="py-0">
            <v-row>
                <v-col cols="12" class="ma-0 pa-0">
                    <v-footer absolute>
                        <v-btn v-for="link in footerlinks" :key="link.id" router link :to="link.link" text small rounded>
                            {{ link.text }}
                        </v-btn>
                        <v-spacer></v-spacer>
                        <div>&copy; {{ new Date().getFullYear() }} - AppDash</div>
                    </v-footer>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    export default {
        name: 'Footer',
        data() {
            return {
                footerlinks: [{
                    id: '1',
                    text: 'Home',
                    link: '/'
                }, {
                    id: '2',
                    text: 'Settings',
                    link: '/settings'
                },{
                    id: '3',
                    text: 'Profile',
                    link: '/profile'
                },{
                    id: '4',
                    text: 'Pricing',
                    link: '/pricing'
                }]
            }
        }
    }
</script>
<style scoped>
    .v-application a {
        text-decoration: none !important;
        color: none;
    }
</style>