# [ionic-hide-onscroll](https://github.com/keephacking/ionic-essentials/packages/113903)

A simple plugin to hide elements while scrolling.

## Usage

### Import to your module

`import {HideOnscrollModule} from '@keephacking/ionic-hide-onscroll';`

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
