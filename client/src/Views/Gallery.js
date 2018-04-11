import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail} from "react-bootstrap";
import '../../node_modules/bootstrap3/dist/css/bootstrap.css';

class Gallery extends Component {
  render() {
    var styles={
        "height":50
    };
    return (
      <div style={styles} className="Gallery">
        <h2>Featured Works:</h2>
        <hr/>
        <Grid>
            <Row>
                <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src="http://deliver.odai.yale.edu/content/id/0fb128cd-c4bf-4984-95b5-18df1b164f49/format/2" />
                </Col>
                <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src="http://deliver.odai.yale.edu/content/id/f6cadbe3-dff5-4c1c-a6b4-a190cff29358/format/2" />
                </Col>
                <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src="http://deliver.odai.yale.edu/content/repository/YUAG/object/123856/type/2/format/2" />
                </Col>
                <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src="http://deliver.odai.yale.edu/content/repository/YUAG/object/145601/type/2/format/2" />
                </Col>

            </Row>
        </Grid>
      </div>
    );
  }
}

export default Gallery;


