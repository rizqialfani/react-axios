import React, { Component } from "react";
import axios from "axios";
import { Card, Col, Row } from "antd";
import "antd/dist/antd.css";
import "./custom.css";

const { Meta } = Card;

export default class fetchapi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            purwakarta: [],
            visible: false,
            id: "",
            nama: "",
            logo_url: "",
            kategori: "",
            deskripsi: "",
            url: "https://cors-anywhere.herokuapp.com/https://dev.farizdotid.com/api/purwakarta/komunitas",
        };
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "https://cors-anywhere.herokuapp.com/https://dev.farizdotid.com/api/purwakarta/komunitas",
            headers: {
                accept: "*/*",
            },
        }).then((data) => {
            console.log(data.data.komunitas);
            this.setState({
                purwakarta: data.data.komunitas,
                nama: data.data.komunitas.nama,
                logo_url: data.data.komunitas.logo_url,
                kategori: data.data.komunitas.kategori,
                deskripsi: data.data.komunitas.deskripsi
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (<div>
            <div className="boxWhite">
                <center>
                    <h1 style={{ margin: "50px 0 50px 0" }}>Komunitas di Kabupaten Purwakarta</h1>
                </center>
                <Row gutter={[16, 16]} >

                {this.state.purwakarta.map((results, index) => {
                    return (
                        <Col span={8} style={{ width: "100% !important" }}>
                            <Card
                                hoverable
                                style={{ width: 300, margin: "0 60px 30px 60px", display: "inline-flex !important"}}
                                cover={<img alt="..." src={results.logo_url} />}
                                key={results.id}
                            >
                                <center>
                                    <Meta title={results.nama} description={results.deskripsi} style={{whiteSpace: "none !important"}} />
                                </center>
                            </Card>
                        </Col>
                    );
                })}
                </Row>
            </div>
        </div>);
    }
}