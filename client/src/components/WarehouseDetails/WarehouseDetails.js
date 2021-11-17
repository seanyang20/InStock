import "./WarehouseDetails.scss";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";

export default function WarehouseDetails() {
  return (
    <section className="warehouse-details">
      <article className="head">
        <div className="head__back">
          <img className="head__back--icon" alt="back icon" />
        </div>
        <h1 className="head__title">King West</h1>
        <div className="head__edit">
          <img className="head__edit--icon" alt="edit icon" />
        </div>
      </article>
    </section>
  );
}
