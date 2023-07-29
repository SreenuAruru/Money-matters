import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  RoundedBar,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./TransactionOverviewCard.css";

const data = [
  { day: "Sat", debit: 250, credit: 220 },
  { day: "Sun", debit: 180, credit: 280 },
  { day: "Mon", debit: 300, credit: 400 },
  { day: "Tue", debit: 150, credit: 250 },
  { day: "Wed", debit: 200, credit: 400 },
  { day: "Thu", debit: 350, credit: 300 },
  { day: "Fri", debit: 400, credit: 350 },
];

const RoundedBars = (props) => {
  const { fill, x, y, width, height, radius } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={radius}
        ry={radius}
        fill={fill}
      />
    </g>
  );
};

function TransactionOverviewCard() {
  return (
    <div className="transaction-overiew-container">
      <div className="debit-credit-amount-status-container">
        <p className="week-amoun-statics">
          <span className="week-amount-status">$7,560</span> Debited &{" "}
          <span className="week-amount-status">$5,420</span> Credited in this
          Week
        </p>
        <div className="debit-credit-color-status">
          <div className="debit-color-status"></div>
          <p className="debit-color-status-text">Debit</p>
          <div className="credit-color-status"></div>
          <p className="credit-color-status-text">Credit</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data}>
          {/* <CartesianGrid strokeDasharray="0" horizontal={true} /> */}
          <XAxis dataKey="day" tick={{ fontSize: 13, fill: "#718EBF" }} />
          <YAxis tick={{ fontSize: 13, fill: "#718EBF" }} />
          <Tooltip />
          {/* <Legend /> */}
          <Bar
            dataKey="debit"
            barSize={25}
            shape={<RoundedBars radius={10} fill="#4D78FF" />}
          />
          <Bar
            dataKey="credit"
            barSize={25}
            shape={<RoundedBars radius={10} fill="#FCAA0B" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TransactionOverviewCard;
