import React from 'react';
import { Hero } from 'components/layout/hero/hero';
import { Section } from 'components/layout/section/section';
import { ROUTES } from 'constants/routes';
import { DocumentList } from 'components/layout/document-list/document-list';
import { Grid } from 'components/layout/grid/grid';
import { Row } from 'components/layout/grid/row/row';
import { Column } from 'components/layout/grid/column/column';
import { ACCOUNTING_DOCUMENTS } from 'documents/accounting/accounting';
import { QuickLink } from 'components/layout/quick-link/quick-link';
import { ScreenConnected } from 'components/layout/screen/screen.connected';

const DOCUMENTS = ACCOUNTING_DOCUMENTS;

export const AccountingQuickLinks = () => {
  return (
    <ScreenConnected
      metaTitle={ROUTES.ACCOUNTING_QUICK_LINKS.title}
      metaDescription={ROUTES.ACCOUNTING_QUICK_LINKS.description}
    >
      <Hero title="Accounting" subtitle={ROUTES.ACCOUNTING_QUICK_LINKS.title}>
        <p>Documents and links to help you with your accounting.</p>
      </Hero>
      <Section color="primary-light">
        <h2>Documents</h2>
        <DocumentList documents={DOCUMENTS} />
      </Section>
      <Section color="primary">
        <h2>Links</h2>
        <p>Check out the following links to help with your accounting.</p>
        <Grid className="padding--horizontal--none">
          <Row>
            <Column>
              <QuickLink name="ADP for Employers" link="https://runpayroll.adp.com/enrollment.aspx" />
              <QuickLink name="ADP for Employees" link="https://my.adp.com/static/redbox/login.html" />
              <QuickLink name="Intuit Quickbooks" link="https://c1.qbo.intuit.com/qbo1/login?&useNeo=true&region=US" />
            </Column>
          </Row>
        </Grid>
      </Section>
    </ScreenConnected>
  );
};
