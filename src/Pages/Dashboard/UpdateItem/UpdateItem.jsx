import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useLoaderData, useParams } from "react-router-dom";

const UpdateItem = () => {
    const id = useParams();
    const [item, setItem] = useState();
    
    // useEffect(()=> {
    //     fetch(`http://localhost:5000/menu/${id}`)
    //     .then(res => res.json())
    //     .then(data => setItem(data))
    // }, [])

    // console.log(item)

  return (
    <div>
      <SectionTitle heading="Update Item" subHeading="Refresh Info"></SectionTitle>
    </div>
  );
};

export default UpdateItem;
