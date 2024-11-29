import { useState } from 'react';
import './ListContent.scss';

// components
import TodoInput from './TodoInput';

function ListContent() {
  const [todos, setTodos] = useState([
    { id: 1, text: '一天一蘋果，醫生遠離我', completed: false },
    { id: 2, text: '投籃 1000 次', completed: false },
    { id: 3, text: '完成 pre test 作業', completed: true },
  ]);

  const completedTodos = todos.filter((todo) => todo.completed);
  const totalCount = todos.length;

  const [deletingId, setDeletingId] = useState(null);

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 新增todo
  const handleAddTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ]);
  };

  // 刪除todo
  const handleDelete = async (id) => {
    setDeletingId(id);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setTodos(todos.filter((todo) => todo.id !== id));
    setDeletingId(null);
  };

  return (
    <div className="list-container p-4 rounded-lg w-full max-w-10xl mx-auto min-h-0 h-full">
      <div className="bg-white p-4 rounded-lg shadow-sm h-full flex flex-col">
        {/* 進度條 */}
        <div className="mb-4 font-medium">
          進度：{completedTodos.length}/{totalCount}
        </div>
        {/* 可滾動的列表區域 */}
        <div className="flex flex-col space-y-2 flex-1 overflow-y-auto">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`flex items-center p-3 border rounded-lg hover:bg-[#ECECEC] ${
                todo.completed ? 'border-[#16CB4C]' : 'border-black'
              }`}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
                className="mr-3 w-5 h-5"
                style={{ accentColor: '#16CB4C' }}
              />
              <span
                className={`flex-1 ${todo.completed ? 'text-[#16CB4C]' : ''}`}
              >
                {todo.text}
              </span>
              <button
                className="text-red-500"
                onClick={() => handleDelete(todo.id)}
                disabled={deletingId === todo.id}
              >
                {deletingId === todo.id ? (
                  <svg
                    className="animate-spin h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Input */}
        <TodoInput onSubmit={handleAddTodo} />
      </div>
    </div>
  );
}

export default ListContent;