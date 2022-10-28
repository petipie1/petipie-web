import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';

const MenuPage: NextPage = (props: any) => {

  return (
    <>
      <div>Menu page</div>
    </>
  );
};

export default MenuPage;


export async function getServerSideProps(ctx: any) {


  const { id } = ctx.query;
  console.log('id', id)

  // const apolloClient = await getApolloClient({ initialState: null, ctx });

  // const { data: { result: delivery } } = await apolloClient.query(
  //   {
  //     query: getDeliveryByIdQuery(id)
  //   }
  // );



  // if(!delivery)
  //return {
  //   redirect: {
  //     destination: '/delivery-not-found'
  //   }
  // }

  const business = {
    clientDeliveryId: "dm-test-3",
    senderInformation: {
      name: "Sender",
      phoneNumber: "0712345678",
      email: "sender@gamil.com"
    },
    dropOffAddress: {
      streetName: "Street",
      latitude: 33.3,
      locality: null,
      region: null
    },
    pickupAddress: {
      streetName: "Street",
      latitude: 33.3,
      locality: null,
      region: null
    },
    recipientInformation: {
      name: "Recipient",
      phoneNumber: "0712345678",
      email: "recipient@gamil.com"
    },
    status: "REQUESTED"
  }

  return {
    props: {
      business: business
    }
  };
}
