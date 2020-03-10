import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModule as FdFormModule, RadioModule } from '@fundamental-ngx/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioGroupComponent } from './radio-group.component';

@NgModule({
    imports: [CommonModule, FdFormModule, RadioModule, FormsModule, ReactiveFormsModule],
    exports: [RadioGroupComponent],
    declarations: [RadioGroupComponent]
})
export class PlatformRadioGroupModule {}
