function getKeyXpath(key: string): string {
    return `//android.widget.TextView[@resource-id="com.google.android.dialer:id/dialpad_key_number" and @text="${key}"]`;

    //android.widget.Button[@content-desc="dial"]`;
}
function getAccessibilityId(key: string): string {
    return `~${key},`;
}

function isNumeric(char: string): boolean {
    // Ensure the input is a single character
    if (char.length !== 1) {
        return false;
    }

    // Use isNaN to check if converting the character to a number results in NaN
    return !isNaN(Number(char));
}

describe("sample dialer", () => {
    it("by accessibility ID", async () => {
        // weather line: 1-833-794-3556
        const weatherNumber = "1-833-794-3556";
        await driver?.pause(2000);

        // launch dialer
        const phone = $("~Phone");
        await phone.click();

        const keypad = $("~key pad");
        await keypad.click();
        const keyIds = [
            "0",
            "1,",
            "2,ABC",
            "3,DEF",
            "4,GHI",
            "5,JKL",
            "6,MNO",
            "7,PQRS",
            "8,TUV",
            "9,WXYZ",
        ];
        // dial number
        for (const c of weatherNumber) {
            if (isNumeric(c)) {
                const id = keyIds[Number(c)];
                const key = $(`~${id}`);
                await key.click();
            }
        }

        const dial = $("~dial");
        await dial.click();
    });
});
