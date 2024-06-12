import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
// import { StatustableComponent } from './statustable/statustable.component';
import { MatTableModule } from '@angular/material/table';
import { ContentComponent } from './content/content.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavComponent } from './nav/nav.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ButtonComponent } from './button/button.component';
import { TextareaComponent } from './textarea/textarea.component';
import { ExecutionformComponent } from './executionform/executionform.component';
import { FormGroup, FormControl, FormsModule } from '@angular/forms'; 
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component'; 


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ContentComponent,
    SidenavComponent,
    NavComponent,
    ButtonComponent,
    TextareaComponent,
    ExecutionformComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatExpansionModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
