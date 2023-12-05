import React from "react";
import { Container } from "react-bootstrap";
import SubscriptionManagementDashboard from "../../components/SubscriptionManagementDashboard";
import AdminSidebar from "../../components/AdminSidebar";

const SubscriptionManagement = () => {
  return (
    <div>
      <AdminSidebar />
      <Container className="mt-5 pt-5">
        <SubscriptionManagementDashboard />
      </Container>
    </div>
  );
};

export default SubscriptionManagement;
