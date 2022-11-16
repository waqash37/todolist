import React, { useEffect, useState } from "react";

const List = ({refresh, setRefresh}) => {
  const [lists, setLists] = useState([]);
  

  const showData = () => {
    const data = JSON.parse(localStorage.getItem("list"));
    setLists(data);
    setRefresh(false)
  };

  useEffect(() => {
    showData();
    
  }, [refresh===true]);
  console.log(lists);
  return lists === null ? (
    <div>no Data</div>
  ) : (
    lists.map((data) => <div className="bg-primary">{data}</div>)
  );
};

export default List;
