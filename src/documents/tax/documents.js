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
    description: 'Vestibulum tristique lorem ac eros malesuada, vel ultrices enim convallis.',
    file: ConsentDocument,
    image: ConsentDocumentPlaceholder,
    name: 'Consent to Use Tax Return Information'
  },
  {
    description: 'Vestibulum tristique lorem ac eros malesuada, vel ultrices enim convallis.',
    file: EngagementDocument,
    image: EngagementDocumentPlaceholder,
    name: 'General Engagement Letter'
  },
  {
    description: 'Vestibulum tristique lorem ac eros malesuada, vel ultrices enim convallis.',
    file: ChecklistDocument,
    image: ChecklistDocumentPlaceholder,
    name: 'Tax Checklist'
  },
  {
    description: 'Vestibulum tristique lorem ac eros malesuada, vel ultrices enim convallis.',
    file: InterviewChecklistDocument,
    image: InterviewChecklistDocumentPlaceholder,
    name: 'Tax Interview Checklist'
  }
];
