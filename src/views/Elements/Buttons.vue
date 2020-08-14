<template>
    <div class="buttons">
        <v-container fluid>
            <v-row>
                <v-col cols="12" class="py-0">
                    <h1>Buttons</h1>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
                    <v-card>
                        <v-card-title>Basic Buttons</v-card-title>
                        <v-card-subtitle>Default Bootstrap buttons style.</v-card-subtitle>
                        <v-card-text>
                            <v-btn v-for="basic in basics" :key="basic.id" class="px-8 mb-2 mr-2" :color="basic.color">
                                {{ basic.color }}</v-btn>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-title>Basic Buttons</v-card-title>
                        <v-card-subtitle>Default Bootstrap buttons style.</v-card-subtitle>
                        <v-card-text>
                            <v-btn v-for="basic in basics" :key="basic.id" class="px-8 mb-2 mr-2" :color="basic.color" disabled>
                                {{ basic.color }}</v-btn>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-title>Basic rounded Buttons</v-card-title>
                        <v-card-subtitle>Rounded Bootstrap buttons.</v-card-subtitle>
                        <v-card-text>
                            <v-btn v-for="basic in basics" :key="basic.id" class="px-8 mb-2 mr-2" :color="basic.color"
                                rounded>
                                {{ basic.color }}</v-btn>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-title>Basic rounded Buttons</v-card-title>
                        <v-card-subtitle>Rounded Bootstrap buttons.</v-card-subtitle>
                        <v-card-text>
                            <v-btn v-for="basic in basics" :key="basic.id" class="px-8 mb-2 mr-2" :color="basic.color"
                                tile>
                                {{ basic.color }}</v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
                    <v-card>
                        <v-card-title>Outline Buttons</v-card-title>
                        <v-card-subtitle>Buttons without background color.</v-card-subtitle>
                        <v-card-text>
                            <v-btn v-for="basic in basics" :key="basic.id" class="px-8 mb-2 mr-2" :color="basic.color"
                                outlined>
                                {{ basic.color }}</v-btn>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-title>Disabled Outline Buttons</v-card-title>
                        <v-card-subtitle>Buttons without background color with rounded corners.</v-card-subtitle>
                        <v-card-text>
                            <v-btn v-for="basic in basics" :key="basic.id" class="px-8 mb-2 mr-2" :color="basic.color"
                                outlined disabled rounded>
                                {{ basic.color }}</v-btn>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-title>Outline Buttons</v-card-title>
                        <v-card-subtitle>Buttons without background color.</v-card-subtitle>
                        <v-card-text>
                            <v-btn v-for="basic in basics" :key="basic.id" class="px-8 mb-2 mr-2" :color="basic.color"
                                outlined>
                                {{ basic.color }}</v-btn>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-title>Outline Buttons</v-card-title>
                        <v-card-subtitle>Buttons without background color with no corners.</v-card-subtitle>
                        <v-card-text>
                            <v-btn v-for="basic in basics" :key="basic.id" class="px-8 mb-2 mr-2" :color="basic.color"
                                outlined tile>
                                {{ basic.color }}</v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
                    <v-card>
                        <v-card-title>Icon Buttons</v-card-title>
                        <v-card-subtitle>Default Bootstrap buttons with icons.</v-card-subtitle>
                        <v-card-text>
                            <v-btn v-for="basic in basics" :key="basic.id" class="px-8 mb-2 mr-2" :color="basic.color">
                                <v-icon left>{{ basic.icon }}</v-icon>
                                {{ basic.color }}
                            </v-btn>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-btn v-for="basic in basics" :key="basic.id" class="px-8 mb-2 mr-2" :color="basic.color">
                                <v-icon>{{ basic.icon }}</v-icon>
                            </v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
                    <v-card>
                        <v-card-title>Social icon Buttons</v-card-title>
                        <v-card-subtitle>Social buttons with icons.</v-card-subtitle>
                        <v-card-text>
                            <v-btn v-for="social in socials" :key="social.id" class="mb-2 mr-2" :color="social.color"
                                dark>
                                <v-icon left>{{ social.icon }}</v-icon>
                                {{ social.text }}
                            </v-btn>
                        </v-card-text>
                        <v-card-text>
                            <v-btn v-for="social in socials" :key="social.id" class="mb-2 mr-2" :color="social.color"
                                dark>
                                <v-icon>{{ social.icon }}</v-icon>
                            </v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="8" xl="8">
                    <v-card>
                        <v-card-title>Button Sizes</v-card-title>
                        <v-card-subtitle>Fancy larger or smaller buttons.</v-card-subtitle>
                        <v-card-text>
                            <v-btn class="mr-2" color="primary" x-small>Extra Small</v-btn>
                            <v-btn class="mr-2" color="primary" small>Small</v-btn>
                            <v-btn class="mr-2" color="primary">Normal</v-btn>
                            <v-btn class="mr-2" color="primary" large>Large</v-btn>
                            <v-btn class="mr-2" color="primary" x-large>Extra Large</v-btn>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-btn class="mr-2" color="primary" x-small>
                                <v-icon left x-small>public</v-icon>
                                Extras Small
                            </v-btn>
                            <v-btn class="mr-2" color="primary" small>
                                <v-icon left small>public</v-icon>
                                Small
                            </v-btn>
                            <v-btn class="mr-2" color="primary">
                                <v-icon left>public</v-icon>
                                Normal
                            </v-btn>
                            <v-btn class="mr-2" color="primary" large>
                                <v-icon left large>public</v-icon>
                                Large
                            </v-btn>
                            <v-btn class="mr-2" color="primary" x-large>
                                <v-icon left x-large>public</v-icon>
                                Normal
                            </v-btn>
                        </v-card-text>
                    </v-card>
                    <v-card class="mt-3">
                        <v-card-title>Button Dropdown</v-card-title>
                        <v-card-subtitle>Dropdowns styles with buttons.</v-card-subtitle>
                        <v-card-text>
                            <v-menu offset-y v-for="basic in basics" :key="basic.id">
                                <template v-slot:activator="{ on }">
                                    <v-btn :color="basic.color" dark v-on="on" class="mr-2 mb-2">
                                        {{ basic.color }}
                                        <v-icon>expand_more</v-icon>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item v-for="(item, index) in items" :key="index">
                                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-card-text>
                        <v-card-text>
                            <v-menu offset-y v-for="basic in basics" :key="basic.id">
                                <template v-slot:activator="{ on }">
                                    <v-btn :color="basic.color" dark v-on="on" small class="mr-2 mb-2">
                                        {{ basic.color }}
                                        <v-icon>expand_more</v-icon>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item v-for="(item, index) in items" :key="index">
                                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="4" xl="4">
                    <v-card>
                        <v-card-title>Button Groups</v-card-title>
                        <v-card-subtitle>Button group components.</v-card-subtitle>
                        <v-card-text class="py-0">
                            Horizontal button group
                            <v-btn-toggle class="mt-3" dense>
                                <v-btn large>
                                    Left
                                </v-btn>
                                <v-btn large>
                                    Middle
                                </v-btn>
                                <v-btn large>
                                    Right
                                </v-btn>
                            </v-btn-toggle>
                            <v-btn-toggle class="mt-3" dense>
                                <v-btn>
                                    Left
                                </v-btn>
                                <v-btn>
                                    Middle
                                </v-btn>
                                <v-btn>
                                    Right
                                </v-btn>
                            </v-btn-toggle>
                            <v-btn-toggle class="mt-3" dense>
                                <v-btn small>
                                    Left
                                </v-btn>
                                <v-btn small>
                                    Middle
                                </v-btn>
                                <v-btn small>
                                    Right
                                </v-btn>
                            </v-btn-toggle>
                        </v-card-text>
                        <v-card-subtitle>Button Toolbar</v-card-subtitle>
                        <v-card-text class="py-0">
                            Horizontal button group
                            <v-btn-toggle>
                                <v-btn color="primary" small>
                                    1
                                </v-btn>
                                <v-btn color="primary" small>
                                    2
                                </v-btn>
                                <v-btn class="ml-2" color="primary" small>
                                    3
                                </v-btn>
                                <v-btn color="primary" small>
                                    4
                                </v-btn>
                                <v-btn class="ml-2" color="primary" small>
                                    5
                                </v-btn>
                            </v-btn-toggle>
                        </v-card-text>
                        <v-card-text>
                            Vertical button group
                            <v-btn block color="primary" small>Not Available</v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'Buttons',
        data() {
            return {
                basics: [{
                    id: '1',
                    icon: 'sentiment_satisfied_alt',
                    color: 'primary'
                }, {
                    id: '2',
                    icon: 'public',
                    color: 'secondary'
                }, {
                    id: '3',
                    icon: 'check',
                    color: 'success'
                }, {
                    id: '4',
                    icon: 'close',
                    color: 'error'
                }, {
                    id: '5',
                    icon: 'warning',
                    color: 'warning'
                }, {
                    id: '6',
                    icon: 'info',
                    color: 'info'
                }],
                socials: [{
                    id: '1',
                    icon: 'fab fa-facebook',
                    text: 'Facebook',
                    color: '#3b5999'
                }, {
                    id: '2',
                    icon: 'fab fa-twitter',
                    text: 'Twitter',
                    color: '#55acee'
                }, {
                    id: '3',
                    icon: 'fab fa-google',
                    text: 'Google',
                    color: '#dd4b39'
                }, {
                    id: '4',
                    icon: 'fab fa-youtube',
                    text: 'Youtube',
                    color: '#cd201f'
                }, {
                    id: '5',
                    icon: 'fab fa-vimeo',
                    text: 'Vimeo',
                    color: '#1ab7ea'
                }, {
                    id: '6',
                    icon: 'fab fa-dribbble',
                    text: 'Dribbble',
                    color: '#ea4c89'
                }, {
                    id: '7',
                    icon: 'fab fa-github',
                    text: 'Github',
                    color: '#24292e'
                }, {
                    id: '8',
                    icon: 'fab fa-instagram',
                    text: 'Instagram',
                    color: '#e4405f'
                }, {
                    id: '9',
                    icon: 'fab fa-pinterest',
                    text: 'Pinterest',
                    color: '#bd081c'
                }, {
                    id: '10',
                    icon: 'fab fa-flickr',
                    text: 'Flickr',
                    color: '#0063dc'
                }, {
                    id: '11',
                    icon: 'fab fa-bitbucket',
                    text: 'Bitbucket',
                    color: '#253858'
                }],
                items: [{
                        title: 'Click Me'
                    },
                    {
                        title: 'Click Me'
                    },
                    {
                        title: 'Click Me'
                    },
                    {
                        title: 'Click Me 2'
                    },
                ]
            }
        }
    }
</script>
<style>

</style>