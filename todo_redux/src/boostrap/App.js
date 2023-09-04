import { useContext } from 'react';
import { Provider } from 'react-redux'

import { TodoPage } from '../components/modules/todo/Todo.page';
import { TodoTemplate } from '../components/ui-elements/template/TodoTemplate';
import { ErrorBoundary } from '../components/ui-elements/common/ErrorBoundary';
import { store } from './store';


const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store} >
        <TodoTemplate>
          <TodoPage/>
        </TodoTemplate>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
