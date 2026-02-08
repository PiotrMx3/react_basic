import ListItem from "../ListItem/ListItem";

interface ListProps {
  items: string[];
}

const List = ({items}: ListProps) => {
  return (
    <>
      <ul>
        {items.map((e, i) => (
          <ListItem key={i} text={e} />
        ))}
      </ul>
    </>
  );
};

export default List;
