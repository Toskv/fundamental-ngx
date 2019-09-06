/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, style, transition, trigger } from '@angular/animations';
/** @type {?} */
export const alertFadeNgIf = trigger('fadeAlertNgIf', [
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate('250ms ease-in-out', style({
            opacity: 1
        }))
    ]),
    transition(':leave', [
        style({
            opacity: 1,
            marginTop: '*',
            paddingTop: '*',
            paddingBottom: '*',
            height: '*',
            overflow: 'hidden'
        }),
        animate('400ms ease-in-out', style({
            opacity: 0,
            marginTop: 0,
            paddingTop: 0,
            paddingBottom: 0,
            height: 0,
            overflow: 'hidden'
        }))
    ])
]);
/** @type {?} */
export const alertContainerNgIf = trigger('alertContainerNgIf', [
    transition(':leave', [
        style({ opacity: 1 }),
        animate('400ms ease-in-out', style({ opacity: 0 }))
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtYW5pbWF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmdW5kYW1lbnRhbC1uZ3gvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hbGVydC9hbGVydC11dGlscy9hbGVydC1hbmltYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUE0QixLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUVwRyxNQUFNLE9BQU8sYUFBYSxHQUE2QixPQUFPLENBQzFELGVBQWUsRUFDZjtJQUNJLFVBQVUsQ0FDTixRQUFRLEVBQUU7UUFDTixLQUFLLENBQUM7WUFDRixPQUFPLEVBQUUsQ0FBQztTQUNiLENBQUM7UUFDRixPQUFPLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDO1lBQy9CLE9BQU8sRUFBRSxDQUFDO1NBQ2IsQ0FBQyxDQUFDO0tBQ04sQ0FDSjtJQUNELFVBQVUsQ0FDTixRQUFRLEVBQUU7UUFDTixLQUFLLENBQUM7WUFDRixPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSxHQUFHO1lBQ2QsVUFBVSxFQUFFLEdBQUc7WUFDZixhQUFhLEVBQUUsR0FBRztZQUNsQixNQUFNLEVBQUUsR0FBRztZQUNYLFFBQVEsRUFBRSxRQUFRO1NBQ3JCLENBQUM7UUFDRixPQUFPLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDO1lBQy9CLE9BQU8sRUFBRSxDQUFDO1lBQ1YsU0FBUyxFQUFFLENBQUM7WUFDWixVQUFVLEVBQUUsQ0FBQztZQUNiLGFBQWEsRUFBRSxDQUFDO1lBQ2hCLE1BQU0sRUFBRSxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7U0FDckIsQ0FBQyxDQUFDO0tBQ04sQ0FDSjtDQUNKLENBQ0o7O0FBRUQsTUFBTSxPQUFPLGtCQUFrQixHQUE2QixPQUFPLENBQy9ELG9CQUFvQixFQUNwQjtJQUNJLFVBQVUsQ0FDTixRQUFRLEVBQUU7UUFDTixLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUM7UUFDbkIsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0tBQ3BELENBQ0o7Q0FDSixDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgYWxlcnRGYWRlTmdJZjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcihcbiAgICAnZmFkZUFsZXJ0TmdJZicsXG4gICAgW1xuICAgICAgICB0cmFuc2l0aW9uKFxuICAgICAgICAgICAgJzplbnRlcicsIFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLWluLW91dCcsIHN0eWxlKHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICB0cmFuc2l0aW9uKFxuICAgICAgICAgICAgJzpsZWF2ZScsIFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJyonLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnKicsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcqJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnKicsXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzQwMG1zIGVhc2UtaW4tb3V0Jywgc3R5bGUoe1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICBdXG4gICAgICAgIClcbiAgICBdXG4pO1xuXG5leHBvcnQgY29uc3QgYWxlcnRDb250YWluZXJOZ0lmOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKFxuICAgICdhbGVydENvbnRhaW5lck5nSWYnLFxuICAgIFtcbiAgICAgICAgdHJhbnNpdGlvbihcbiAgICAgICAgICAgICc6bGVhdmUnLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDF9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCc0MDBtcyBlYXNlLWluLW91dCcsIHN0eWxlKHtvcGFjaXR5OiAwfSkpXG4gICAgICAgICAgICBdXG4gICAgICAgIClcbiAgICBdXG4pO1xuIl19