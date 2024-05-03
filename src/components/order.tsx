interface OrderProps {
  closeHours: number;
}

export function Order({ closeHours }: OrderProps) {
  return (
    <div className="order">
      <p>
        We&apos;re open until {closeHours}:00! Come visit us or order online.
      </p>
      <button className="btn" type="button">
        Order
      </button>
    </div>
  );
}
