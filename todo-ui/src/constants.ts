import { TodoFilterType } from './types';

export const TODO_FILTERS = ['all', 'completed', 'active'] as const;

export const DEFAULT_TODO_FILTER: TodoFilterType = 'all';
