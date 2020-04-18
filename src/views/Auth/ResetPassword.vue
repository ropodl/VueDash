<template>
    <div class="resetpassword">
        <v-container fluid class="ma-0 pa-0">
            <v-row>
                <v-col cols="12" class="ma-0 pa-0">
                    <v-img
                        src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=100"
                        class="justify-center align-center" style="height:100vh;min-height:100vh;">
                        <div class="d-flex justify-center">
                            <div class="align-center">
                                <v-card min-width="500px">
                                        <v-card-title>Reset Password</v-card-title>
                                        <v-card-subtitle>Enter your email to reset your password.</v-card-subtitle>
                                        <v-divider></v-divider>
                                        <v-card-text>
                                            <v-text-field label="Enter email address"></v-text-field>
                                            <v-btn class="d-flex ml-auto" color="primary" rounded>Reset Password</v-btn>
                                        </v-card-text>
                                </v-card>
                            </div>
                        </div>
                    </v-img>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>