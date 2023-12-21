import React from 'react'
import { useSelector } from "react-redux";
const Result = () => {
    const list = useSelector((state) => state.taskreducer);
  return (
    <div className="showItems">
    <span> {list}</span>
  </div>
  )
}

export default Result