import { routePaths } from "../router/routes";

// Compares the actual route of the component with the one extracted from
// route paths

//Provide string parentName and childName
export const routeComparator = (component, parentName, childName) => {
  const {
    [parentName]: {
      path: parentPath,
      children: { [childName]: childPath },
    },
  } = routePaths;

  const actualPath = component.$route.path;
  const comparisonRoute = `${parentPath}/${childPath}`;

  return actualPath === comparisonRoute;
};
