import About from '../../components/about/About';
import Title from '../../components/title/Title';

function MainPage() {
  return (
    <div>
      <Title title="Hello world" />
      <About info={{title: "Some Title", body:"Some body"}} />
    </div>
  );
}

export default MainPage;

