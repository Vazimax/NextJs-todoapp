type ToDoItemPros = {
    id: string
    title: string
    complete: boolean

}


export function ToDoItem({id, title, complete}: ToDoItemPros){
    return <li className="fex gap-1 items-center">
        <input id={id} type='checkbox' className="cursor-pointer peer"/>
        <label htmlFor={id} className="peer-checked:line-through">{title}</label>
    </li>
}