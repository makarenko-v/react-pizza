import { PIZZA_DATA } from "../data";
import { Pizza } from "./pizza";

export function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {PIZZA_DATA.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {PIZZA_DATA.map(
              ({ name, ingredients, photoName, price, soldOut }) => (
                <Pizza
                  name={name}
                  ingredients={ingredients}
                  photoName={photoName}
                  price={price}
                  soldOut={soldOut}
                  key={name}
                />
              ),
            )}
          </ul>
        </>
      ) : (
        <p>We&apos;re still working on our menu</p>
      )}
    </main>
  );
}
