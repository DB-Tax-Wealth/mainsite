import React from 'react';
import { convertPhoneNumberToTelLink } from 'util/convert-phone-number-to-tel-link/convert-phone-number-to-tel-link';

export const Disclosure = () => (
  <div
    className="padding--vertical max-width--xl padding--horizontal--half margin--horizontal--auto"
    style={{ fontSize: '0.8rem', lineHeight: '1.2rem' }}
  >
    <div className="margin--bottom--half">
      <strong>DISCLOSURE</strong>
    </div>
    <p className="margin--vertical--half">
      Check the background of your financial professional on{' '}
      <a href="http://brokercheck.finra.org/" target="_blank" rel="noreferrer noopener">
        FINRA&apos;s BrokerCheck
      </a>
      . Avantax affiliated advisors may only conduct business with residents of the states for which they are properly
      registered. Please note that not all of the investments and services mentioned are available in every state.
    </p>
    <p className="margin--vertical--half">
      Securities offered through{' '}
      <strong>
        Avantax Investment Services<sup>SM</sup>
      </strong>
      , Member{' '}
      <a href="http://www.finra.org/" target="_blank" rel="noopener noreferrer">
        FINRA
      </a>
      ,{' '}
      <a href="http://www.sipc.org/" target="_blank" rel="noopener noreferrer">
        SIPC
      </a>
      , Investment Advisory services offered through{' '}
      <strong>
        Avantax Advisory Services<sup>SM</sup>
      </strong>
      , Insurance services offered through:
      <br />
      <br />
      <strong>
        Avantax Insurance Agency<sup>SM</sup>
      </strong>
      <br />
      6333 N. State Highway 161,
      <br />
      Fourth Floor, Irving, TX 75038,
      <br />
      <a href={convertPhoneNumberToTelLink('9728706000')}>972-870-6000</a>.
      <br />
      <br />
      The Avantax family of companies exclusively provide financial products and services through its financial
      representatives.
    </p>{' '}
    <p className="margin--vertical--half">
      Although{' '}
      <strong>
        Avantax Wealth Management<sup>SM</sup>
      </strong>{' '}
      does not provide or supervise tax or accounting services, <strong>Avantax Representatives</strong> may offer these
      services through their independent outside business. Content, links, and some material within this website may
      have been created by a third party for use by an Avantax affiliated representative.
    </p>
    <p className="margin--vertical--half">
      This content is for educational and informational purposes only and does not represent the views and opinions of{' '}
      <strong>
        Avantax Wealth Management<sup>SM</sup>
      </strong>{' '}
      or its subsidiaries.{' '}
      <strong>
        Avantax Wealth Management<sup>SM</sup>
      </strong>{' '}
      is not responsible for and does not control, adopt, or endorse any content contained on any third party website.
      This information is not intended as tax or legal advice. Please consult legal or tax professionals for specific
      information regarding your individual situation.
    </p>
    <p className="margin--vertical--half">
      Investments & Insurance Products: Are not insured by the FDIC or any federal government agency- Are not deposits
      of or guaranteed by the bank or any bank affiliate- May lose Value{' '}
      <strong>
        Avantax Investment Services<sup>SM</sup>
      </strong>{' '}
      and{' '}
      <strong>
        Avantax Advisory Services<sup>SM</sup>
      </strong>{' '}
      are not affiliated with <strong>DB Tax & Wealth</strong>.
    </p>
  </div>
);
