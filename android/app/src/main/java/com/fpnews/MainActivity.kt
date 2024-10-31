package com.fpnews


import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;
import com.google.android.gms.auth.api.signin.GoogleSignIn;


class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "FPNews"

 
    override fun onCreate(savedInstanceState: Bundle?) {
        SplashScreen.show(this)  // Display splash screen
        super.onCreate(savedInstanceState)
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        GoogleSignIn.getClient(this, GoogleSignInOptions.DEFAULT_SIGN_IN);
        super.onCreate(savedInstanceState);
       
    }

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
