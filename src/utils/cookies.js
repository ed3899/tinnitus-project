const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);

  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
};

const getCookie = cname => {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    //Eliminates white space at the beginning
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }

    //Value of a cookie
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export const checkCookie = cname => {
  const cookie = getCookie(cname);

  if (!cookie) {
    setCookie(cname, true, 7);
    return false;
  } else {
    return cookie;
  }
};
