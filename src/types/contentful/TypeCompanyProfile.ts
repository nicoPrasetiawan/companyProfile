import type { Entry, EntryFields } from "contentful";

export interface TypeCompanyProfileFields {
  contentTypeId: "companyProfile";
  fields: {
    title: EntryFields.Symbol;
    tagline: EntryFields.Symbol;
    menu1: EntryFields.Symbol;
    menu2?: EntryFields.Symbol;
    offeringsTitle: EntryFields.Symbol;
    offeringsTitleSpan: EntryFields.Symbol;
    offeringsHeader1: EntryFields.Symbol;
    offeringsContent1: EntryFields.Symbol;
    offeringsHeader2: EntryFields.Symbol;
    offeringsContent2: EntryFields.Symbol;
    offeringsHeader3: EntryFields.Symbol;
    offeringsContent3: EntryFields.Symbol;
    testimonyTitle: EntryFields.Symbol;
    testimony1: EntryFields.Symbol;
    testimonyName1: EntryFields.Symbol;
    testimony2: EntryFields.Symbol;
    testimonyName2: EntryFields.Symbol;
    testimony3: EntryFields.Symbol;
    testimonyName3: EntryFields.Symbol;
    aboutTitle: EntryFields.Symbol;
    aboutP1: EntryFields.RichText;
    aboutP2: EntryFields.RichText;
  };
}

export type TypeCompanyProfile = Entry<TypeCompanyProfileFields>;
