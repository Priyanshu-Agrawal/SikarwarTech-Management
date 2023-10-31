
const DashboardActions = [
    {
        title: 'Add Employee',
        icon: 'adduser',
        description: 'Add new employee to the Database',
        targetScreen: 'AddEmployee',
        onPress: () => navigation.navigate('AddEmployee')
    },
    {
        title: 'View Employees',
        icon: 'team',
        description: 'View all employees in the Database',
        targetScreen: 'ViewEmployees',
        onPress: () => navigation.navigate('ViewEmployees')
    },
    {
        title: 'Manage Package',
        icon: 'pluscircle',
        description: 'Manage packages of employees',
        targetScreen: 'ManagePackage',
        onPress: () => navigation.navigate('ManagePackage')
    },
    // {
    //     title: 'View Packages',
    //     icon: 'gift',
    //     description: 'View all packages of the employees in the Database',
    //     targetScreen: 'ViewPackages',
    //     onPress: () => navigation.navigate('ViewPackages')
    // },
    {
        title: 'Show Transactions',
        icon: 'layout',
        description: 'View all transactions of the employees in the Database',
        targetScreen: 'ViewTransactions',
        onPress: () => navigation.navigate('AddPackageToEmployee')
    },
]
export default DashboardActions;