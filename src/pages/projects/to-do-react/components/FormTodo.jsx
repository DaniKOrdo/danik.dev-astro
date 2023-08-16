import Plus from "../icons/Plus";

function FormTodo({ addTodo }) {
  return (
    <form className="flex w-full py-5" onSubmit={addTodo}>
      <input
        type="text"
        className="w-full p-4 rounded-l-md bg-slate-200 dark:bg-slate-700"
        placeholder="Add new item..."
      />
      <button
        type="submit"
        className="bg-pink-600 hover:bg-pink-700 py-2 px-5 rounded-r-md"
      >
        <Plus />
      </button>
    </form>
  );
}

export default FormTodo;
