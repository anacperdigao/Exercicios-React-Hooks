import { createContext } from "react";

export const data = {
    number: 123,
    text: 'Context API...'
}

export const DataContext = createContext()
DataContext.displayName = 'DataContext'