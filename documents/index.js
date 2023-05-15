module.exports = ({ name, phone, details, address, priority, subject, date }) => {
    // const logo = require("../public/images/logo")

    const today = new Date();
    return `
  <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <title>Appointment Details</title>
        <style>
        @font-face {
            font-family: "campton";
            src: url(../client/public/campton/CamptonLight.otf);
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: "campton" !important;
            font-style: normal;
            background-color: #EBF1FF !important;
            overflow-x: hidden !important;
        }
            .invoice-box {
                max-width: 800px;
                margin: auto;
                padding: 30px;
                border: 1px solid #eee;
                box-shadow: 0 0 10px rgba(0, 0, 0, .15);
                font-size: 16px;
                line-height: 24px;
                font-family: 'Helvetica Neue', 'Helvetica';
                color: #555;
            }
    
            .margin-top {
                margin-top: 50px;
            }
    
            .justify-center {
                text-align: center;
            }
    
            .invoice-box table {
                width: 100%;
                line-height: inherit;
                text-align: left;
            }
    
            .invoice-box table td {
                padding: 5px;
                vertical-align: top;
            }
    
            .invoice-box table tr td:nth-child(2) {
                text-align: right;
            }
    
            .invoice-box table tr.top table td {
                padding-bottom: 20px;
            }
    
            .invoice-box table tr.top table td.title {
                font-size: 45px;
                line-height: 45px;
                color: #333;
            }
    
            .invoice-box table tr.information table td {
                padding-bottom: 40px;
            }
    
            .invoice-box table tr.heading td {
                border-bottom: 1px solid #ddd;
                font-weight: bold;
            }
    
            .invoice-box table tr.details td {
                padding-bottom: 20px;
            }
    
            .invoice-box table tr.item td {
                border-bottom: 1px solid #eee;
            }
    
            .invoice-box table tr.item.last td {
                border-bottom: none;
            }
    
            .invoice-box table tr.total td:nth-child(2) {
                border-top: 2px solid #eee;
                font-weight: bold;
            }
    
            .church-name {
                display: flex;
                justify-content: center;
                flex-direction: column;
            }
    
            .church-name h1 {
                font-size: 18px;
                text-align: center;
            }
    
            .logo {
                display: flex;
                margin: 1rem 0;
                width: 100%;
                justify-content: center;
            }
    
            .logo img {
                width: 150px;
                height: 150px;
                object-fit: cover;
            }
    
            @media only screen and (max-width: 600px) {
                .invoice-box table tr.top table td {
                    width: 100%;
                    display: block;
                    text-align: center;
                }
    
                .invoice-box table tr.information table td {
                    width: 100%;
                    display: block;
                    text-align: center;
                }
            }
        </style>
    </head>
    <body style="background-color: #fff !important;">
        <div class="invoice-box">
            <div style="width: 100%; display: flex; justify-content: center;" class="logo">
                <img src="https://i.ibb.co/y54KG3b/logo.png" alt="" />
            </div>
            <br />
            <div class="church-name">
                <h1>
                    New Appointment
                </h1>
            </div>
            <br /><br />
            <table cellpadding="0" cellspacing="0">
                <tr class="item">
                    <td>Name</td>
                    <td>${name}</td>
                </tr>
                <tr class="item">
                    <td>Phone</td>
                    <td>${phone}</td>
                </tr>
                <tr class="item">
                    <td>Address</td>
                    <td>${address}</td>
                </tr>
                <tr class="item">
                    <td>Subject</td>
                    <td>${subject}</td>
                </tr>
                <tr class="item">
                    <td>Date</td>
                    <td>${date}</td>
                </tr>
                <tr class="item">
                    <td>Issue Details</td>
                    <td>${details}</td>
                </tr>
                <tr class="item">
                    <td>Issue Priority</td>
                    <td>${priority}</td>
                </tr>
            </table>
        </div>
    </body>
    </html>
    `;
};
