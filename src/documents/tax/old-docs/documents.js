// Placeholder images
import ConsentDocumentPlaceholder from './consent-preview.png';
import EngagementDocumentPlaceholder from './engagement-preview.png';
import ChecklistDocumentPlaceholder from './checklist-preview.png';
import NewClientInfoDocumentPlaceholder from './new-client-info-preview.png';
import W4ServiceChecklistDocumentPlaceholder from './w4-service-checklist-preview.png';

// Docs
import ConsentDocument from './consent-use-tax-return-info.pdf';
import EngagementDocument from './general-engagement-letter.pdf';
import ChecklistDocument from './tax-checklist.pdf';
import NewClientInfoDocument from './new-client-info.pdf';
import W4ServiceChecklistDocument from './w4-service-checklist.pdf';

export const TAX_DOCUMENTS = [
  {
    description: '',
    file: ConsentDocument,
    image: ConsentDocumentPlaceholder,
    name: 'Consent to Use Tax Return Information',
  },
  {
    description: '',
    file: EngagementDocument,
    image: EngagementDocumentPlaceholder,
    name: 'General Engagement Letter',
  },
  {
    description: '',
    file: ChecklistDocument,
    image: ChecklistDocumentPlaceholder,
    name: 'Tax Checklist',
  },
  {
    description: '',
    file: NewClientInfoDocument,
    image: NewClientInfoDocumentPlaceholder,
    name: 'New Client Information',
  },
  {
    description: '',
    file: W4ServiceChecklistDocument,
    image: W4ServiceChecklistDocumentPlaceholder,
    name: 'W4 - Payroll Withholding Check-up',
  },
];
