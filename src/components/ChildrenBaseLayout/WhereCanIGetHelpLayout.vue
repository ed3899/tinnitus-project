<template>
  <v-container fluid class="temp-border pa-2">
    <!-- 1st Row -->
    <v-row no-gutters class="temp-border__item ma-2 pa-2">
      <v-col
        cols="12"
        class="temp-border__item pa-2 d-flex flex-column justify-space-around align-start"
      >
        <h2 v-text="firstRow.title" class="text-h2 ma-1"></h2>
        <p v-text="firstRow.p1" class="text-body-1 ma-1"></p>
      </v-col>
    </v-row>

    <!-- 2nd Row -->
    <v-row no-gutters class="temp-border__item ma-2 pa-2">
      <v-col
        cols="12"
        class="temp-border__item pa-2 d-flex flex-column justify-space-around align-start"
      >
        <h2 v-text="secondRow.title" class="text-h2 ma-1"></h2>
        <p
          v-text="secondRow.p1"
          class="text-body-1 font-weight-medium ma-1"
        ></p>
        <p v-text="secondRow.p2" class="text-body-1 ma-1"></p>

        <v-list two-line>
          <v-list-item
            v-for="({ title, subtitle, icon }, i) in secondRow.contactList"
            :key="title + subtitle + icon + i"
            class="d-flex justify-space-around align-center"
          >
            <v-list-item-icon class="ma-5">
              <v-icon v-text="icon" color="indigo"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title
                v-text="title"
                class="text-h6"
              ></v-list-item-title>
              <v-list-item-subtitle
                v-text="subtitle"
                class="text-subtitle-1"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <!-- 3rd Row -->
    <v-row no-gutters class="temp-border__item ma-2 pa-2">
      <v-col
        cols="12"
        class="temp-border__item pa-2 d-flex flex-column justify-space-around align-start"
      >
        <h2 v-text="thirdRow.title" class="text-h2 ma-1"></h2>
        <p v-text="thirdRow.p1" class="text-body-1 ma-1"></p>

        <blockquote class="blockquote">
          <p
            v-text="thirdRow.quote.text"
            class="text-body-2 text--secondary font-italic mb-1"
          ></p>
          <span thirdRow.quote.caption class="text-caption font-italic"> </span>
        </blockquote>
      </v-col>
    </v-row>

    <v-divider class="gray mx-3"></v-divider>

    <!-- 4th Row -->
    <v-row no-gutters class="temp-border__item ma-2 pa-2">
      <v-col
        cols="12"
        class="temp-border__item d-flex flex-column justify-space-around align-start pa-2"
      >
        <h5 v-text="fourthRow.title" class="text-h5 mb-2"></h5>

        <p v-text="fourthRow.p1" class="text-body-1"></p>

        <ul>
          <li v-for="{ name } in fourthRow.list" :key="name" v-text="name"></li>
        </ul>
      </v-col>
    </v-row>

    <v-divider class="gray mx-3"> </v-divider>

    <v-row no-gutters class="temp-border__item ma-2 pa-2">
      <v-col
        cols="12"
        class="temp-border__item d-flex flex-column justify-space-around align-start pa-2"
      >
        <p class="text-body-1">
          Funding from the Coronavirus Community Support Fund, distributed by
          The National Lottery Community Fund, has helped us with staffing and
          promotional costs for helpline. Thanks to the Government for making
          this possible.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "WhereCanIGetHelpLayout",
  data: () => ({
    firstRow: {
      title: `Talk to us`,
      p1: `Our Tinnitus Support Team has many years of experience supporting
          people with tinnitus. We provide empathy and emotional support to
          people living with a difficult and often misunderstood condition.`,
      p2: `Please note that while we do have an in-depth understanding of
          tinnitus, we are not medically qualified and are therefore unable to
          give medical advice.`,
    },
    secondRow: {
      title: `How to get in touch`,
      p1: ``,
      contactList: [
        {
          title: "Freephone helpline",
          subtitle: "Call 0800 018 0527",
          icon: "mdi-phone",
        },
        {
          title: "Email",
          subtitle: "Email us at helpline@tinnitus.org.uk ",
          icon: "mdi-email",
        },
        {
          title: "Text",
          subtitle: "If you have a quick question text us on 07537 416841",
          icon: "mdi-android-messages",
        },
      ],
    },
    thirdRow: {
      title: `Need support at other times?`,
      p1: `You can access our online support tool Take On Tinnitus 24/7.`,
      quote: {
        text: `"You've been an angel and I really appreciate what you have done for
            me. I can't describe how helpful it's been and really appreciate
            your taking the time to listen. You've empowered me to be able to
            make progress."`,
        caption: `BTA Helpline Caller`,
      },
    },
    fourthRow: {
      title: `The Helplines Partnership`,
      p1: `The BTA meets all of The Helplines Partnership's good practice
          criteria and are therefore authorised to display the member logo.`,
      list: [
        { name: `The helpline does not profit from callers` },
        { name: `The helpline provides unbiased support and information` },
        { name: `The person taking the call has been trained and supported` },
        {
          name: `The helpline has adequate staff to provide a service during all their advertised opening hours`,
        },
        {
          name: `The helpline has a clear policy on what information they can share about a call - read our confidentiality policy`,
        },
        {
          name: `The helpline has a policy on making the service accessible`,
        },
        {
          name: `The helpline has clear information available regarding complaints about the service - read our complaints policy`,
        },
      ],
    },
  }),
};
</script>

<style lang="scss" scoped></style>
