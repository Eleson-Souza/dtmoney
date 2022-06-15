import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Header } from "./components/Header/Header";
import { TransactionModal } from "./components/TransactionModal/TransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleOpenModal() {
    setIsOpenModal(true);
  }

  function handleCloseModal() {
    setIsOpenModal(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenModal={handleOpenModal} />

      <Dashboard />

      <TransactionModal
        isOpen={isOpenModal}
        onRequestClose={handleCloseModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
