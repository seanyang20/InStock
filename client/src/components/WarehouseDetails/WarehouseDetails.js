import "./WarehouseDetails.scss";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";

export default function WarehouseDetails() {
  return (
    <section className="warehouse-details">
      <article className="head">
        <div className="head__back">
          <img className="head__back--icon" src={backIcon} alt="back icon" />
        </div>
        <h1 className="head__title">King West</h1>
        <div className="head__edit">
          <img className="head__edit--icon" src={editIcon} alt="edit icon" />
        </div>
      </article>
      <article className="details">
        <div className="details__address-cont">
          <h6 className="details__subhead">WAREHOUSE ADDRESS:</h6>
          <p className="details__value">469 King Street West, Toronto, CAN</p>
        </div>
        <div className="details__contact-cont">
          <div className="details__name-cont">
            <h6 className="details__subhead">CONTACT NAME:</h6>
            <p className="details__value">Graeme Lyon</p>
            <p className="details__value">Warehouse Manager</p>
          </div>
          <div className="details__info-cont">
            <h6 className="details__subhead">CONTACT INFORMATION:</h6>
            <p className="details__value">+1 (951)384-7528</p>
            <p className="details__value">email@email.com</p>
          </div>
        </div>
      </article>
    </section>
  );
}
