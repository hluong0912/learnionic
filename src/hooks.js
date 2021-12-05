import {useState} from 'react'

export function useLocalStorage(key, defValue){
    //init value if nothing has been there
    const getInitialValue = () => { return localStorage.getItem(key) ?? defValue;}
    //make the useState hook
    const [value, setValue] = useState(getInitialValue)
    //make a modified Set Function
    const setAndStoreValue = (newVal) => {
        setValue(newVal)
        localStorage.setItem(key, newVal)
    }
    return [value, setAndStoreValue]
}