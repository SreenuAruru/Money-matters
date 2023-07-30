import "./TransactionMenu.css";

function TransactionMenu() {
  const menuItems = [
    { title: "All Transaction", link: "/transaction/transactioName" },
    { title: "Debit", link: "/transaction/debit" },
    { title: "Credit", link: "/transaction/credit" },
  ];

  return (
    <ul className="debit-credit-menu-container">
      {menuItems.map((item, index) => (
        <li key={index} className="debit-credit-list-item">
          <a href={item.link} className="debit-credit-menu">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default TransactionMenu;
