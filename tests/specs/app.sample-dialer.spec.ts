function getKeyXpath(key: string): string {
    return `//android.widget.TextView[@resource-id="com.google.android.dialer:id/dialpad_key_number" and @text="${key}"]`;

    //android.widget.Button[@content-desc="dial"]`;
}

function dial(keys: string) {}

describe("sample dialer", () => {
    it("by accessibility ID", async () => {
        await driver?.pause(2000);

        const keyDial = $('//android.widget.Button[@content-desc="dial"]');
        const key5 = $(getKeyXpath("5"));
        const key1 = $(getKeyXpath("1"));
        const key4 = $(getKeyXpath("4"));
        // find element by accessiblity ID ~
        const phone = $('//android.widget.TextView[@content-desc="Phone"]');
        // click
        await phone.click();

        // assert
        const dialpad = $(
            '//android.widget.ImageButton[@content-desc="key pad"]'
        );
        await dialpad.click();
        await key5.click();
        await key1.click();
        await key4.click();
        await keyDial.click();
    });
});
