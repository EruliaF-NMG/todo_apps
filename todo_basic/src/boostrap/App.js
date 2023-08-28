import { useContext } from 'react'
import { Button } from 'antd';

import { ContextProvider } from './Providers';
import { TodoPage } from '../components/modules/todo/Todo.page';
import { TodoContext } from '../components/global-context/context-providers/TodoContext.provider';


const App = () => {
  return (
    <ContextProvider>
      <TodoPage/>
    </ContextProvider>
  );
}

export default App;
