
import { createContext,useState} from "react";

const ThemeContext =createContext();

export function ThemeProdiver({children}){
    const[theme,setTheme]=useState("light");
    
    const toggleTheme =()=>{
        setTheme((prevTheme) =>(prevTheme ==="light" ?"dark":"light"))
    }
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}

export default ThemeContext;