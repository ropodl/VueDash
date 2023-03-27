<script setup>
import { ref } from "vue";
import { useTitle } from "@vueuse/core";
useTitle("Pricing Page");
let tab = ref("Monthly billing");
let text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
let bills = [
  {
    title: "Monthly billing",
    charged: "/mon",
    cards: [
      {
        title: "Free",
        price: "0",
        features: ["1 users", "5 projects", "1 GB storage"],
      },
      {
        title: "Standard",
        price: "1,999",
        features: [
          "5 users",
          "50 projects",
          "50 GB storage",
          "Security policy",
          "Weekly backups",
        ],
      },
      {
        title: "Plus",
        price: "3,999",
        features: [
          "Unlimited users",
          "Unlimited projects",
          "250 GB storage",
          "Priority support",
          "Security policy",
          "Daily backups",
          "Custom CSS",
        ],
      },
    ],
  },
  {
    title: "Annual billing",
    charged: "/yr",
    cards: [
      {
        title: "Free",
        price: "0",
        features: ["1 users", "5 projects", "1 GB storage"],
      },
      {
        title: "Standard",
        price: "19,999",
        features: [
          "5 users",
          "50 projects",
          "50 GB storage",
          "Security policy",
          "Weekly backups",
        ],
      },
      {
        title: "Plus",
        price: "39,999",
        features: [
          "Unlimited users",
          "Unlimited projects",
          "250 GB storage",
          "Priority support",
          "Security policy",
          "Daily backups",
          "Custom CSS",
        ],
      },
    ],
  },
];
let faqs = [
  {
    padding: "pl-12",
    title: "Do I need a credit card to sign up?",
    text: " Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.",
  },
  {
    padding: "pr-12",
    title: "Do you offer a free trial?",
    text: "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.",
  },
  {
    padding: "pl-12",
    title: "What if I decide to cancel my plan?",
    text: "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.",
  },
  {
    padding: "pr-12",
    title: "Can I cancel at anytime?",
    text: " Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.",
  },
];
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="pa-12 pb-6 text-center">
        <div class="text-h3">We have a plan for everyone</div>
        <div class="text-h6 mt-2 font-weight-light">
          Whether you're a business or an individual, 14-day trial no credit
          card required.
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10">
        <v-tabs v-model="tab" align-tabs="center">
          <v-tab
            class="text-capitalize"
            v-for="bill in bills"
            :value="bill['title']"
          >
            {{ bill["title"] }}
          </v-tab>
        </v-tabs>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10">
        <v-window v-model="tab">
          <v-window-item v-for="bill in bills" :value="bill['title']">
            <v-row>
              <v-col cols="12" md="4" v-for="card in bill['cards']">
                <v-card border flat class="h-100">
                  <v-card-title class="text-center">
                    {{ card["title"] }}
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-text class="bg-primary text-center text-h4">
                    Rs. {{ card["price"] }}
                    <span class="text-h6">
                      {{ bill["charged"] }}
                    </span>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-text>
                    <ul class="list-style-none">
                      <li
                        class="text-center mb-3"
                        v-for="feature in card['features']"
                      >
                        {{ feature }}
                      </li>
                    </ul>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10">
        <div class="text-h4 font-weight-bolder mt-4 text-center">
          Frequently Asked Questions
        </div>
      </v-col>
      <v-col cols="6">
        <v-expansion-panels variant="accordion">
          <v-expansion-panel elevation="0"
            v-for="faq in faqs"
            :title="faq['title']"
            :text="faq['text']"
          >
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>
