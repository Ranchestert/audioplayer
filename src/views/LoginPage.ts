import {el,setChildren} from "redom"
import "../styles/LoginPage.css"
import { handleLoginForm } from "../controllers/login"
import { navigate } from "./Router";

export function RenderLoginPage(){
    const loginForm = el("form",{
        class: "form", 
        name:"loginForm", 
        id:"loginForm"
    },[
        el("div",{
            class: "form-field"
        },[
            el('label',{
                for:"Login", 
                class:"form-field__label"
            },"Enter your username:"),
            el('input',{
                type:"text", 
                name:"Login", 
                class:"form-field__input"
            }),
        ]),
        el("div",{
            class: "form-field"
        },[
            el('label',{
                for:"password", 
                class:"form-field__label"
            },"Enter your password:"),
            el('input',{
                type:"password",
                name:"Password",
                class:"form__input"
            }),
        ]),
        el("p",{
            class:"form-error", 
            id:"error-msg"
        },"Username or password is incorrect."),
        el("a",{
            href:"/signup/",
            class:"to-reg",
            onclick:(e)=>{
                e.preventDefault();

                navigate("/signup/")
            },
        },"try singing up."),
        el("button",{
            type:"submit", 
            class:"form-submit"
        },"Log in"),
    ]);

    setChildren(document.body,[
        el("a",{
            href:"/",
            class:"back",
            onclick: (e)=>{
                e.preventDefault();

                navigate("/");
            },
        },"Back"),
        loginForm
    ]);
}

document.getElementById("loginForm")?.addEventListener('submit',(e)=>handleLoginForm(e));