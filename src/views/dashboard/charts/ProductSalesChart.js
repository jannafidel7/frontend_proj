import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function ProductSalesChart({ data }) {
    const pieColors =[
        "#CDD5D1",
        "#B4A6AB",
        "#946E83",
        "#615055",
        "#D64045",
        "#E9FFF9",
        "#9ED8DB",
        "#467599",
        "#1D3354",
       
    ]
    // console.log(data)
    
    const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${percent}%`} 
    </text>
  );
};
    return (
        <ResponsiveContainer width="100%" height={581}>
            <PieChart width={800} height={800}>
            {/* <Pie data={data} dataKey="percent" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" /> */}
                <Pie
                    dataKey="percent"
                    nameKey="name"
                    isAnimationActive={true}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="#8884d8"
                    // label={renderCustomizedLabel}
                    // labelLine={false}
                    label
                >  {
                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />)
                    }
                </Pie>
                <Tooltip />
                <Legend layout="vetical" verticalAlign="top" align="right"/>
            </PieChart>
        </ResponsiveContainer>


    );
}