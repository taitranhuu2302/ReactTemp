import React, { Component } from "react";
import "./styles.scss";
import callApi from "./../../../../../utils/apiCaller";
import { connect } from "react-redux";
import * as actions from "./../../../../../Actions";
import moment from "moment";

class Functions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: "",
      des: "",
      image: null,
      imageLink: "",
      status: true,
      aorus: false,
      nvidia: false,
      amd: false,
      preview: "",
      gp: "",
      cc: "",
      ss: "",
      o: "",
      pc: "",
      rp: "",
      op: "",
      d: "",
      pf: "",
      cs: "",
      mv: "",
      dmr: "",
      cb: "",
      mbGB: "",
      mb: "",
      mt: "",
      msize: "",
      mc: "",
      ccores: "",
      created_at: "",
      updated_at: "",
    };
  }

  componentDidMount() {
    var { match } = this.props;
    var id = match.params.id;
    if (id) {
      callApi(`products/${id}`, "GET", null).then((res) => {
        var product = res.data;
        this.setState({
          id: product.id,
          name: product.name,
          preview: product.image,
          image: product.image,
          imageLink: product.image,
          status: product.status,
          aorus: product.aorus ? product.aorus : false,
          nvidia: product.nvidia ? product.nvidia : false,
          amd: product.amd ? product.amd : false,
          gp: product.gp,
          cc: product.cc,
          ss: product.ss,
          o: product.o,
          pc: product.pc,
          rp: product.rp,
          op: product.op,
          d: product.d,
          pf: product.pf,
          cs: product.cs,
          mv: product.mv,
          dmr: product.dmr,
          cb: product.cb,
          mbGB: product.mbGB,
          mb: product.mb,
          mt: product.mt,
          msize: product.msize,
          mc: product.mc,
          ccores: product.ccores,
          created_at: product.created_at || "",
          updated_at: product.updated_at || "",
        });
      });
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onUpFiles = (e) => {
    this.setState({
      image: e.target.files[0],
    });
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      this.setState({ preview: reader.result, image: reader.result });
    };
  };

  onSave = (e) => {
    e.preventDefault();
    var { history } = this.props;
    const now = new moment();
    var {
      id,
      name,
      price,
      des,
      image,
      status,
      aorus,
      nvidia,
      amd,
      imageLink,
      gp,
      cc,
      ss,
      o,
      pc,
      rp,
      op,
      d,
      pf,
      cs,
      mv,
      dmr,
      cb,
      mbGB,
      mb,
      mt,
      msize,
      mc,
      ccores,
      created_at,
      updated_at,
    } = this.state;
    var product = {};
    if (id) {
      product = {
        id: id,
        name: name,
        price: price,
        des: des,
        image: image ? image : imageLink,
        status: status,
        aorus: aorus,
        nvidia: nvidia,
        amd: amd,
        gp: gp,
        cc: cc,
        ss: ss,
        o: o,
        pc: pc,
        rp: rp,
        op: op,
        d: d,
        pf: pf,
        cs: cs,
        mv: mv,
        dmr: dmr,
        cb: cb,
        mbGB: mbGB,
        mb: mb,
        mt: mt,
        msize: msize,
        created_at: created_at,
        updated_at: now.format("L LTS"),
        mc: mc,
        ccores: ccores,
      };
      this.props.onUpdateProduct(product);
      history.push("/admin/list-products");
    } else {
      product = {
        id: id,
        name: name,
        price: price,
        des: des,
        image: image ? image : imageLink,
        status: status,
        aorus: aorus,
        nvidia: nvidia,
        amd: amd,
        gp: gp,
        cc: cc,
        ss: ss,
        o: o,
        pc: pc,
        rp: rp,
        op: op,
        d: d,
        pf: pf,
        cs: cs,
        mv: mv,
        dmr: dmr,
        cb: cb,
        mbGB: mbGB,
        mb: mb,
        mt: mt,
        msize: msize,
        created_at: now.format("L LTS"),
        updated_at: now.format("L LTS"),
        mc: mc,
        ccores: ccores,
      };
      this.props.onUpProduct(product);
      history.push("/admin/list-products");
    }
  };

  render() {
    var {
      id,
      gp,
      cc,
      ss,
      o,
      pc,
      rp,
      op,
      d,
      pf,
      cs,
      mv,
      dmr,
      cb,
      mbGB,
      mb,
      mt,
      msize,
      mc,
      ccores,
    } = this.state;
    return (
      <div className="body-admin py-4 bgr-admin">
        <div className="container mt-3" id="functions">
          <div className="title text-center">
            <div className="display-5 font-family-Ad">
              {id ? "UPDATE PRODUCT" : "ADD PRODUCT"}
            </div>
          </div>
          <form action="" onSubmit={this.onSave} className="form-control">
            <div className="mb-3">
              <label className="label-add" htmlFor="name-product">
                Name:
              </label>
              <input
                type="text"
                id="name-product"
                className="shadow-none form-control"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <div className="mb-3">
              <label className="label-add" htmlFor="price-product">
                Price:
              </label>
              <input
                type="number"
                id="price-product"
                className="shadow-none form-control"
                name="price"
                value={this.state.price}
                onChange={this.onChange}
              />
            </div>
            <div className="mb-3">
              <label className="label-add" htmlFor="price-product">
                Graphics processing:
              </label>
              <input
                type="text"
                name="gp"
                value={gp}
                onChange={this.onChange}
                className="shadow-none form-control"
              />
            </div>
            <div className="mb-3">
              <label className="label-add" htmlFor="price-product">
                Core Clock:
              </label>
              <input
                type="text"
                name="cc"
                value={cc}
                onChange={this.onChange}
                className="shadow-none form-control"
              />
            </div>
            <div className="mb-3">
              <label className="label-add" htmlFor="price-product">
                SLI Support:
              </label>
              <input
                type="text"
                name="ss"
                value={ss}
                onChange={this.onChange}
                className="shadow-none form-control"
              />
            </div>
            <div className="mb-3">
              <label className="label-add" htmlFor="price-product">
                Output:
              </label>
              <input
                type="text"
                name="o"
                value={o}
                onChange={this.onChange}
                className="shadow-none form-control"
              />
            </div>
            <div className="mb-3">
              <label className="label-add" htmlFor="price-product">
                Power Connectors:
              </label>
              <input
                type="text"
                name="pc"
                value={pc}
                onChange={this.onChange}
                className="shadow-none form-control"
              />
            </div>
            <div className="mb-3">
              <label className="label-add" htmlFor="price-product">
                Recommended PSU:
              </label>
              <input
                type="text"
                name="rp"
                value={rp}
                onChange={this.onChange}
                className="shadow-none form-control"
              />
            </div>
            <div className="mb-3">
              <label className="label-add" htmlFor="price-product">
                OpenGL:
              </label>
              <input
                type="text"
                name="op"
                value={op}
                onChange={this.onChange}
                className="shadow-none form-control"
              />
            </div>
            <div className="mb-3">
              <label className="label-add" htmlFor="price-product">
                DirectX:
              </label>
              <input
                type="text"
                name="d"
                value={d}
                onChange={this.onChange}
                className="shadow-none form-control"
              />
            </div>
            <div className="mb-3">
              <label className="label-add" htmlFor="price-product">
                PCB Form:
              </label>
              <input
                type="text"
                name="pf"
                value={pf}
                onChange={this.onChange}
                className="shadow-none form-control"
              />
            </div>
            <div className="mb-3">
              <label className="label-add" htmlFor="price-product">
                Card Size:
              </label>
              <input
                type="text"
                name="cs"
                value={cs}
                onChange={this.onChange}
                className="shadow-none form-control"
              />
            </div>
            <div className="mb-3">
              <label className="label-add" htmlFor="price-product">
                Multi-view:
              </label>
              <input
                type="text"
                name="mv"
                value={mv}
                onChange={this.onChange}
                className="shadow-none form-control"
              />
            </div>
            <div className="mb-3">
              <label className="label-add" htmlFor="price-product">
                Digital max resolution:
              </label>
              <input
                type="text"
                name="dmr"
                value={dmr}
                onChange={this.onChange}
                className="shadow-none form-control"
              />
            </div>
            <div className="mb-3">
              <label className="label-add" htmlFor="price-product">
                Card Bus:
              </label>
              <input
                type="text"
                name="cb"
                value={cb}
                onChange={this.onChange}
                className="shadow-none form-control"
              />
            </div>
            <div className="mb-3">
              <label className="label-add" htmlFor="price-product">
                Memory Bandwidth (GB/sec):
              </label>
              <input
                type="text"
                name="mbGB"
                value={mbGB}
                onChange={this.onChange}
                className="shadow-none form-control"
              />
            </div>
            <div className="mb-3">
              <label className="label-add" htmlFor="price-product">
                Memory Bus:
              </label>
              <input
                type="text"
                name="mb"
                value={mb}
                onChange={this.onChange}
                className="shadow-none form-control"
              />
            </div>
            <div className="mb-3">
              <label className="label-add" htmlFor="price-product">
                Memory Type:
              </label>
              <input
                type="text"
                name="mt"
                value={mt}
                onChange={this.onChange}
                className="shadow-none form-control"
              />
            </div>
            <div className="mb-3">
              <label className="label-add" htmlFor="price-product">
                Memory Size:
              </label>
              <input
                type="text"
                name="msize"
                value={msize}
                onChange={this.onChange}
                className="shadow-none form-control"
              />
            </div>
            <div className="mb-3">
              <label className="label-add" htmlFor="price-product">
                Memory Clock:
              </label>
              <input
                type="text"
                name="mc"
                value={mc}
                onChange={this.onChange}
                className="shadow-none form-control"
              />
            </div>
            <div className="mb-3">
              <label className="label-add" htmlFor="price-product">
                CUDA® Cores:
              </label>
              <input
                type="text"
                name="ccores"
                value={ccores}
                onChange={this.onChange}
                className="shadow-none form-control"
              />
            </div>
            <div className="mb-3">
              <label className="label-add" htmlFor="description-product">
                Description:
              </label>
              <textarea
                id=""
                className="w-100"
                cols="30"
                rows="10"
                name="des"
                value={this.state.des}
                onChange={this.onChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="label-add">Image Address:</label>
              <input
                type="file"
                className="shadow-none form-control"
                multiple
                onChange={this.onUpFiles}
              />
            </div>
            <div className="mb-3">
              <label className="label-add">Image Link:</label>
              <input
                type="text"
                className="shadow-none form-control"
                name="imageLink"
                multiple
                value={this.state.imageLink}
                onChange={this.onChange}
              />
            </div>
            <img src={this.state.preview} alt="" />
            <div className="mb-3">
              <label className="label-add me-2" htmlFor="status">
                Status
              </label>
              <input
                type="checkbox"
                className=""
                name="status"
                value={this.state.status}
                onChange={this.onChange}
                id="status"
                checked={this.state.status}
              />
            </div>
            <div className="mb-3 d-flex justify-content-start">
              <label className="label-add me-2" htmlFor="">
                Category:
              </label>
              <div className="input-group d-flex align-items-center">
                <label htmlFor="aorus" className="label-add me-2">
                  AORUS
                </label>
                <input
                  type="checkbox"
                  className=""
                  name="aorus"
                  value={this.state.aorus}
                  onChange={this.onChange}
                  id="aorus"
                  checked={this.state.aorus}
                />
              </div>
              <div className="input-group d-flex align-items-center">
                <label htmlFor="nvidia" className="label-add me-2">
                  NVIDIA
                </label>
                <input
                  type="checkbox"
                  className=""
                  name="nvidia"
                  value={this.state.nvidia}
                  onChange={this.onChange}
                  id="nvidia"
                  checked={this.state.nvidia}
                />
              </div>
              <div className="input-group d-flex align-items-center">
                <label htmlFor="amd" className="label-add me-2">
                  AMD
                </label>
                <input
                  type="checkbox"
                  className=""
                  name="amd"
                  value={this.state.amd}
                  onChange={this.onChange}
                  id="amd"
                  checked={this.state.amd}
                />
              </div>
            </div>
            <div className="mb-3">
              <button
                onClick={() => this.props.history.push("/admin/list-products")}
                className="btn btn-primary me-3 mb-3"
              >
                Go Back
              </button>
              <button type="submit" className="btn btn-success mb-3">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpProduct: (product) => {
      dispatch(actions.acUpProductRequest(product));
    },
    onUpdateProduct: (product) => {
      dispatch(actions.acUpdateProductRequest(product));
    },
  };
};

export default connect(null, mapDispatchToProps)(Functions);
