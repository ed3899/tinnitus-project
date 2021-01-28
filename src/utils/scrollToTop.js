export const scrollToTop = (component, refElement) =>
  component.$vuetify.goTo(component.$refs[refElement]);
