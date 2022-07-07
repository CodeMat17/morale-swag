import axios from 'axios';

export default async function handler(req, res) {
  const { username, email, password } = req.body;
  console.log('NAME -', username);
//   try {
//     const response = await axios.post(
//       `${process.env.NEXT_PUBLIC_STARPI_URL}/api/auth/local/register`,
//       {
//         username,
//         email,
//         password,
//       }
//     );

    //    setCookie({ res }, 'jwt', response.data.jwt, {
    //      httpOnly: true,
    //      secure: process.env.NODE_ENV !== 'development',
    //      maxAge: 30 * 24 * 60 * 60,
    //      path: '/',
    //    });
    // console.log('DONE!!!!!!!!!!!!!!!!!!!', response);
    // res.status(200).end();
//   } catch (error) {
//     console.error('ERROR -', error.response);
    // res.status(400).send(error.response.data.message);
//   }

  //   .then((response) => {
  //     // Handle success.
  //     console.log('Well done!');
  //     console.log('User profile', response.data.user);
  //     console.log('User token', response.data.jwt);
  //   })
  //   .catch((error) => {
  //     // Handle error.
  //     console.log('An error occurred:', error.response.data.error.message);
  //   });
  //   }
}

// /* eslint-disable import/no-anonymous-default-export */
// import axios from 'axios';

// export default async (req, res) => {
//   if (req.method === 'POST') {
//     const { username, email, password } = req.body;
//     await axios
//       .post(`${NEXT_PUBILC_STRAPI_URL}/api/auth/local/register`, {
//         username,
//         email,
//         password,
//       })
//       .then((response) => {
//         console.log('4rm api auth reg', res);
//         // toast.success('User registered successfully!');
//         // toast.success('res success message - User registered successfully!');
//       })
//       .catch((error) => {
//         // if (!error.response.data.error.message) {
//         if (!error.response) {
//           toast.error('Internal server error');
//         } else {
//           toast.success(error.response.data.error.message);
//           toast.success('res error message - failed');
//         }
//         console.log(error.response.data.error.message);
//       });
//   }

//   // const { username, password, email } = req.body;

//   // try {
//   //   const response = await axios.post(
//   //     `${NEXT_PUBLIC_STRAPI_URL}/api/auth/local/register`,
//   //     {
//   //       username,
//   //       email,
//   //       password,
//   //     }
//   //   );
//   //   setCookie({ res }, 'jwt', response.data.jwt, {
//   //     httpOnly: true,
//   //     secure: process.env.NODE_ENV !== 'development',
//   //     maxAge: 30 * 24 * 60 * 60,
//   //     path: '/',
//   //   });
//   //   toast.success('User is successfully registered');
//   //   res.status(200).end();
//   // } catch (error) {
//   //   toast.error(error.response.data.message[0].messages[0]);
//   //   res.status(400).send(error.response.data.message[0].messages[0]);
//   // }
// };
