import config from "../config";

let login = (email, password) => {
    return (new Promise(resolve => setTimeout(() => {
        if (email === 'mail@mail.com') {
            resolve(
                {
                    success: true,
                    message: 'User logged'
                });
        }
        else {
            resolve(
                {
                    success: false,
                    message: 'User not found'
                });
        }
    }), 1000));
};

let me = () => {
    return (new Promise(resolve => setTimeout(resolve(
        {
            token: '1234',
            email: 'test@mail.com',
            first_name: 'David',
            last_name: 'Zakrzewski'
        }
    ), 1000)));
};

let resetPassword = (email) => {

    console.log(email);

    let options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({to: email})
    };

    return (

        fetch(config.apiUrl + '/email',
            options)
            .then((response) => {
                return response.json();
            })
    );
};

export default {
    login,
    me,
    resetPassword,
}
