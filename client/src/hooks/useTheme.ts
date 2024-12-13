import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeProvider"


const useTheme = () => {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) throw new Error('useTheme must be used within ThemeProvider');
    return themeContext;    
}

export default useTheme;