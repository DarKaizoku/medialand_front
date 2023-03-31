import { useState } from 'react';

const urlLogin = 'http://localhost:8000/auth/login';


export default function Login(props: { setPage: (value: string) => void }) {
    const dataLogin = {
        username: '',
        password: '',
    };

    const [dataInput, setDataInput] = useState(dataLogin);

    const inputChange = (e: React.BaseSyntheticEvent) => {
        const { name, value } = e.target;

        setDataInput({ ...dataInput, [name]: value });
    };

    const submitData = (e: React.BaseSyntheticEvent) => {
        e.preventDefault(); console.log(dataInput);


        async function fetchData() {
            const response = await fetch(urlLogin, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataInput),
            });

            const responseJson = await response.json();
            if (responseJson.statusCode === 401) {
                return alert(responseJson.message);
            }
            const token = responseJson.access_token;
            localStorage.setItem('token', token);
            props.setPage('Accueil')
        }
        fetchData();
        return (e.target[0] = true);
    };

    return (
        <div>
            <section className='alert vh-100 gradient-custom alert-dismissible'
                role={'alert'}

            >
                <div className='container py-5 h-100'>
                    <div className='row d-flex justify-content-center align-items-center h-100'>
                        <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
                            <div className='card bg-dark text-white rounded zposition'
                            >
                                <div className='card-body p-5 text-center'>
                                    <div className='mb-md-5 mt-md-4 pb-5'>
                                        <h2 className='fw-bold mb-2 text-uppercase'>
                                            Login
                                        </h2>
                                        <p className='text-white-50 mb-5'>
                                            Merci de saisir votre Pseudo et votre Mot de Passe !
                                        </p>

                                        <div className='form-outline form-white mb-4'>
                                            <input
                                                name='username'
                                                type='text'
                                                id='typeEmailX'
                                                className='form-control form-control-lg'
                                                onChange={(
                                                    e
                                                ) =>
                                                    inputChange(
                                                        e
                                                    )
                                                }
                                            />
                                            <label
                                                className='form-label'
                                                htmlFor='typeEmailX'
                                            >
                                                Pseudo
                                            </label>
                                        </div>

                                        <div className='form-outline form-white mb-4'>
                                            <input
                                                name='password'
                                                type='password'
                                                id='typePasswordX'
                                                className='form-control form-control-lg'
                                                onChange={(
                                                    e
                                                ) =>
                                                    inputChange(
                                                        e
                                                    )
                                                }
                                            />
                                            <label
                                                className='form-label'
                                                htmlFor='typePasswordX'
                                            >
                                                Mot
                                                de
                                                Passe
                                            </label>
                                        </div>

                                        <p className='small mb-5 pb-lg-2'>
                                            <a
                                                className='text-white-50'
                                                href='#!'
                                            >
                                                Mot de Passe oublié ?
                                            </a>
                                        </p>

                                        <button
                                            className='btn btn-outline-light btn-lg px-5'
                                            type='submit'
                                            data-bs-dismiss='alert'
                                            onClick={(
                                                e
                                            ) =>
                                                submitData(
                                                    e
                                                )
                                            }
                                        >
                                            Login
                                        </button><br />
                                        <button
                                            className='btn btn-outline-light btn-sm px-5 mt-3'
                                            type='button'
                                            data-bs-dismiss='alert'
                                            onClick={() => props.setPage('Accueil')}
                                        >
                                            Annuler
                                        </button>

                                        <div className='d-flex justify-content-center text-center mt-4 pt-1'>
                                            <a
                                                href='#!'
                                                className='text-white'
                                            >
                                                <i className='fab fa-facebook-f fa-lg'></i>
                                            </a>
                                            <a
                                                href='#!'
                                                className='text-white'
                                            >
                                                <i className='fab fa-twitter fa-lg mx-4 px-2'></i>
                                            </a>
                                            <a
                                                href='#!'
                                                className='text-white'
                                            >
                                                <i className='fab fa-google fa-lg'></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div>
                                        <p className='mb-0'>
                                            Vous n'avez pas de Compte !<br />
                                            <a
                                                href='#!'
                                                className='text-white-50 fw-bold'
                                            >
                                                Enregistrez-vous
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
