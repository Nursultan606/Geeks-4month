import classes from '../mainPage/mainPage.module.css'
import Description from "../../components/description/Description";
function MainPage() {
  const info = { title: "Зеленый", description: "Первый слайд" };

  return (
    <div className={classes.mainPage}>
      <h1>Main Page</h1>
      <Description info={info} />
    </div>
  );
}

export default MainPage;