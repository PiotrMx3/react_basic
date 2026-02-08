interface FooterProps {
  copy: string;
  year: string;
}

const Footer = ({copy, year}: FooterProps) => {
  return (
    <>
      <footer>{`${copy} (${year})`}</footer>
    </>
  );
};

export default Footer;
