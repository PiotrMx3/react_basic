interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({title, subtitle}: HeaderProps) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </>
  );
};

export default Header;
