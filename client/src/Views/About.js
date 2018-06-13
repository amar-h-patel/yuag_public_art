import React, { Component } from 'react';
import { Panel, PageHeader, Jumbotron } from 'react-bootstrap';

class About extends Component{
	render(){
		return (
			<div style={{backgroundColor: "#f2f2f2"}} >
									<Panel>
									<Jumbotron style={{padding: '0'}}>

											<PageHeader style={{fontSize: '20'}}><small>Our Mission</small></PageHeader>
																					<img style={{width: '100%', paddingTop: '3%', paddingBottom: '3%', paddingLeft: '15%',paddingRight: '15%'}} alt='YUAG' src="https://salisbury175.yale.edu/sites/default/files/event-images/yuag_exterior_0.jpg" />
									Exceptional museum collections are the foundation of the public life of art at Yale, but the University’s commitment to art as a public trust does not end at the museum door. From the Old Campus to Science Hill, from Branford College to Memorial Hall, works of art sited in courtyards or plazas, lobbies or lecture halls, inspire reflection and offer aesthetic pleasure. Hallmarks of the remarkable cultural life of this institution, they lend a public face to Yale’s educational mission. The much beloved statue of Revolutionary War hero Nathan Hale,  Claes Oldenburg’s pop art icon Lipstick (Ascending) on Caterpillar Tracks, and Maya Lin’s The Women’s Table are but three of the many treasures visible around the campus. We invite you to learn more about them on this Web site, and to visit them yourself using the  self-guided tour available here.
								</Jumbotron>
									</Panel>
									<div>
									</div>

									<Panel>
																			<Jumbotron style={{padding: '1', textAlign: 'left',paddingLeft: '4%',  paddingRight: '4%', justifyContent: 'left'}}>
									<h3 style={{textAlign: 'center'}}><strong>Statement from the Director of the Yale Art Gallery</strong></h3>
	<p style={{textIndent: '7%', fontSize: '16px'}}>Yale’s commitment to art as a public trust has a compelling history that reflects America’s heritage and notes the shifting tides in our cultural values.</p>

	<p style={{textIndent: '7%', fontSize: '16px'}}>The earliest work on campus honors Abraham Pierson, Yale’s first president (1701–1707). It was completed in 1874 by Launt Thompson and sited on what is now Old Campus, where it continues to preside to this day. The much beloved statue of Revolutionary War hero Nathan Hale, by Yale School of the Fine Arts alumnus Bela Lyon Pratt, furthered Yale’s tradition of the public monument as a source of civic pride. The statue stands beside Connecticut Hall, where Hale lived as a student, to inspire future alumni to the high standards of courage and integrity that his life reflected. John Ferguson Weir, the first dean of the School of the Fine Arts (1869–1913), is the artist whose work completes the triumvirate of monuments on Old Campus. Weir’s impressive statue of Theodore Dwight Woolsey, Yale’s tenth president (1846–1871), forcefully symbolizes Woolsey’s commitment to knowledge and artistic tradition at Yale. </p>

	<p style={{textIndent: '7%', fontSize: '16px'}}>The tradition of public art as commemorative monument was challenged in the 1960s when a group of Yale graduate students and faculty formed the Colossal Keepsake Corporation and commissioned Yale College alumnus Claes Oldenburg to create an anti-monument. The resulting Lipstick (Ascending) on Caterpillar Tracks was designed as a platform for public speakers and posed an aesthetic and political challenge to the governing authorities of the University and the broader student body. Rolled onto Beinecke Plaza in the spring of 1969, this pop art icon became a national emblem of antiwar protest and a generation’s challenge to consumer culture. After a complete restoration in 1974, the work was donated to Yale by the Colossal Keepsake Corporation. It has remained on view in the courtyard of Morse College to this day.</p>

	<p style={{textIndent: '7%', fontSize: '16px'}}>The University’s recognition of public art’s ability to inspire reflection and provide aesthetic reward is reflected in the exponential increase of public works on campus in recent years. The generosity of alumni and friends has enabled the siting of works such as Isamu Noguchi’s The Garden (Pyramid, Sun, and Cube) in the sunken courtyard of the Beinecke Rare Book and Manuscript Library, Roy Lichtenstein’s Modern Head at the foot of Science Hill, and alumna Maya Lin’s The Women’s Table near the Sterling Memorial Library. Contemporary works include School of Art alumnus Richard Serra’s Stacks, commissioned by the Yale University Art Gallery in 1990. The University’s commitment to public art builds on the exceptional museum collections that are the foundation of the public life of art at Yale, hallmarks of the remarkable cultural life embedded in its mission to educate, enrich, and enlighten both its students and the general public. </p>

	<div style={{textAlign: 'center'}}><h4>Jock Reynolds</h4>
	<h5>The Henry J. Heinz II Director</h5>
	<h5>Yale University Art Gallery</h5>
</div>
</Jumbotron>
	</Panel>

			</div>
			);

	}
}
export default About;
