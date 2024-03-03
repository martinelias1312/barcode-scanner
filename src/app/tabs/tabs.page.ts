import { Component } from '@angular/core';
import { ScannerService } from '../services/scanner.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    public scannerService: ScannerService,
  ) {}
  
}
