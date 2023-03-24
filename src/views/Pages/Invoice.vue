<script setup>
import { useTitle } from "@vueuse/core";
useTitle("Invoice Page");
</script>
<template>
  <div class="invoice">
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="py-0">
          <h1>Invoice</h1>
        </v-col>
        <v-col cols="12">
          <v-card class="pa-12">
            <v-card-text class="pb-0"
              >Hello <span class="font-weight-bold">Chris Wood</span>,
            </v-card-text>
            <v-card-text class="pt-0"
              >This is the receipt for a payment of
              <span class="font-weight-bold">$268.00 (NPR)</span>you made to
              VueAppStack.</v-card-text
            >
            <v-card-text>
              <v-row>
                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="6"
                  lg="6"
                  xl="6"
                  class="py-0"
                >
                  Payment No.
                  <br />
                  <span class="font-weight-bold"> 7410270724 </span>
                </v-col>
                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="6"
                  lg="6"
                  xl="6"
                  class="py-0 text-right"
                >
                  <div>Payment Date</div>
                  <div class="font-weight-bold">October 2, 2018 - 03:45 pm</div>
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <v-row>
                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="6"
                  lg="6"
                  xl="6"
                  class="py-0"
                >
                  <div>Client</div>
                  <div class="font-weight-bold">Chris Wood</div>
                  <div>4183 Forest Avenue</div>
                  <div>New York City</div>
                  <div>10011</div>
                  <div>USA</div>
                  <div>chris.wood@gmail.com</div>
                </v-col>
                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="6"
                  lg="6"
                  xl="6"
                  class="py-0 text-right"
                >
                  <div>Payment To</div>
                  <div class="font-weight-bold">AppStakc LLC</div>
                  <div>354 Roy Alley</div>
                  <div>Denver</div>
                  <div>80202</div>
                  <div>USA</div>
                  <div>info@appstack.com</div>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-text class="py-0">
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Description</th>
                      <th class="text-left">Quantity</th>
                      <th class="text-left">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AppStack Theme Customization</td>
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
                </template>
              </v-simple-table>
            </v-card-text>
            <v-card-text class="text-center">
              <span class="font-weight-bold">Extra note:</span>
              Please send all items at the same time to the shipping address.
              Thanks in advance.
            </v-card-text>
            <v-btn class="d-flex mx-auto" color="primary"
              ><v-icon class="mr-2">print</v-icon>Print this receipt</v-btn
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
