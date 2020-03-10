import {
    AfterContentInit,
    Component,
    Output,
    ContentChildren,
    EventEmitter,
    forwardRef,
    QueryList,
    Input,
    ChangeDetectorRef,
    Optional,
    Self,
    OnChanges
} from '@angular/core';
import { NgControl, NgForm } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { RadioButtonComponent, stateType } from '@fundamental-ngx/core';
import { SelectItem } from '../data-model';
import { BaseInput } from '../base.input';

// Increasing integer for generating unique ids for radio components.
let nextUniqueId = 0;

/** Change event object emitted by RadioButtonComponent and RadioGroupComponent. */
export class RadioButtonChange {
    constructor(
        // The RadioButtonComponent that emits the change event.
        public source: RadioButtonComponent,
        // The value of the RadioButtonComponent.
        public value: any
    ) {}
}

@Component({
    selector: 'fdp-radio-group',
    templateUrl: './radio-group.component.html'
})
export class RadioGroupComponent extends BaseInput implements OnChanges, AfterContentInit {
    /**
     * values of radio buttons. type will be of SelectItem or String
     */
    @Input()
    list: Array<SelectItem | string>;

    /**
     * if all radio buttons are compact size.
     */
    @Input()
    compact: boolean = false;

    /**
     * Type of Radio buttons.
     */
    @Input()
    state: stateType = 'default';

    /**
     * To Dispaly Radio buttons in a line or not
     */
    @Input()
    get isInline(): boolean {
        return this._isInline;
    }

    set isInline(value: boolean) {
        this._isInline = coerceBooleanProperty(value);
    }

    /**
     * When the radio is required show None value to let user know to select something
     */
    @Input()
    hasNoValue: boolean = false;

    @Input()
    noValueLabel: string = 'None';

    /** Name of the radio button group. All radio buttons inside this group will use this name. */
    @Input()
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        if (this.name !== value) {
            this._name = value;
            this._updateRadioButtonNames();
        }
    }

    /**
     * Value for the radio-group. Should equal the value of the selected radio button if there is
     * a corresponding radio button with a matching value.
     */
    @Input()
    get value(): any {
        super.getValue();
        return this._value;
    }
    set value(newValue: any) {
        if (this._value !== newValue) {
            super.setValue(newValue);
            this._value = newValue;

            this._selectRadioButton();
            this._checkSelectedRadioButton();
        }
    }

    /**
     * The currently selected radio button. If set to a new radio button, the radio group value
     * will be updated to match the new selected button.
     */
    @Input()
    get selected() {
        return this._selected;
    }
    set selected(selected: RadioButtonComponent | null) {
        this._selected = selected;
        this.value = selected ? selected.value : null;
        this._checkSelectedRadioButton();
    }

    /** Whether the radio group is disabled */
    @Input()
    get disabled(): boolean {
        return this._disabled;
    }
    set disabled(value) {
        if (this._disabled !== value) {
            this._disabled = coerceBooleanProperty(value);
            this._disableRadioButtons();
        }
    }

    /** Child radio buttons. */
    @ContentChildren(
        forwardRef(() => RadioButtonComponent),
        { descendants: true }
    )
    radioButtons: QueryList<RadioButtonComponent>;

    /**
     * Event emitted when the group value changes.
     * Change events are only emitted when the value changes due to user interaction with
     * a radio button (the same behavior as `<input type-"radio">`).
     */
    @Output()
    readonly change: EventEmitter<RadioButtonChange> = new EventEmitter<RadioButtonChange>();

    /** Makes radio buttons in one line */
    protected _isInline: boolean = false;

    /** Selected value for the radio group. */
    protected _value: any = null;

    /** The HTML name attribute applied to radio buttons in this group. */
    protected _name: string = `radio-group-${nextUniqueId++}`;

    /** The currently selected radio button. Should match value. */
    private _selected: RadioButtonComponent | null = null;

    /** Whether the `value` has been set to its initial value. */
    private _isInitialized: boolean = false;

    /** Whether the radio group is disabled. */
    protected _disabled: boolean = false;

    constructor(
        private _changeDetector: ChangeDetectorRef,
        @Optional() @Self() public ngControl: NgControl,
        @Optional() @Self() public ngForm: NgForm
    ) {
        super(_changeDetector, ngControl, ngForm);
    }

    /**
     * checks selected radio button
     */
    _checkSelectedRadioButton() {
        if (this._selected && !this._selected.checked) {
            this._selected.inputElement.nativeElement.checked = true;
        }
    }

    /**
     * Initialize properties once content children are available.
     * This allows us to propagate relevant attributes to associated buttons.
     */
    ngAfterContentInit() {
        // Mark this component as initialized in AfterContentInit
        // because content will be initialised After this

        this._isInitialized = true;
        this._initRadioButtons();
    }

    /**
     * @hidden
     * @internal
     */
    private _initRadioButtons() {
        this._updateRadioButtonNames();
        if (this.radioButtons) {
            const props = { name: this._name, disabled: this._disabled };
            this.radioButtons.forEach(button => {
                Object.assign(button, props);
                if (button.value === this._value) {
                    button.inputElement.nativeElement.checked = true;
                    this._selected = button;
                }
                // button.onChange.Pipe(takeUntil(this.destroy$)).subscribe(ev => this._selectedRadioButtonChanged(ev));
            });
        }
    }

    /**
     * updates name for all child radio buttons
     */
    private _updateRadioButtonNames(): void {
        if (this.radioButtons) {
            this.radioButtons.forEach(radio => {
                radio.name = this.name;
            });
        }
    }

    /**
     * updates disabled status for all child radio buttons
     */
    private _disableRadioButtons() {
        if (this.radioButtons) {
            this.radioButtons.forEach(button => {
                button.disabled = this._disabled;
            });
        }
    }

    /** Updates the `selected` radio button from the internal _value state. */
    private _selectRadioButton() {
        if (this.radioButtons) {
            this.radioButtons.forEach(button => {
                if (!this._value) {
                    // no value - uncheck all radio buttons
                    if (button.checked) {
                        button.inputElement.nativeElement.checked = false;
                    }
                } else {
                    if (this._value === button.value) {
                        // selected button
                        if (this._selected !== button) {
                            this._selected = button;
                        }

                        if (!button.checked) {
                            button.writeValue(this._value);
                        }
                    } else {
                        // non-selected button
                        if (button.checked) {
                            button.inputElement.nativeElement.checked = false;
                        }
                    }
                }
            });
        }
    }

    onRadioClick(event: KeyboardEvent | MouseEvent) {
        event.stopPropagation();
    }

    /**
     * Registers a function called when the control is touched.
     */
    public registerOnTouched(fn: () => void) {
        if (this.radioButtons) {
            this.radioButtons.forEach(button => {
                button.registerOnTouched(fn);
            });
        }
    }
}
