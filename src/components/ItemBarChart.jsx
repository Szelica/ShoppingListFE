import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useLanguage } from "../i18n/LanguageContext"; // ✅ Import language context
import "./ItemBarChart.css";

export default function ItemBarChart({ data = [] }) {
  const { t } = useLanguage();

  if (!Array.isArray(data) || data.length === 0) {
    return <p style={{ padding: "1rem", fontStyle: "italic" }}>{t("noDataToDisplay")}</p>;
  }

  return (
    <div className="item-bar-chart">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 20, left: 40, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="completed"
            stackId="a"
            fill="var(--color-primary-hover)"
            name={t("chartCompleted")}
          />
          <Bar
            dataKey="active"
            stackId="a"
            fill="var(--color-accent)"
            name={t("chartActive")}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
