import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { nanoid } from 'nanoid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public productForm: FormGroup = new FormGroup(
    {
      id: new FormControl(nanoid()),
      name: new FormControl(),
      price: new FormControl(null, [Validators.required, Validators.min(1)]),
      categories: new FormControl([]),
    }
  );

  public onClickGenerateButton(): void {
    this.productForm.get('id').setValue(nanoid());
  }

  public onSubmit(): void {
    if (this.productForm.invalid) {
      alert('Форма не валидна, попробуйте снова');
      return;
    }

    console.log(this.productForm.value);
  }

  constructor(){}
}
