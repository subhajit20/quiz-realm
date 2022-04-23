import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function Auth() {
    const [checkLogin, setCheckLogin] = useState();

    async function myAuth() {
        const myCookie = cookies.get('quiz-realm')
        if (myCookie) {
            setCheckLogin(true)
        } else {
            setCheckLogin(false)
        }
    }
    useEffect(() => {

        myAuth()
        return () => {
            myAuth()
        }
    }, [])

    return checkLogin
}

export default Auth
