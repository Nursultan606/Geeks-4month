
import classes from '../description/description.css';

function Description(props) {
  const { info } = props;
  return (
    <div className={classes.description}>
      <h2>{info.title}</h2>
      <p>{info.description}</p>
    </div>
  );
}

export default Description;
