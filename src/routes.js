import Converter from "./components/Converter"
import Logarithm from "./components/Logarithm"
//import LCMGCD from "./components/LCMGCD"
import Home from "./components/Home"

export const routes = [
    { path : '', component : Home},
    { path : '/converter', component : Converter},
    { path : '/matematik', component : Converter},
    { path : '/geometri', component : Converter},
    { path : '/logarithm', component : Logarithm},

]