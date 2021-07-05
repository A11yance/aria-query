/**
 * @flow
 */
import docAbstractRole from './dpub/docAbstractRole';
import docAcknowledgmentsRole from './dpub/docAcknowledgmentsRole';
import docAfterwordRole from './dpub/docAfterwordRole';
import docAppendixRole from './dpub/docAppendixRole';
import docBacklinkRole from './dpub/docBacklinkRole';
import docBiblioentryRole from './dpub/docBiblioentryRole';
import docBibliographyRole from './dpub/docBibliographyRole';
import docBibliorefRole from './dpub/docBibliorefRole';
import docChapterRole from './dpub/docChapterRole';
import docColophonRole from './dpub/docColophonRole';
import docConclusionRole from './dpub/docConclusionRole';
import docCoverRole from './dpub/docCoverRole';
import docCreditRole from './dpub/docCreditRole';
import docCreditsRole from './dpub/docCreditsRole';
import docDedicationRole from './dpub/docDedicationRole';
import docEndnoteRole from './dpub/docEndnoteRole';
import docEndnotesRole from './dpub/docEndnotesRole';
import docEpigraphRole from './dpub/docEpigraphRole';
import docEpilogueRole from './dpub/docEpilogueRole';
import docErrataRole from './dpub/docErrataRole';
import docExampleRole from './dpub/docExampleRole';
import docFootnoteRole from './dpub/docFootnoteRole';
import docForewordRole from './dpub/docForewordRole';
import docGlossaryRole from './dpub/docGlossaryRole';
import docGlossrefRole from './dpub/docGlossrefRole';
import docIndexRole from './dpub/docIndexRole';
import docIntroductionRole from './dpub/docIntroductionRole';
import docNoterefRole from './dpub/docNoterefRole';
import docNoticeRole from './dpub/docNoticeRole';
import docPagebreakRole from './dpub/docPagebreakRole';
import docPagelistRole from './dpub/docPagelistRole';
import docPartRole from './dpub/docPartRole';
import docPrefaceRole from './dpub/docPrefaceRole';
import docPrologueRole from './dpub/docPrologueRole';
import docPullquoteRole from './dpub/docPullquoteRole';
import docQnaRole from './dpub/docQnaRole';
import docSubtitleRole from './dpub/docSubtitleRole';
import docTipRole from './dpub/docTipRole';
import docTocRole from './dpub/docTocRole';

const ariaDpubRoles: { [ARIARoleDefintionKey]: ARIARoleDefinition } = {
  'doc-abstract': docAbstractRole,
  'doc-acknowledgments': docAcknowledgmentsRole,
  'doc-afterword': docAfterwordRole,
  'doc-appendix': docAppendixRole,
  'doc-backlink': docBacklinkRole,
  'doc-biblioentry': docBiblioentryRole,
  'doc-bibliography': docBibliographyRole,
  'doc-biblioref': docBibliorefRole,
  'doc-chapter': docChapterRole,
  'doc-colophon': docColophonRole,
  'doc-conclusion': docConclusionRole,
  'doc-cover': docCoverRole,
  'doc-credit': docCreditRole,
  'doc-credits': docCreditsRole,
  'doc-dedication': docDedicationRole,
  'doc-endnote': docEndnoteRole,
  'doc-endnotes': docEndnotesRole,
  'doc-epigraph': docEpigraphRole,
  'doc-epilogue': docEpilogueRole,
  'doc-errata': docErrataRole,
  'doc-example': docExampleRole,
  'doc-footnote': docFootnoteRole,
  'doc-foreword': docForewordRole,
  'doc-glossary': docGlossaryRole,
  'doc-glossref': docGlossrefRole,
  'doc-index': docIndexRole,
  'doc-introduction': docIntroductionRole,
  'doc-noteref': docNoterefRole,
  'doc-notice': docNoticeRole,
  'doc-pagebreak': docPagebreakRole,
  'doc-pagelist': docPagelistRole,
  'doc-part': docPartRole,
  'doc-preface': docPrefaceRole,
  'doc-prologue': docPrologueRole,
  'doc-pullquote': docPullquoteRole,
  'doc-qna': docQnaRole,
  'doc-subtitle': docSubtitleRole,
  'doc-tip': docTipRole,
  'doc-toc': docTocRole
};

export default ariaDpubRoles;