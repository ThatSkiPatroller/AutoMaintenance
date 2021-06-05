import React from "react";
import "./style.css";
import data from '../../dealerData';
import { Container } from "@material-ui/core";
import SearchBar from "../../components/SearchBar/SearchBar";

function DealerList (props) {
    return (
      <Container >
        <SearchBar>
        </SearchBar>
    <table>
      <thead>
        <tr>
          <th>Photo</th>
          <th >First Name</th>
          <th>Last Name</th>
          <th> Phone
          <span class={props.phoneSort=== 'ascending' ? 'headerSortDown' : 'headerSortUp'}>  </span></th>
          <th >Email
          <span>  
          </span>
          </th>
        </tr>
      </thead>
      <tbody>
          <tr key="1">
            <td> 
            <img src="{employee.picture.medium}" alt= 'Thumbimage'/> </td>
            <td>Name</td>
            <td>last</td>
            <td>324443</td>
            <td>4324@</td>
            <td></td>
          </tr>

          <tr key="1">
            <td> 
            <img src="{employee.picture.medium}" alt= 'Thumbimage'/> </td>
            <td>Name</td>
            <td>last</td>
            <td>324443</td>
            <td>4324@</td>
            <td></td>
          </tr>

          <tr key="1">
            <td> 
            <img src="{employee.picture.medium}" alt= 'Thumbimage'/> </td>
            <td>Name</td>
            <td>last</td>
            <td>324443</td>
            <td>4324@</td>
            <td></td>
          </tr>


          
      </tbody>
    </table>
    </Container>
  );
}
export default DealerList;