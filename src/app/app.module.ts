import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component'

import{MatButtonModule} from '@angular/material/button';
import{MatCardModule} from '@angular/material/card';
import{MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { EjempComponent } from './components/ejemp/ejemp.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    EjempComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatTabsModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatProgressSpinnerModule








  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
