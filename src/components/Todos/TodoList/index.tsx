import React from 'react';
import { useTodoStore } from '@/store/todoStore';
import { Todo } from '@/shared/interfaces';
import { TodoListFilter } from './TodoListFilter';
import { TodoItem } from './TodoItem';
import { Loader } from './Loader';
import { NoTasksMsg } from './NoTasksMsg';
import { StyledTodoListContainer } from './styles';
import InfiniteScroll from 'react-infinite-scroller';

export const TodoList: React.FC = () => {
  const { todos, loading, loadMoreTodos } = useTodoStore();

  return (
    <StyledTodoListContainer>
      <TodoListFilter />
      <ul className="todo-list">
        <InfiniteScroll
          loadMore={loadMoreTodos}
          hasMore={true}
          threshold={1}
          initialLoad={false}
          useWindow={false}
        >
          {loading && <Loader />}
          {!loading &&
            todos.length > 0 &&
            todos.map((todo: Todo, index: number) => (
              <TodoItem todo={todo} key={index} index={index} />
            ))}
          {!loading && !todos.length && <NoTasksMsg />}
        </InfiniteScroll>
      </ul>
    </StyledTodoListContainer>
  );
};
