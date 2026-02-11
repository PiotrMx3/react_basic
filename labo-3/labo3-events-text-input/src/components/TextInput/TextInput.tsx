interface TextInputProps {
  size: number;
}

const TextInput = ({size}: TextInputProps) => {
  const array = Array.from({length: size}, (_, i) => i);

  const handleMessage = (index: number, value: string) => {
    alert(`Textbox ${index} changed to ${value}`);
  };
  return (
    <>
      {array.map((_, i) => (
        <input
          onChange={(e) => handleMessage(i, e.target.value)}
          key={i}
          type="text"
          name="text-input"
        />
      ))}
    </>
  );
};

export default TextInput;
