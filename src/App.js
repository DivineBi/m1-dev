
import './App.css';
import Header from './components/Header';
import Article from './components/Article';
import HelloWorldReactComponent from './components/HelloWorldReactComponent';
import HelloWorldReact from './components/HelloWorldReact';
import HelloWorldFragmentReact from './components/HelloWorldFragmentReact';
import ListeElements from './components/ListeElements';
import Footer from './components/Footer';
import Sitereact from './components/exercice5/Sitereact';



const articles = [
  {
    id:1,
    titre:"test",
    paragraph:"ceci est un test",
    image:"test.jpg"
  },
  {
    id:2,
    titre:"test2",
    paragraph:"test encore",
    image:"test1.jpg"
  },
  {
    id:3,
    titre:"test3",
    paragraph:"encore une fois",
    image:"test3.jpg"
  }
];
function App() {
  return (
    <div className="App">
      <Header/>
      {articles.map(article => (
        <Article key={article.id} titre={article.titre} paragraph={article.paragraph}
        image={article.image}/>
      ))}
      
      
      <h2>Exercice 1</h2>
      <HelloWorldReactComponent/>
      <h2>Exercice 2</h2>
      <HelloWorldReact/>
      <h2>Exercice 3</h2>
      <HelloWorldFragmentReact/>
      <h2>Exercice 4</h2>
      <ListeElements/>
      <Footer/>
      <h2>Exercice 5</h2>
      <Sitereact/>
    </div>
  );
}

export default App;
