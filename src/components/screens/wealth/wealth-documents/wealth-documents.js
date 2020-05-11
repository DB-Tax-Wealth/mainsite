import React from 'react';
import { Hero } from 'components/layout/hero/hero';
import { Section } from 'components/layout/section/section';
import { ROUTES } from 'constants/routes';
import { DocumentList } from 'components/layout/document-list/document-list';
import { ScreenConnected } from 'components/layout/screen/screen.connected';
import { WEALTH_DOCUMENTS } from '../../../../documents/wealth/documents';

const DOCUMENTS = WEALTH_DOCUMENTS;

export const WealthDocuments = () => {
  return (
    <ScreenConnected metaTitle={ROUTES.WEALTH_DOCUMENTS.title} metaDescription={ROUTES.WEALTH_DOCUMENTS.description}>
      <Hero title="Documents" subtitle={ROUTES.WEALTH.title}>
        <p>Documents to help you manage your wealth and assets.</p>
      </Hero>
      <Section color="primary-light">
        <DocumentList documents={DOCUMENTS} />
      </Section>
    </ScreenConnected>
  );
};
