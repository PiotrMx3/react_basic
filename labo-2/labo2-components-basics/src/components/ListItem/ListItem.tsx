interface ListItemProps {
  text: string;
}

const ListItem = ({text}: ListItemProps) => {
  return (
    <>
      <li>{text}</li>
    </>
  );
};

export default ListItem;
