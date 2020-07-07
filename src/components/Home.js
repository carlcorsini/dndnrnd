import React from 'react';
import { Grid, Image, Header, Divider, Segment, List } from 'semantic-ui-react';
import Menu from './common/menu';

let Home = () => {
  return (
    <>
      <Menu />
      <Header textAlign="center" as="h1">
        First Header
      </Header>
      <Divider />
      <Grid stackable columns={3} divided>
        <Grid.Row style={{ height: '100vh' }}>
          <Grid.Column>
            <Segment
              style={{
                marginLeft: '1em',
                width: '80%',
                alignSelf: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              inverted>
              <List inverted>
                <List.Item>
                  <List.Icon name="gem" />
                  <List.Content>
                    <List.Header>src</List.Header>
                    <List.Description>
                      Source files for project
                    </List.Description>
                    <List.List>
                      <List.Item>
                        <List.Icon name="gem" />
                        <List.Content>
                          <List.Header>site</List.Header>
                          <List.Description>Your site's theme</List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="gem" />
                        <List.Content>
                          <List.Header>themes</List.Header>
                          <List.Description>
                            Packaged theme files
                          </List.Description>
                          <List.List>
                            <List.Item>
                              <List.Icon name="gem" />
                              <List.Content>
                                <List.Header>default</List.Header>
                                <List.Description>
                                  Default packaged theme
                                </List.Description>
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Icon name="gem" />
                              <List.Content>
                                <List.Header>my_theme</List.Header>
                                <List.Description>
                                  Packaged themes are also available in this gem
                                </List.Description>
                              </List.Content>
                            </List.Item>
                          </List.List>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="file" />
                        <List.Content>
                          <List.Header>theme.config</List.Header>
                          <List.Description>
                            Config file for setting packaged themes
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List.List>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="gem" />
                  <List.Content>
                    <List.Header>dist</List.Header>
                    <List.Description>
                      Compiled CSS and JS files
                    </List.Description>
                    <List.List>
                      <List.Item>
                        <List.Icon name="gem" />
                        <List.Content>
                          <List.Header>components</List.Header>
                          <List.Description>
                            Individual component CSS and JS
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List.List>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="file" />
                  <List.Content>
                    <List.Header>semantic.json</List.Header>
                    <List.Description>
                      Contains build settings for gulp
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Image
              size="small"
              centered
              src="https://i.guim.co.uk/img/media/7a633730f5f90db3c12f6efc954a2d5b475c3d4a/0_138_5544_3327/master/5544.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=27c09d27ccbd139fd0f7d1cef8f7d41d"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              size="small"
              centered
              src="https://i.guim.co.uk/img/media/7a633730f5f90db3c12f6efc954a2d5b475c3d4a/0_138_5544_3327/master/5544.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=27c09d27ccbd139fd0f7d1cef8f7d41d"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Home;
