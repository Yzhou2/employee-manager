import React, { Component } from 'react';

class EmployeeEditor extends Component {
  constructor() {
    super();
    this.state = {
      employees: [ new Employee(0, 'Bernice Ortiz', 4824931093, 'CEO'), new Employee(1, 'Marnie Barnett', 3094812387, 'CTO'), new Employee(2, 'Phillip Weaver', 7459831843, 'Manager'), new Employee(3, 'Teresa Osborne', 3841238745, 'Director of Engineering'), new Employee(4, 'Dollie Berry', 4873459812, 'Front-End Developer'), new Employee(5, 'Harriett Williamson', 6571249801, 'Front-End Developer'), new Employee(6, 'Ruby Estrada', 5740923478, 'Back-End Developer'), new Employee(7, 'Lou White', 8727813498, 'Full-Stack Developer'), new Employee(8, 'Eve Sparks', 8734567810, 'Product Manager'), new Employee(9, 'Lois Brewer', 8749823456, 'Sales Manager') ],
      selectedEmployee: null
    };
  this.selectEmployee = this.selectEmployee.bind(this);
  this.refresh = this.refresh.bind(this);
  }

  selectEmployee(employee) {
    this.setState({ selectedEmployee: employee });
  }

  refresh() {
    this.setState(this.state);
  }


  render() {
    return (
      <div className="infoCard">
        {
          this.state.employee
          ?
          <div>
            <span id="employeeID"> ID: { this.state.employee.id } </span>
            <p id="employeeTitle"> { this.state.originalEmployee.name } </p>
            <br />
            <button id="saveBtn" className="confirmationButton" disabled={this.state.notModified} onClick={ this.save }> Save </button>
            <button className="neutralButton" disabled={this.state.notModified} onClick={ this.cancel }> Cancel </button>
            <br />
            <span className="placeholderText"> Name </span>
            <input className="materialInput" value={ this.state.employee.name } onChange={ (e) => { this.handleChange('name', e.target.value) } }></input>
            <span className="placeholderText"> Phone Number </span>
            <input className="materialInput" value={ this.state.employee.phone } onChange={ (e) => { this.handleChange('phone', e.target.value) } }></input>
            <span className="placeholderText"> Title </span>
            <input className="materialInput" value={ this.state.employee.title } onChange={ (e) => { this.handleChange('title', e.target.value) } }></input>
          </div>
          :
          <p id="noEmployee"> No Employee Selected </p>
        }

      </div>
    )
  }
}

export default EmployeeEditor;
