import React from 'react';
import { Screen } from 'components/layout/screen/screen';
import { Hero } from 'components/layout/hero/hero';
import { Section } from 'components/layout/section/section';
import { ROUTES } from 'constants/routes';
import DocumentPlaceholder from 'images/document-placeholder.jpg';
import { DocumentList } from 'components/layout/document-list/document-list';
import Document from '../../../../documents/pdf-sample.pdf';

const DOCUMENTS = [
  {
    description: 'Vestibulum tristique lorem ac eros malesuada, vel ultrices enim convallis.',
    file: Document,
    image: DocumentPlaceholder,
    name: 'Test Document Name'
  },
  {
    description: 'Vestibulum tristique lorem ac eros malesuada, vel ultrices enim convallis.',
    file: Document,
    image: DocumentPlaceholder,
    name: 'Test Document Name'
  },
  {
    description: 'Vestibulum tristique lorem ac eros malesuada, vel ultrices enim convallis.',
    file: Document,
    image: DocumentPlaceholder,
    name: 'Test Document Name'
  },
  {
    description: 'Vestibulum tristique lorem ac eros malesuada, vel ultrices enim convallis.',
    file: Document,
    image: DocumentPlaceholder,
    name: 'Test Document Name'
  },
  {
    description: 'Vestibulum tristique lorem ac eros malesuada, vel ultrices enim convallis.',
    file: Document,
    image: DocumentPlaceholder,
    name: 'Test Document Name'
  }
];

export const WealthDocuments = () => {
  return (
    <Screen>
      <Hero title="Documents" subtitle={ROUTES.WEALTH.title}>
        <p>Documents to help you manage your wealth and assets.</p>
      </Hero>
      <Section color="primary-light">
        <DocumentList documents={DOCUMENTS} />
      </Section>
    </Screen>
  );
};
