<script setup>
import { ref, reactive } from "vue";
import {
  mdiMagnify,
  mdiBell,
  mdiMessage,
  mdiAccountCircle,
  mdiGoogleAnalytics,
  mdiCog,
  mdiHelpCircle,
  mdiPower,
  mdiViewDashboard,
  mdiBookOpenPageVariant,
  mdiAccountGroup,
  mdiAccountBoxMultiple,
  mdiLayers,
  mdiHeart,
  mdiFormTextbox,
  mdiTable,
  mdiFormTextarea,
  mdiTableLarge,
  mdiChartArc,
  mdiMapMarker,
  mdiCalendar,
  mdiShareVariant,
  mdiLock,
} from "@mdi/js";
import { useThemeMode } from "@/composable/isDark";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { useFullscreen } from "@vueuse/core";
// composables
const { t } = useI18n();
const router = useRouter();
const { isFullscreen, enter, exit, toggle } = useFullscreen();
// data
let drawer = ref(true);
const profiledropdown = [
  {
    icon: mdiAccountCircle,
    title: "appbar.profiledropdown.profile",
    link: "/profile",
  },
  {
    icon: mdiGoogleAnalytics,
    title: "appbar.profiledropdown.analytics",
    link: "/analytics",
  },
  {
    icon: mdiCog,
    title: "appbar.profiledropdown.settings",
    link: "/settings",
  },
  {
    icon: mdiHelpCircle,
    title: "appbar.profiledropdown.help",
    link: "/introduction",
  },
  {
    icon: mdiLock,
    title: "Lock screen",
    link: "/lock-screen",
  },
  {
    icon: mdiPower,
    title: "appbar.profiledropdown.signout",
    link: "/signin",
  },
];
// working on search
let routes = reactive([]);

