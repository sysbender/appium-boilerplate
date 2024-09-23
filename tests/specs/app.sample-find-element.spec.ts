describe("find element", () => {
    it.only("by accessibility ID", async () => {
        await driver?.pause(2000);
        // find element by accessiblity ID ~
        const appOption = $("~App");
        // click
        await appOption.click();

        // assert
        const actionBar = $("~Action Bar");
        await expect(actionBar).toBeExisting();
    });
});
