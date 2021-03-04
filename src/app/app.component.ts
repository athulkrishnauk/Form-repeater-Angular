import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      formlist: this.fb.array([]),
    })
  }

  formData(): FormArray {
    return this.form.get('formlist') as FormArray;
  }

  field(): FormGroup {
    return this.fb.group({
      name: '',
      email: '',
      dob: ''
    });
  }

  removeField(i: number) {
    if (confirm('Are you sure you want to delete this element?')) {
      this.formData().removeAt(i);
    }
  }

  addField() {
    this.formData().push(this.field());
  }

  addForm() {
    console.log(this.form.get('formlist') as FormArray);
  }
}
