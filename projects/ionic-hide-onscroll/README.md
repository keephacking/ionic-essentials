# ionic-hide-onscroll 
A simple plugin to hide elements while scrolling. 


## Usage

### Install
 `npm install ionic-hide-onscroll --save`

### Import to your module
 `import {HideOnscrollModule} from 'ionic-hide-onscroll';` 
 
### Add to your template
    <ion-content #content scrollEvents="true">
      ...
     <ion-fab vertical="bottom" 
       horizontal="end" 
       slot="fixed" 
       [hideOnscroll]="content" 
       (click)="onTopClick()">
       <ion-fab-button>Top</ion-fab-button>
     </ion-fab>
    </ion-content>


