import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceService } from '../../services/service.service'
@Component({
  selector: 'app-invoice-table',
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.scss']
})
export class InvoiceTableComponent {
  displayedColumns = ['invoiceno', 'name', 'date', 'status', 'total'];
  dataSource = [];
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.service.getData().subscribe((res) => {
      this.dataSource = res
    })
  }
  getStatusStyle(status: string) {
    let style: any = {};

    switch (status.toLowerCase()) {
      case 'paid':
        style['background-color'] = '#19875426';
        style.color = '#198754'
        break;
      case 'unpaid':
        style['background-color'] = '#f1154126';
        style.color = '#f11541'
        break;
      case 'partially paid':
        style['background-color'] = '#fd7e1426';
        style.color = '#fd7e14'
        break;
      default:
        break;
    }
    return style;
  }
}

