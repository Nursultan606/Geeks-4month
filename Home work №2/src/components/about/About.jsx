
function About(props) {
  const { info } = props;
  return (
    <div>
      <h2>{info.title}</h2>
      <p>{info.body}</p>
    </div>
  );
}

export default About;

