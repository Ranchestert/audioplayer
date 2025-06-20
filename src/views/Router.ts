import Navigo from "navigo"
import { RenderMainPage } from "./MainPage";
import { RenderLoginPage } from "./LoginPage";

const router = new Navigo('/',{hash:false, strategy:"ALL"});

export function navigate(destination:string):void{
    router.navigate(destination);
}

router.on("/",()=>RenderMainPage());
router.on("/login",()=>RenderLoginPage());

router.resolve();