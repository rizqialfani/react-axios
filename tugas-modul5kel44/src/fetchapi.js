import React, { Component } from "react";
import axios from "axios";
import { Card, Col, Row } from "antd";
import "antd/dist/antd.css";

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
                    <h1>Komunitas di Kabupaten Purwakarta</h1>
                </center>

                {this.state.purwakarta.map((results, index) => {
                    return (
                        <center>
                            <div className="card" key={results.id} style={{width: "20%", marginBottom: "50px"}}>
                                <img src={results.logo_url} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{results.nama}</h5>
                                    <p className="card-text"><small className="text-muted">Komunitas {results.kategori}</small></p>
                                    <p className="card-text">{results.deskripsi}</p>
                                </div>
                            </div>
                        </center>
                    );
                })}
            </div>
        </div>);
    }
}