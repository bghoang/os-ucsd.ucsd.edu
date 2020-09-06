import React from "react"
import '../css/footer.css'
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <ul className="icons">
                    <li>
                        <a href="https://www.facebook.com/groups/OpenSourceUCSD/"><FacebookIcon className="button"
                            style={{
                                fill: "white", width: 40, height: 40
                            }} /></a>
                    </li>
                    <li>
                        <a href="https://github.com/os-ucsd"><GitHubIcon className="button" style={{ fill: "white", width: 40, height: 40 }} /></a>
                    </li>
                    <li>
                        <a href="/contact"><MailIcon className="button" style={{ fill: "white", width: 40, height: 40 }} /></a>
                    </li>
                </ul>

            </footer>
        )
    }
}

export default Footer