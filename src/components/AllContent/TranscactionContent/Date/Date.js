import "./Date.css";

function Date(props) {
  const { eachtTransactionDate } = props;

  //   const currentDate = new Date(eachtTransactionDate);
  //   const dayValue = currentDate.getDate();
  //   const monthValue = currentDate.toLocaleString("default", {
  //     month: "short",
  //   });
  //   const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: true };
  //   const formattedTime = currentDate.toLocaleString("en-US", timeOptions);

  return <p className="date-text">{eachtTransactionDate}</p>;
}

export default Date;
