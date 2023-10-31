const FormDataModel = [
    {
        subCategoryLabel: 'Personal Information',
        fields: [
            {label: 'Employee ID', value: 'EmpID', type: 'Number', required: true, keyboardType: 'numeric', maxLength: 6, viewType: 'textInput'},
            {label: 'Name', value: 'EmpName', type: 'Text', required: true, keyboardType: 'default', maxLength: 50, viewType: 'textInput'},
            {label: 'Date of Birth', value: 'DOB', type: 'Date', required: true, keyboardType: 'numeric', maxLength: 10, viewType: 'datePicker'},
            {label: 'Date of Joining', value: 'DOJ', type: 'Date', required: true, keyboardType: 'numeric', maxLength: 10, viewType: 'datePicker'},
            {label: 'Designation', value: 'Designation', type: 'Text', required: true, keyboardType: 'default', maxLength: 50, viewType: 'textInput'},
            {label: 'PAN Card', value: 'PANCard', type: 'Text', required: false, keyboardType: 'default', maxLength: 10, viewType: 'textInput'},
        ],
        expanded: true,
    },
    {
        subCategoryLabel: 'Contact Information',
        fields: [
            { label: 'Address', value: 'EmpAddress' , type: 'Text', required: true, keyboardType: 'default', maxLength: 100, viewType: 'textInput'},
            { label: 'Phone', value: 'Phone' , type: 'Number', required: true, keyboardType: 'numeric', maxLength: 10, viewType: 'textInput'},
            { label: 'Email', value: 'Email' , type: 'Email', required: false, keyboardType: 'email-address', maxLength: 50, viewType: 'textInput'},
            { label: 'Pin Code', value: 'PinCode' , type: 'Number', required: true, keyboardType: 'numeric', maxLength: 6, viewType: 'textInput'},
        ],
        expanded: true,
    },
    {
        subCategoryLabel: 'Employment Information',
        fields: [
            { label: 'Employee Code', value: 'EmpCode' , type: 'Text', required: true, keyboardType: 'default', maxLength: 10, viewType: 'textInput'},
            { label: 'Releaving Date', value: 'ReleavingDate' , type: 'Date', required: false, keyboardType: 'numeric', maxLength: 10, viewType: 'datePicker'},
            { label: 'PF Account Number', value: 'PFACCNo' , type: 'Number', required: false, keyboardType: 'numeric', maxLength: 50, viewType: 'textInput'},
            { label: 'UAN Number', value: 'UANNo' , type: 'Text', required: false, keyboardType: 'default', maxLength: 10, viewType: 'textInput'},
            { label: 'Paid Days', value: 'PaidDays' , type: 'Number', required: false, keyboardType: 'numeric', maxLength: 3, viewType: 'textInput'},
            { label: 'EL Balance', value: 'ELBalance' , type: 'Number', required: false, keyboardType: 'numeric', maxLength: 3, viewType: 'textInput'},
            { label: 'EL After', value: 'ELAfter' , type: 'Number', required: false, keyboardType: 'numeric', maxLength: 3, viewType: 'textInput'},
        ],
        expanded: false,
    },
    {
        subCategoryLabel: null, //hidden
        fields: [
            {value: 'IsActive' , type: 'Boolean', required: true },
            {value: 'CreatedDate', type: 'Date', required: true}
        ]
    }
];
export default FormDataModel