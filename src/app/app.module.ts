import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
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
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
