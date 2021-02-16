<template>
  <v-container fluid :style="[weAreOnDevMode ? brownBorder : '']" class="pa-1">
    <v-row no-gutters :style="[weAreOnDevMode ? brownBorder : '']" class="pa-1">
      <v-col
        cols="12"
        :style="[weAreOnDevMode ? greenBorder : '']"
        class="pa-1 d-flex flex-column justify-space-around align-start"
      >
        <h2 class="text-h2 ma-1">Talk to us</h2>
        <p class="text-body-1 ma-1">
          Our Tinnitus Support Team has many years of experience supporting
          people with tinnitus. We provide empathy and emotional support to
          people living with a difficult and often misunderstood condition.
        </p>
      </v-col>
    </v-row>

    <v-row
      no-gutters
      :style="[weAreOnDevMode ? brownBorder : '']"
      class="my-1 pa-1"
    >
      <v-col
        cols="12"
        :style="[weAreOnDevMode ? greenBorder : '']"
        class="pa-1 d-flex flex-column justify-space-around align-start"
      >
        <h2 class="text-h2 ma-1">
          How to get in touch
        </h2>

        <!-- Contact list -->
        <v-list two-line>
          <v-list-item
            v-for="({ title, subtitle, icon }, i) in contactList"
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

    <v-row
      no-gutters
      :style="[weAreOnDevMode ? brownBorder : '']"
      class="mb-1 pa-1"
    >
      <v-col
        cols="12"
        :style="[weAreOnDevMode ? greenBorder : '']"
        class="pa-1 d-flex flex-column justify-space-around align-start"
      >
        <h2 class="text-h2 ma-1">
          Need support at other times?
        </h2>
        <p class="text-body-1 ma-1">
          You can access our online support tool Take On Tinnitus 24/7.
        </p>

        <blockquote class="blockquote">
          <p class="text-body-2 text--secondary font-italic mb-1">
            "You've been an angel and I really appreciate what you have done for
            me. I can't describe how helpful it's been and really appreciate
            your taking the time to listen. You've empowered me to be able to
            make progress."
          </p>
          <span class="text-caption font-italic">BTA Helpline Caller </span>
        </blockquote>
      </v-col>
    </v-row>

    <v-divider
      :class="[{ black: weAreOnDevMode }, 'gray']"
      class="my-1 mx-3"
    ></v-divider>

    <v-row
      no-gutters
      :style="[weAreOnDevMode ? brownBorder : '']"
      class="mb-1 pa-1"
    >
      <v-col
        cols="12"
        :style="[weAreOnDevMode ? greenBorder : '']"
        class="d-flex flex-column justify-space-around align-start pa-1"
      >
        <h5 class="text-h5 mb-2">
          The Helplines Partnership
        </h5>

        <p class="text-body-1">
          The BTA meets all of The Helplines Partnership's good practice
          criteria and are therefore authorised to display the member logo.
        </p>

        <ul>
          <li
            v-for="{ name } in helplinePartners"
            :key="name"
            v-text="name"
          ></li>
        </ul>
      </v-col>
    </v-row>

    <v-divider :class="[{ black: weAreOnDevMode }, 'gray']" class="my-1 mx-3">
    </v-divider>

    <v-row no-gutters :style="[weAreOnDevMode ? brownBorder : '']" class="pa-1">
      <v-col
        cols="12"
        :style="[weAreOnDevMode ? greenBorder : '']"
        class="d-flex flex-column justify-space-around align-start pa-1"
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
//% Utils
import { weAreOnDevMode, brownBorder, greenBorder } from "../../utils/index";

export default {
  name: "GetSupportWhereCanIGetHelp",
  data: () => ({
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

    helplinePartners: [
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
  }),
  computed: {
    weAreOnDevMode,
    brownBorder,
    greenBorder,
  },
};
</script>
