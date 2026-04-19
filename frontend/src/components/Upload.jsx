import { useState } from "react";
import API from "../api";

function Upload() {
  const [image, setImage] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    await API.post("/auth/upload", formData, {
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "multipart/form-data"
      }
    });

    alert("Image Uploaded");
  };

  return (
    <div>
      <h2>Upload Image</h2>

      <form onSubmit={handleUpload}>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default Upload;