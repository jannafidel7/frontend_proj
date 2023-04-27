import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Cell,
} from "recharts";

export default function UserSalesChart({ data }) {
    const barColors = [
    "#CDD5D1",
    "#B4A6AB",
    "#946E83",
    "#615055",
    "#D64045",
    "#E9FFF9",
    "#9ED8DB",
    "#467599",
    "#1D3354",]
    return (
       <ResponsiveContainer width="100%" height={250}>
         <BarChart
            data={data}
        >
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="userDetails.name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* <Bar dataKey="total" fill="green"  /> */}
             {/* <Bar dataKey="total" fill="green" stroke="#000000"
                    strokeWidth={5} />  */}
            <Bar dataKey="total"  stroke="#000000"
                    strokeWidth={3} >
                        {
                        data.map((item, index) => (
                            <Cell key={`cell-${index}`} fill={barColors[index % 20]} />
                        ))
                    }
             </Bar> 
        </BarChart>
       </ResponsiveContainer>
       
        
    );
}