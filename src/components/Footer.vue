<template>
    <div class="footer">
        <v-container class="py-0">
            <v-row>
                <v-col cols="12" class="ma-0 pa-0">
                    <v-footer absolute>
                        <v-btn v-for="link in footerlinks" :key="link" router link :to="link.link" text small rounded>
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
                    text: 'Home',
                    link: '/'
                }, {
                    text: 'Settings',
                    link: '/settings'
                },{
                    text: 'Profile',
                    link: '/profile'
                },{
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