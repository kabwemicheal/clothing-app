import React from "react";
import CollectionItem from "../Items/Itemscollection";
import "../Preview/Preview.scss";

const Preview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...items }) => (
            <CollectionItem key={id} {...items} />
          ))}
      </div>
    </div>
  );
};

export default Preview;