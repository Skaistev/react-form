import style from './Form.module.css';
import { useState } from 'react';

export function RegisterForm() {

    const [username, setUsername] = useState ('');
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const [repeatPassword, setRepeatPasword] = useState ('');

    function halndleEmailChange (e){
     setEmail(e.target.value);
    }


    function halndlePasswordChange (e){
     setPassword(e.target.value);
    }


    function halndleUsernameChange (e){
     setUsername(e.target.value);
    }


    function halndleRepeatPasswordChange (e){
     setRepeatPasword(e.target.value);
    }

    function isValidUsername (text){
        return true;
    }

    function isValidEmail(text){
        return true;
    }

    function isValidPassword(text){
        return true;
    }




    function handleFormSubmit (e){
       e.preventDefault();
       
       if (!isValidUsername){
        console.log('blogas username');
     
       }
        if (!isValidEmail){
            console.log('blogas email');
           }
           if (!isValidPassword){
            console.log('blogas password');
           }
           if (password !== repeatPassword){
            console.log('blogas repeat password');
           }

     
      
    }




    return (
        <form onSubmit={handleFormSubmit} className={style.form}>
            <div className={style.formRow}>
                <label className={style.label} htmlFor="">Username</label>
                <input value= {username} onChange={halndleUsernameChange} className={style.input} type="text" placeholder="Eg. John" />
            </div>
            <div className={style.formRow}>
                <label className={style.label} htmlFor="">Email</label>
                <input value= {email} onChange={halndleEmailChange}  className={style.input} type="email" placeholder="Eg. John@cena.com" />
            </div>
            <div className={style.formRow}>
                <label className={style.label} htmlFor="">Password</label>
                <input value= {password} onChange={halndlePasswordChange} className={style.input} type="password" placeholder="youcantseemenow" />
            </div>
            <div className={style.formRow}>
                <label className={style.label} htmlFor="">Repeat password</label>
                <input value= {repeatPassword} onChange={halndleRepeatPasswordChange}  className={style.input} type="password" placeholder="youcantseemenow" />
            </div>
            <div className={style.formRow}>
                <button className={style.button} type="submit">Register</button>
            </div>
        </form>
    );
}