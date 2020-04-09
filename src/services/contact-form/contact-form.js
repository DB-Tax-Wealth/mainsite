// Commenting out real contact form submission endpoint until verfied
// working correclty

// const CONTACT_FORM_ENDPOINT =
//   'https://www.fmgwebsites.com/af8dcc97-5470-4d5a-9af7-a66ddcac6709/cms-core/forms/contactform/submit';

// export const postContactForm = async ({
//   email,
//   message = 'Please email me with more information about your services.',
//   name = 'Potential Client'
// }) => {
//   const response = await fetch(CONTACT_FORM_ENDPOINT, {
//     body: JSON.stringify({ message, email, name }),
//     headers: { 'Content-Type': 'application/json' },
//     method: 'POST'
//   });

//   return response.json();
// };

export const postContactForm = async () => {
  return new Promise((resolve) => setTimeout(resolve, 3000));
};
