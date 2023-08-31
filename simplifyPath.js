var simplifyPath = function (path) {
  let res = [];

  for (let i = 0; i < path.length - 1; i++) {
    let token = "";

    while (path[i] === "/" && path[i + 1] === "/") i++;

    while (i < path.length - 1 && path[i + 1] !== "/") {
      i++;
      token += path[i];
    }

    if (res.length > 0 && token === "..") {
      res.pop();
    } else if (token && token !== "." && token !== "..") {
      res.push(token);
    }
  }

  return "/" + res.join("/");
};

module.exports = simplifyPath;
