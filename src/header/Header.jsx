import "./header.css"

export function Header({name, group, variant}) {
    return (
        <div className="bg header">{name}  Группа:{group} Вариант:{variant}</div>
    )
}