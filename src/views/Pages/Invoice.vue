<script setup>
import { mdiPrinter } from "@mdi/js";
import { useTitle } from "@vueuse/core";
useTitle("Invoice Page");

const print = () => {
  window.print();
};
</script>
<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" class="py-0">
        <h1>Invoice</h1>
      </v-col>
      <v-col cols="8">
        <v-card border flat>
          <v-list>
            <v-list-item>
              <v-list-item-title> Hello Chris Wood </v-list-item-title>
              <v-list-item-subtitle>
                This is the receipt for a payment of
                <span class="font-weight-bold">$268.00 (NPR)</span> you made to
                VuetifyDash.
              </v-list-item-subtitle>
              <template #append>
                <v-btn icon flat size="small" @click="print">
                  <v-icon :icon="mdiPrinter"></v-icon>
                </v-btn>
              </template>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="12" md="6">
              <v-card-title>Payment No.</v-card-title>
              <v-card-text>7410270724</v-card-text>
            </v-col>
            <v-col cols="12" md="6" class="text-right">
              <v-card-title>Payment Date</v-card-title>
              <v-card-text>October 2, 2018 - 03:45 pm</v-card-text>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="12" md="6">
              <v-card-title>Client</v-card-title>
              <v-card-text>
                <div class="font-weight-bold">Chris Wood</div>
                <div>4183 Forest Avenue</div>
                <div>New York City, 10011, USA</div>
                <div>chris.wood@gmail.com</div>
              </v-card-text>
            </v-col>
            <v-col cols="12" md="6" class="text-right">
              <v-card-title>Payment To</v-card-title>
              <v-card-text>
                <div class="font-weight-bold">AppStakc LLC</div>
                <div>354 Roy Alley</div>
                <div>Denver, 80202, USA</div>
                <div>info@appstack.com</div>
              </v-card-text>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-table density="comfortable">
            <thead>
              <tr>
                <th class="text-left">Description</th>
                <th class="text-left">Quantity</th>
                <th class="text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>VuetifyDash Theme Customization</td>
                <td>2</td>
                <td>$150.00</td>
              </tr>
              <tr>
                <td>Montly Subscription</td>
                <td>3</td>
                <td>$25.00</td>
              </tr>
              <tr>
                <td>Additional Service</td>
                <td>1</td>
                <td>$100.00</td>
              </tr>
              <tr>
                <td></td>
                <td class="font-weight-bold">Subtotal</td>
                <td>$275.00</td>
              </tr>
              <tr>
                <td></td>
                <td class="font-weight-bold">Shipping</td>
                <td>$85.00</td>
              </tr>
              <tr>
                <td></td>
                <td class="font-weight-bold">Discount</td>
                <td>5%</td>
              </tr>
              <tr>
                <td></td>
                <td class="font-weight-bold">Total</td>
                <td>$268.85</td>
              </tr>
            </tbody>
          </v-table>
          <v-divider></v-divider>
          <v-card-title> Extra Note: </v-card-title>
          <v-card-text>
            Please send all items at the same time to the shipping address.
            Thanks in advance.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
