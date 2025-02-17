import { Dispatch, SetStateAction } from "react"

export interface IServices {
    name: string
    desc: string
    category: string
    icon: string
    aiPrompt: string
    field?: 'input' | 'textarea';
    slug: string
    required?: boolean;
    form: Form[]
}

interface Form {
    label: string
    field: string
    name: string
    required?: boolean
}

export interface ISearch {
    search: string
}

export interface ISearchAction {
    setSearch: Dispatch<SetStateAction<string>>
}

export interface Imobile {
    toggle: boolean
    handleToggle: () => void
}
