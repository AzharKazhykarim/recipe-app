import CardWrapperList from "../cardWrapper/CardWrapperList";

type Props = {};

export default function Recipes({}: Props) {
  return (
    <>
      <div className="beef" id="beef">
        <CardWrapperList header="Beef" />
      </div>

      <div className="chicken" id="chicken">
        <CardWrapperList header="Chicken" />
      </div>
      <div className="pork" id="pork">
        <CardWrapperList header="Pork" />
      </div>
      <div className="lamb" id="lamb">
        <CardWrapperList header="Lamb" />
      </div>
      <div className="breakfast" id="breakfast">
        <CardWrapperList header="Breakfast" />
      </div>
    </>
  );
}
