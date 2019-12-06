// Placeholder images
import ConsentDocumentPlaceholder from './consent_preview.png';
import EngagementDocumentPlaceholder from './engagement_preview.png';
import ChecklistDocumentPlaceholder from './checklist_preview.png';
import InterviewChecklistDocumentPlaceholder from './interview_checklist_preview.png';

// Docs
import ConsentDocument from './Consent_to_use_tax_return_information.docx';
import EngagementDocument from './General Engagement Letter.docx';
import ChecklistDocument from './Tax Checklist.docx';
import InterviewChecklistDocument from './Tax Interview Checklist.docx';

export const TAX_DOCUMENTS = [
  {
    description: '',
    file: ConsentDocument,
    image: ConsentDocumentPlaceholder,
    name: 'Consent to Use Tax Return Information'
  },
  {
    description: '',
    file: EngagementDocument,
    image: EngagementDocumentPlaceholder,
    name: 'General Engagement Letter'
  },
  {
    description: '',
    file: ChecklistDocument,
    image: ChecklistDocumentPlaceholder,
    name: 'Tax Checklist'
  },
  {
    description: '',
    file: InterviewChecklistDocument,
    image: InterviewChecklistDocumentPlaceholder,
    name: 'Tax Interview Checklist'
  }
];
