export function minlengthValidationMessage(err: any, field: { templateOptions: { minLength: any; }; }) {
    return `Should have atleast ${field.templateOptions.minLength} characters`;
}

export function maxlengthValidationMessage(err: any, field: { templateOptions: { maxLength: any; }; }) {
    return `This value should be less than ${field.templateOptions.maxLength} characters`;
}

export const formlyConfig = {
    extras: { lazyRender: true },
    validationMessages: [
        { name: 'required', message: 'This field is required' },
    ],
};