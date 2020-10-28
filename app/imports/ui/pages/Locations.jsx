import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';

class Locations extends React.Component {
  render() {
    return (
        <Grid>
          <Grid.Column width={4}>
            <Card>
              <Image src='https://www.staradvertiser.com/wp-content/uploads/2017/01/web1_CTY-UH-Explosion-Report-084.jpg'/>
              <Card.Content>
                <Card.Header>POST</Card.Header>
                <Card.Description>POST is located next to Holmes Hall</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
    );
  }
}

export default Locations;
