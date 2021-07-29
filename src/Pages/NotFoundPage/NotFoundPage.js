import React, { Component } from "react";

class NotFoundPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="alert alert-warning" role="alert">
          Không tìm thấy trang
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
