<template>
  <div class="detail">
      <v-container fluid>
          <v-row>
              <v-col cols="12" class="py-0">
                    <h1>Project Details</h1>
                </v-col>
              <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3" v-for="carddetail in carddetails" :key="carddetail">
                  <v-card>
                      <v-card-title class="pb-0">{{ carddetail.title }}</v-card-title>
                      <v-card-text class="d-flex justify-space-between">
                          <span class="headline font-weight-light">{{ carddetail.number }}</span>
                          <span class="title font-weight-light">{{ carddetail.percentage }}%</span>
                      </v-card-text>
                      <v-card-text class="pa-0">
                          <v-progress-linear :color="carddetail.color" height="6"
                                        :value="carddetail.percentage" rounded striped>
                                    </v-progress-linear>
                      </v-card-text>
                  </v-card>
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
export default {
    name: 'Detail',
    data(){
        return{
            carddetails: [{
                id: '1',
                title: 'Income',
                number: '$37.500',
                color: 'primary',
                percentage: '57'
            },{
                id: '2',
                title: 'Orders',
                number: '3.282',
                color: 'warning',
                percentage: '82'
            },{
                id: '3',
                title: 'Activity',
                number: '19.312',
                color: 'blue dark-4',
                percentage: '64'
            },{
                id: '4',
                title: 'Revenue',
                number: '$82.500',
                color: 'success',
                percentage: '32'
            }]
        }
    }
}
</script>

<style>

</style>