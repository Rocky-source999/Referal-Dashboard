import React, { createContext, useContext, useEffect, useState } from "react";

const ApiContextData = createContext();


export const useApi = () => useContext(ApiContextData);

export default function ApiContext({ children }) {
    const [data, setData]=useState([])

    useEffect(() => {
    const fetchData = async () => {
        const response = await fetch("https://nxtwave-assessments-backend-nxtwave-media-static.s3-ap-south-1.amazonaws.com/topin_beta/media/content_loading/uploads/d4457a9c-6134-46a5-b31c-60ad13a3e2f6_userData.json");
        const result = await response.json();
        setData(result);
        const names = [
        "Rahul", "Amit", "Sneha", "Priya", "Arjun",
        "Kiran", "Ravi", "Neha", "Vikram", "Anjali",
        "Suresh", "Meena", "Rohit", "Pooja", "Manoj",
        "Divya", "Karthik", "Swathi", "Naveen", "Deepika",
        "Harsha", "Lakshmi", "Varun", "Keerthi", "Ajay",
        "Nisha", "Sanjay", "Bhavya", "Tarun", "Preeti",
        "Gopal"
      ];
        const updatedData = result.map((item, index) => ({
        ...item,
        name: names[index % names.length]
      }));
      setData(updatedData);
    };
    fetchData();
  }, []);
  return (
    <ApiContextData.Provider value={data}>
      {children}
    </ApiContextData.Provider>
  );
}