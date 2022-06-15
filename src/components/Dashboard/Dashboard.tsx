import React from "react";
import { Summary } from "../Summary/Summary";
import { TransactionTable } from "../TransactionTable/TransactionTable";
import { Container } from "./styled";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
}
