import React from 'react';
import useFetch from './useFetch';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function Posts() {
    const posts = useFetch('https://localhost/wordpress5/wp-json/wp/v2/posts');
  return (
    <Grid container spacing={2}>
      {console.log('The Posts were Here!'+posts)}
      {posts && posts.map((post, index) => (
        <Grid key={index}>
        {console.log('Index is Here!'+post)}
        <Card>
            <CardContent>
                <Typography
                    color="textSecondary"
                    gutterBottom
                    dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                <Typography
                    variant="body2"
                    component="p"
                    dangerouslySetInnerHTML={{__html: post.content.rendered}} />
            </CardContent>
        </Card>
      </Grid>
      ))}
    </Grid>
  );
}