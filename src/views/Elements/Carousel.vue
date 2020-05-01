<template>
    <div class="carousel">
        <v-container fluid>
            <v-row>
                <v-col cols="12" class="py-0">
                    <h1>Carousel</h1>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                    <v-card>
                        <v-carousel cycle height="300" hide-delimiter-background show-arrows-on-hover>
                            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                                <v-sheet :color="colors[i]" height="100%">
                                    <v-row class="fill-height" align="center" justify="center">
                                        <div class="display-3">{{ slide }} Slide</div>
                                    </v-row>
                                </v-sheet>
                            </v-carousel-item>
                        </v-carousel>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    export default {
        name: 'carousel',
        data() {
            return {
                colors: [
                    'indigo',
                    'warning',
                    'pink darken-2',
                    'red lighten-1',
                    'deep-purple accent-4',
                ],
                slides: [
                    'First',
                    'Second',
                    'Third',
                    'Fourth',
                    'Fifth',
                ],
            }
        }
    }
</script>
<style>

</style>