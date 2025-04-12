import {createContext,useContext} from "react";
export const ThemeContext = createContext({
    themeMode: "Light",
    darkTheme :()=>{

    } ,
     lightTheme : () => {}
        
    
})   // yha default value daali ja sakti hai

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}