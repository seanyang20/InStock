import "./WarehouseDetails.scss";

export default function WarehouseDetails() {
  return (
    <section className="warehouse-details">
      <article className="warehouse-details__head">
        <div className="warehouse-details__head--back">
          <img className="warehouse-details__head--back-icon" alt="back icon" />
        </div>
        <h1 className="warehouse-details__head--title">King West</h1>
        <div className="warehouse-details__head--edit">
          <img className="warehouse-details__head--edit-icon" alt="edit icon" />
        </div>
      </article>
    </section>
  );
}
