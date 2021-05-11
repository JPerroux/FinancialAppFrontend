import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { CotizationService } from './finance-tools/services/cotization.service';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from 'ng-sidebar';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ActionsListComponent } from './finance-tools/actions/actions-list/actions-list.component';
import { ConversorPipe } from './auth/pipes/conversor.pipe';
import { PesosConversorPipe } from './auth/pipes/pesosConversor.pipe';
import { SpreadPipe } from './auth/pipes/spread.pipe';
import { SpreadPesosPipe } from './auth/pipes/spreadPesos.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AuthService } from './auth/services/auth.service';
import { AddActionsComponent } from './finance-tools/actions/add-actions/add-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ActionsListComponent,
    ConversorPipe,
    PesosConversorPipe,
    SpreadPipe,
    SpreadPesosPipe,
    AddActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    SidebarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [CotizationService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
