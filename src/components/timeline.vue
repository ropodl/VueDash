<script setup>
const timeline = [
  {
    color: "teal lighten-3",
    time: "10am",
    title: "Meeting",
    desc: "<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>Link here</a>",
    attendee: [
      {
        name: "John Trevor",
        img: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown",
      },
      {
        name: "Sam Michel",
        img: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned",
      },
      {
        name: "Ritchell Johns",
        img: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale",
      },
    ],
  },
  {
    color: "pink",
    time: "12am",
    title: "Work on New Icon",
    desc: "Also a new Mobile App icon",
  },
  { color: "pink", time: "2pm", title: "Lunch Break" },
  {
    color: "teal lighten-3",
    time: "3pm",
    title: "Finish Home Screen",
    desc: "Web app",
  },
  {
    color: "pink",
    time: "6pm",
    title: "Task Talk",
    desc: "Take task note of all members",
  },
];
</script>
<template>
  <v-timeline align="start" density="compact">
    <v-timeline-item
      v-for="item in timeline"
      :dot-color="item['color']"
      size="x-small"
    >
      <v-list class="pt-0 w-100" density="compact">
        <v-list-item class="pa-0">
          <v-list-item-subtitle class="mb-3">
            <v-chip>
              {{ item["time"] }}
            </v-chip>
          </v-list-item-subtitle>
          <v-list-item-title
            class="font-weight-bold"
            v-text="item['title']"
          ></v-list-item-title>
          <v-list-item-subtitle class="mb-3" v-html="item['desc']">
          </v-list-item-subtitle>
          <v-list-item-title v-if="item['attendee']">
            <v-avatar v-for="item in item['attendee']">
              <v-img :src="item['img']"></v-img>
            </v-avatar>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-timeline-item>
  </v-timeline>
</template>
