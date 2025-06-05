import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useLanguage } from "../i18n/LanguageContext"; // ✅ Add language context
import "./ItemPieChart.css";

export default function ItemPieChart({ completed, active }) {
  const { t } = useLanguage();

  const data = [
    { name: t("chartCompleted"), value: completed },
    { name: t("chartActive"), value: active }
  ];

  const COLORS = ["var(--color-primary-hover)", "var(--color-accent)"];

  return (
    <div className="item-pie-chart">
      <ResponsiveContainer width={450} height={230}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            labelLine={true}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
