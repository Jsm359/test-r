import React, { useEffect } from 'react';
import { PostContainer } from './components/PostContainer';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducer/ActionCreators';


export const App = () => {
  return (
    <div>
      
      <PostContainer/>
    </div>
  );
}

export default App;
