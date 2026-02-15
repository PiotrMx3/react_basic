interface HeaderProps {
  max: number;
}

const Header = ({max}: HeaderProps) => {
  const stub = Array.from({length: max}, (_, i) => i + 1);
  return (
    <>
      <tr>
        <th></th>
        {stub.map((e, i) => (
          <th key={i}>{e}</th>
        ))}
      </tr>
    </>
  );
};

export default Header;
