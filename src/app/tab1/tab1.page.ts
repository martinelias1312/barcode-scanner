import { Component } from '@angular/core';
import { Barcode } from '@capacitor-mlkit/barcode-scanning';
import { ScannerService } from '../services/scanner.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public barcodes: Barcode[] = [];

  constructor(
    private scannerService: ScannerService,
  ) {}

  ionViewWillEnter() {
    this.barcodes = this.scannerService.barcodes;
  }
}
