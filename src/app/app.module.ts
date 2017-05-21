import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { AboutPage } from '../pages/about/about';
// import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MainPage } from '../pages/main/main';
import { LoginPage } from '../pages/login/login'
import { SignupPage } from '../pages/signup/signup'
import { SignupOwnerPage } from '../pages/signup-owner/signup-owner'
import { SignupTypePage } from '../pages/signup-type/signup-type'
import { FavouritePage } from '../pages/favourite/favourite'
import { SearchPage } from '../pages/search/search'
import { ReportPage } from '../pages/report/report'
import { Internal } from '../providers/internal'
import { External } from '../providers/external'
import { StorageSession } from '../providers/storage-session'
import { ProfilePage } from '../pages/profile/profile'
import { ShopProfilePage } from '../pages/shop-profile/shop-profile'
import { Paramservice} from '../providers/paramservice';
@NgModule({
  declarations: [
    MyApp,
    // AboutPage,
    // ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    SignupTypePage,
    SignupOwnerPage,
    MainPage,
    ProfilePage,
    ShopProfilePage,
    FavouritePage,
    SearchPage,
    ReportPage
  ],
  imports: [
    IonicModule.forRoot(MyApp) ,
    ReactiveFormsModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // AboutPage,
    // ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    SignupTypePage,
    SignupOwnerPage,
    MainPage,
    ProfilePage,
    ShopProfilePage,
    FavouritePage,
    SearchPage,
    ReportPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler} , Internal , External , StorageSession , Paramservice]
})
export class AppModule {}
