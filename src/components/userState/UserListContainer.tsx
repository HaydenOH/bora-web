import styled from '@emotion/styled';
import React, { useState } from 'react';
import DrawerMenu from './DrawerMenu';
import arvatar from './avatar.jpeg';

export interface UserListRes {
  id: number;
  username: string;
  nickName: string;
  isActive: number;
  avatar: string;
}

const UserListContainer = () => {
  const userList: UserListRes[] = [
    {
      id: 0,
      username: '박재민',
      nickName: '초보자',
      isActive: 1,
      avatar: arvatar,
    },
    {
      id: 1,
      username: '장해솔',
      nickName: '레인저',
      isActive: 0,
      avatar: arvatar,
    },
    {
      id: 2,
      username: '오진욱',
      nickName: '레인저',
      isActive: 2,
      avatar: arvatar,
    },
    {
      id: 3,
      username: '김슬기',
      nickName: '레인저',
      isActive: 1,
      avatar: arvatar,
    },
    {
      id: 4,
      username: '최영은',
      nickName: '레인저',
      isActive: 1,
      avatar: arvatar,
    },
    {
      id: 5,
      username: '노찬욱',
      nickName: '레인저',
      isActive: 0,
      avatar: arvatar,
    },
    {
      id: 6,
      username: '여민정',
      nickName: '헌터',
      isActive: 0,
      avatar: arvatar,
    },
  ];
  const [open, setOpen] = useState<boolean>(false);

  return (
    <UserListWrapper>
      <DrawerMenu {...{ userList, open, setOpen }} />
    </UserListWrapper>
  );
};

export default UserListContainer;

const UserListWrapper = styled.div``;
