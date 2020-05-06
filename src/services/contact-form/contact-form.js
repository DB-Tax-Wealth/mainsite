import axios from 'axios';

const SOURCE_URL = 'http://www.dbtaxinc.com/contact';
const PREFERRED_CONTACT_METHOD = 'Email';
const MESSAGE_SUBJECT = 'Have A Question?';

const CONTACT_FORM_ENDPOINT =
  'https://www.fmgwebsites.com/af8dcc97-5470-4d5a-9af7-a66ddcac6709/cms-core/forms/contactform/submit';

export const postContactForm = ({ address, email, message, name }) => {
  const Name = name || 'Potential Client';
  const Message = message || 'Please email me with more information about your services.';

  return axios.get(CONTACT_FORM_ENDPOINT, {
    headers: {
      accept: '*/*',
    },
    params: {
      SourceUrl: SOURCE_URL,
      PreferredContactMethod: PREFERRED_CONTACT_METHOD,
      MessageSubject: MESSAGE_SUBJECT,
      Name,
      Email: email,
      Address: address,
      Message,
      isNotSpam: true,
    },
  });
};
