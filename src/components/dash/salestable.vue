<script setup>
let header = [
  {
    title: "Name",
    align: "start",
    key: "name",
  },
  {
    title: "Start Date",
    align: "center",
    key: "startdate",
  },
  {
    title: "End Date",
    align: "center",
    key: "enddate",
  },
  {
    title: "Status",
    align: "center",
    key: "status",
  },
  {
    title: "Assignee",
    align: "center",
    key: "assignee",
  },
];

let project = [
  {
    name: "Project Apollo",
    startdate: "01/01/2018",
    enddate: "31/06/2018",
    status: "Done",
    assignee: "Carl Jenkins",
  },
  {
    name: "Project Fireball",
    startdate: "01/01/2018",
    enddate: "31/06/2018",
    status: "In Progress",
    assignee: "Carl Jenkins",
  },
  {
    name: "Project Hades",
    startdate: "01/01/2018",
    enddate: "31/06/2018",
    status: "Cancelled",
    assignee: "Carl Jenkins",
  },
  {
    name: "Project Nitro",
    startdate: "01/01/2018",
    enddate: "31/06/2018",
    status: "Pending",
    assignee: "Carl Jenkins",
  },
  {
    name: "Project Pheonix",
    startdate: "01/01/2018",
    enddate: "31/06/2018",
    status: "Done",
    assignee: "Carl Jenkins",
  },
  {
    name: "Project Romeo",
    startdate: "01/01/2018",
    enddate: "31/06/2018",
    status: "Done",
    assignee: "Carl Jenkins",
  },
  {
    name: "Project Wombat",
    startdate: "01/01/2018",
    enddate: "31/06/2018",
    status: "Done",
    assignee: "Carl Jenkins",
  },
  {
    name: "Project X",
    startdate: "01/01/2018",
    enddate: "31/06/2018",
    status: "In Progress",
    assignee: "Carl Jenkins",
  },
  {
    name: "Project Zirco",
    startdate: "01/01/2018",
    enddate: "31/06/2018",
    status: "Done",
    assignee: "Carl Jenkins",
  },
];

const getColor = (status) => {
  if (status == "Done") return "success";
  else if (status == "Pending") return "primary";
  else if (status == "Cancelled") return "error";
  else if (status == "In Progress") return "warning";
};
</script>
<template>
  <v-data-table :headers="header" :items="project" :items-per-page="-1">
    <template v-slot:item.status="{ item }">
      <v-chip rounded="xl" :color="getColor(item.status)" small>
        {{ item.status }}
      </v-chip>
    </template>
  </v-data-table>
</template>
