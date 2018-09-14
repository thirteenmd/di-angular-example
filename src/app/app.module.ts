import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { SimpleService } from './services/simple-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponentComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SimpleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
