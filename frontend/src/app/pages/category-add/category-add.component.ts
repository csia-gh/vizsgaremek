import { Router } from '@angular/router';
import { CategoryService } from './../../services/category.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { Category } from './../../models/category';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss'],
})
export class CategoryAddComponent implements OnInit {
  category: Category = new Category();
  @ViewChild('catForm') form: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit({ value, valid }: { value: Category; valid: boolean | null }) {
    if (!valid) {
      // Show error
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger',
        timeout: 4000,
      });
    } else {
      this.categoryService.create(value).subscribe({
        next: () => {
          // Show message
          this.flashMessage.show('New category added', {
            cssClass: 'alert-success',
            timeout: 4000,
          });

          // Redirect to dash
          this.router.navigate(['/categories']);
        },
        error: (err) => console.error(err),
      });
    }
  }
}
