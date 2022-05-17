import CardWrapperList from "../cardWrapper/CardWrapperList";

type Props = {};

export default function Recipes({}: Props) {
  return (
    <>
      <CardWrapperList header="Beef" />
      <CardWrapperList header="Chicken" />
      <CardWrapperList header="Pork" />
      <CardWrapperList header="Lamb" />
      <CardWrapperList header="Breakfast" />
    </>
  );
}
