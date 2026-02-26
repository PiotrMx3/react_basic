import {useState} from "react";

interface IShopingItem {
  name: string;
  quantity: number;
}

const ShoppingList = () => {
  const [shoppingList, setShoppingList] = useState<IShopingItem[]>([]);
  const [name, SetName] = useState("");
  const [quantity, SetQuantity] = useState(0);
  const [userMessage, setUserMessage] = useState("");

  const addItem = (name: string, quantity: number) => {
    if (quantity <= 0) return setUserMessage("Quantity must be greater than 0");
    if (!name) return setUserMessage("Name must not be empty");

    setShoppingList((prev) => [...prev, {name, quantity}]);
    setUserMessage("Item added to shopping list");
  };

  const removeItem = (index: number) => {
    setShoppingList((prev) => prev.filter((_, i) => i !== index));
    setUserMessage("Item removed from shopping list");
  };

  return (
    <>
      <div>
        {userMessage && <p>{userMessage}</p>}
        <label htmlFor="input-name">Name: </label>
        <input
          onChange={(e) => SetName(e.target.value)}
          type="text"
          id="input-name"
          placeholder="Name"
          value={name}
        />
      </div>

      <div>
        <label htmlFor="input-number">Quantity: </label>
        <input
          onChange={(e) => SetQuantity(Number(e.target.value))}
          type="number"
          id="input-number"
          min={0}
          placeholder="0"
          value={quantity}
        />
      </div>
      <br />
      <button onClick={() => addItem(name, quantity)} type="button">
        Add
      </button>

      <br />

      <table style={{border: "1px red solid"}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {shoppingList.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => removeItem(index)} type="button">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ShoppingList;
