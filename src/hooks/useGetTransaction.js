import {
  query,
  collection,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase-config";
import { useGetUserinfo } from "./useGetUserinfo";
export const useGetTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionTotals, setTransactionTotals] = useState({
    balance: 0.0,
    income: 0.0,
    expenses: 0.0,
  });

  const transactionCollectionRef = collection(db, "transactions");
  const { userId } = useGetUserinfo();
  const getTransactions = async () => {
    let unsubcribe;
    try {
      const queryTransactions = query(
        transactionCollectionRef,
        where("userId", "==", userId),
        orderBy("createdAt")
      );

      unsubcribe = onSnapshot(queryTransactions, (snapshot) => {
        let docs = [];
        let totalExpenses = 0;
        let totalIncome = 0;
        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;

          docs.push({ ...data, id });

          if (data.transactionType === "expense") {
            totalExpenses += Number(data.transactionAmount);
          } else {
            totalIncome += Number(data.transactionAmount);
          }

          console.log(totalExpenses, totalIncome);
        });
        setTransactions(docs);
        let balance = totalIncome - totalExpenses;
        setTransactionTotals({
          balance,
          expenses: totalExpenses,
          income: totalIncome,
        });
      });
    } catch (err) {
      console.error(err);
    }
    return () => unsubcribe();
  };

  useEffect(() => {
    getTransactions();
  }, []);
  return { transactions, transactionTotals };
};
