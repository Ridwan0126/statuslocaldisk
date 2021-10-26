import React, { Component } from "react";
import { FirebaseContext } from "../../config/firebase";
import { Link, useHistory } from "react-router-dom";

class FirestoreInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      license: "",
      type: "Car",
      vehicles: [],
    };
    this.subscribeVehicles = "";
  }
  handleLogout = async () => {
    const logout = this.state;
    // const history = useHistory();
    // setError("");

    try {
      await logout();
      // alert("logOut success");
      useHistory.push("/login");
      alert("Failed to log out ssss");

      //   return Swal.fire({
      //     icon: "success",
      //     title: "LogOut is Success",
      //     showConfirmButton: false,
      //     timer: 1500,
      //   });
    } catch {
      alert("Failed to log out");
    }
  };

  onSaveHandler = async () => {
    const { license, type } = this.state;
    const res = await this.props.firebase.saveFirestoreVehicle({
      license,
      type,
      time: new Date().getTime(),
    });

    // re-call fetching data
    // this.fetchAllData()

    if (res.id) return alert("Data saved!");

    return alert("Could not save data!");
  };

  setValue = (e) => this.setState({ [e.target.name]: e.target.value });

  checkLoginSession = () => {
    this.props.firebase.checkFirebaseSession((o) => {
      console.log("o:", o);
    });
  };

  renderVehicleList = () => {
    return this.state.vehicles.map((vehicle, idx) => {
      return (
        <tr align="center" key={vehicle.id}>
          <td>{idx + 1}</td>
          <td>{vehicle.license}</td>
          <td>{vehicle.type}</td>
          <td>{vehicle.time}</td>
        </tr>
      );
    });
  };

  fetchAllData = async () => {
    // fetch all data from vehicles
    const vehicles = await this.props.firebase.getAllFirestoreVehicle();
    // console.log("vehicles:", vehicles);
    // console.log("vehicles.docs:", vehicles.docs);

    let vehicleList = [];
    vehicles.forEach((vehicle) => {
      let data = vehicle.data();
      vehicleList.push({
        id: vehicle.id,
        ...data,
      });
    });
    // console.log("vehicleList:", vehicleList);

    if (vehicleList.length > 0)
      this.setState({
        vehicles: vehicleList,
      });
  };

  subscribeData = () => {
    // set subscribe vehicles
    this.subscribeVehicles = this.props.firebase.getUpdateFirestoreVehicle(
      (vehicles) => {
        console.log(vehicles.docChanges());

        let vehicleList = this.state.vehicles;
        vehicles.docChanges().forEach((change) => {
          const idData = change.doc.id;
          const objData = change.doc.data();
          if (change.type === "added") {
            vehicleList.push({
              id: idData,
              ...objData,
            });
          }
          if (change.type === "modified") {
            vehicleList = vehicleList.map((vehicle) => {
              if (vehicle.id === idData)
                return {
                  ...vehicle,
                  ...objData,
                };

              return vehicle;
            });
          }
          if (change.type === "removed") {
            vehicleList = vehicleList.filter(
              (vehicle) => vehicle.id !== idData
            );
          }
        });
        this.setState({
          vehicles: vehicleList,
        });
      }
    );
  };

  componentWillUnmount() {
    this.subscribeVehicles();
  }

  componentDidMount() {
    // this.fetchAllData()
    this.subscribeData();
  }

  render() {
    // this.checkLoginSession()
    const { license, type } = this.state;
    return (
      <>
        <div>
          <button className="logout" variant="link" onClick={this.handleLogout}>
            Log Out
          </button>
        </div>
        <table>
          <tbody>
            <tr>
              <td>License</td>
              <td>
                <input
                  type="text"
                  name="license"
                  value={license}
                  onChange={this.setValue}
                />
              </td>
            </tr>
            <tr>
              <td>Type</td>
              <td>
                <select name="type" value={type} onChange={this.setValue}>
                  <option value="Car">Car</option>
                  <option value="Motorcycle">Motorcycle</option>
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="center">
                <button onClick={this.onSaveHandler}>Save</button>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <table width="400px" border="1" cellPadding="5px">
          <thead>
            <tr>
              <th>No</th>
              <th>License</th>
              <th>Type</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>{this.renderVehicleList()}</tbody>
        </table>
      </>
    );
  }
}

class Firestore extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <FirebaseContext.Consumer>
        {(firebase) => <FirestoreInput firebase={firebase} />}
      </FirebaseContext.Consumer>
    );
  }
}

export default Firestore;
