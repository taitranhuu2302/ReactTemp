import React, { Component } from "react";
import TaskBar from "../TaskBar/TaskBar";
import "./styles.scss";

class BarFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleCanvas: false,
    };
  }

  toggleCanvas = () => {
    this.setState({
      toggleCanvas: !this.state.toggleCanvas,
    });
  };

  render() {
    var { taskBar } = this.props;
    var { toggleCanvas } = this.state;
    return (
      <div className="container-fluid" id="filter">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 d-xl-none d-block">
              <button
                onClick={this.toggleCanvas}
                className="btn btn-filter shadow-none"
              >
                <i className="fas fa-filter me-2" />
                <span>FILTER</span>
              </button>
              <div
                className={
                  toggleCanvas ? "filter-canvas canvas-active" : "filter-canvas"
                }
              >
                <div className="row">
                  <div className="col-12">
                    <button
                      onClick={this.toggleCanvas}
                      className="btn fas fa-times text-white shadow-none canvas-close"
                    ></button>
                  </div>
                  <div className="col-12 mt-5 task-bar">
                    <TaskBar taskBar={taskBar} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 d-xl-flex d-none filter-left">
              <div className="left-icon d-flex align-items-center">
                <img
                  src="https://www.aorus.com/assets/img/filter.919a5d61.svg"
                  alt=""
                />
                <div className="text-white name-tag">
                  FILTER <span className="tag">1</span>
                </div>
                <div className="line"></div>
                <button className="btn rounded-0 shadow-none text-white">
                  Clear all
                </button>
              </div>
            </div>
            <div className="col-xl-6 d-xl-flex d-none justify-content-end align-items-center filter-right d-flex">
              <div className="amount-item text-white font-family-Ti">
                12 items
              </div>
              <div className="line"></div>
              <div className="sort d-flex align-items-center">
                <label className="text-nowrap text-white" htmlFor="select">
                  Sort By
                </label>
                <select className="form-select shadow-none rounded-0 ms-3">
                  <option value={1}>Newest</option>
                  <option value={2}>Featured</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BarFilter;
