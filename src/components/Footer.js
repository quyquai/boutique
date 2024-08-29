import React from 'react'; // Import React
import 'bootstrap/dist/css/bootstrap.css'; // Import CSS của Bootstrap

// Dữ liệu cho phần footer
const FOOTER = [
  {
    title: 'customer',
    information: [
      'Help & Contact Us',
      'Returns & Refunds',
      'Online Stores',
      'Terms & Conditions',
    ],
  },
  {
    title: 'company',
    information: ['What We Do', 'Available Services', 'Latest Posts', 'FAQs'],
  },
  {
    title: 'social media',
    information: ['Twitter', 'Instagram', 'Facebook', 'Pinterest'],
  },
];

export default function Footer() {
  return (
    <footer className="container-fluid page-footer font-small blue text-bg-dark pt-4">
      <div className="container row mx-auto px-3">
        {FOOTER.map((footer, index) => (
          <div key={index} className="col px-2">
            <h4 className="text-uppercase fs-5">{footer.title}</h4>
            <ul className="list-unstyled">
              {footer.information.map((info, index) => (
                <li key={index}>
                  <a href="# " className="text-decoration-none text-white-50">
                    {info}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
