export interface SystemType {
  id: null | number
  icon: null | string
  productDesc: null | string
  productName: null | string
  logo: null | string
  pageLogo: null | string
  firm: null | string
  report: null | string
  enable: null | number
  setCopyWriting: (
    id: null | number,
    icon: null | string,
    productDesc: null | string,
    productName: null | string,
    logo: null | string,
    firm: null | string,
    report: null | string,
    enable: null | number,
    pageLogo: null | string
  ) => void
  removeCopyWriting: () => void
}
