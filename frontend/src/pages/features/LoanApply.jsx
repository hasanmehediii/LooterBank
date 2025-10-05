import React, { useState, useContext } from 'react';
import jsPDF from 'jspdf';
import { AuthContext } from '../../context/AuthContext';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';
import './ApplyForLoan.css';
import logo from '../../assets/images/money.png';

const ApplyForLoan = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    reason: '',
    amount: '',
    time: '',
    propertyDetails: '',
  });

  const { reason, amount, time, propertyDetails } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const doc = new jsPDF();

    // Add logo
    doc.addImage(logo, 'PNG', 10, 10, 30, 30);

    // Add applicant details
    doc.setFontSize(12);
    doc.text(`${user.name}`, 150, 20);
    doc.text(`${user.email}`, 150, 26);
    doc.text(`${user.phone}`, 150, 32);

    // Add date
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 150, 42);

    // Add recipient details
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('The Chairman', 20, 60);
    doc.setFont('helvetica', 'normal');
    doc.text('LooterBank', 20, 66);
    doc.text('123 Bank Street, Financial District', 20, 72);

    // Add subject
    doc.setFont('helvetica', 'bold');
    doc.text('Subject: Loan Application', 20, 90);

    // Add body
    doc.setFont('helvetica', 'normal');
    doc.text('Dear Sir,', 20, 100);
    const body = `I am writing to request a loan of ${amount} for the purpose of ${reason}. I intend to repay the loan within ${time}. As collateral, I am offering the following property: ${propertyDetails}.\n\nI have been a loyal customer of LooterBank for several years and I am confident in my ability to repay the loan in a timely manner. I have attached all the necessary documents for your review.\n\nThank you for your time and consideration. I look forward to hearing from you soon.`;
    doc.text(body, 20, 110, { maxWidth: 170 });

    // Add closing
    doc.text('Sincerely,', 20, 200);
    doc.text(user.name, 20, 206);

    doc.save('loan-application.pdf');
  };

  return (
    <>
      <Navbar />
      <div className="loan-apply-container">
        <div className="loan-apply-content">
          <h2 className="loan-apply-title">Apply for a Loan</h2>
          <form onSubmit={onSubmit} className="loan-apply-form">
            <input
              type="text"
              placeholder="Reason for Loan"
              name="reason"
              value={reason}
              onChange={onChange}
              required
            />
            <input
              type="text"
              placeholder="Loan Amount"
              name="amount"
              value={amount}
              onChange={onChange}
              required
            />
            <input
              type="text"
              placeholder="Time to Repay"
              name="time"
              value={time}
              onChange={onChange}
              required
            />
            <textarea
              placeholder="Property Details"
              name="propertyDetails"
              value={propertyDetails}
              onChange={onChange}
              required
            ></textarea>
            <button type="submit" className="btn-submit">Generate PDF</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ApplyForLoan;

