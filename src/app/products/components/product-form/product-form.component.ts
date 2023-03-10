import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // formGroup grupo de formControls, FormBuilder es un servicio para crear formulario

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder // servicio FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit() { }

  private buildForm() {

    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      image: [''],
      price: [10000, [Validators.required]],
      text:  ['', [Validators.required, Validators.minLength(100)]],
    });

    // this.form
    // .valueChanges
    // .subscribe(data =>{
    //   console.log(data);
    // });

  }

  createProduct() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

  get titleField() {
    return this.form.get('title');
  }

}



