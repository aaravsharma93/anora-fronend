import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-step-progress-bar";
import { Card, Row, Col, Modal, Button, Form, InputGroup, FormControl, Label} from "react-bootstrap";
import useSettings from "../../hooks/useSettings";
import toast from 'react-hot-toast';
import { useRouter } from 'next/router'
import { loginUser } from '../../api/user';


export default function ActivateAccount() {
    const [loading, setLoading] = useState(false);
    const { themeMode } = useSettings();
    const isDark = themeMode === "dark";
    const [token, setToken] = useState(false);

    const router = useRouter()
    const { email, password } = router.query
    useEffect(() => {
        console.log("email, password", email, password)
    }, [])


    const inviteAffiliate = () => {
        setLoading(true)
        if (email && password) {
            loginUser(email, password)
                .then(function (response) {
                    console.log(response.data);
                    if (response.data.token) {
                        toast.success("Login successfull!")
                        localStorage.setItem("anoraAuth", response.data.token)
                        localStorage.setItem("uniqueurl", response.data.uniqueurl)
                        router.push("/user/reset_password")
                    } else {
                        toast.error("Login failed")
                    }
                    setLoading(false)
                }).catch(err => {
                    setLoading(false)
                })
        } else {
            toast.error("Please  enter email & password!")
            setLoading(false)
        }
    }

    return (
        <>
            <div className="w-100 d-flex justify-content-center align-items-center">
                 <Card className={`CurrenciesCard px-4 py-4 ${themeMode === "dark" && "dark"}`}>
                    <Card.Body>
                        <h6 className="text-uppercase mb-4 text-center">
                            Login
                        </h6>

                        <Form>
                            <InputGroup className="mb-3">
                                <i className="far fa-envelope invite-icon text-gray"></i>
                                <FormControl id="inlineFormInputGroup"
                                    className={"px-5 bg-transparent"}
                                    placeholder="Email"
                                    style={{}}
                                    value={email}
                                    disabled
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <i className="fas fa-lock invite-icon text-gray"></i>
                                <FormControl type="password"  id="inlineFormInputGroup" className={"px-5 bg-transparent"} placeholder="Password" disabled style={{}} value={password} />
                            </InputGroup>
                            <Button disabled={loading} className="btn btn-primary w-100" onClick={inviteAffiliate}>
                                {loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                                {!loading && "Log IN"}</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>


        </>
    );
}