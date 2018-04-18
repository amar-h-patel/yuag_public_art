import React, { Component } from 'react';
import { Panel, Tabs, Grid, Row, Col, Tab } from 'react-bootstrap';

class About extends Component{
	render(){
		return (
			<div class="container">
				<Tabs>
					<Tab>
						<Grid fluid={true}>
							<Row>
								<Col md={12}>
									<Panel>
									This is a project by Jon Rolfe YC18, Amar Patel YC21, and Alex Wisowaty YC19 for CPSC 267!
									</Panel>
								</Col>
							</Row>
						</Grid>
					</Tab>
				</Tabs>
			</div>  
			);

	}
}
export default About;