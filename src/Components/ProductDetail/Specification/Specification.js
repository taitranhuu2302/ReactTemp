import React, { Component } from "react";
import "./styles.scss";
import { connect } from "react-redux";
import * as actions from "./../../../Actions/index";
import DetailNav from "./../DetailNav/DetailNav";
import Breadcumb from "./../../LoginPage/ContentLogin/Breadcumb/Breadcumb";

class Specification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sticky: false,
        };
    }

    componentDidMount() {
        this.props.onGetProducts();
        window.addEventListener("scroll", this.sticky);
    }

    sticky = () => {
        if (window.scrollY > 172) {
            this.setState({ sticky: true });
        } else {
            this.setState({ sticky: false });
        }
    };

    findIndex = (list, id) => {
        var result = null;

        result = list.forEach((item, index) => {
            if (item.id === id) {
                result = index;
                return result;
            }
        });

        return result;
    };

    render() {
        var { match, products } = this.props;
        var id = Number(match.params.id);
        var productIndex = {};
        products.forEach((product, index) => {
            if (product.id === id) {
                productIndex = product;
            }
        });
        return (
            <div className="container-fluid p-0">
                <Breadcumb
                    to="/"
                    toBack="Home"
                    to1="/GraphicsCard"
                    toBack1="Graphics Cards"
                    current="AORUS GeForce RTX™ 3090 XTREME WATERFORCE 24G"
                    bgr="bgr-black"
                />
                <DetailNav sticky={this.state.sticky} match={match} />
                <div className="container-fluid specification pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mb-5 text-center">
                                <h5 className="color-orange">
                                    AORUS GeForce RTX™ 3090 XTREME WATERFORCE 24G
                                </h5>
                            </div>
                            <div className="col-12">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td width="30%">Graphics Processing</td>
                                            <td width="70%">{productIndex.gp}</td>
                                        </tr>
                                        <tr>
                                            <td width="30%">Core Clock</td>
                                            <td width="70%">{productIndex.cc}</td>
                                        </tr>
                                        <tr>
                                            <td width="30%">SLI Support</td>
                                            <td width="70%">{productIndex.ss}</td>
                                        </tr>
                                        <tr>
                                            <td width="30%">Output</td>
                                            <td width="70%">{productIndex.o}</td>
                                        </tr>
                                        <tr>
                                            <td width="30%">Power Connectors</td>
                                            <td width="70%">{productIndex.pc}</td>
                                        </tr>
                                        <tr>
                                            <td width="30%">Recommended PSU</td>
                                            <td width="70%">{productIndex.rp}</td>
                                        </tr>
                                        <tr>
                                            <td width="30%">OpenGL</td>
                                            <td width="70%">{productIndex.op}</td>
                                        </tr>
                                        <tr>
                                            <td width="30%">Graphics Processing</td>
                                            <td width="70%">{productIndex.ss}</td>
                                        </tr>
                                        <tr>
                                            <td width="30%">DirectX</td>
                                            <td width="70%">{productIndex.d}</td>
                                        </tr>
                                        <tr>
                                            <td width="30%">PCB Form</td>
                                            <td width="70%">{productIndex.pf}</td>
                                        </tr>
                                        <tr>
                                            <td width="30%">Card Size</td>
                                            <td width="70%">{productIndex.cs}</td>
                                        </tr>
                                        <tr>
                                            <td width="30%">Multi-view</td>
                                            <td width="70%">{productIndex.mv}</td>
                                        </tr>
                                        <tr>
                                            <td width="30%">Digital max resolution</td>
                                            <td width="70%">{productIndex.dmr}</td>
                                        </tr>
                                        <tr>
                                            <td width="30%">Card Bus</td>
                                            <td width="70%">{productIndex.cb}</td>
                                        </tr>
                                        <tr>
                                            <td width="30%">Memory Bandwidth (GB/sec)</td>
                                            <td width="70%">{productIndex.mbGB}</td>
                                        </tr>
                                        <tr>
                                            <td width="30%">Memory Bus</td>
                                            <td width="70%">{productIndex.mb}</td>
                                        </tr>
                                        <tr>
                                            <td width="30%">Memory Type</td>
                                            <td width="70%">{productIndex.mt}</td>
                                        </tr>
                                        <tr>
                                            <td width="30%">Memory Size</td>
                                            <td width="70%">{productIndex.msize}</td>
                                        </tr>
                                        <tr>
                                            <td width="30%">Memory Clock</td>
                                            <td width="70%">{productIndex.mc}</td>
                                        </tr>
                                        <tr>
                                            <td width="30%">CUDA® Cores</td>
                                            <td width="70%">{productIndex.ccores}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGetProducts: () => {
            dispatch(actions.acFetchProductsRequest());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specification);
