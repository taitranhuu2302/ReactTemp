import React, { Component } from "react";
import "./styles.scss";

class TaskBar extends Component {
  taskList = (list) => {
    var result = null;

    result = list.map((item, index) => {
      return (
        <div key={index} className="accorditon-item">
          <div>
            <h2 className="accordion-header">
              <button
                className="accordion-button shadow-none collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#item${index}`}
              >
                {item.label}
              </button>
            </h2>
            <div id={`item${index}`} className="accordion-collapse collapse">
              <div className="accordion-body">
                <div className="form-check">{this.taskSub(item.list)}</div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return result;
  };

  taskSub = (list) => {
    var result = null;

    result = list.map((item, index) => {
      return (
        <div key={index}>
          <input
            className="form-check-input shadow-none"
            type="radio"
            name="radio1"
          />
          <label className="form-check-label">{item.name}</label>
        </div>
      );
    });

    return result;
  };

  render() {
    var { taskBar } = this.props;
    this.taskList(taskBar);
    return (
      <div className="accordion accordion-flush">{this.taskList(taskBar)}</div>
    );
  }
}

export default TaskBar;
