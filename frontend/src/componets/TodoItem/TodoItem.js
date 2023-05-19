import style from './TodoItem.module.css'
import {useRef} from "react";
import {useDrag, useDrop} from "react-dnd";

export default function TodoItem(props) {
    const ref = useRef(null)
    const [{ handlerId }, drop] = useDrop({
        accept: 'card',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        drop(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = props.index
            const dragColumn = item.column
            const hoverColumn = props.column

            // Don't replace items with themselves
            if (dragIndex === hoverIndex && dragColumn === hoverColumn) {
                return
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            // Determine mouse position
            const clientOffset = monitor.getClientOffset()
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            // Time to actually perform the action
            props.moveTodo(dragIndex, hoverIndex, dragColumn, hoverColumn)
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex
        }
    })
    const [{ isDragging }, drag] = useDrag({
        type: 'card',
        item: () => {
            return { id: props.id, index: props.index, column: props.column };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        }),
    });
    drag(drop(ref));

    return(
        <div className={style.wrapper} style={{opacity: isDragging ? 0 : 1}} ref={ref} data-handler-id={handlerId}>
            <div className={style.todoBox}>
                <img src="/images/todoText.png"/>
                {props.todo.title}
            </div>
        </div>
    )
}
