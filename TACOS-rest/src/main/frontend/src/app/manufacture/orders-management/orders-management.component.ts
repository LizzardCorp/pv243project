import {Component, OnInit} from '@angular/core';
import {Order, OrderService} from "../../services/order/order.service";

@Component({
  selector: 'app-orders-management',
  templateUrl: './orders-management.component.html',
  styleUrls: ['./orders-management.component.css']
})
export class OrdersManagementComponent implements OnInit {

  public orders : Order[];

  constructor(private orderSerivce: OrderService) { }

  ngOnInit() {
    this.orderSerivce.getAllOrders().subscribe( orders => this.orders = orders)
  }

}
