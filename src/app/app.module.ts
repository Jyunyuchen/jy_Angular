import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NgTimePickerComponent } from './ng-time-picker/ng-time-picker.component';
import { ZorroCompomentModule } from './zorro-compoment/zorro-compoment.module';
import { NzInputNumberComponent } from './nz-input-number/nz-input-number.component';
import { ResizeRightDivAndLeftDivComponent } from './resize-right-div-and-left-div/resize-right-div-and-left-div.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    AComponent,
    BComponent,
    NgTimePickerComponent,
    NzInputNumberComponent,
    ResizeRightDivAndLeftDivComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    ZorroCompomentModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
