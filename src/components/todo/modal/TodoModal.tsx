import { TodoAPI } from 'apis/todo';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { useInput } from 'hooks/useInput';
import React, { useCallback, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { ITodo } from 'types/todo.types';
import TodoModalTemplate from './TodoModalTemplate';

interface Props {
  item: ITodo | null;
}

const TodoModal = ({ item }: Props) => {
  const modify = useMutation(
    (value: ITodo) =>
      TodoAPI.put.modify({
        todoDto: { ...value },
        todoId: item!.todoId,
      }),
    {
      onSuccess: (data, variables, contxt) => {
        alert('사용자 정보가 변경 되었습니다.');
      },
      onError: (err) => {
        console.log(err);
      },
    },
  );

  // const submit = useMutation(() => {}, {
  //   onSuccess: () => {
  //     alert('등록되었습니다.');
  //   },
  //   onError: (err) => {
  //     console.log(err);
  //   },
  // });

  const initialTodo: ITodo = {
    assignee: '',
    description: '',
    done: false,
    nickname: '',
    point: 0,
    priority: 0,
    regDate: '',
    start: '',
    end: '',
    title: '',
    todoType: '',
    todoId: 0,
  };

  const [inputs, onChange] = useInput(item || initialTodo);
  const [showDetail, setShowDetail] = useState(true);

  const handleSubmit = useCallback(async () => {
    const isOk = window.confirm('변경 하시겠습니까?');

    if (!isOk) {
      return;
    }

    modify.mutate(inputs);
  }, [modify, inputs]);

  const onOpenToggle = useCallback(() => {
    setShowDetail(true);
  }, []);

  const onCloseToggle = useCallback(() => {
    setShowDetail(false);
  }, []);

  const onToggle = useCallback(() => {
    setShowDetail((prev) => !prev);
  }, []);

  return (
    <TodoModalTemplate
      item={inputs}
      show={showDetail}
      onToggle={onToggle}
      onChange={onChange}
      TitleInput={
        <Input
          name="title"
          placeholder="title"
          // disabled={!disabled}
          color="#fff"
          value={inputs.title}
          onChange={onChange}
        />
      }
      DescriptionInput={
        <Input
          name="description"
          placeholder="description"
          color="#fff"
          // disabled={!disabled}
          value={inputs.description}
          onChange={onChange}
        />
      }
      SubmitButton={<Button text="등록하기" onClick={handleSubmit} />}
    />
  );
};

export default TodoModal;
