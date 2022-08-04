import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { FooterComponent } from './components/footer/footer.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { IfComponentComponent } from './components/if-component/if-component.component';
import { EventsComponent } from './components/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    FooterComponent,
    ParentDataComponent,
    IfComponentComponent,
    EventsComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
