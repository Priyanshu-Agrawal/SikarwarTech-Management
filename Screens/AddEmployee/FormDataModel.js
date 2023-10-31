const FormDataModel = [
    {
        subCategoryLabel: 'Personal Information *',
        fields: [
            {label: 'Name', valueName: 'EmpName', type: 'Text', required: true, keyboardType: 'default', maxLength: 50, viewType: 'textInput'},
            {label: 'Date of Birth', valueName: 'DOB', type: 'Date', required: true, keyboardType: 'numeric', maxLength: 10, viewType: 'datePicker'},
            {label: 'Date of Joining', valueName: 'DOJ', type: 'Date', required: true, keyboardType: 'numeric', maxLength: 10, viewType: 'datePicker'},
            {label: 'Designation', valueName: 'Designation', type: 'Text', required: true, keyboardType: 'default', maxLength: 50, viewType: 'textInput'},
            {label: 'PAN Card', valueName: 'PANCard', type: 'Text', required: false, keyboardType: 'default', maxLength: 10, viewType: 'textInput'},
        ],
        expanded: true,
    },
    {
        subCategoryLabel: 'Contact Information *',
        fields: [
            { label: 'Address', valueName: 'EmpAddress' , type: 'Text', required: true, keyboardType: 'default', maxLength: 100, viewType: 'textInput'},
            { label: 'Phone', valueName: 'Contact_number' , type: 'Number', required: true, keyboardType: 'numeric', maxLength: 10, viewType: 'textInput'},
            { label: 'Email', valueName: 'E_mail' , type: 'Email', required: false, keyboardType: 'email-address', maxLength: 50, viewType: 'textInput'},
            { label: 'Pin Code', valueName: 'Pin_Code' , type: 'Number', required: true, keyboardType: 'numeric', maxLength: 6, viewType: 'textInput'},
        ],
        expanded: true,
    },
    {
        subCategoryLabel: 'Employment Information',
        fields: [
            { label: 'Employee Code', valueName: 'EmpCode' , type: 'Text', required: false, keyboardType: 'default', maxLength: 10, viewType: 'textInput'},
            { label: 'Releaving Date', valueName: 'ReleavingDate' , type: 'Date', required: false, keyboardType: 'numeric', maxLength: 10, viewType: 'datePicker'},
            { label: 'PF Account Number', valueName: 'PFACCNo' , type: 'Number', required: false, keyboardType: 'numeric', maxLength: 50, viewType: 'textInput'},
            { label: 'UAN Number', valueName: 'UANNo' , type: 'Text', required: false, keyboardType: 'default', maxLength: 10, viewType: 'textInput'},
            { label: 'Paid Days', valueName: 'PaidDays' , type: 'Number', required: false, keyboardType: 'numeric', maxLength: 3, viewType: 'textInput'},
            { label: 'EL Balance', valueName: 'ELBalance' , type: 'Number', required: false, keyboardType: 'numeric', maxLength: 3, viewType: 'textInput'},
            { label: 'EL After', valueName: 'ELAfter' , type: 'Number', required: false, keyboardType: 'numeric', maxLength: 3, viewType: 'textInput'},
        ],
        expanded: false,
    },
    {
        subCategoryLabel: null, //hidden
        fields: [
            {label: 'Employee ID', valueName: 'EmpID', type: 'Number', required: false, keyboardType: 'numeric', maxLength: 6, viewType: 'textInput'},
            {valueName: 'IsActive' , type: 'Boolean', required: false },
            {valueName: 'CreatedDate', type: 'Date', required: false},
        ]
    }
];
export default FormDataModel