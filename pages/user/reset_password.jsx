import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Card, Row, Col, Modal, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import useSettings from "../../hooks/useSettings";
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/router'
import { resetPassword } from '../../api/user';


export default function ResetPassword() {
    const [loading, setLoading] = useState(false);
    const { themeMode } = useSettings();
    const isDark = themeMode === "dark";
    const [newPassword, setNewPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);


    const router = useRouter()

    const savePassword = () => {
        setLoading(true)
        if (newPassword != "" && newPassword != null && confirmPassword != "" && confirmPassword != null &&  newPassword == confirmPassword) {
            let token = localStorage.getItem("anoraAuth")
            if (token) {
                resetPassword(newPassword)
                    .then(function (response) {
                        console.log(response.data);
                        if (response.data.message) {
                            toast.success(response.data.message)
                            router.push("/user/affiliate-details")
                        } else {
                            toast.error("Password reset failed")
                        }
                        setLoading(false)
                    }).catch(err => {
                        setLoading(false)
                    })
            }
        } else {
            toast.error("Password does not match!")
            setLoading(false)
        }
    }

    return (
        <>
            <div className="w-100 d-flex justify-content-center align-items-center">
                <Card className={`CurrenciesCard px-4 py-4 ${themeMode === "dark" && "dark"}`}>
                    <Card.Body className="">
                        <h6 className="text-uppercase mb-4 text-center">
                            Reset Password
                        </h6>

                        <Form>
                            <Form.Label>New Password</Form.Label>
                            <InputGroup className="mb-3">
                                <i className="fas fa-lock invite-icon text-gray"></i>
                                <FormControl type="password" id="inlineFormInputGroup" className={"px-5 bg-transparent"} placeholder="New Password" style={{}}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </InputGroup>
                            <Form.Label>Confirm Password</Form.Label>
                            <InputGroup className="mb-3">
                                <i className="fas fa-lock invite-icon text-gray"></i>
                                <FormControl type="password" id="inlineFormInputGroup" className={"px-5 bg-transparent"} placeholder="Confirm Password" style={{}}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </InputGroup>
                            <Button disabled={loading} className="btn btn-primary w-100" onClick={savePassword}>
                                {loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                                {!loading && "Save"}</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>


        </>
    );
}
