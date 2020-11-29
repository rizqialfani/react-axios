import React, { Component } from "react";
import axios from "axios";
// import { Modal } from "antd";
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
            // asal: "",
            // nim: "",
            // namaku: "",
            // asalku: "",
            url: "https://cors-anywhere.herokuapp.com/https://dev.farizdotid.com/api/purwakarta/komunitas",
        };
    }

    // handleButton = (nama) => {
    //     alert(nama);
    // };

    // handleTambahOrang = () => {
    //     this.setState({
    //         visible: true,
    //     });
    // };

    // handleNama = (e) => {
    //     this.setState({
    //         nama: e.target.value,
    //     });
    //     console.log(this.state.nama);
    // };

    // handleNim = (e) => {
    //     this.setState({
    //         nim: e.target.value,
    //     });
    //     console.log(this.state.nim);
    // };

    // handleAsal = (e) => {
    //     this.setState({
    //         asal: e.target.value,
    //     });
    //     console.log(this.state.asal);
    // };

    // handleSubmit = () => {
    //     if (this.state.nama !== "" && this.state.nim !== "" && !this.state.asal !== "") {
    //         axios({
    //             method: "post",
    //             url: "https://backendcatatantugas.herokuapp.com/mahasiswa/add",
    //             headers: {
    //                 accept: "*/*",
    //             },
    //             data: {
    //                 nama: this.state.nama,
    //                 nim: this.state.nim,
    //                 asal: this.state.asal,
    //             },
    //         }).then((data) => {
    //             alert("berhasil menambahkan");
    //             window.location.reload();
    //         }).catch((error) => {
    //             alert("gagal lur");
    //         });
    //     }
    //     else {
    //         alert("pastikan semua kolom terisi");
    //     }
    // };

    // handleDelete = (_id) => {
    //     axios({
    //         method: "delete",
    //         url: this.state.url + _id,
    //         headers: {
    //             accept: "*/*",
    //         },
    //     }).then((data) => {
    //         alert('data berhasil dihapus');
    //         window.location.reload();
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // };

    // handleUpdate = (_id) => {
    //     axios({
    //         method: "update",
    //         url: this.state.url + _id,
    //         headers: {
    //             accept: "*/*",
    //         },
    //     }).then((data) => {
    //         alert('data berhasil dihapus');
    //         window.location.reload();
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // };

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
                // tekkom: data.data,
                // namaku: data.data[63].nama,
                // asalku: data.data[63].asal
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
                {/* <center>
                    <button onClick={this.handleTambahOrang}>Tambah orang</button>
                </center> */}
                {/* <Modal
                    title="Tambah Orang Bosque"
                    centered
                    visible={this.state.visible}
                    onOk={this.handleSubmit}
                    onCancel={() => this.setState({
                        visible: false
                    })}
                    width={500}
                >
                    <div style={{ textAlign: "center" }}>
                        <p>Nama : </p>{" "}
                        <input type="text"
                            placeholder="nama"
                            onChange={this.handleNama}
                        />
                        <br />
                        <p>Nim : </p>{" "}
                        <input type="text"
                            placeholder="nim"
                            onChange={this.handleNim}
                        />
                        <br />
                        <p>Asal : </p>{" "}
                        <input type="text"
                            placeholder="asal"
                            onChange={this.handleAsal}
                        />
                        <br />
                    </div>
                </Modal> */}

                {/* {this.state.tekkom.map((results, index) => { */}
                {this.state.purwakarta.map((results, index) => {
                    return (
                        <center>
                            <div className="card" key={results.id} style={{width: "20%", marginBottom: "50px"}}>
                                <img src={results.logo_url} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{results.nama}</h5>
                                    <p className="card-text"><small className="text-muted">{results.kategori}</small></p>
                                    <p className="card-text">{results.deskripsi}</p>
                            {/* <h6 className="card-subtitle mb-2 text-muted">
                                Nim : {results.nim}
                                </h6>
                                <p className="card-text">Asal : {results.asal}</p> */}
                                </div>
                            {/* <button className="button" onClick={() => this.handleButton(results.nama)}> */}
                            {/* <button className="button" onClick={() => this.handleUpdate(results._id)}> */}
                            {/* <button className="button" onClick={() => this.handleDelete(results._id)}>
                                {" "}
                                klik aku
                            </button> */}
                            </div>
                        </center>
                    );
                })}
            </div>
        </div>);
    }
}