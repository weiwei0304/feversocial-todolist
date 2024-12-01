import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const TodoInput = ({ onSubmit }) => {
  const { t } = useTranslation();

  const [newTodo, setNewTodo] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    onSubmit(newTodo.trim());
    setNewTodo('');
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder={t('inputPlaceholder')}
        className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
        disabled={isLoading}
      />
      {isLoading ? (
        <button
          type="button"
          className="px-1 py-2 rounded-lg flex items-center"
          disabled
        >
          <svg
            className="animate-spin h-5 w-5 text-[#0071FF]"
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
        </button>
      ) : (
        <button
          type="submit"
          disabled={isLoading}
          className="px-1 py-2 rounded-lg text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-6 text-[#0071FF]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      )}
    </form>
  );
};

export default TodoInput;
