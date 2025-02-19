import type { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';
import type { PDFDocumentLoadingTask } from 'pdfjs-dist/types/src/display/api';
import type { PDFPageProxy } from 'pdfjs-dist/types/src/display/api';
import type { DocumentInitParameters } from 'pdfjs-dist/types/src/display/api';
import type { PDFViewerOptions as _PDFViewerOptions } from 'pdfjs-dist/types/web/pdf_viewer';

export { PDFDocumentProxy, PDFDocumentLoadingTask, PDFPageProxy };
export type PDFSource = DocumentInitParameters;

export interface PDFProgressData {
  loaded: number;
  total: number;
}

export type ZoomScale = 'page-width' | 'page-fit' | 'page-height';

export interface PDFViewerOptions extends _PDFViewerOptions {
  enableScripting?: boolean;
  renderInteractiveForms?: boolean;
  enablePrintAutoRotate?: boolean;
}
