import React, { useState } from "react";

function Folder({ files }) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(!show);
  };
  return (
    <div>
      <div style={{ padding: "10px", marginLeft: "10px" }}>
        {files.isFolder ? (
          <button onClick={handleClose} className={show ? "expand" : ""}>
            {">"}
          </button>
        ) : null}
        {files.name}

        {files.isFolder &&
          show &&
          files.children.map((file) => {
            return <Folder key={file.name} files={file} />;
          })}
      </div>
    </div>
  );
}

export default Folder;
