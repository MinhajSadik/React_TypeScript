const List = ({
  items,
  onClick,
}: {
  items: string[];
  onClick: (item: string) => void;
}) => {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <li key={index} onClick={() => onClick(item)}>
            {item}
          </li>
        );
      })}
    </div>
  );
};

export default List;
