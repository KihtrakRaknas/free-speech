import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
import Header from './Header';
import Intro from './Intro';

function App() {
  return (
    <Router> 
      <div className="App">
        <Header/>

        <header class="masthead" style={{backgroundImage: "url('img/post-bg.jpg')"}}>
          <div class="overlay"></div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10 mx-auto">
                <div class="post-heading">
                  <h1>Man must explore, and this is exploration at its greatest</h1>
                  <h2 class="subheading">Problems look mighty small from 150 miles up</h2>
                  <span class="meta">Posted by
                    <a href="#">Start Bootstrap</a>
                    on August 24, 2019</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <article>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10 mx-auto">
                <Intro/>
              </div>
            </div>
          </div>
        </article>

        <hr/>

        <footer>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10 mx-auto">
                <ul class="list-inline text-center">
                  <li class="list-inline-item">
                    <a href="#">
                      <span class="fa-stack fa-lg">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <span class="fa-stack fa-lg">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <span class="fa-stack fa-lg">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                </ul>
                <p class="copyright text-muted">Copyright &copy; Karthik Sankar 2020</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>  
  );
}

export default App;
