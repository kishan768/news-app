import { createContext, useState, useContext,useEffect } from "react";

const contextApi=createContext();

export const useGlobalContext=()=>{
    return useContext(contextApi);
}
const getInitialDarkMode=()=>{
    const preferedDarkMode=window.matchMedia("(preferes-color-scheme:dark)").matches;
    const storeDarkMode=localStorage.getItem('darkTheme')==='true'

    return storeDarkMode || preferedDarkMode
}
export const AppProvider=({children})=>{
    const [searchNews, setSearchNews] = useState([]);
    const [categoriesByNews, setCategoriesByNews] = useState([]);
    const [searchByCatKeyword, setSearchByCatKeyword] = useState('business');
    const [searchInput, setSearchInput] = useState('siwan');
    const [darkTheme, setDarkTheme] = useState(getInitialDarkMode);
    const toggleDarkTheme=()=>{
        const newTheme=!darkTheme;
        setDarkTheme(newTheme)
        localStorage.setItem('darkTheme',newTheme)


    }
    useEffect(() => {
        document.body.classList.toggle('dark-theme',darkTheme)
    }, [darkTheme]);
return <contextApi.Provider value={{searchNews,setSearchNews,categoriesByNews,setCategoriesByNews,searchByCatKeyword,setSearchByCatKeyword,searchInput,setSearchInput,darkTheme,toggleDarkTheme}}>
    {children}
</contextApi.Provider>
}