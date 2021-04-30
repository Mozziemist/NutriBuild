import React, { useEffect, useState } from "react";
import Form from "../Form/Form";
import { useLocation } from "react-router-dom";

const Create = () => {
  const location = useLocation();
  const [recipeId, setRecipeId] = useState(null);

  useEffect(() => {
    setRecipeId(location?.state?.recipeId);
    console.log(location?.state?.recipeId);
  }, []);

  return (
    <div>
      <Form currentId={recipeId} setRecipeId={setRecipeId} />
    </div>
  );
};

export default Create;
