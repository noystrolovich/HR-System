const initstate = {
  employees:[
        {
            id:1,
            firstName:'Noy',
            lastName:'Strolovich',
            startDate: '01.01.2020',
            department: 'Marketing',
            branch: 'Beer-Sheva',
            salary: 21000
        },
        {
            id:2,
            firstName:'Yaniv',
            lastName:'Arad',
            startDate: '31.12.2019',
            department: 'Marketing',
            branch: 'Beer-Sheva',
            salary: 8000
        },
        {
            id:3,
            firstName:'Shani',
            lastName:'Levi',
            startDate: '30.10.2021',
            department: 'RND',
            branch: 'Ashkelon',
            salary: 16000
        },
        {
            id:4,
            firstName:'Sonia',
            lastName:'Karasik',
            startDate: '21.05.2022',
            department: 'Legal',
            branch: 'Ramat-Gan',
            salary: 12000
        },
        {
            id:5,
            firstName:'May',
            lastName:'Buhadana',
            startDate: '02.02.2020',
            department: 'ART',
            branch: 'Ramat-Gan',
            salary: 18000
        },
        {
            id:6,
            firstName:'Tal',
            lastName:'Filo',
            startDate: '08.04.2019',
            department: 'Human Resources',
            branch: 'Ashkelon',
            salary: 9500
        },
        {
            id:7,
            firstName:'Linda',
            lastName:'Azulay',
            startDate: '07.03.2023',
            department: 'Sales',
            branch: 'Beer-Sheva',
            salary: 8000
        }
    ],
    departments: [
        {
            name:'Marketing',
            openPositions: 6,
            manager: 'Tiki Pur',
            email: 'Marketing@gmail.com',
            phone: '08-222-01'

        },
        {
            name:'RND',
            openPositions: 4,
            manager: 'Eli Copter',
            email: 'rnd@gmail.com',
            phone: '08-222-02'

        },
        {
            name:'Legal',
            openPositions: 2,
            manager: 'Moti Luchim',
            email: 'legal@gmail.com',
            phone: '08-222-03'

        },
        {
            name:'ART',
            openPositions: 5,
            manager: 'Asi Mon',
            email: 'art@gmail.com',
            phone: '08-222-04'

        },
        {
            name:'Human Resources',
            openPositions: 1,
            manager: 'Avi Ron',
            email: 'hr@gmail.com',
            phone: '08-222-05'

        },
        {
            name:'Sales',
            openPositions: 3,
            manager: 'Shimha Reef',
            email: 'sales@gmail.com',
            phone: '08-222-06'

        },
        
        
    ]
}

const rootReducer = (state=initstate,action) => {
    switch (action.type) {
        case 'ADD':
            return {...state,employees:[...state.employees,action.payload]}
        case 'DELETE': {
            const employees = state.employees.filter((employee) => employee.id !== action.payload);
            return { ...state, employees }
        }
        case 'UPDATE': {            
            const employees = [...state.employees];
            const index = employees.findIndex((employee) => employee.id === action.payload.id);
            if (index !== -1) {                
                employees[index] = { ...employees[index], ...action.payload };
                console.log(employees);
                
            }
            return { ...state, employees};
        }
        default: 
            return state
    }

}

export default rootReducer