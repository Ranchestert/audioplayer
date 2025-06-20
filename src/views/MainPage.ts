import {el,setChildren} from "redom"
import { Navigate } from "./Router"
import Cookies from "js-cookie"

export function RenderMainPage(){
    setChildren(document.body,[el('h1',"main")]);
}