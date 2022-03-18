import { React, useState } from "react";
import { COLLECTION_DATA } from "../../Data/CollectionData";
import Preview from "../Preview/Preview";

const SharedPage = ({ title }) => {
  let [collections, setCollections] = useState(COLLECTION_DATA);

  if (title) {
    const filteredCollection = collections.filter(
      (collection) => collection.title === title
    );
    collections = filteredCollection;
  }

  return (
    <div>
      {collections.map(({ id, ...collections }) => (
        <Preview key={id} {...collections} />
      ))}
    </div>
  );
};

export default SharedPage;
