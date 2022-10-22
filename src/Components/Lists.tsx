import List from "./List";

const Lists = () => {
  const items: string[] = ["Minhaj", "Ahmed", "Sadik"];

  const onClick = (text: string): void => alert(text);
  return (
    <div>
      <List items={items} onClick={onClick} />
    </div>
  );
};

export default Lists;
