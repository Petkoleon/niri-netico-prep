import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {DecimalPipe} from "@angular/common";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-control-button',
  standalone: true,
  imports: [
    DecimalPipe,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './control-button.component.html',
  styleUrl: './control-button.component.scss'
})
export class ControlButtonComponent implements OnInit {
  fb = inject(FormBuilder);
  @Input() item: { label: string, value: number, disabled?: boolean };
  @Output() valueSubmitted = new EventEmitter();
  numberForm: FormGroup;

  ngOnInit() {
      this.createInputForm();
  }

  createInputForm = (): void => {
    this.numberForm = this.fb.group({
      label: this.fb.control(this.item.label || '', [Validators.required]),
      numberInput: this.fb.control(this.item.value || 0, [Validators.required]),
    })
  }

  decrementData() {
    const update = +this.inputValueControl?.value - 0.1;
    this.numberForm.patchValue({
      numberInput: update.toFixed(2),
    });
    this.numberForm.markAsDirty();
  }

  get inputValueControl(): AbstractControl | null {
    return this.numberForm.get('numberInput');
  }

  isFormUnchanged(): boolean {
    return this.numberForm.pristine || this.numberForm.get('numberInput')?.value === this.item.value;
  }


  incrementData() {
    const update = +this.inputValueControl?.value + 0.1;
    this.numberForm.patchValue({
      numberInput: update.toFixed(2),
    });
    this.numberForm.markAsDirty();
  }

  onUpdateValue() {
    this.valueSubmitted.emit(this.numberForm.getRawValue());
  }
}
