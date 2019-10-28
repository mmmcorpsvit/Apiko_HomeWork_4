import React from 'react';
// import PropTypes from 'prop-types'

import {Modal, Spinner} from 'react-bootstrap';

export const Loader = (backdrop=false, ...props) => {
    return (
        <>
            <Modal show={true} centered={true} onHide={()=>{}} backdrop={backdrop}>

                <Modal.Body>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>

                    Loading in progress, please wait... don't worry, be happy ^)
                </Modal.Body>


            </Modal>
        </>
    )
};

// export default SpinnerScreen;
