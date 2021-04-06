import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CrbannerComponent } from './component/home/crbanner/crbanner.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { IntroComponent } from './component/home/intro/intro.component';
import { PhotosComponent } from './component/photos/photos.component';
import { PhbannerComponent } from './component/photos/phbanner/phbanner.component';
import { AlbumsComponent } from './component/photos/albums/albums.component';
import { ChatComponent } from './component/chat/chat.component';
import { ChbannerComponent } from './component/chat/chbanner/chbanner.component';
import { ConversationComponent } from './component/chat/conversation/conversation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrbannerComponent,
    NavbarComponent,
    IntroComponent,
    PhotosComponent,
    PhbannerComponent,
    AlbumsComponent,
    ChatComponent,
    ChbannerComponent,
    ConversationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatChipsModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'chat', component: ChatComponent },
      { path: '**', component: HomeComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
