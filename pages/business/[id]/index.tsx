/* eslint-disable react/no-unknown-property */
import React from 'react';
import type { NextPage } from 'next';
// import ProductCard from '@/components/ProductCard';
import { Grid } from '@mui/material';
// import AsyncImage from '../../../components/AsyncImage/Loadable';
import StepCount from '../../../components/StepCount';
import Image from 'next/image';
import Nav from '../../../components/Nav';

const MenuPage: NextPage = () => {

  const index = 1;
  const isRemoveDialogOpen = true;
  const imgUrl = 'https://freepngimg.com/thumb/categories/956.png';

  // const memoImage = React.useMemo(
  //   () => <AsyncImage src={imgUrl} responsive height={100} width={100} />,
  //   [imgUrl],
  // );

  const content = (
    <React.Fragment>
      <Grid
        key={`${index}-grid`}
        item
        container
        direction="row"
        xs={12}
        alignContent="stretch"
      >
        <Nav />

      </Grid>
    </React.Fragment >
  );
  {/* //     <Grid
    //       item
    //       container
    //       direction="row"
    //       alignItems="center"
    //       className={'p-4 '}
    //     >
    //       <Grid
    //         item
    //         xs={3}
    //         sm={3}
    //         md={2}
    //         lg={2}
    //         xl={2}
    //         style={{
    //           textAlign: 'center',
    //         }}
    //       >
    //         <Image src={imgUrl} height={100} width={100} alt={
    //           'altprop'
    //         } />
    //       </Grid>
    //       <Grid
    //         container
    //         direction="row"
    //         alignItems="center"
    //         item
    //         xs={9}
    //         sm={9}
    //         md={10}
    //         lg={10}
    //         xl={10}
    //         style={{ marginLeft: 'auto', paddingLeft: '15px' }}
    //       >
    //         <Grid
    //           container
    //           direction="row"
    //           xs={12}
    //           item
    //           alignItems="center"
    //           spacing={1}
    //         >
    //           {/* <Grid item xs={12} sm={7}>
    //             <Grid item xs={12}>
    //               <StyledText variant="h3" weight="bold" resizeSymbols>
    //                 {title}
    //               </StyledText>
    //             </Grid>
    //             {itemDetails}
    //           </Grid> */}
  //           <Grid
  //             item
  //             container
  //             direction="row"
  //             alignItems="center"
  //             xs={12}
  //             sm={5}
  //           >
  //             <Grid
  //               item
  //               style={{
  //                 flex: '1 1',
  //               }}
  //             >
  //               {/* {!isPromotionItem && ( */}
  //               <StepCount
  //                 value={3}
  //                 onStepValueChange={() => console.log('clicked')}
  //                 enableDelete
  //               />
  //               {/* )} */}
  //             </Grid>
  //             {/* {discount ? (
  //               <Grid item>{discountedTotal()}</Grid>
  //             ) : (
  //               <Grid item>
  //                 <Highlight variant="h4">
  //                   {`L ${rowPrice.toFixed(2)}`}
  //                 </Highlight>
  //               </Grid>
  //             )}
  //           </Grid> */}
  //           </Grid>
  //         </Grid>
  //       </Grid>
  //     </Grid>
  //   </Grid>
  //   {/* <ConfirmationDialog
  //     isOpen={isRemoveDialogOpen}
  //     title="Delete Item"
  //     bodyText="Are you sure you want to remove this item from your cart?"
  //     cancelText="Cancel"
  //     confirmText="Remove from cart"
  //     onHandleClose={handleOnRemoveItem}
  //   /> */}

  return (
    <>
      <div>
        {/* {content} */}
        <p class="text-center text-lg hover:text-red-600">
          I am a component made with Tailwind CSS
        </p>
        {/* <ProductCard /> */}
      </div>
    </>
  );
};

export default MenuPage;

export async function getServerSideProps(ctx: any) {

  const { id } = ctx.query;

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
    clientDeliveryId: 'dm-test-3',
    senderInformation: {
      name: 'Sender',
      phoneNumber: '0712345678',
      email: 'sender@gamil.com'
    },
    dropOffAddress: {
      streetName: 'Street',
      latitude: 33.3,
      locality: null,
      region: null
    },
    pickupAddress: {
      streetName: 'Street',
      latitude: 33.3,
      locality: null,
      region: null
    },
    recipientInformation: {
      name: 'Recipient',
      phoneNumber: '0712345678',
      email: 'recipient@gamil.com'
    },
    status: 'REQUESTED'
  };

  return {
    props: {
      business: business
    }
  };
}
