import Description  from "../../components/description/Description";
import classes from '../aboutPage/aboutPage.module.css';


function AboutPage() {
  const info = { title: "Желтый", description: "Второй слайд" };

  return (
    <div className={classes.aboutPage}>
      <h1>About Page</h1>
      <Description info={info} />
    </div>
  );
}

export default AboutPage;
