import Cookies from "js-cookie"
import { FormEvent } from "react";

interface ILogin {
    message:string,
    token?:string,
};

async function APILogin(username:string, password:string): Promise<ILogin> {
    return fetch("http://localhost:8000/api/login",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password,
        })
    }).then(res=>{
        if(!res.ok){
            throw new Error(`The query has ended with status: ${res.status}`)
        }
        return res.json()
    }).then(res=>res as ILogin).catch(e=>{
        throw e;
    })
}

export async function handleLoginForm(e:FormEvent<HTMLFormElement>): Promise<void>{
    e.preventDefault();

    const form=e.target as HTMLFormElement;

    const username = (form.elements.namedItem("login") as HTMLInputElement).value;
    const password = (form.elements.namedItem("Password") as HTMLInputElement).value;

    let LoginResponse:ILogin=await APILogin(username,password);

    if(LoginResponse.message === "авторизация прошла успешно"){
        Cookies.set("tokenId",LoginResponse.token);
        //Navigate("/");
    }else{
        const errorText = document.getElementById("error-msg");
        if(errorText){
            errorText.style.display="block";
        }
        form.reset();
    }
}