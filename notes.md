### capabilities

set capabilities

-   automationName : Appium
-   DeviceName : Android
-   platformName: Android
-   PlatformVersion : 13
-   appPackage : com.android.
-   appActivity: com.android.

###

install uiautomator2 drive
start appium server
create capability and inspector

## find elementID

-   accesibility ID

## dialer

use apkinfo to get :

-   appPackage : com.android.dialer
-   appActivity: com.android.dialer.DialtactsActivity

```
key xpath
//android.widget.TextView[@content-desc="Phone"]


//android.widget.ImageButton[@content-desc="key pad"]


//android.widget.TextView[@resource-id="com.google.android.dialer:id/dialpad_key_number" and @text="1"]
//android.widget.TextView[@resource-id="com.google.android.dialer:id/dialpad_key_number" and @text="2"]
//android.widget.TextView[@resource-id="com.google.android.dialer:id/dialpad_key_number" and @text="*"]
//android.widget.TextView[@resource-id="com.google.android.dialer:id/dialpad_key_number" and @text="#"]

//android.widget.Button[@content-desc="dial"]
```
