import React, { Component } from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import HeroImg from '../assets/images/hero-img.png';
import CloudImg from '../assets/images/cloud.svg';
import AsteriodImg from '../assets/images/asteroid.svg';
import PlanetImg from '../assets/images/planet.svg';
import SearchBar from '../components/SearchBar/SearchBar';
import DealerList from '../components/DealerList/DealerList';
import data from '../dealerData';
import API from "../Utils/API";

export default class Dashboard extends Component {
        state = {
          result: [],
          direction: {
            email: 'ascending',
            phone: 'ascending'
          },
          AllEmployees: [],
          EmployeeList: [],
        };
      

        componentDidMount() {
          API.search()
            .then(res => console.log(res))
            .catch(err => console.log(err));
        };
        
      
        // Method to handle input change
        handleInputChange = event => {
          const value = event.target.value;
          this.setState({ search: value });
          this.filterEmployees(value.toLowerCase().trim());
        };
      
        // Method to filter Employee List based on search
        filterEmployees = (query) => {
          if (query) {
            this.setState({
              EmployeeList: this.state.AllEmployees.filter((employee) => {
                return (
                  employee.name.first
                    .toLowerCase()
                    .concat(" ", employee.name.last.toLowerCase())
                    .includes(query) ||
                  employee.email
                    .toLowerCase()
                    .includes(query) 
                );
              }),
            });
          } else {
            this.setState({ EmployeeList: this.state.AllEmployees });
          }
        };
        
        // Method to sort Employee List ascending and descending
        sortBy = (event, key) => {
          const data = this.state.EmployeeList;
          this.setState({
            data: data.sort((a, b) => {
              const asc = this.state.direction[key] === 'ascending';
              if (a[key] < b[key]) {
                  return asc ? -1 : 1;
              } else if (a[key] > b[key]) {
                  return asc ? 1 : -1;
              } else {
                  return 0;
              }
            }),
      
            direction: {
                [key]: this.state.direction[key] === 'ascending'
                ? 'descending'
                : 'ascending'
            }
          })
        }

  render() {
      
    return (
        <div className="home-container">
            <Jumbotron className="jumbotron text-center">
            <h1 className="display-3">Welcome to AutoLog</h1>
            <p className="lead">A simple web app to log your vechiles maintenece.</p>
            <img className="text-center img-fluid" src={HeroImg} alt="Hero Imgs"></img>
            <hr className="my-2" />
            <p>Sign-up it's free!</p>
            <p className="lead">
                <Button color="primary">Sign-up</Button>
            </p>
         </Jumbotron>

         <div class="container">
        <SearchBar search={this.state.search} handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange}/>
        <DealerList sortBy={this.sortBy} dealerList={data} emailSort={this.state.direction['email']} phoneSort={this.state.direction['phone']}/>
    </div>

        <Container className="section-1 text-center">
            <h2>Simple and Easy to use</h2>
            <p className="lead">Add your vehicle and log your maintenece.</p>
            <Row>
                <Col md={4}>
                    <img className="img-fluid" src={CloudImg} alt="cloud"/>
                    <h4>introducing whatsapp</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </Col>
                <Col md={4}>
                    <img className="img-fluid" src={AsteriodImg} alt="cloud"/>
                    <h4>introducing whatsapp</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </Col>
                <Col md={4}>
                    <img className="img-fluid" src={PlanetImg} alt="cloud"/>
                    <h4>introducing whatsapp</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </Col>
            </Row>
        </Container>
        </div>
    )
  }
}
