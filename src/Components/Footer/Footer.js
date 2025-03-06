import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.socialSection}>You can find and connect with us at</p>
      <div style={styles.iconContainer}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
        >
          <FaFacebook />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
        >
          <FaInstagram />
        </a>

        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
        >
          <FaYoutube />
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
        >
          <FaTwitter />
        </a>
      </div>

      <div>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Items</th>
              <th>Delivery</th>
              <th>Blogs</th>
              <th>Get Help</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Burger</td>
              <td>Zibby</td>
              <td>Events</td>
              <td>Help center</td>
            </tr>
            <tr>
              <td>Pizza</td>
              <td>e-Cart</td>
              <td>Party</td>
              <td>Contact us</td>
            </tr>
            <tr>
              <td>Drinks</td>
              <td>COD</td>
              <td>Cruise</td>
              <td>Feedback</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr></hr>
      <p style={styles.copyright}> © 2025 Spice & Slice. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    bottom: "0",
    width: "100%",
  },
  socialSection: {
    marginBottom: "15px",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px", // Space between icons
    fontSize: "24px", // Make icons bigger
  },
  table: {
    width: "100%",
    textAlign: "center",
    padding:"10px 0 20px",
  },
  copyright:{
    padding:"10px",
  }
};

export default Footer;
