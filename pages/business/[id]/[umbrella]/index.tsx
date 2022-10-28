import React from 'react';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import type { NextPage } from 'next';
// import { getBusinessMenu } from '../../../../services/apiClient';
import styles from './../../../../styles/Home.module.css';

const MenuPage: NextPage = (props: any) => {

  const business = props.business;

  return (
    <>
      <Toolbar className={styles.header}>
        <Box
          className={styles.header}
          component="img"
          sx={{
            height: 64,
          }}
          alt="Your logo."
          src={'/octo-scan.png'}
        />
      </Toolbar>
      <div>{business.name}</div>
    </>
  );
};

export default MenuPage;

export async function getServerSideProps(ctx: any) {

  const { umbrella, id } = ctx.query;
  console.log('umbrella and id', umbrella, id);

  // const { data: business } = await getBusinessMenu(id, umbrella);

  // if(!delivery)
  //return {
  //   redirect: {
  //     destination: '/delivery-not-found'
  //   }
  // }

  const business = {
    'name': 'FAFA',
    'city': 'Golem',
    'orderCode': 'dori1992',
    'umbrellas': 100,
    'location': null,
    'logoUrl': null,
    'bannerUrl': null,
    'quote': null,
    'available': true,
    'openingTime': null,
    'closingTime': null,
    'menu': [
      {
        'available': true,
        'categoryName': 'Drinks',
        'categoryProducts': [
          {
            'name': {
              'al': 'Koka kola 0.5L',
              'en': 'Coke 0.5L'
            },
            'price': {
              'lek': 500,
              'euro': 5
            },
            'imgUrl': 'https://image.com',
            'available': true,
            'description': ''
          }
        ]
      }
    ],
    'id': 'a12d4614-962e-4310-8b89-3262f0847436',
    'createdAt': '2022-05-31T16:09:15.652098Z',
    'updatedAt': '2022-05-31T16:09:15.655003Z'
  };

  return {
    props: {
      business: business
    }
  };
}
