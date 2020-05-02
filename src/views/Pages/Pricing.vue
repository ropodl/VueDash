<template>
    <div class="pricing">
        <v-container fluid>
            <v-row>
                <v-col cols="12" class="pa-12 pb-6 text-center">
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
                    <v-tabs v-model="tab" background-color="transparent" centered>
                        <v-tab v-for="bill in bills" :key="bill">
                            {{ bill.title }}
                        </v-tab>
                    </v-tabs>

                    incomplete

                    <v-tabs-items class="mt-4 mx-12" v-model="tab">
                        <v-tab-item v-for="bill in bills" :key="bill">
                            <v-row>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" v-for="card in bill.cards" :key="card">
                                    <v-card flat>
                                        <v-card-text>{{ card.title }}</v-card-text>
                                        a
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-tab-item>
                    </v-tabs-items>
                </v-col>
            </v-row>
            <v-divider class="mx-12"></v-divider>
            <v-row>
                <v-col cols="12" class="px-12 ">
                    <div class="headline font-weight-bolder mt-4 text-center">Frequently Asked Questions</div>
                    <v-row class="mt-4">
                        <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6" :class="faq.padding" v-for="faq in faqs" :key="faq.id">
                            <v-card>
                                <v-card-title>{{ faq.title }}</v-card-title>
                                <v-divider></v-divider>
                                <v-card-text>
                                    {{ faq.text }}
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
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
                bills: [{
                    title: 'Monthly billing',
                    cards: [{
                        free: [{
                            title: 'Free',
                            price: '0',
                            features: ['1 users', '5 projects', '5 GB storage']
                        }],
                        standard: [{
                            title: 'Standard',
                            price: '199',
                            features: ['5 users', '50 projects', '50 GB storage',
                                'Security policy', 'Weekly backups'
                            ],
                            btn: 'Sign Up'
                        }],
                        plus: [{
                            title: 'Plus',
                            price: '39',
                            features: ['Unlimited users', 'Unlimited projects',
                                '250 GB storage', 'Priority support', 'Security policy',
                                'Daily backups', 'Custom CSS'
                            ],
                            btn: 'Try it for free'
                        }]
                    }]
                }, {
                    title: 'Annual billing'
                }],
                faqs: [{
                    padding: 'pl-12',
                    title: 'Do I need a credit card to sign up?',
                    text: ' Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'
                },{
                    padding: 'pr-12',
                    title: 'Do you offer a free trial?',
                    text: 'Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'
                },{
                    padding: 'pl-12',
                    title: 'What if I decide to cancel my plan?',
                    text: 'Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'
                },{
                    padding: 'pr-12',
                    title: 'Can I cancel at anytime?',
                    text: ' Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'
                }]
            }
        }
    }
</script>
<style scoped>
</style>