const proxy = reqiure("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    proxy("/api", {
      target: "http://localhost:3001/",
    })
  );
};
