import { routePaths } from "../router/routes";

// Compares the actual route of the component with the one extracted from
// route paths

//Provide string parentName and childName, this way I wouldn't need to
// import routePaths everywhere. Just once

//Component = Object
//Parent name = string
//child name = string

export const routeComparator = (component, parentName, childName) => {
  //Add trim and to LowerCase. Cleaning functionality
  const {
    [parentName]: {
      path: parentPath,
      alias: parentAlias,
      children: { [childName]: childPath },
    },
  } = routePaths;

  const actualPath = component.$route.path;
  const onlyParentNameProvided =
    childName === false || childName === null || childName === undefined;

  if (onlyParentNameProvided) {
    if (parentAlias) {
      switch (component.$route.path) {
        case parentPath:
        case parentAlias: {
          return true;
        }
      }
    } else {
      return actualPath === parentPath;
    }
  } else {
    const comparisonRouteWithChildren = `${parentPath}/${childPath}`;

    return actualPath === comparisonRouteWithChildren;
  }
};
