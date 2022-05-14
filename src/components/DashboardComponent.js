import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Alert, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';


class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: '',
            student: '',
            rooms: '',
            meals: ''
        }
    }
    componentDidMount() {
        this.changeLink();
    }

    changeLink = () => {
        if (this.props.auth.admin) {
            this.setState({
                employee: "/admin/EmployeeManage/view",
                student: "/admin/StudentManage/view",
                meals: "/admin/MealManage/view",
                rooms: "/admin/rooms"
            })
        } if (!this.props.auth.admin) {

            this.setState({
                employee: "/student/employeeView",
                student: "/student/studentView",
                meals: "/student/mealview",
                rooms: "/student/rooms"
            })
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h4 className="feature-heading ">Dashboard</h4>
                        <hr className="feature-line" />
                    </div>
                </div>
                <div className="row">
                    <div className="dashCards col-lg-3 col-sm-6 mt-3">
                        <Card>
                            <CardHeader className="dashCard">
                                <div className="row">
                                    <span className="col-7 fa fa-users fa-4x"></span>
                                    <h3></h3>
                                </div>
                                <div className="mt-3">
                                    <div>
                                        <p>Total Employees
                                            8
                                        </p>
                                    </div>
                                </div>

                            </CardHeader>
                            <CardFooter></CardFooter>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-sm-6 mt-3">
                        <Card>
                            <CardHeader className="dashCard">
                                <div className="row">
                                    <span className="col-7 fa fa-users fa-4x"></span>
                                    <h3></h3>
                                </div>
                                <div className="mt-3">
                                    <div>
                                        <p>Total Events 3</p>
                                    </div>
                                </div>

                            </CardHeader>
                            <CardFooter></CardFooter>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-sm-6 mt-3">
                        <Card>
                            <CardHeader className="dashCard">
                                <div className="row">
                                    <span className="col-7 fa fa-building fa-4x"></span>
                                    <h3></h3>
                                </div>
                                <div className="mt-3">
                                    <div>
                                        <p>Total Rooms 20</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardFooter></CardFooter>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-sm-6 mt-3">
                        <Card>
                            <CardHeader className="dashCard">
                                <div className="row">
                                    <span className="col-7 fa fa-utensils fa-4x"></span>
                                </div>
                                <div className="mt-3">
                                    <div>
                                        <p>Today's Meals 13</p>
                                    </div>
                                </div>

                            </CardHeader>
                            <CardFooter></CardFooter>
                        </Card>
                    </div>
                </div>
                <div className="row mt-2 mt-3">
                    <div className="col-12">
                        <Card>
                            <CardHeader mb="0" mt="0"><span><h4>Notices 1</h4></span></CardHeader>
                            <CardBody>

                                {
                                    this.props.notices.map((element) => {
                                        return (
                                            <Alert color="primary" className="mb-1 mt-1">
                                                <p>{element.description}</p>
                                            </Alert>
                                        )
                                    })
                                }

                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
        )
    }
}

export default DashBoard;