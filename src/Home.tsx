import {
  Table,
  TableCell,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
} from "@ui5/webcomponents-react";
import React, { useRef } from "react";
import { useNavigate } from "react-router";
interface TableData {
  id: string;
  revenue: number;
  title: string;
  year: string;
}
export const revenueFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
  minimumFractionDigits: 3,
});
const Home = () => {
  const navigate = useNavigate();
  const data: Array<TableData> = [
    {
      id: "1",
      title: "Avatar",
      year: "2009",
      revenue: 2.924,
    },
    {
      id: "2",
      title: "Avengers: Endgame",
      year: "2019",
      revenue: 2.789,
    },
    {
      id: "3",
      title: "Titanic",
      year: "1997",
      revenue: 2.223,
    },
  ];
  const containerRef = useRef(null);
  const handleRowClick = (movie: TableData) => {
    navigate(`/details/${movie.id}`);
  };
  return (
    <div ref={containerRef} style={{ paddingBlock: "1rem" }}>
      <Table id="table">
        <TableHeaderRow slot="headerRow" sticky>
          <TableHeaderCell>Titles</TableHeaderCell>
          <TableHeaderCell>Year</TableHeaderCell>
          <TableHeaderCell>Revenue</TableHeaderCell>
        </TableHeaderRow>
        {data.map((movie) => (
          <TableRow key={movie.id} onClick={() => handleRowClick(movie)}>
            <TableCell>{movie.title}</TableCell>
            <TableCell>{movie.year}</TableCell>
            <TableCell>{revenueFormatter.format(movie.revenue)}</TableCell>
          </TableRow>
        ))}
      </Table>
    </div>
  );
};

export default Home;
