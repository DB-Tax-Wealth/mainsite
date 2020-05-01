import React from 'react';
import { Screen } from 'components/layout/screen/screen';
import { Hero } from 'components/layout/hero/hero';
import { Section } from 'components/layout/section/section';
import { ROUTES } from 'constants/routes';
import { DocumentList } from 'components/layout/document-list/document-list';
import { WEALTH_DOCUMENTS } from '../../../../documents/wealth/documents';

const DOCUMENTS = WEALTH_DOCUMENTS;

export const WealthDocuments = () => {
  return (
    <Screen metaTitle={ROUTES.WEALTH_DOCUMENTS.title}>
      <Hero title="Documents" subtitle={ROUTES.WEALTH.title}>
        <p>Documents to help you manage your wealth and assets.</p>
      </Hero>
      <Section color="primary-light">
        <DocumentList documents={DOCUMENTS} />
      </Section>
    </Screen>
  );
};
