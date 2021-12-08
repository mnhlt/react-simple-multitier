import styled from "styled-components";

const TodoText = styled.span<{ isDone: boolean }>`
  text-decoration: ${(props) => (props.isDone ? "line-through" : "auto")};
`;
const TodoWrapper = styled.div`
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background: gray;
  }
`;
interface TodoLineProps {
  title: string;
  isDone: boolean;
  onClick?: () => void;
}

export function TodoLine({ title, isDone, onClick }: TodoLineProps) {
  return (
    <TodoWrapper onClick={onClick}>
      <input type="checkbox" />
      <TodoText isDone={isDone}>{title}</TodoText>
    </TodoWrapper>
  );
}
