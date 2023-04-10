import { Component } from '@angular/core';
import {INVESTMENT_LIST_ITEMS} from '../constants';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent {
  items = INVESTMENT_LIST_ITEMS;
}
