let patients = [
    {
        '_id': '01',
        'first_name': 'Antoine',
        'last_name': 'DUPLESSIS',
        'age': '24',
        'secu_sociale': '22889977123421',
        'profile_pic': 'https://api.adorable.io/avatars/285/abott@adorable.png',
        'reeducation_type': 'Genou'
    },
    {
        '_id': '02',
        'first_name': 'Erwan',
        'last_name': 'LORIEL',
        'age': '28',
        'secu_sociale': '22889977123421',
        'profile_pic': 'https://api.adorable.io/avatars/275/abott@adorable.png',
        'reeducation_type': 'Genou'
    },
    {
        '_id': '03',
        'first_name': 'Anna',
        'last_name': 'MONTEAU',
        'age': '33',
        'secu_sociale': '12489977123421',
        'profile_pic': 'https://api.adorable.io/avatars/285/abott@adorable.png',
        'reeducation_type': 'Épaule'
    }
];

let appointments = [
    {
        'patientId': '03',
        'date': '11/06/2019',
        'time': '14:30'
    }
];


let exercices = [
    {
        'patientId': '01',
        'list': [
            {
                'nom': 'Extension jambe',
                'description': '4 série de 10 répétitions',
                'url': 'https://images.ladepeche.fr/api/v1/images/view/5c3745418fe56f1de00a5fad/large/image.jpg'
            }
        ]
    },
    {
        'patientId': '02',
        'list': [
            {
                'nom': 'Extension jambe',
                'description': '4 série de 10 répétitions',
                'url': 'https://images.ladepeche.fr/api/v1/images/view/5c3745418fe56f1de00a5fad/large/image.jpg'
            }
        ]
    },
    {
        'patientId': '03',
        'list': [
            {
                'nom': 'Extension bras',
                'description': '3 série de 10 répétitions',
                'url': 'https://previews.123rf.com/images/racorn/racorn1512/racorn151200078/49086033-gros-plan-professionnel-kin%C3%A9sith%C3%A9rapeute-lever-le-bras-de-son-patient-femme-tout-en-examinant-l-%C3%A9paule-.jpg'
            }
        ]
    },
];


let getPatients = () => {
    return patients;
};

let getPatientsById = (id) => {
    let patient = null;
    for (let item of patients) {
        if (item._id === id) {
            patient = item;
            break;
        }
    }
    return patient;
};

let getCurrentPatient = () => {
    return patients[1];
};

let getNextPatient = () => {
    return patients[2];
};

let getNextAppointmentByPatientId = (id) => {
    let appointment = null;
    for (let item of appointments) {
        if (item.patientId === id) {
            appointment = item;
            break;
        }
    }
    return appointment;
};

let getExericesByPatientId = (id) => {
    let exercice = null;
    for (let item of exercices) {
        if (item.patientId === id) {
            exercice = item;
            break;
        }
    }
    return exercice;
};

export default {
    getPatients,
    getPatientsById,
    getNextPatient,
    getCurrentPatient,
    getNextAppointmentByPatientId,
    getExericesByPatientId
}
