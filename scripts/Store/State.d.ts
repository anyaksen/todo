import {User} from 'firebase/app';

/**
 * Состояние приложения.
 */
interface State
{
	/** Задачи */
	todos: StateTodo[];
	/** Фильтр видимости */
	visibilityFilter: StateVisibilityFilter;
	/** Данные пользователя */
	user: User | null;
}

/**
 * Задача.
 */
interface StateTodo
{
	/** Идентификатор */
	// id: number;
	id: string;
	/** Текст задачи */
	text: string;
	/** Завершена? */
	completed: boolean;
}

/**
 * Фильтр видимости.
 */
type StateVisibilityFilter = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED';

/**
 * Module.
 */
export {
	State as default,
	StateTodo,
	StateVisibilityFilter,
};
