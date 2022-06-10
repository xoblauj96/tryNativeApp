import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import * as JsBarcode from 'jsbarcode'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }
  // constructor() { }


  scanBarcode(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      alert(barcodeData)
     }).catch(err => {
         console.log('Error', err);
         alert('====>'+err);
     });
  }



  genBarcode(){
    JsBarcode("#barcode", "sor1234567890!");

  }

}
