export const createBreadcrumbs = component => {
  const matchedRoutesArray = component.$route.matched;
  const thereAreMatchedRoutes = matchedRoutesArray.length > 0;
  const createArrayForBreadcrumbs = () => {
    const rawBreadcrumbRoutes = [];

    const nestedBreadcrumbRoutes = matchedRoutesArray.map(route => {
      const { path, name } = route;
      const routePathIsFalsy = !path;

      if (routePathIsFalsy) {
        const {
          meta: { alias },
        } = route;

        rawBreadcrumbRoutes.push(alias);
      } else {
        rawBreadcrumbRoutes.push(path);
      }

      const concatenatedRoute = rawBreadcrumbRoutes.join("");

      return {
        text: name,
        disabled: false,
        to: concatenatedRoute,
        exact: true,
      };
    });

    return nestedBreadcrumbRoutes;
  };

  if (thereAreMatchedRoutes) {
    return createArrayForBreadcrumbs();
  }
};
