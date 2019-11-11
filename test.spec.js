describe("Should fail on the it", () => {
  before(async () => {
    await browser.url("/");
  });
  it("Should fail and save a screenshot", async () => {
    const title = await browser.getTitle();
    expect(title).to.equal("Fail");
  });
});

describe("Should fail on the before and NOT save a screenshot or stacktrace", () => {
  before(async () => {
    await browser.url("/");
    const title = await browser.getTitle();
    expect(title).to.equal("Fail");
  });
  it("Should pass", async () => {
    const title = await browser.getTitle();
    expect(title).to.equal("Google");
  });
});
