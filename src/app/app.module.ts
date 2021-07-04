import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ROUTING } from './app.routes';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { UserDetalleComponent } from './user-detalle/user-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetalleComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    HttpClientModule
    
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
