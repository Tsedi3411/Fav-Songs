

import { Provider } from 'react-redux';
import  store from './redux/store.jsx';
import SongList from './components/SongList';
import SongForm from './components/SongForm';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';

const GlobalStyles = css`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const App = () => {
  return (
    <Provider store={store}>
      <Global styles={GlobalStyles} />
      <Container>
        <h1>Song CRUD App</h1>
        <SongForm />
        <SongList />
      </Container>
    </Provider>
  );
};

export default App;

