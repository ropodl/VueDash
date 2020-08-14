<template>
    <div class="carousel">
        <v-container fluid>
            <v-row>
                <v-col cols="12" class="py-0">
                    <h1>Carousel</h1>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                    <v-card>
                        <v-card-title>Slides only</v-card-title>
                        <v-card-text>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code>
                            and <code>.w-100</code> on
                            carousel images to prevent browser default image alignment.</v-card-text>
                        <v-carousel cycle height="300" hide-delimiters :show-arrows="false">
                            <v-carousel-item v-for="(image, i) in images" :key="i">
                                <v-img :src="images[i]"></v-img>
                            </v-carousel-item>
                        </v-carousel>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                    <v-card>
                        <v-card-title>With controls</v-card-title>
                        <v-card-text>Adding in the previous and next controls.</v-card-text>
                        <v-carousel cycle height="300" hide-delimiters>
                            <v-carousel-item v-for="(image, i) in images" :key="i">
                                <v-img :src="images[i]">
                                </v-img>
                            </v-carousel-item>
                        </v-carousel>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                    <v-card>
                        <v-card-title>With indicators</v-card-title>
                        <v-card-text>You can also add the indicators to the carousel, alongside the controls, too.
                        </v-card-text>
                        <v-carousel cycle height="300">
                            <v-carousel-item v-for="(image, i) in images" :key="i">
                                <v-img :src="images[i]"></v-img>
                            </v-carousel-item>
                        </v-carousel>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                    <v-card>
                        <v-card-title>With custom indicators, hidden indicator background</v-card-title>
                        <v-card-text>You can also add the indicators to the carousel, alongside the controls, too.
                        </v-card-text>
                        <v-carousel cycle hide-delimiter-background delimiter-icon="mdi-minus" height="300">
                            <v-carousel-item v-for="(image, i) in images" :key="i">
                                <v-img :src="images[i]"></v-img>
                            </v-carousel-item>
                        </v-carousel>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                    <v-card>
                        <v-card-title>With captions</v-card-title>
                        <!-- <v-card-text>
                            Add captions to your slides easily with the .carousel-caption element within any
                            v-carousel-item.</v-card-text> -->
                        <v-carousel cycle hide-delimiter-background delimiter-icon="mdi-minus" height="300">
                            <v-carousel-item v-for="(image, i) in images" :key="i">
                                <v-img :src="images[i]">
                                    <v-row class="fill-height" justify="center" align="center">
                                        <div class="headline">
                                            {{ slides[i] }} slide
                                        </div>
                                    </v-row>
                                </v-img>
                            </v-carousel-item>
                        </v-carousel>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                    <v-card>
                        <v-card-title>Fade transition</v-card-title>
                        <v-card-text>
                            Add <code>reverse-transition="fade-transition" transition="fade-transition"</code> to your v-carousel-item to animate slides with a fade transition instead of a slide.</v-card-text>
                        <v-carousel cycle hide-delimiters height="300">
                            <v-carousel-item v-for="(image, i) in images" :key="i" :src="image"
                                reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
                        </v-carousel>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    export default {
        name: "carousel",
        data() {
            return {
                colors: [
                    "indigo",
                    "warning",
                    "pink darken-2",
                    "red lighten-1",
                    "deep-purple accent-4"
                ],
                slides: ["First", "Second", "Third", "Fourth", "Fifth"],
                images: [
                    "https://images.unsplash.com/photo-1590090992468-d2c9ba726ef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                    "https://images.unsplash.com/photo-1590142035743-0ffa020065e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
                    "https://images.unsplash.com/photo-1590079020499-832a755ee71e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                    "https://images.unsplash.com/photo-1589990409137-4e41abbcff31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                    "https://images.unsplash.com/photo-1590091344840-bd00114ca24f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                ]
            };
        }
    };
</script>
<style>
</style>