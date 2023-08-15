import { useAutoAnimate } from "@formkit/auto-animate/react";
import Trash from "../icons/Trash";

function TodoList({ todoList, handleCheck, handleDelete }) {
  const [animationParent] = useAutoAnimate();

  return (
    <ul className="w-full" ref={animationParent}>
      {todoList.map(({ id, name, done }) => (
        <li
          id={id}
          key={id}
          className={`flex items-center justify-between p-4 my-2 bg-gray- rounded hover:bg-gray-700 bg-gray-800 transition-colors duration-300 ${
            done ? "line-through text-gray-400" : ""
          }
          }`}
        >
          <div className="round">
            <input
              id={`checkbox-${id}`}
              type="checkbox"
              checked={done}
              onChange={() => handleCheck(id)}
            />
            <label htmlFor={`checkbox-${id}`}></label>
          </div>
          <span
            className="task flex-grow cursor-pointer"
            onClick={() => handleCheck(id)}
          >
            {name}
          </span>
          <Trash onClick={() => handleDelete(id)} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
