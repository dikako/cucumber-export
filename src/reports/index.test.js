describe("#services - Channels", () => {
  test("init module", () => {
    const index = require("./index");
    expect(Object.keys(index)).toHaveLength(11);
    expect(Object.keys(index)).toEqual([
      "webhook",
      "http-html-report",
      "elastic-search",
      "file",
      "slack",
      "microsoft-teams",
      "discord",
      "line",
      "mattermost",
      "html",
      "stream"
    ]);
  });
});