const getAllRouteName = () => {
  router.options.routes.forEach((element) => {
    element.children.forEach((item) => {
      if (item.children) {
        item.children.forEach((subitems) => {
          routes.push(subitems.name);
        });
      }
      routes.push(item);
    });
  });
  console.log(routes);
};
</script>
<template>
  <v-app-bar height="48" class="border-b searchbar">
    <v-app-bar-nav-icon
      rounded="0"
      height="48"
      @click="drawer = !drawer"
      :color="useThemeMode() ? 'white' : 'grey-darken-3'"
    ></v-app-bar-nav-icon>
    <!-- <v-btn>
      go full
      {{ isFullscreen }}
    </v-btn> -->
    <v-btn
      exact
      :active="false"
      class="text-capitalize"
      rounded="0"
      height="48"
      :color="useThemeMode() ? 'white' : 'grey-darken-3'"
      :to="{ name: 'Home' }"
    >
      Vuetify Dash
    </v-btn>
    <v-spacer></v-spacer>
    <v-autocomplete
      placeholder="Search..."
      append-inner-icon=""
      :prepend-inner-icon="mdiMagnify"
      :items="routes"
      hide-no-data
      hide-details
    ></v-autocomplete>
    <v-spacer></v-spacer>
    <v-btn
      icon
      height="48"
      :active="false"
      :color="useThemeMode() ? 'white' : 'grey-darken-3'"
      class="hidden-sm-and-down"
      to="/chat"
      rounded="0"
    >
      <v-badge small color="success" :overlap="true">
        <template v-slot:badge>7</template>
        <v-icon :icon="mdiMessage"></v-icon>
      </v-badge>
    </v-btn>
    <v-menu
      location="bottom"
      scroll-strategy="none"
      class="position-relative"
      transition="slide-y-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          icon
          rounded="0"
          :color="useThemeMode() ? 'white' : 'grey-darken-3'"
          v-bind="props"
        >
          <v-badge
            small
            color="warning"
            :content="notifications.length"
            :overlap="true"
          >
            <v-icon :icon="mdiBell"></v-icon>
          </v-badge>
        </v-btn>
      </template>
      <v-card border flat width="400" class="rounded-t-0 border-t-0">
        <v-list density="compact" lines="three">
          <template v-for="notification in notifications">
            <v-list-subheader
              v-if="notification.header"
              v-text="notification.header"
            >
            </v-list-subheader>
            <v-divider
              v-else-if="notification.divider"
              :inset="notification.inset"
            ></v-divider>
            <v-list-item v-else>
              <template v-slot:prepend>
                <v-avatar>
                  <v-img :src="notification.avatar"></v-img>
                </v-avatar>
              </template>
              <v-list-item-title
                v-html="notification.title"
              ></v-list-item-title>
              <v-list-item-subtitle
                v-html="notification.subtitle"
              ></v-list-item-subtitle>
            </v-list-item>
          </template>
        </v-list>
        <v-btn
          block
          size="large"
          class="text-capitalize"
          rounded="0"
          color="primary"
          >See more</v-btn
        >
      </v-card>
    </v-menu>
    <v-menu
      location="bottom"
      scroll-strategy="none"
      class="position-relative"
      transition="slide-y-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          height="48"
          rounded="0"
          text
          :color="useThemeMode() ? 'white' : 'grey-darken-3'"
          v-bind="props"
        >
          <v-avatar start rounded="0" size="30" class="mr-3">
            <v-img src="https://ropodl.vercel.app/icon.png"></v-img>
          </v-avatar>
          <span class="text-capitalize">ropodl</span>
        </v-btn>
      </template>
      <v-card border class="rounded-t-0">
        <v-list density="compact">
          <v-list-item v-for="item in profiledropdown" :to="item['link']">
            <v-list-item-title>
              <v-icon start :icon="item['icon']"></v-icon>
              {{ t(item["title"]) }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
  <!-- nav drawer -->
  <v-navigation-drawer v-model="drawer" absolute>
    <v-list class="nav overflow-visible" density="compact">
      <template v-for="navitem in navitems">
        <v-list-subheader v-if="navitem.subtitle">
          {{ t(navitem.subtitle) }}
        </v-list-subheader>
        <template v-if="navitem.subitems">
          <v-list-group :prepend-icon="navitem.icon" v-model="navitem.active">
            <template v-slot:activator="{ props }">
              <!-- main like dashboard -->
              <v-list-item v-bind="props">
                <v-list-item-title>
                  {{ t(navitem.title) }}
                </v-list-item-title>
              </v-list-item>
            </template>
            <span v-for="subitem in navitem.subitems">
              <span v-if="subitem.miniitems">
                <v-list-group>
                  <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props">
                      <!-- child's option -->
                      <v-list-item-title>
                        {{ t(subitem.title) }}
                      </v-list-item-title>
                    </v-list-item>
                  </template>
                  <template v-if="subitem.miniitems">
                    <v-list-item
                      v-for="mini in subitem.miniitems"
                      :to="mini.routes"
                    >
                      <!-- grand child -->
                      <v-list-item-title>
                        {{ t(mini.title) }}
                      </v-list-item-title>
                    </v-list-item>
                  </template>
                </v-list-group>
              </span>
              <span v-else>
                <v-list-item exact :to="subitem.routes">
                  <!-- child -->
                  <v-list-item-title>
                    {{ t(subitem.title) }}
                  </v-list-item-title>
                </v-list-item>
              </span>
            </span>
          </v-list-group>
        </template>
        <template v-else>
          <v-list-item :to="navitem.routes">
            <template v-slot:prepend>
              <v-icon :icon="navitem['icon']"></v-icon>
            </template>
            <v-list-item-title>
              {{ t(navitem.title) }}
            </v-list-item-title>
          </v-list-item>
        </template>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<style>
header.searchbar {
  top: 0 !important;
  border-top: 0;
  overflow: hidden;
}
</style>
<script>
export default {
  data() {
    return {
      navitems: [
        {
          icon: mdiViewDashboard,
          title: "nav.pages.dash.dashboard",
          subtitle: "nav.pages.page",
          subitems: [
            {
              title: "nav.pages.dash.default",
              routes: "/",
            },
            {
              title: "nav.pages.dash.analytics",
              routes: "/analytics",
            },
            {
              title: "nav.pages.dash.ecommerce",
              routes: "/ecommerce",
            },
            {
              title: "nav.pages.dash.social",
              routes: "/social",
            },
            {
              title: "nav.pages.dash.crypto",
              routes: "/crypto",
            },
          ],
        },
        {
          icon: mdiAccountBoxMultiple,
          title: "nav.pages.page",
          subitems: [
            {
              title: "nav.pages.pages.profile",
              routes: "/profile",
            },
            {
              title: "nav.pages.pages.settings",
              routes: "/settings",
            },
            {
              title: "nav.pages.pages.clients",
              routes: "/clients",
            },
            {
              title: "nav.pages.pages.projects",
              miniitems: [
                {
                  title: "nav.pages.pages.list",
                  routes: "/list",
                },
                {
                  title: "nav.pages.pages.details",
                  routes: "/detail",
                },
              ],
            },
            {
              title: "nav.pages.pages.invoice",
              routes: "/invoice",
            },
            {
              title: "nav.pages.pages.pricing",
              routes: "/pricing",
            },
            {
              title: "nav.pages.pages.tasks",
              routes: "/tasks",
            },
            {
              title: "nav.pages.pages.chat",
              routes: "/chat",
            },
            {
              title: "nav.pages.pages.blankpage",
              routes: "/blank-page",
            },
          ],
        },
        {
          icon: mdiAccountGroup,
          title: "nav.pages.auth.auth",
          subitems: [
            {
              title: "nav.pages.auth.signin",
              routes: "/signin",
            },
            {
              title: "nav.pages.auth.signup",
              routes: "/signup",
            },
            {
              title: "nav.pages.auth.resetpassword",
              routes: "/reset-password",
            },
            {
              title: "nav.pages.auth.fourofour",
              routes: "/404",
            },
            {
              title: "nav.pages.auth.fiveoo",
              routes: "/500",
            },
          ],
        },
        {
          icon: mdiBookOpenPageVariant,
          title: "nav.pages.document.documentation",
          subitems: [
            {
              title: "nav.pages.document.introduction",
              routes: "/introduction",
            },
            {
              title: "nav.pages.document.gettingstarted",
              routes: "/getting-started",
            },
            {
              title: "nav.pages.document.plugins",
              routes: "/plugins",
            },
            {
              title: "nav.pages.document.changelog",
              routes: "/changelog",
            },
          ],
        },
        {
          icon: mdiLayers,
          title: "nav.tool.ui.uielements",
          subtitle: "nav.tool.toolsandcomponents",
          subitems: [
            {
              title: "nav.tool.ui.alerts",
              routes: "/alerts",
            },
            {
              title: "nav.tool.ui.buttons",
              routes: "/buttons",
            },
            {
              title: "nav.tool.ui.cards",
              routes: "/cards",
            },
            {
              title: "nav.tool.ui.carousel",
              routes: "/carousel",
            },
            {
              title: "nav.tool.ui.embedvideo",
              routes: "/embed-video",
            },
            {
              title: "nav.tool.ui.general",
              routes: "/general",
            },
            {
              title: "nav.tool.ui.grid",
              routes: "/grid",
            },
            {
              title: "nav.tool.ui.modals",
              routes: "/modals",
            },
            {
              title: "nav.tool.ui.tabs",
              routes: "/tabs",
            },
            {
              title: "nav.tool.ui.typography",
              routes: "/typography",
            },
          ],
        },
        {
          icon: mdiHeart,
          title: "nav.tool.icon.icons",
          subitems: [
            {
              title: "nav.tool.icon.mdi",
              routes: "/mdi",
            },
            {
              title: "nav.tool.icon.fa",
              routes: "/fa5",
            },
          ],
        },
        {
          icon: mdiFormTextbox,
          title: "nav.tool.form.forms",
          subitems: [
            {
              title: "nav.tool.form.layouts",
              routes: "/layouts",
            },
            {
              title: "nav.tool.form.basicinputs",
              routes: "/basic-inputs",
            },
            {
              title: "nav.tool.form.inputgroups",
              routes: "/input-groups",
            },
          ],
        },
        {
          icon: mdiTable,
          title: "nav.tool.table.tables",
          routes: "/tables",
        },
        {
          icon: mdiFormTextarea,
          title: "nav.plugin.form.formplugins",
          subtitle: "nav.plugin.plugins",
          subitems: [
            {
              title: "nav.plugin.form.advancedinputs",
              routes: "/advanced-inputs",
            },
            {
              title: "nav.plugin.form.editors",
              routes: "/editors",
            },
            {
              title: "nav.plugin.form.validation",
              routes: "/validation",
            },
            {
              title: "nav.plugin.form.wizard",
              routes: "/wizard",
            },
          ],
        },
        {
          icon: mdiTableLarge,
          title: "nav.plugin.datatable.datatables",
          subitems: [
            {
              title: "nav.plugin.datatable.responsivetables",
              routes: "/responsive-tables",
            },
            {
              title: "nav.plugin.datatable.tablebuttons",
              routes: "/table-buttons",
            },
            {
              title: "nav.plugin.datatable.columnsearch",
              routes: "/column-search",
            },
            {
              title: "nav.plugin.datatable.multiselection",
              routes: "/multi-selection",
            },
            {
              title: "nav.plugin.datatable.ajaxsourceddata",
              routes: "/ajax-sourced-data",
            },
          ],
        },
        {
          icon: mdiChartArc,
          title: "nav.plugin.chart.chart",
          subitems: [
            {
              title: "nav.plugin.chart.chartjs",
              routes: "/chartjs",
            },
            {
              title: "nav.plugin.chart.apexcharts",
              routes: "/apexcharts",
            },
          ],
        },
        {
          icon: mdiBell,
          title: "nav.plugin.notification.notifications",
          routes: "/notifications",
        },
        {
          icon: mdiMapMarker,
          title: "nav.plugin.map.maps",
          subitems: [
            {
              title: "nav.plugin.map.googlemaps",
              routes: "/google-maps",
            },
            {
              title: "nav.plugin.map.vectormaps",
              routes: "/vector-maps",
            },
          ],
        },
        {
          icon: mdiCalendar,
          title: "nav.plugin.calendar.calendar",
          routes: "/calendar",
        },
        {
          icon: mdiShareVariant,
          title: "nav.plugin.multilevel.multilevel",
          subitems: [
            {
              title: "nav.plugin.multilevel.twolevel.twolevels",
              miniitems: [
                {
                  title: "nav.plugin.multilevel.twolevel.item1",
                },
                {
                  title: "nav.plugin.multilevel.twolevel.item2",
                },
              ],
            },
            {
              title: "nav.plugin.multilevel.threelevel.threelevels",
              miniitems: [
                {
                  title: "nav.plugin.multilevel.threelevel.item1",
                },
                {
                  title: "nav.plugin.multilevel.threelevel.item2",
                },
                {
                  title: "nav.plugin.multilevel.threelevel.item3",
                },
              ],
            },
          ],
        },
      ],
      notifications: [
        {
          header: "Notifications",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
          routes: "/",
        },
        {
          divider: true,
          inset: true,
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle:
            "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
          routes: "/",
        },
        {
          divider: true,
          inset: true,
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui",
          subtitle:
            "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
          routes: "/",
        },
        {
          divider: true,
          inset: true,
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Birthday gift",
          subtitle:
            "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
          routes: "/",
        },
        {
          divider: true,
          inset: true,
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Recipe to try",
          subtitle:
            "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
          routes: "/",
        },
      ],
    };
  },
};
</script>
