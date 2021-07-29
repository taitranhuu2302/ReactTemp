import React, { Component } from "react";

class SliderItem extends Component {
  listCaption = (list) => {
    return list.map((item, index) => {
      return (
        <p key={index} className="m-0">
          {item}
        </p>
      );
    });
  };

  render() {
    var { item } = this.props;
    return (
      <div className="item">
        <div className="row align-items-center justify-content-center item-row p-0">
          <div className="col-12 col-md-6 col-text">
            <div className="row">
              <div className="mb-3 col-12 img">
                <img
                  src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/title-line.png"
                  alt=""
                />
              </div>
              <div className="col-12">
                <h3>{item.titleTop}</h3>
                <div>{this.listCaption(item.listCaption)}</div>
              </div>
              {item.titleBottom ? (
                <div className="col-12 mt-5">
                  <h3>{item.titleBottom}</h3>
                  <div className="icon-logo d-flex">
                    {item.listIcon.map((item, index) => {
                      return <img key={index} src={item} alt="" />;
                    })}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-12 col-md-6 item-img">
            <div className="flex-image">
              <img src={item.imageTitle} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SliderItem;
