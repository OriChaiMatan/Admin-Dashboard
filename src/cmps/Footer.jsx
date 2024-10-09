import React from 'react'
import '../style/footer.css'

function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="copyright">
                &copy; Copyright{' '}
                <strong>
                    <span>Ori Chai Matan</span>
                </strong>
            </div>
            ALL Rights Reserved
            <div className="credits">
                Designed by <a href="#">Ori</a>
            </div>
        </footer>
    )
}

export default Footer