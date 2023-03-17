import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SchoolIcon from '@material-ui/icons/School';

import { useSnipcartState } from './snipcart';
import useFetch from './useFetch';


export default function Courses() {
    const blogs = useFetch('https://localhost/wordpress5/wp-json/wp/v2/posts');

    const isSignedIn = useSnipcartState(state => state.customer.status === 'SignedIn');
  return (
    <List component="nav" aria-label="main mailbox folders">
        {blogs && blogs.map((blog, index) => (
        <ListItem key={index}>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary={blog.title.rendered} secondary={isSignedIn? `Buy for 1$` : null} />
          {isSignedIn && (<ListItemSecondaryAction
            className="snipcart-add-item"
            data-item-id={blog.id}
            data-item-name={blog.title.rendered}
            // data-item-price={blog.price}
            data-item-url="http://192.168.9.17/wordpress5/wp-json/wp/v2/blogs/1">
            <IconButton edge="end" aria-label="delete">
              <AddShoppingCartIcon />
            </IconButton>
          </ListItemSecondaryAction>)}
        </ListItem>
        ))}
      </List>
  );
}