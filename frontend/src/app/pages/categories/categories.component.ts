import { Category } from './../../models/category';
import { FlashMessagesService } from 'flash-messages-angular';
import { ConfigService } from './../../services/config.service';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  columns = this.config.categoryTableColumns;

  list$ = this.categoryService.getAll();

  constructor(
    private config: ConfigService,
    private categoryService: CategoryService,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit(): void {}

  delete(category: Category) {}
}
