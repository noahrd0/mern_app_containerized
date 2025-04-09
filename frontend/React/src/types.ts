export interface Book {
    _id: string,
    title: string,
    author: string,
    ISBN: number
}

export interface FormField{
	title: "text" | "number",
	author: string,
	placeholder: string
}
