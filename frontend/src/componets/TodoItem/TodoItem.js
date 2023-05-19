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
        drop(dragItem, monitor) {
            const fromIndex = dragItem.index
            let endIndex = props.index
            const fromColumn = dragItem.column
            const endColumn = props.column

            if (!ref.current?.children[0]) {
                props.moveTodo(fromIndex, fromColumn, endIndex, endColumn);
                return;
            }

            // Don't replace items with themselves
            if (fromIndex === endIndex && fromColumn === endColumn) {
                return
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.children[0].getBoundingClientRect()
            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.bottom + hoverBoundingRect.top) / 2
            // Determine mouse position
            const clientOffset = monitor.getClientOffset()
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards

            if (clientOffset.y > hoverMiddleY) {
                endIndex++;
            }
            // Time to actually perform the action
            props.moveTodo(fromIndex, fromColumn, endIndex, endColumn)
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            dragItem.index = endIndex
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
            {
                props.todo ? (
                    <div className={style.todoBox}>
                        <img src="/images/todoText.png"/>
                        {props.todo.title}
                    </div>
                ) : null
            }
        </div>
    )
}
