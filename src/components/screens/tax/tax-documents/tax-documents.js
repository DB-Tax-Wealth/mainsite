import React from 'react';
import { Hero } from 'components/layout/hero/hero';
import { Section } from 'components/layout/section/section';
import { ROUTES } from 'constants/routes';
import { DocumentList } from 'components/layout/document-list/document-list';
import { TAX_DOCUMENTS } from 'documents/tax/documents';
import { ScreenConnected } from 'components/layout/screen/screen.connected';

const DOCUMENTS = TAX_DOCUMENTS;

export const TaxDocuments = () => {
  return (
    <ScreenConnected metaTitle={ROUTES.TAX_DOCUMENTS.title} metaDescription={ROUTES.TAX_DOCUMENTS.description}>
      <Hero title="Documents" subtitle={ROUTES.TAX.title}>
        <p>Documents to help you with your taxes.</p>
      </Hero>
      <Section color="primary-light">
        <DocumentList documents={DOCUMENTS} />
      </Section>
    </ScreenConnected>
  );
};
