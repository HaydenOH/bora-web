import React, { Suspense } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles } from 'styles/GlobalStyles';
import { Wrapper } from 'layouts';
import LoginContainer from 'components/login/LoginContainer';
import { SignupContainer } from 'components/signup/index';

import PrivateRoute from 'components/common/PrivateRoute';
import { theme } from 'styles/theme';
import TodoContainer from 'components/todo/TodoContainer';
import { MypageContainer } from 'components';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <Suspense fallback={<div> LOADING......</div>}>
          <Wrapper>
            <Routes>
              <Route path="/" element={<PrivateRoute element={<></>} />} />
              <Route path="/mypage" element={<PrivateRoute element={<MypageContainer />} />} />
              <Route path="/signup" element={<SignupContainer />} />
              <Route path="/todo" element={<PrivateRoute element={<TodoContainer />} />} />
              <Route path="/login" element={<LoginContainer />} />
            </Routes>
          </Wrapper>
        </Suspense>
      </ThemeProvider>
    </>
  );
};

export default App;
