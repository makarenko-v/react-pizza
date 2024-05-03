interface PizzaProps {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
}

export function Pizza({
  name,
  ingredients,
  photoName,
  price,
  soldOut,
}: PizzaProps) {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}
