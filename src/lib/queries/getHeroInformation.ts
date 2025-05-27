export const getHeroInformationQuery =  `
GetHeroInformation {
  page(id: "\"home\"", idType: URI) {
    hero {
      headline
      subheading
      image {
        node {
          sourceUrl
          altText
        }
      }
      cta_button_text
      cta_link
    }
  }
}
`