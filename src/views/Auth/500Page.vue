<template>
    <div class="500page">
        <v-container fluid class="ma-0 pa-0">
            <v-row>
                <v-col cols="12" class="ma-0 pa-0">
                    <v-img
                        src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=100"
                        class="justify-center align-center" style="height:100vh;min-height:100vh;">
                        <div class="d-flex justify-center">
                            <div class="align-center" style="max-width:500px;">
                                <h1 class="display-4 font-weight-black">500</h1>
                                <h2>Internal server error.</h2>
                                <div class="mb-3">
                                    The server encountered something unexpected that didn't allow it to complete the
                                    request.
                                </div>
                                <v-btn rounded router link to="/">Return to Website</v-btn>
                            </div>
                        </div>
                    </v-img>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    export default {
        name: '500page',
        data() {
            return {

            }
        }
    }
</script>