import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChange,
} from '@angular/core';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product;
  @Output() clickAddToCar: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('1. constructor');
  }

  ngOnChanges(changes: SimpleChange) {
    console.log('2. ngOnChanges');
    console.log(changes);
  }

  ngOnInit() {
    console.log('3. ngOnInit');
  }

  ngDoCheck() {
    console.log('4. ngDoCheck');
  }
  ngOnDestroy() {
    console.log('5. ngOnDestroy');
  }

  addCarro() {
    console.log('agregar a carro');
    this.clickAddToCar.emit(this.product.id);
  }
}
