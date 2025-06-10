import React from "react";
import { useParams, Link } from "react-router-dom";

function ItemPage({ items }) {
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));

  if (!item) {
    return (
      <div className="content p-40">
        <h1>Item not found</h1>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="content p-40">
      <div className="mb-40">
        <h1>{item.title}</h1>
      </div>
      <div className="d-flex justify-between">
        <div className="item-image" style={{ width: "40%" }}>
          <img
            src={item.imageUrl}
            alt={item.title}
            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
          />
        </div>
        <div className="item-details" style={{ width: "55%" }}>
          <h2>Details</h2>
          <p>
            <strong>Title:</strong> {item.title}
          </p>
          <p>
            <strong>Price:</strong> ${item.price}
          </p>
          <p>
            <strong>Description:</strong> This is a premium {item.title} sneaker
            designed for both style and performance. Featuring high-quality
            materials and advanced cushioning technology, it offers exceptional
            comfort and durability. Perfect for casual wear or athletic
            activities.
          </p>
          <Link to="/" className="btn btn-primary mt-20">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
