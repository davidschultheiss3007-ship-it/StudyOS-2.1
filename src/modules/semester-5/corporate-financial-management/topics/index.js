import { meta as introduction } from './01-cfm-einfuehrung.js';
import IntroductionContent from './01-cfm-einfuehrung.mdx';
import { meta as financialReports } from './02-cfm-finanzberichte-und-kennzahlen.js';
import FinancialReportsContent from './02-cfm-finanzberichte-und-kennzahlen.mdx';
import { meta as shareholderValue } from './03-cfm-shareholder-value-management.js';
import ShareholderValueContent from './03-cfm-shareholder-value-management.mdx';

export const topics = [
  { ...introduction, Content: IntroductionContent },
  { ...financialReports, Content: FinancialReportsContent },
  { ...shareholderValue, Content: ShareholderValueContent },
];
